import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';
import { Select } from '../../components/ui/Select';
import { useTranslate } from './useTranslate';

const LANGUAGES = [
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'ja', label: 'Japanese' },
];

// @uxid client/src/features/translator/TranslatorForm::TranslatorForm
export function TranslatorForm() {
  const [text, setText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const { translation, loading, translate } = useTranslate();

  return (
    <section className="translator-form">
      <TextArea
        aria-label="Text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Select value={targetLanguage} options={LANGUAGES} onChange={setTargetLanguage} ariaLabel="Target language" />
      <Button onClick={() => void translate(text, targetLanguage)} disabled={loading || !text}>
        {loading ? 'Translating…' : 'Translate'}
      </Button>
      {translation && <p className="translation">{translation}</p>}
    </section>
  );
}
