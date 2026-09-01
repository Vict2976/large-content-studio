# Design system components

Each component is cross-referenced to the code via its `@uxid` identifier.

| @uxid | component | file | notes |
| --- | --- | --- | --- |
| `client/src/App::App` | App | `client/src/App.tsx` | Root application component; composes routing and global layout shell. |
| `client/src/components/LegacyStatsWidget::LegacyStatsWidget` | LegacyStatsWidget | `client/src/components/LegacyStatsWidget.tsx` | Legacy widget outside the ui/ primitive hierarchy; candidate for token migration and refactor into the current UI kit. |
| `client/src/components/layout/Navbar::Navbar` | Navbar | `client/src/components/layout/Navbar.tsx` | Top navigation bar; consumes raised surface, border, and spacing tokens. |
| `client/src/components/layout/Sidebar::Sidebar` | Sidebar | `client/src/components/layout/Sidebar.tsx` | Side navigation; uses surface, border, and spacing tokens for nav items. |
| `client/src/components/ui/Button::Button` | Button | `client/src/components/ui/Button.tsx` | Primitive button; should rely on accent/status colors, radius, and spacing tokens for variants. |
| `client/src/components/ui/Card::Card` | Card | `client/src/components/ui/Card.tsx` | Primitive container; uses raised surface, border, radius, and card shadow tokens. |
| `client/src/components/ui/Select::Select` | Select | `client/src/components/ui/Select.tsx` | Primitive dropdown input; consumes border, surface, radius, and text tokens. |
| `client/src/components/ui/TextArea::TextArea` | TextArea | `client/src/components/ui/TextArea.tsx` | Primitive multiline input; consumes border, surface, radius, spacing, and body typography tokens. |
| `client/src/features/blog/BlogEditor::BlogEditor` | BlogEditor | `client/src/features/blog/BlogEditor.tsx` | Blog feature editor; composes TextArea and Button primitives with feature-specific layout. |
| `client/src/features/blog/BlogPreview::BlogPreview` | BlogPreview | `client/src/features/blog/BlogPreview.tsx` | Blog feature preview pane; uses typography and surface tokens for rendered content. |
| `client/src/features/captions/CaptionGenerator::CaptionGenerator` | CaptionGenerator | `client/src/features/captions/CaptionGenerator.tsx` | Caption generation panel; composes input primitives and Card layout. |
| `client/src/features/chat/ChatWindow::ChatWindow` | ChatWindow | `client/src/features/chat/ChatWindow.tsx` | Chat feature container combining MessageList and MessageInput. |
| `client/src/features/chat/MessageInput::MessageInput` | MessageInput | `client/src/features/chat/MessageInput.tsx` | Chat composer; composes TextArea and Button with spacing tokens. |
| `client/src/features/chat/MessageList::MessageList` | MessageList | `client/src/features/chat/MessageList.tsx` | Scrollable message list; uses surface, border, spacing, and text tokens for message bubbles. |
| `client/src/features/summarizer/SummarizerPanel::SummarizerPanel` | SummarizerPanel | `client/src/features/summarizer/SummarizerPanel.tsx` | Summarizer feature panel; composes TextArea, Button, and Card primitives. |
| `client/src/features/translator/TranslatorForm::TranslatorForm` | TranslatorForm | `client/src/features/translator/TranslatorForm.tsx` | Translator feature form; composes Select, TextArea, and Button primitives. |
| `client/src/pages/Landing::Landing` | Landing | `client/src/pages/Landing.tsx` | Marketing landing page; should use display typography, accent colors, and card elevation tokens. |
| `client/src/pages/Studio::Studio` | Studio | `client/src/pages/Studio.tsx` | Main authenticated workspace page hosting feature panels within the app shell. |
