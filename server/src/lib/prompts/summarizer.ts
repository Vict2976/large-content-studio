export const SUMMARIZER_PROMPTS = {
  condense: [
    'Summarize the document into no more than five bullet points.',
    'Keep each bullet under 20 words.',
  ].join('\n'),
  expand: 'Given a short summary, restore likely supporting detail without inventing facts.',
};
