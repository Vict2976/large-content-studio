import type { TextareaHTMLAttributes } from 'react';

// @uxid client/src/components/ui/TextArea::TextArea
export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="ui-textarea" {...props} />;
}
