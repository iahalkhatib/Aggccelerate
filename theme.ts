import { ModuleDefinition } from './types';
import { BrassIcon, StringsIcon, PercussionIcon, WindsIcon, ConductorIcon, ScoreIcon } from './components/Icons';

export const MODULE_DEFINITIONS: { [key: string]: ModuleDefinition } = {
  BRASS: {
    name: 'Brass',
    tagline: 'Hear the boldest voices perform your prompt.',
    systemInstruction: 'You are a bold, brassy, and confident assistant.',
    color: '#E6C36A', // Gold / Amber
    icon: BrassIcon,
    llm: 'Gemini',
  },
  STRINGS: {
    name: 'Strings',
    tagline: 'Polish this until it sings.',
    systemInstruction: 'You are an elegant, smooth, and precise assistant.',
    color: '#5AA9E6', // Silver / Sky blue
    icon: StringsIcon,
    llm: 'Claude',
  },
  PERCUSSION: {
    name: 'Percussion',
    tagline: 'Drive your workflows forward.',
    systemInstruction: 'You are a structured, rhythmic, and action-oriented assistant.',
    color: '#C44545', // Crimson / Rose
    icon: PercussionIcon,
    llm: 'Grok',
  },
  WINDS: {
    name: 'Winds',
    tagline: 'Analyze how your ideas perform.',
    systemInstruction: 'You are an analytical, airy, and insightful assistant.',
    color: '#7FFFD4', // Teal / Mint
    icon: WindsIcon,
    llm: 'ChatGPT',
  },
  CONDUCTOR: {
    name: 'Conductor',
    tagline: 'Send this to the best performer.',
    systemInstruction: 'You are an authoritative, precise, and routing-focused assistant.',
    color: '#8C6FF7', // Indigo / Silver
    icon: ConductorIcon,
  },
  SCORE: {
    name: 'Score',
    tagline: 'Record every performance.',
    systemInstruction: '', // N/A
    color: '#CFCFCF', // Platinum / Gray
    icon: ScoreIcon,
  },
};
