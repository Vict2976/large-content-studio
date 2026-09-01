# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Encapsulate each workflow's data-fetching and AI-call logic in a dedicated feature hook that owns local result state, keeping presentational components thin.

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

## Manage component-local UI and result state with useState hooks rather than external state containers.

- `client/src/features/blog/useBlogGenerator.ts`:

  ```
  const [draft, setDraft] = useState('');
  ```

- `client/src/features/captions/CaptionGenerator.tsx`:

  ```
  const [imageDescription, setImageDescription] = useState('');
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

## Export presentational feature and layout components as named function components (reserve default export for the App root).

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

- `client/src/App.tsx`:

  ```
  export default function App() {
  ```

## Define explicit TypeScript interfaces or types for component props and shared shapes.

- `client/src/components/ui/Button.tsx`:

  ```
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ```

- `client/src/components/ui/Select.tsx`:

  ```
  interface Option {
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

## Model closed sets of options (tabs, tones, languages) as typed constant arrays or union types kept alongside their feature.

- `client/src/components/layout/Sidebar.tsx`:

  ```
  export type Tab = 'blog' | 'chat' | 'summarizer' | 'translator' | 'captions';
  ```

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

## Wrap native form controls in shared UI primitives that spread through standard HTML element props.

- `client/src/components/ui/Button.tsx`:

  ```
  export function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  ```

- `client/src/components/ui/TextArea.tsx`:

  ```
  export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  ```
