# Design system components

Each component is cross-referenced to the code via its `@uxid` identifier.

| @uxid | component | file | notes |
| --- | --- | --- | --- |
| `client/src/App::App` | App | `client/src/App.tsx` | Root application shell wiring routes and global layout. |
| `client/src/components/LegacyStatsWidget::LegacyStatsWidget` | LegacyStatsWidget | `client/src/components/LegacyStatsWidget.tsx` | Legacy stats widget; likely predates the token system and may need migration to catalog tokens. |
| `client/src/components/layout/Navbar::Navbar` | Navbar | `client/src/components/layout/Navbar.tsx` | Top navigation bar; uses raised surface and border tokens. |
| `client/src/components/layout/Sidebar::Sidebar` | Sidebar | `client/src/components/layout/Sidebar.tsx` | Side navigation for switching between feature modules. |
| `client/src/components/ui/Button::Button` | Button | `client/src/components/ui/Button.tsx` | Primitive button; relies on accent, radius, and spacing tokens for variants. |
| `client/src/components/ui/Card::Card` | Card | `client/src/components/ui/Card.tsx` | Container primitive using card shadow, radius, and raised background tokens. |
| `client/src/components/ui/Select::Select` | Select | `client/src/components/ui/Select.tsx` | Form select control; shares border, radius, and text tokens with other inputs. |
| `client/src/components/ui/TextArea::TextArea` | TextArea | `client/src/components/ui/TextArea.tsx` | Multiline text input primitive used across editor and chat features. |
| `client/src/features/blog/BlogEditor::BlogEditor` | BlogEditor | `client/src/features/blog/BlogEditor.tsx` | Blog authoring surface using TextArea and form primitives. |
| `client/src/features/blog/BlogPreview::BlogPreview` | BlogPreview | `client/src/features/blog/BlogPreview.tsx` | Rendered blog preview using body typography and surface tokens. |
| `client/src/features/captions/CaptionGenerator::CaptionGenerator` | CaptionGenerator | `client/src/features/captions/CaptionGenerator.tsx` | Caption generation feature module using form controls and cards. |
| `client/src/features/chat/ChatWindow::ChatWindow` | ChatWindow | `client/src/features/chat/ChatWindow.tsx` | Chat feature container composing MessageList and MessageInput. |
| `client/src/features/chat/MessageInput::MessageInput` | MessageInput | `client/src/features/chat/MessageInput.tsx` | Chat composition input built on TextArea and Button primitives. |
| `client/src/features/chat/MessageList::MessageList` | MessageList | `client/src/features/chat/MessageList.tsx` | Scrollable list of chat messages; uses ink and muted text tokens. |
| `client/src/features/summarizer/SummarizerPanel::SummarizerPanel` | SummarizerPanel | `client/src/features/summarizer/SummarizerPanel.tsx` | Summarization panel composing input and result display. |
| `client/src/features/translator/TranslatorForm::TranslatorForm` | TranslatorForm | `client/src/features/translator/TranslatorForm.tsx` | Translation form using Select for language and TextArea for content. |
| `client/src/pages/Landing::Landing` | Landing | `client/src/pages/Landing.tsx` | Marketing/landing page; primary entry surface using accent colors and display typography. |
| `client/src/pages/Studio::Studio` | Studio | `client/src/pages/Studio.tsx` | Main workspace page composing feature modules within the layout shell. |
