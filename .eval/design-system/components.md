# Design system components

Each component is cross-referenced to the code via its `@uxid` identifier.

| @uxid | component | file | notes |
| --- | --- | --- | --- |
| `client/src/App::App` | App | `client/src/App.tsx` | Root application component wiring together layout shells and pages. |
| `client/src/components/LegacyStatsWidget::LegacyStatsWidget` | LegacyStatsWidget | `client/src/components/LegacyStatsWidget.tsx` | Legacy component outside the ui/ primitives folder; review for token adoption and possible refactor or deprecation. |
| `client/src/components/layout/Navbar::Navbar` | Navbar | `client/src/components/layout/Navbar.tsx` | Top navigation shell using surface and border tokens. |
| `client/src/components/layout/Sidebar::Sidebar` | Sidebar | `client/src/components/layout/Sidebar.tsx` | Side navigation shell using surface, border, and spacing tokens. |
| `client/src/components/ui/Button::Button` | Button | `client/src/components/ui/Button.tsx` | UI primitive; consumes accent colors, radii, spacing, and typography tokens. |
| `client/src/components/ui/Card::Card` | Card | `client/src/components/ui/Card.tsx` | UI primitive surface container using raised background, border, radius, and card shadow. |
| `client/src/components/ui/Select::Select` | Select | `client/src/components/ui/Select.tsx` | Form UI primitive using border, ink, radius, and spacing tokens. |
| `client/src/components/ui/TextArea::TextArea` | TextArea | `client/src/components/ui/TextArea.tsx` | Form UI primitive using border, ink, radius, and spacing tokens. |
| `client/src/features/blog/BlogEditor::BlogEditor` | BlogEditor | `client/src/features/blog/BlogEditor.tsx` | Blog authoring feature using form primitives and spacing tokens. |
| `client/src/features/blog/BlogPreview::BlogPreview` | BlogPreview | `client/src/features/blog/BlogPreview.tsx` | Renders blog output using typography and surface tokens. |
| `client/src/features/captions/CaptionGenerator::CaptionGenerator` | CaptionGenerator | `client/src/features/captions/CaptionGenerator.tsx` | Caption feature module built on Select, TextArea, and Button primitives. |
| `client/src/features/chat/ChatWindow::ChatWindow` | ChatWindow | `client/src/features/chat/ChatWindow.tsx` | Chat feature container composing MessageList and MessageInput. |
| `client/src/features/chat/MessageInput::MessageInput` | MessageInput | `client/src/features/chat/MessageInput.tsx` | Chat input built on TextArea and Button primitives. |
| `client/src/features/chat/MessageList::MessageList` | MessageList | `client/src/features/chat/MessageList.tsx` | Displays chat messages; uses surface, ink, and spacing tokens. |
| `client/src/features/summarizer/SummarizerPanel::SummarizerPanel` | SummarizerPanel | `client/src/features/summarizer/SummarizerPanel.tsx` | Summarizer feature panel using Card and form primitives. |
| `client/src/features/translator/TranslatorForm::TranslatorForm` | TranslatorForm | `client/src/features/translator/TranslatorForm.tsx` | Translator feature form using Select, TextArea, and Button primitives. |
| `client/src/pages/Landing::Landing` | Landing | `client/src/pages/Landing.tsx` | Marketing/entry page; should use surface, accent, and typography tokens. |
| `client/src/pages/Studio::Studio` | Studio | `client/src/pages/Studio.tsx` | Main workspace page composing feature modules within the layout shell. |
