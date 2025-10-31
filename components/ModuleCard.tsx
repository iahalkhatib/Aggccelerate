import React from 'react';
import { ModuleCardData } from '../types';

interface ModuleCardProps {
  data: ModuleCardData;
  prompt: string;
  onSelectResponse: (moduleId: string, response: string, prompt: string) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ data, prompt, onSelectResponse }) => {
  
  return (
    <div className={`relative bg-black/30 border border-gray-800 rounded-xl backdrop-blur-md p-5 flex flex-col h-full group transition-all duration-300 hover:scale-[1.02]`}
         style={{ '--glow-color': data.color } as React.CSSProperties}
    >
        {/* Glow Effect */}
        <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" 
             style={{ background: `radial-gradient(400px at center, var(--glow-color), transparent 80%)`}}
        ></div>
        
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white leading-tight">{data.name}</h3>
                  {data.llm && 
                    <p 
                        className="text-[10px] font-inter uppercase tracking-wider font-bold"
                        style={{ color: data.color }}
                    >
                        {data.llm}
                    </p>
                  }
                </div>
            </div>
            <p className="text-gray-400 text-xs mt-2 mb-3 h-8">{data.tagline}</p>
            
            <div className={`relative flex-grow min-h-[200px] bg-black/40 rounded-md p-3 text-gray-300 text-sm overflow-y-auto border border-gray-700/50`}>
                {data.isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="w-8 h-8 rounded-full animate-breathe" style={{ background: data.color }}></div>
                    </div>
                )}
                {data.error && <p className="text-red-400">{data.error}</p>}
                <p className="whitespace-pre-wrap font-light">{data.response}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-800/50 flex justify-end gap-2">
                 <button className="text-xs px-3 py-1 rounded-md border border-gray-600 hover:bg-gray-700 transition-colors text-gray-300">
                    Refine
                </button>
                <button 
                    onClick={() => onSelectResponse(data.id, data.response, prompt)}
                    disabled={!data.response || data.isLoading}
                    className="text-xs px-3 py-1 rounded-md border transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ borderColor: data.color, background: `${data.color}20`, ['--hover-bg' as any]: `${data.color}40`}}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg')}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = `${data.color}20`}
                >
                    Select
                </button>
            </div>
        </div>
    </div>
  );
};