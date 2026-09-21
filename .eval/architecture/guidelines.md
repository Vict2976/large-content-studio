# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Implement each feature as a custom hook that owns its result state with useState and exposes it to a presentational component; keep API-calling logic inside the hook rather than the component.

- `client/src/features/blog/useBlogGenerator.ts`:

  ```
  export function useBlogGenerator() {
  ```

- `client/src/features/captions/useCaption.ts`:

  ```
  export function useCaption() {
  ```

- `client/src/features/summarizer/useSummarizer.ts`:

  ```
  export function useSummarizer() {
  ```

- `client/src/features/translator/useTranslate.ts`:

  ```
  export function useTranslate() {
  ```

## Name feature hooks with a use-prefixed function export and initialize their primary output as a local useState value.

- `client/src/features/blog/useBlogGenerator.ts`:

  ```
  const [draft, setDraft] = useState('');
  ```

- `client/src/features/captions/useCaption.ts`:

  ```
  const [caption, setCaption] = useState('');
  ```

- `client/src/features/summarizer/useSummarizer.ts`:

  ```
  const [summary, setSummary] = useState('');
  ```

- `client/src/features/translator/useTranslate.ts`:

  ```
  const [translation, setTranslation] = useState('');
  ```

## Export presentational components as named function declarations (not default exports), reserving default export for the top-level App.

- `client/src/features/captions/CaptionGenerator.tsx`:

  ```
  export function CaptionGenerator() {
  ```

- `client/src/features/chat/ChatWindow.tsx`:

  ```
  export function ChatWindow() {
  ```

- `client/src/features/summarizer/SummarizerPanel.tsx`:

  ```
  export function SummarizerPanel() {
  ```

- `client/src/features/translator/TranslatorForm.tsx`:

  ```
  export function TranslatorForm() {
  ```

## Type component props with a local interface (Props or a named *Props) declared alongside the component.

- `client/src/components/ui/Button.tsx`:

  ```
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ```

- `client/src/components/ui/Select.tsx`:

  ```
  interface Props {
  ```

- `client/src/features/blog/BlogEditor.tsx`:

  ```
  interface Props {
  ```

- `client/src/features/chat/MessageInput.tsx`:

  ```
  interface Props {
  ```

## For UI primitives that wrap native elements, extend the corresponding HTML attributes type and spread remaining props onto the underlying element.

- `client/src/components/ui/Button.tsx`:

  ```
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ```

- `client/src/components/ui/TextArea.tsx`:

  ```
  export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  ```

## Manage transient form and view state locally with useState hooks inside the owning component.

- `client/src/components/layout/Navbar.tsx`:

  ```
  const [query, setQuery] = useState('');
  ```

- `client/src/features/captions/CaptionGenerator.tsx`:

  ```
  const [imageDescription, setImageDescription] = useState('');
  ```

- `client/src/features/summarizer/SummarizerPanel.tsx`:

  ```
  const [document, setDocument] = useState('');
  ```

## Define fixed option/tab sets as module-level constant arrays used to render selectors and navigation.

- `client/src/components/layout/Sidebar.tsx`:

  ```
  const TABS: { id: Tab; label: string }[] = [
  ```

- `client/src/features/blog/BlogEditor.tsx`:

  ```
  const TONES = [
  ```

- `client/src/features/translator/TranslatorForm.tsx`:

  ```
  const LANGUAGES = [
  ```
