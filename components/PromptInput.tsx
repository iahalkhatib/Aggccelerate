import React, { useState } from 'react';
import { BatonIcon } from './Icons';

interface PromptInputProps {
  onRunAll: (prompt: string) => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ onRunAll, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleRun = () => {
    if (prompt.trim() && !isLoading) {
      onRunAll(prompt);
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleRun();
    }
  };

  return (
    <div className="relative flex items-center w-full max-w-3xl mx-auto">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Compose your query..."
        className="w-full h-14 p-4 pr-16 bg-black/30 text-white border border-gray-700 rounded-lg backdrop-blur-sm focus:ring-2 focus:ring-brand-conductor focus:outline-none resize-none transition-all"
        disabled={isLoading}
      />
      <button
        onClick={handleRun}
        disabled={isLoading}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-conductor hover:bg-opacity-80 transition-all text-white disabled:bg-gray-600 disabled:cursor-not-allowed group"
        aria-label="Run All"
      >
        {isLoading ? (
            <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
        ) : (
            <BatonIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
