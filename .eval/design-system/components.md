# Design system components

Each component is cross-referenced to the code via its `@uxid` identifier.

| @uxid | component | file | notes |
| --- | --- | --- | --- |
| `client/src/App::App` | App | `client/src/App.tsx` | Root application shell that mounts layout and page routing. |
| `client/src/components/LegacyStatsWidget::LegacyStatsWidget` | LegacyStatsWidget | `client/src/components/LegacyStatsWidget.tsx` | Legacy widget outside the ui/ and features/ structure; candidate for refactor to align with current token usage and component conventions. |
| `client/src/components/layout/Navbar::Navbar` | Navbar | `client/src/components/layout/Navbar.tsx` | Top navigation bar; uses surface, border, and typography tokens. |
| `client/src/components/layout/Sidebar::Sidebar` | Sidebar | `client/src/components/layout/Sidebar.tsx` | Side navigation panel for switching between features. |
| `client/src/components/ui/Button::Button` | Button | `client/src/components/ui/Button.tsx` | Reusable button primitive consuming accent, radius, and spacing tokens. |
| `client/src/components/ui/Card::Card` | Card | `client/src/components/ui/Card.tsx` | Container primitive using raised surface, border, radius, and card shadow tokens. |
| `client/src/components/ui/Select::Select` | Select | `client/src/components/ui/Select.tsx` | Dropdown input primitive styled with surface, border, and radius tokens. |
| `client/src/components/ui/TextArea::TextArea` | TextArea | `client/src/components/ui/TextArea.tsx` | Multiline text input primitive used across feature forms. |
| `client/src/features/blog/BlogEditor::BlogEditor` | BlogEditor | `client/src/features/blog/BlogEditor.tsx` | Blog authoring feature built on TextArea and Button primitives. |
| `client/src/features/blog/BlogPreview::BlogPreview` | BlogPreview | `client/src/features/blog/BlogPreview.tsx` | Renders blog output preview using Card and typography tokens. |
| `client/src/features/captions/CaptionGenerator::CaptionGenerator` | CaptionGenerator | `client/src/features/captions/CaptionGenerator.tsx` | Caption generation feature composing input and result surfaces. |
| `client/src/features/chat/ChatWindow::ChatWindow` | ChatWindow | `client/src/features/chat/ChatWindow.tsx` | Chat container orchestrating MessageList and MessageInput. |
| `client/src/features/chat/MessageInput::MessageInput` | MessageInput | `client/src/features/chat/MessageInput.tsx` | Chat composer using TextArea and Button primitives. |
| `client/src/features/chat/MessageList::MessageList` | MessageList | `client/src/features/chat/MessageList.tsx` | Scrollable message stream using surface and typography tokens. |
| `client/src/features/summarizer/SummarizerPanel::SummarizerPanel` | SummarizerPanel | `client/src/features/summarizer/SummarizerPanel.tsx` | Summarization feature panel built from Card and input primitives. |
| `client/src/features/translator/TranslatorForm::TranslatorForm` | TranslatorForm | `client/src/features/translator/TranslatorForm.tsx` | Translation feature form using Select, TextArea, and Button. |
| `client/src/pages/Landing::Landing` | Landing | `client/src/pages/Landing.tsx` | Marketing/entry page composed from UI primitives and accent tokens. |
| `client/src/pages/Studio::Studio` | Studio | `client/src/pages/Studio.tsx` | Primary workspace page hosting feature modules within the layout shell. |
