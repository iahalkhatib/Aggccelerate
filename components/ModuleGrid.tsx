import React from 'react';
import { ModuleCard } from './ModuleCard';
import { ModuleCardData } from '../types';

interface ModuleGridProps {
  modules: ModuleCardData[];
  prompt: string;
  onSelectResponse: (moduleId: string, response: string, prompt: string) => void;
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({ modules, prompt, onSelectResponse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      {modules.map(module => (
        <ModuleCard key={module.id} data={module} prompt={prompt} onSelectResponse={onSelectResponse} />
      ))}
    </div>
  );
};
