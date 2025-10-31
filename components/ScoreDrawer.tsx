import React, { useState } from 'react';
import { SessionLogEntry } from '../types';
import { ScoreIcon } from './Icons';

interface ScoreDrawerProps {
  log: SessionLogEntry[];
}

export const ScoreDrawer: React.FC<ScoreDrawerProps> = ({ log }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 text-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 bg-black/40 border-t border-x border-gray-800 rounded-t-lg backdrop-blur-sm flex items-center justify-center gap-3"
        >
          <ScoreIcon className="w-5 h-5 text-brand-score" />
          <span className="font-cinzel tracking-widest">SCORE</span>
        </button>
        <div 
          className="transition-all duration-500 ease-in-out overflow-hidden bg-black/50 border-x border-b border-gray-800 backdrop-blur-md rounded-b-lg"
          style={{ maxHeight: isOpen ? '400px' : '0px', padding: isOpen ? '1rem' : '0 1rem' }}
        >
          {log.length > 0 ? (
             <ul className="space-y-4 max-h-[350px] overflow-y-auto">
              {log.map(entry => (
                <li key={entry.id} className="text-sm border-b border-gray-800 pb-2">
                  <p className="font-bold text-gray-400">PROMPT: <span className="font-normal text-gray-200">{entry.prompt}</span></p>
                  <p className="font-bold mt-1" style={{color: '#E6C36A'}}> <span className="font-normal text-gray-200">{entry.modelName}: {entry.selectedResponse}</span></p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(entry.timestamp).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 py-8">No performances recorded.</p>
          )}
        </div>
      </div>
    </div>
  );
};
