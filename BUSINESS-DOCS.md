# Business documents for the scan (`business-docs/`)

This folder is the input to the evaluation tool's business pass. It is what a customer would drag
into the wizard's "Drop everything you have about the business" field: a company overview, who the
customers are, this year's goals, positioning, the content rules the product enforces, a glossary,
and one page saved from the website. Seven files, three formats, about 1,100 words.

Nothing in here is special-cased for the tool. The documents are written the way a small company
would actually write them, and every claim the scan extracts from them is quoted back verbatim in
`.eval/knowledge/*.md`, which is the output this folder produces.

## Run it

From the evaluation-tool checkout, with an Anthropic key in the environment:

```bash
npm run pipeline -- \
  --url /path/to/large-content-studio \
  --allow-local \
  --business-docs /path/to/large-content-studio/business-docs
```

Without a key the CLI falls back to a deterministic offline stub that produces mechanical output;
with one, the documents under `.eval/knowledge/` are what the live model grounded from this folder.
The last live run read 58 excerpts in one batch, wrote 8 selling propositions, 13 rules, a company
summary, three customer segments, five goals and six glossary terms, resolved every code link, and
cost about $0.11.

## What to look at afterwards

- `.eval/knowledge/company.md`, `customers.md`, `goals.md`, `glossary.md`: the four documents that
  always exist. When a folder has nothing on one of them, the document still exists and says so in
  its Gaps section.
- `.eval/knowledge/usp-*.md` and `rule-*.md`: one document per claim, each quoting the sentence it
  came from and naming the component that delivers it as `[[uxid:…]]`.
- Two rules about the API key link to no code. The scan's component inventory covers the React
  client; `server/src/middleware/auth.ts` is a function, not a component, so the rule is grounded
  in the documents but has no code node to land on yet. That is the honest picture, shown as such.

The walkthrough of what the evaluation tool does with these files, including the graph they
produce, is `docs/BUSINESS-GRAPH-GUIDE.md` in the evaluation-tool repository.
