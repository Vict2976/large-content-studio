# Components

Every row is an applied `// @uxid` identifier. Ids are path-derived and permanent.

| identifier | file | flow | type | description |
| --- | --- | --- | --- | --- |
| `client/src/App::App` | client/src/App.tsx | all | component | Function component. Renders: Routes, Route, Landing, Studio. |
| `client/src/components/layout/Navbar::Navbar` | client/src/components/layout/Navbar.tsx | all | component | Function component. Hooks: useState. Renders: header, span, input, Link. |
| `client/src/components/layout/Sidebar::Sidebar` | client/src/components/layout/Sidebar.tsx | all | component | Function component. Props: active, onSelect. Renders: nav, button. |
| `client/src/components/LegacyStatsWidget::LegacyStatsWidget` | client/src/components/LegacyStatsWidget.tsx | all | component | Class component. Renders: div, button, p, strong. |
| `client/src/components/ui/Button::Button` | client/src/components/ui/Button.tsx | all | component | Function component. Props: variant, className, ...rest. Renders: button. |
| `client/src/components/ui/Card::Card` | client/src/components/ui/Card.tsx | all | component | Function component. Props: children. Renders: div. |
| `client/src/components/ui/Select::Select` | client/src/components/ui/Select.tsx | all | component | Function component. Props: value, options, onChange, ariaLabel. Renders: select, option. |
| `client/src/components/ui/TextArea::TextArea` | client/src/components/ui/TextArea.tsx | all | component | Function component. Props: props: TextareaHTMLAttributes. Renders: textarea. |
| `client/src/features/blog/BlogEditor::BlogEditor` | client/src/features/blog/BlogEditor.tsx | all | component | Function component. Props: onDraft. Hooks: useState, useBlogGenerator. Renders: section, TextArea, Select, Button. |
| `client/src/features/blog/BlogPreview::BlogPreview` | client/src/features/blog/BlogPreview.tsx | all | component | Function component. Props: draft. Renders: p, Card, Button. |
| `client/src/features/captions/CaptionGenerator::CaptionGenerator` | client/src/features/captions/CaptionGenerator.tsx | all | component | Function component. Hooks: useState, useCaption. Renders: section, input, p, Button. |
| `client/src/features/chat/ChatWindow::ChatWindow` | client/src/features/chat/ChatWindow.tsx | all | component | Function component. Hooks: useChatSession. Renders: section, MessageList, MessageInput. |
| `client/src/features/chat/MessageInput::MessageInput` | client/src/features/chat/MessageInput.tsx | all | component | Function component. Props: onSend, disabled. Hooks: useState. Renders: div, TextArea, Button. |
| `client/src/features/chat/MessageList::MessageList` | client/src/features/chat/MessageList.tsx | all | component | Function component. Props: messages. Renders: ul, li. |
| `client/src/features/summarizer/SummarizerPanel::SummarizerPanel` | client/src/features/summarizer/SummarizerPanel.tsx | all | component | Function component. Hooks: useState, useSummarizer. Renders: section, p, TextArea, Button. |
| `client/src/features/translator/TranslatorForm::TranslatorForm` | client/src/features/translator/TranslatorForm.tsx | all | component | Function component. Hooks: useState, useTranslate. Renders: section, p, TextArea, Select, Button. |
| `client/src/pages/Landing::Landing` | client/src/pages/Landing.tsx | all | component | Function component. Renders: div, nav, span, header, h1, p, Link. |
| `client/src/pages/Studio::Studio` | client/src/pages/Studio.tsx | all | component | Function component. Hooks: useState. Renders: div, main, Navbar, Sidebar, BlogEditor, BlogPreview, ChatWindow, SummarizerPanel. |

## Coverage

- all: 18 identifier(s)
