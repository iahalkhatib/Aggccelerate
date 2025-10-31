import React from 'react';
import { ConductorIcon } from './Icons';

export const ConductorBar: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6 p-3 bg-black/20 border border-gray-800 rounded-lg backdrop-blur-sm flex items-center justify-between text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <ConductorIcon className="w-5 h-5 text-brand-conductor" />
        <span className="font-cinzel text-base text-gray-300">CONDUCTOR</span>
      </div>
      <div className="flex items-center gap-4 opacity-50 cursor-not-allowed">
        {/* Mocked controls */}
        <span>Mode: Parallel</span>
        <span>Routing: Auto</span>
      </div>
    </div>
  );
};
