# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Encapsulate each feature's backend interaction and local state in a dedicated custom hook (useXxx) that returns state plus action functions, keeping components presentational.

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

## Manage transient UI/result state with local useState inside hooks and components rather than global stores.

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

- `client/src/features/summarizer/useSummarizer.ts`:

  ```
  const [summary, setSummary] = useState('');
  ```

- `client/src/features/translator/useTranslate.ts`:

  ```
  const [translation, setTranslation] = useState('');
  ```

## Define reusable, prop-driven UI primitives that extend native HTML element attributes for composability.

- `client/src/components/ui/Button.tsx`:

  ```
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ```

- `client/src/components/ui/Button.tsx`:

  ```
  export function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  ```

- `client/src/components/ui/TextArea.tsx`:

  ```
  export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  ```

## Type component contracts explicitly with Props/interface declarations rather than inline anonymous types.

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

## Co-locate each workflow's UI component with its hook under a feature-named folder for cohesion.

- `client/src/features/captions/CaptionGenerator.tsx`:

  ```
  export function CaptionGenerator() {
  ```

- `client/src/features/captions/CaptionGenerator.tsx`:

  ```
  const [imageDescription, setImageDescription] = useState('');
  ```

- `client/src/features/summarizer/SummarizerPanel.tsx`:

  ```
  export function SummarizerPanel() {
  ```

- `client/src/features/summarizer/SummarizerPanel.tsx`:

  ```
  const [document, setDocument] = useState('');
  ```

- `client/src/features/translator/TranslatorForm.tsx`:

  ```
  export function TranslatorForm() {
  ```

## Declare feature configuration options (tones, languages, tabs) as module-level constant arrays.

- `client/src/features/blog/BlogEditor.tsx`:

  ```
  const TONES = [
  ```

- `client/src/features/translator/TranslatorForm.tsx`:

  ```
  const LANGUAGES = [
  ```

- `client/src/components/layout/Sidebar.tsx`:

  ```
  const TABS: { id: Tab; label: string }[] = [
  ```

## Use named function exports for components and hooks, reserving default exports for top-level entry points like App.

- `client/src/App.tsx`:

  ```
  export default function App() {
  ```

- `client/src/components/layout/Navbar.tsx`:

  ```
  export function Navbar() {
  ```

- `client/src/features/chat/ChatWindow.tsx`:

  ```
  export function ChatWindow() {
  ```

- `client/src/features/summarizer/SummarizerPanel.tsx`:

  ```
  export function SummarizerPanel() {
  ```
