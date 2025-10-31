import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { ConductorBar } from './components/ConductorBar';
import { ModuleGrid } from './components/ModuleGrid';
import { ScoreDrawer } from './components/ScoreDrawer';
// Fix: Import the real Gemini service instead of the mock service.
import { generateGeminiResponse } from './services/geminiService';
import { ModuleCardData, SessionLogEntry } from './types';
import { MODULE_DEFINITIONS } from './theme';
import { Confetti } from './components/Confetti';

const initialModules: ModuleCardData[] = Object.values(MODULE_DEFINITIONS)
  .filter(m => ['Brass', 'Strings', 'Percussion', 'Winds'].includes(m.name))
  .map(def => ({
    id: def.name.toLowerCase(),
    ...def,
    response: '',
    isLoading: false,
    error: null,
  }));

function App() {
  const [modules, setModules] = useState<ModuleCardData[]>(initialModules);
  const [sessionLog, setSessionLog] = useState<SessionLogEntry[]>([]);
  const [isAnyLoading, setIsAnyLoading] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');

  // Fix: Update to call the Gemini API for each module and handle responses/errors.
  const handleRunAll = async (prompt: string) => {
    setCurrentPrompt(prompt);
    setIsAnyLoading(true);
    setModules(prev => prev.map(m => ({ ...m, isLoading: true, response: '', error: null })));

    const promises = modules.map(async (module) => {
      try {
        const response = await generateGeminiResponse(prompt, module.systemInstruction);
        return { id: module.id, response, error: null };
      } catch (e: any) {
        return { id: module.id, response: '', error: e.message || 'Failed to get response' };
      }
    });

    const results = await Promise.all(promises);

    setModules(prev =>
      prev.map(m => {
        const result = results.find(r => r.id === m.id);
        if (result) {
          return { ...m, isLoading: false, response: result.response, error: result.error };
        }
        return { ...m, isLoading: false, error: 'Failed to get result for this module.' };
      })
    );
    setIsAnyLoading(false);
  };

  const handleSelectResponse = (moduleId: string, response: string, prompt: string) => {
      const module = modules.find(m => m.id === moduleId);
      if(module) {
          const newEntry: SessionLogEntry = {
              id: uuidv4(),
              prompt: prompt,
              selectedResponse: response,
              modelName: module.name,
              timestamp: new Date().toISOString(),
          };
          setSessionLog(prev => [newEntry, ...prev]);
      }
  };

  return (
    <div className="min-h-screen font-inter p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <Confetti />
      <div className="w-full max-w-7xl relative z-10">
        <Header />
        <main className="mt-8">
          <PromptInput onRunAll={handleRunAll} isLoading={isAnyLoading} />
          <ConductorBar />
          <ModuleGrid modules={modules} prompt={currentPrompt} onSelectResponse={handleSelectResponse} />
        </main>
      </div>
      <ScoreDrawer log={sessionLog} />
    </div>
  );
}

export default App;