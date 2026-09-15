# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Encapsulate each feature's AI/backend call and its state in a dedicated hook named use<Feature>, keeping presentational components free of fetch logic.

- `client/src/features/blog/useBlogGenerator.ts`:

  ```
  export function useBlogGenerator() {
  ```

- `client/src/features/captions/useCaption.ts`:

  ```
  export function useCaption() {
  ```

- `client/src/features/chat/useChatSession.ts`:

  ```
  export function useChatSession() {
  ```

- `client/src/features/summarizer/useSummarizer.ts`:

  ```
  export function useSummarizer() {
  ```

- `client/src/features/translator/useTranslate.ts`:

  ```
  export function useTranslate() {
  ```

## Manage local UI and result state with useState inside feature hooks and components rather than external state stores.

- `client/src/features/blog/useBlogGenerator.ts`:

  ```
  const [draft, setDraft] = useState('');
  ```

- `client/src/features/captions/useCaption.ts`:

  ```
  const [caption, setCaption] = useState('');
  ```

- `client/src/features/chat/useChatSession.ts`:

  ```
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  ```

- `client/src/features/summarizer/SummarizerPanel.tsx`:

  ```
  const [document, setDocument] = useState('');
  ```

- `client/src/features/summarizer/useSummarizer.ts`:

  ```
  const [summary, setSummary] = useState('');
  ```

- `client/src/features/translator/useTranslate.ts`:

  ```
  const [translation, setTranslation] = useState('');
  ```

## Export React components and hooks as named function declarations (reserve default export for the root App).

- `client/src/components/layout/Navbar.tsx`:

  ```
  export function Navbar() {
  ```

- `client/src/components/ui/Button.tsx`:

  ```
  export function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  ```

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

## Type component props with an explicit interface (Props/ButtonProps) declared alongside the component.

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

## Build small, reusable UI primitives that extend native HTML element attribute types for composability.

- `client/src/components/ui/Button.tsx`:

  ```
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ```

- `client/src/components/ui/TextArea.tsx`:

  ```
  export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  ```

## Define fixed option/choice sets as module-level constant arrays near the component that consumes them.

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
