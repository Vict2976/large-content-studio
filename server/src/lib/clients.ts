import Anthropic from '@anthropic-ai/sdk';
import { anthropic } from '@ai-sdk/anthropic';

// A placeholder key lets the SDK construct without throwing when no real key is configured;
// the request itself fails at call time instead of crashing the whole server at boot.
export const anthropicClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY ?? 'sk-ant-placeholder' });

export { anthropic };

interface AgentInput {
  input: string;
  persona: string;
}

interface AgentOutput {
  output: string;
}

// Wraps a real Anthropic call behind the `.invoke()` shape a LangChain AgentExecutor exposes —
// the call-site detector matches on that shape, not on which package it came from.
export const contentAgent = {
  invoke: async (input: AgentInput): Promise<AgentOutput> => {
    const response = await anthropicClient.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 500,
      system: input.persona,
      messages: [{ role: 'user', content: input.input }],
    });
    const output = response.content
      .map((block: { type: string; text?: string }) => (block.type === 'text' ? (block.text ?? '') : ''))
      .join('');
    return { output };
  },
};
