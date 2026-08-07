import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { anthropic } from '@ai-sdk/anthropic';

// A placeholder key lets the SDK construct without throwing when no real key is configured;
// the request itself fails with a 401 at call time instead of crashing the whole server at boot.
export const anthropicClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY ?? 'sk-ant-placeholder' });
export const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? 'sk-placeholder' });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY ?? '');
export const googleModel = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

export { anthropic };

interface AgentInput {
  input: string;
  persona: string;
}

interface AgentOutput {
  output: string;
}

// Stands in for a real LangChain AgentExecutor — the call-site detector matches on the
// `.invoke(...)` shape itself, not on where the object came from.
export const contentAgent = {
  invoke: async (input: AgentInput): Promise<AgentOutput> => ({
    output: `(mock) ${input.persona} received: ${input.input}`,
  }),
};
