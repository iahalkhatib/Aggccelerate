import React from 'react';

export interface ModuleDefinition {
  name: string;
  tagline: string;
  systemInstruction: string;
  color: string;
  icon: React.FC<{ className?: string }>;
  llm?: string;
}

export interface ModuleCardData extends ModuleDefinition {
  id: string;
  response: string;
  isLoading: boolean;
  error: string | null;
}

export interface SessionLogEntry {
  id: string;
  prompt: string;
  selectedResponse: string;
  modelName: string;
  timestamp: string;
}