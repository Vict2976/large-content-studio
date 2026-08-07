// A prompt that is a return value rather than a constant — the enclosing function name is the
// stable handle for it.
export function captionPrompt(imageDescription: string): string {
  return [
    'Write a short, punchy social-media caption for this image:',
    imageDescription,
    'Include one relevant emoji and a call to action.',
  ].join('\n');
}
