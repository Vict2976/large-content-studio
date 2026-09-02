# Design system components

Each component is cross-referenced to the code via its `@uxid` identifier.

| @uxid | component | file | notes |
| --- | --- | --- | --- |
| `client/src/App::App` | App | `client/src/App.tsx` | Root application component wiring routing and global providers around pages. |
| `client/src/components/LegacyStatsWidget::LegacyStatsWidget` | LegacyStatsWidget | `client/src/components/LegacyStatsWidget.tsx` | Legacy component outside current token and layout conventions; candidate for refactor to adopt design tokens. |
| `client/src/components/layout/Navbar::Navbar` | Navbar | `client/src/components/layout/Navbar.tsx` | Top navigation layout component; should consume surface, border, and spacing tokens. |
| `client/src/components/layout/Sidebar::Sidebar` | Sidebar | `client/src/components/layout/Sidebar.tsx` | Side navigation layout component for switching between feature tools. |
| `client/src/components/ui/Button::Button` | Button | `client/src/components/ui/Button.tsx` | UI primitive using accent, radius, spacing, and typography tokens for variants. |
| `client/src/components/ui/Card::Card` | Card | `client/src/components/ui/Card.tsx` | UI primitive container using raised surface, border, radius, and card shadow tokens. |
| `client/src/components/ui/Select::Select` | Select | `client/src/components/ui/Select.tsx` | UI form primitive for dropdown selection using border, radius, and text tokens. |
| `client/src/components/ui/TextArea::TextArea` | TextArea | `client/src/components/ui/TextArea.tsx` | UI form primitive for multiline input using border, radius, spacing, and body typography tokens. |
| `client/src/features/blog/BlogEditor::BlogEditor` | BlogEditor | `client/src/features/blog/BlogEditor.tsx` | Blog authoring feature using TextArea and form primitives. |
| `client/src/features/blog/BlogPreview::BlogPreview` | BlogPreview | `client/src/features/blog/BlogPreview.tsx` | Renders formatted blog preview using typography and surface tokens. |
| `client/src/features/captions/CaptionGenerator::CaptionGenerator` | CaptionGenerator | `client/src/features/captions/CaptionGenerator.tsx` | Caption generation feature composing form primitives and Card. |
| `client/src/features/chat/ChatWindow::ChatWindow` | ChatWindow | `client/src/features/chat/ChatWindow.tsx` | Chat feature container composing MessageList and MessageInput. |
| `client/src/features/chat/MessageInput::MessageInput` | MessageInput | `client/src/features/chat/MessageInput.tsx` | Chat input row combining TextArea and Button primitives. |
| `client/src/features/chat/MessageList::MessageList` | MessageList | `client/src/features/chat/MessageList.tsx` | Renders chat message history using surface and text tokens. |
| `client/src/features/summarizer/SummarizerPanel::SummarizerPanel` | SummarizerPanel | `client/src/features/summarizer/SummarizerPanel.tsx` | Summarization feature panel using TextArea, Button, and Card. |
| `client/src/features/translator/TranslatorForm::TranslatorForm` | TranslatorForm | `client/src/features/translator/TranslatorForm.tsx` | Translation feature form composing Select, TextArea, and Button. |
| `client/src/pages/Landing::Landing` | Landing | `client/src/pages/Landing.tsx` | Marketing/entry page composing layout and feature previews. |
| `client/src/pages/Studio::Studio` | Studio | `client/src/pages/Studio.tsx` | Primary workspace page hosting feature modules within the layout shell. |
