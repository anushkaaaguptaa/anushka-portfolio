import React from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { AppId } from '../../types';
import { Notebook, MessageSquare, Terminal, Image as ImageIcon } from 'lucide-react';
import { NotesWindow } from '../windows/NotesWindow';
import { MessagesWindow } from '../windows/MessagesWindow';
import { TerminalWindow } from '../windows/TerminalWindow';
import { PhotosWindow } from '../windows/PhotosWindow';

export const MobileLayout: React.FC = () => {
  const { activeMobileTab, setActiveMobileTab } = useWindowManager();

  const tabs: Array<{ id: AppId; title: string; icon: React.ReactNode }> = [
    { id: 'notes', title: 'Notes', icon: <Notebook className="h-5 w-5" /> },
    { id: 'messages', title: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
    { id: 'terminal', title: 'Terminal', icon: <Terminal className="h-5 w-5" /> },
    { id: 'photos', title: 'Photos', icon: <ImageIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden select-none">
      <header className="flex h-14 items-center justify-between px-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-lg"></span>
          <span className="font-bold text-sm text-white">Anushka Portfolio</span>
        </div>
        <span className="text-[10px] font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-500/30">
          Mobile Mode
        </span>
      </header>

      <main className="flex-1 overflow-y-auto relative p-2">
        {activeMobileTab === 'notes' && (
          <div className="h-full w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            <NotesWindow />
          </div>
        )}
        {activeMobileTab === 'messages' && (
          <div className="h-full w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            <MessagesWindow />
          </div>
        )}
        {activeMobileTab === 'terminal' && (
          <div className="h-full w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            <TerminalWindow />
          </div>
        )}
        {activeMobileTab === 'photos' && (
          <div className="h-full w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            <PhotosWindow />
          </div>
        )}
      </main>

      <nav className="flex h-16 items-center justify-around border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl shrink-0 px-2">
        {tabs.map((tab) => {
          const isActive = activeMobileTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveMobileTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                isActive ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span className="text-[10px] mt-1">{tab.title}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
