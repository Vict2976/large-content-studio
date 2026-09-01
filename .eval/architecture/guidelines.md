# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Encapsulate each feature's AI/data logic in a dedicated hook (use* naming) that owns its own state and exposes it to the presentational component, keeping components declarative.

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

## Manage local component/hook state with useState and typed initial values rather than external stores for feature-level UI state.

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

## Define shared, presentational UI primitives as small function components that spread native HTML element props and accept a typed props interface.

- `client/src/components/ui/Button.tsx`:

  ```
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ```

- `client/src/components/ui/Button.tsx`:

  ```
  export function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  ```

- `client/src/components/ui/Card.tsx`:

  ```
  export function Card({ children }: { children: ReactNode }) {
  ```

- `client/src/components/ui/TextArea.tsx`:

  ```
  export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  ```

## Declare component prop and option shapes with explicit TypeScript interfaces/types local to the file before the component definition.

- `client/src/components/LegacyStatsWidget.tsx`:

  ```
  interface Props {
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

## Export feature and layout components as named function declarations for consistent, discoverable imports.

- `client/src/components/layout/Navbar.tsx`:

  ```
  export function Navbar() {
  ```

- `client/src/features/blog/BlogPreview.tsx`:

  ```
  export function BlogPreview({ draft }: { draft: string }) {
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

## Keep configurable domain constants (tones, languages, tabs) as module-level arrays at the top of the relevant feature/layout file.

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
