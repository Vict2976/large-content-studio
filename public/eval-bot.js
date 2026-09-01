/* eval-bot — evaluation tool. One short question per session, at a task boundary.
 * Source and reasoning: src/pipeline/evalBotAsset.ts */

(function () {
  'use strict';
  
  var S = document.currentScript || document.querySelector('script[data-eval-key]');
  if (!S) return;
  var KEY = S.getAttribute('data-eval-key');
  var API = (S.getAttribute('data-eval-endpoint') || '').replace(/\/$/, '');
  if (!KEY || !API) return;
  
  var BRAND = S.getAttribute('data-eval-brand') || '';
  var DOT = S.getAttribute('data-eval-brand-color') || 'rgba(242,242,245,.55)';
  var LS = 'evalbot.v1';
  var SESSION_FLAG = 'evalbot.asked';
  var GLOBAL_COOLDOWN_MS = 30 * 864e5;
  
  var EXPLORE_SHARE = 0.15;
  var WARM_UP = 8;
  
  var RANDOM_ARM_SHARE = 0.08;
  
  var QUIET_MS = 12000;
  var SETTLED_MS = 2500;
  var DAY = 864e5;
  
  function safe(fn) {
    return function () {
      try {
        return fn.apply(null, arguments);
      } catch (e) {
        
      }
    };
  }
  function load() {
    try {
      return JSON.parse(localStorage.getItem(LS) || '{}') || {};
    } catch (e) {
      return {};
    }
  }
  function save(state) {
    try {
      localStorage.setItem(LS, JSON.stringify(state));
    } catch (e) {}
  }
  
  try {
    fetch(API + '/api/probe/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: KEY, origin: location.origin, path: currentPath() }),
      keepalive: true,
    }).catch(function () {});
  } catch (e) {}
  
  var TEST = false;
  
  var PATH = '';
  try {
    TEST = location.search.indexOf('evalbot=test') !== -1;
    if (TEST) {
      var m = /[?&]evalpath=([^&]*)/.exec(location.search);
      if (m) PATH = decodeURIComponent(m[1]);
    }
  } catch (e) {}
  function currentPath() {
    return PATH || location.pathname;
  }
  
  function hostBrand() {
    var h = (location.hostname || '').replace(/^(www|app|my)\./, '').split('.')[0] || '';
    return h.charAt(0).toUpperCase() + h.slice(1);
  }
  
var randomArm = Math.random() < RANDOM_ARM_SHARE;
var state = load();
  if (!state.anon) {
    state.anon = 'a' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    state.answers = {};
    
    state.firstSeen = Date.now();
    save(state);
    if (!TEST) return;
  }
  if (!state.answers) state.answers = {};
  
  
  try {
    if (!TEST && sessionStorage.getItem(SESSION_FLAG)) return;
  } catch (e) {}
  
  if (!TEST && state.lastAsked && Date.now() - state.lastAsked < GLOBAL_COOLDOWN_MS) return;
  var questions = [];
  var armed = null;
  var armedAt = 0;
  var timer = null;
  function eligible(q) {
    if (TEST) return true;
    var last = state.answers[q.id];
    if (!last) return true;
    return Date.now() - last > (q.cooldownDays || 30) * DAY;
  }
  function post(body) {
    try {
      var url = API + '/api/probe/ingest';
      var payload = JSON.stringify(body);
      
      if (navigator.sendBeacon) {
        var blob = new Blob([payload], { type: 'text/plain' });
        
        if (navigator.sendBeacon(url + '?key=' + encodeURIComponent(KEY), blob)) return;
      }
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Probe ' + KEY },
        body: payload,
        keepalive: true,
      }).catch(function () {});
    } catch (e) {}
  }
  function record(q, value, dismissed) {
    state.answers[q.id] = Date.now();
    state.lastAsked = Date.now();
    save(state);
    try {
      sessionStorage.setItem(SESSION_FLAG, '1');
    } catch (e) {}
    post({
      responses: [
        {
          questionId: q.id,
          questionVersion: q.version,
          value: typeof value === 'number' ? value : undefined,
          dismissed: !!dismissed,
          anonId: state.anon,
          
          propensity: q.propensity,
          exploring: !!q.exploring,
          
          arm: randomArm ? 'random' : 'breakpoint',
          
          test: TEST,
        },
      ],
    });
  }
  
  function recordText(q, text) {
    post({
      responses: [
        {
          questionId: q.id,
          questionVersion: q.version,
          textValue: text,
          dismissed: false,
          anonId: state.anon,
          test: TEST,
        },
      ],
    });
  }
  
  function isLow(q, value) {
    if (q.kind === 'yes-no') return value === 0;
    return value <= (q.kind === 'rating-7' ? 3 : 2);
  }
  
  function el(tag, cls, style, parent, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    n.style.cssText = style;
    if (text) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  }
  var BTN = 'font:inherit;cursor:pointer;';
  var MUTED = 'rgba(242,242,245,.55)';
  
  function ring(n) {
    n.addEventListener('focus', function () {
      n.style.outline = '2px solid #fff';
      n.style.outlineOffset = '1px';
    });
    n.addEventListener('blur', function () {
      n.style.outline = 'none';
    });
  }
  
  var SCALE_OPTS = {
    'rating-5': [["Not at all", 1], ["Slightly", 2], ["Moderately", 3], ["Very", 4], ["Extremely", 5]],
    'rating-7': [['1', 1], ['2', 2], ['3', 3], ['4', 4], ['5', 5], ['6', 6], ['7', 7]],
  };
  
  function shell(label) {
    var host = document.createElement('div');
    host.setAttribute('data-eval-bot', '');
    host.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:2147483000';
    var wrap = document.createElement('div');
    var card = el(
      'div',
      'c',
      'box-sizing:border-box;width:380px;max-width:calc(100vw - 32px);padding:14px 16px;' +
        'border-radius:12px;background:#131316;' +
        'color:#f2f2f5;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;' +
        'box-shadow:0 8px 30px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.12)',
      wrap,
    );
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-label', label);
    host.attachShadow({ mode: 'closed' }).appendChild(wrap);
    return { host: host, wrap: wrap, card: card };
  }
  
  function header(card, close) {
    var h = el('div', 'h', 'display:flex;align-items:center;gap:8px;margin:0 0 12px', card);
    if (BRAND) {
      el('span', '', 'flex:none;width:10px;height:10px;border-radius:50%;background:' + DOT, h);
    }
    el('span', '', 'flex:1;font-weight:600;font-size:13px', h, BRAND);
    
    el('span', '', 'font-size:12px;color:' + MUTED, h, TEST ? 'Test mode, not counted' : '1 question');
    var x = el(
      'button',
      'x',
      BTN + 'flex:none;background:none;border:0;padding:0 0 0 2px;font-size:15px;line-height:1;color:' + MUTED,
      h,
      '\u00d7',
    );
    x.type = 'button';
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
  }
  
  function reportBlocked(directive) {
    if (document.querySelector('[data-eval-bot]')) return;
    var s = shell('Eval bot blocked');
    el(
      'p',
      '',
      'margin:0 0 10px;color:#ff8a7a',
      s.card,
      'Blocked by your Content Security Policy (' + directive + '). Answers would be discarded. Add:',
    );
    el(
      'code',
      '',
      'display:block;padding:8px;border-radius:8px;background:rgba(255,255,255,.08);font-size:12px;word-break:break-all',
      s.card,
      'connect-src ' + API + '; script-src ' + API,
    );
    document.body.appendChild(s.host);
  }
  try {
    document.addEventListener(
      'securitypolicyviolation',
      safe(function (e) {
        if (TEST && String(e.blockedURI || '').indexOf(API) === 0) reportBlocked(e.violatedDirective);
      }),
    );
  } catch (e) {}
  function ask(q) {
    var s = shell('One quick question');
    var host = s.host;
    var wrap = s.wrap;
    var card = s.card;
    
    var answered = false;
    header(card, function () {
      if (!answered) record(q, undefined, true);
      host.remove();
    });
    
    var lead = el('p', 'l', 'margin:0 0 2px;font-size:12.5px;line-height:1.35;color:' + MUTED, card);
    el('p', 'q', 'margin:0 0 12px;font-size:14.5px;font-weight:600;line-height:1.35', card);
    
    var top = el('div', 'a', 'display:none;margin:0 0 6px;font-size:11px;color:' + MUTED, card);
    var row = el('div', 'r', '', card);
    var ends = el('div', 'e', 'display:flex;margin-top:6px;font-size:11px;color:' + MUTED, card);
    
    var na = el(
      'button',
      'n',
      BTN + 'display:none;box-sizing:border-box;width:100%;margin-top:14px;padding:10px 0 0;' +
        'background:none;border:0;border-top:1px solid rgba(255,255,255,.10);font-size:12px;' +
        'color:' + MUTED + ';text-align:left',
      card,
    );
    na.type = 'button';
    lead.textContent = q.lead || '';
    lead.style.display = q.lead ? 'block' : 'none';
    wrap.querySelector('.q').textContent = q.ask;
    
    var opts = q.kind === 'yes-no' ? [['No', 0], ['Yes', 1]] : SCALE_OPTS[q.kind] || SCALE_OPTS['rating-5'];
    var labels = q.labels || [];
    
    var wordy = labels.length === opts.length;
    var stack = opts.length > 2 && (wordy || (window.innerWidth || 420) < 412);
    row.style.cssText = stack ? 'display:grid;gap:6px' : 'display:flex;gap:6px';
    opts.forEach(function (o) {
      
      var b = el(
        'button',
        '',
        BTN + 'box-sizing:border-box;min-height:44px;border-radius:8px;color:inherit;' +
          'border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.04);' +
          (stack ? 'padding:0 14px;text-align:left' : 'flex:1;padding:0;text-align:center'),
      );
      b.type = 'button';
      b.textContent = o[0];
      ring(b);
      b.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        
        b.style.background = '#fff';
        b.style.borderColor = '#fff';
        b.style.color = '#17171a';
        
        record(q, o[1], false);
        var low = isLow(q, o[1]);
        
        setTimeout(
          safe(function () {
            if (low) followUp(q, wrap, host);
            else host.remove();
          }),
          180,
        );
      });
      row.appendChild(b);
    });
    
    if (labels.length === 2 && !wordy && q.kind !== 'yes-no') {
      if (stack) {
        top.textContent = labels[0];
        top.style.display = 'block';
        ends.textContent = labels[1];
        ends.style.justifyContent = 'flex-end';
      } else {
        el('span', '', 'flex:1', ends, labels[0]);
        el('span', '', 'flex:1;text-align:right', ends, labels[1]);
      }
    } else {
      ends.style.display = 'none';
    }
    if (q.notApplicable) {
      na.textContent = q.notApplicable;
      na.style.display = 'block';
      na.onclick = function () {
        if (!answered) record(q, undefined, true);
        host.remove();
      };
    }
    document.body.appendChild(host);
  }
  
  function followUp(q, wrap, host) {
    var card = wrap.querySelector('.c');
    card.querySelector('.q').textContent = 'Thanks. What went wrong?';
    
    card.querySelector('.l').style.display = 'none';
    card.querySelector('.a').style.display = 'none';
    card.querySelector('.e').style.display = 'none';
    card.querySelector('.n').style.display = 'none';
    var row = card.querySelector('.r');
    row.className = 'f';
    row.style.cssText = 'display:block';
    row.innerHTML = '';
    var box = el(
      'textarea',
      '',
      'box-sizing:border-box;font:inherit;width:100%;min-height:62px;padding:8px;border-radius:8px;' +
        'resize:vertical;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);color:inherit',
    );
    box.setAttribute('aria-label', 'What went wrong?');
    ring(box);
    box.placeholder = 'Optional — one line is plenty';
    var send = el(
      'button',
      's',
      BTN + 'margin-top:8px;padding:8px 14px;border-radius:8px;border:0;background:#f2f2f5;' +
        'color:#1b1b1f;font-weight:600',
    );
    send.type = 'button';
    send.className = 's';
    send.textContent = 'Send';
    send.addEventListener('click', function () {
      var text = (box.value || '').trim();
      if (text) recordText(q, text.slice(0, 2000));
      host.remove();
    });
    row.appendChild(box);
    row.appendChild(send);
    
    var skip = el(
      'button',
      'k',
      BTN + 'margin:8px 0 0 10px;background:none;border:0;padding:0;font-size:12px;color:' + MUTED,
      row,
      'Skip',
    );
    skip.type = 'button';
    skip.addEventListener('click', function () {
      host.remove();
    });
    box.focus();
  }
  
  function routeMatches(pattern, pathname) {
    var pat = pattern.split('/').filter(Boolean);
    var path = pathname.split('?')[0].split('#')[0].split('/').filter(Boolean);
    if (pat.length !== path.length) return false;
    for (var i = 0; i < pat.length; i++) {
      if (pat[i] !== '*' && pat[i] !== path[i]) return false;
    }
    return true;
  }
  function onRoute(q) {
    var routes = q.triggerRoutes || [];
    for (var i = 0; i < routes.length; i++) {
      if (routeMatches(routes[i], currentPath())) return true;
    }
    return false;
  }
  
  function arm(q) {
    armed = q;
    armedAt = Date.now();
    clearTimeout(timer);
    
    if (TEST) {
      timer = setTimeout(safe(fire), 400);
      return;
    }
    
    if (randomArm) {
      timer = setTimeout(safe(fire), TEST ? 600 : 5000 + Math.random() * 25000);
      return;
    }
    
    startSettleWatch();
    
    timer = setTimeout(
      safe(function () {
        armed = null;
        stopSettleWatch();
      }),
      TEST ? 1200 : 90000,
    );
  }
  
  var lastAct = 0;
  var lastMut = 0;
  var mo = null;
  function noteActivity() {
    lastAct = Date.now();
  }
  function startSettleWatch() {
    lastAct = lastMut = Date.now();
    if (mo || !window.MutationObserver) return;
    try {
      mo = new MutationObserver(noteSettle);
      
      mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    } catch (e) {
      mo = null;
    }
  }
  function noteSettle() {
    lastMut = Date.now();
  }
  function stopSettleWatch() {
    if (mo) mo.disconnect();
    mo = null;
  }
  
  var fire = safe(function () {
    if (!armed) return;
    stopSettleWatch();
    if (document.querySelector('[data-eval-bot]')) return;
    
    var a = document.activeElement;
    if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.isContentEditable)) return;
    if (window.getSelection && String(window.getSelection())) return;
    var q = armed;
    armed = null;
    clearTimeout(timer);
    setTimeout(
      safe(function () {
        ask(q);
      }),
      TEST ? 300 : 1200,
    );
  });
  
  function watchBreakpoints() {
    var path = currentPath();
    setInterval(
      safe(function () {
        if (currentPath() !== path) {
          path = currentPath();
          fire();
        }
      }),
      500,
    );
    window.addEventListener('popstate', fire);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') fire();
    });
    
    var acts = ['click', 'keydown', 'scroll', 'touchstart'];
    for (var a = 0; a < acts.length; a++) {
      document.addEventListener(acts[a], noteActivity, { capture: true, passive: true });
    }
    setInterval(
      safe(function () {
        if (!armed) return;
        var now = Date.now();
        if (now - lastAct >= (TEST ? 600 : QUIET_MS) && now - lastMut >= (TEST ? 200 : SETTLED_MS)) fire();
      }),
      1000,
    );
    
  }
  
  var onInteract = safe(function (ev) {
    if (armed) return;
    var el = ev.target && ev.target.closest ? ev.target.closest('[data-uxid]') : null;
    var uxid = el ? el.getAttribute('data-uxid') : null;
    
    var pool = [];
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      if (uxid && q.triggerUxids.indexOf(uxid) !== -1 && eligible(q)) pool.push(q);
    }
    if (!pool.length) {
      for (var j = 0; j < questions.length; j++) {
        var r = questions[j];
        if (onRoute(r) && eligible(r)) pool.push(r);
      }
    }
    if (!pool.length) return;
    
    var warming = [];
    for (var w = 0; w < pool.length; w++) {
      if ((pool[w].answered || 0) < WARM_UP) warming.push(pool[w]);
    }
    if (warming.length) pool = warming;
    
    var picked;
    var exploring = Math.random() < EXPLORE_SHARE;
    if (exploring) {
      picked = pool[Math.floor(Math.random() * pool.length)];
      picked.propensity = EXPLORE_SHARE / pool.length;
    } else {
      picked = pool[0];
      for (var b = 1; b < pool.length; b++) {
        if ((pool[b].score || 0) > (picked.score || 0)) picked = pool[b];
      }
      picked.propensity = 1 - EXPLORE_SHARE + EXPLORE_SHARE / pool.length;
    }
    picked.exploring = exploring;
    arm(picked);
  });
  var boot = safe(function () {
    fetch(API + '/api/probe/manifest', { headers: { Authorization: 'Probe ' + KEY } })
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(
        safe(function (data) {
          if (!data || !data.questions || !data.questions.length) return;
          
          if (!BRAND) BRAND = data.brand || hostBrand();
          questions = data.questions.filter(eligible);
          if (!questions.length) return;
          document.addEventListener('click', onInteract, true);
          document.addEventListener('keyup', onInteract, true);
          watchBreakpoints();
        }),
      )
      .catch(function () {});
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
