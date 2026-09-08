import React, { useState, useRef, useEffect } from 'react';
import { WindowFrame } from './WindowFrame';
import { ABOUT_ME_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from '../../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalWindow: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'neofetch',
      output: (
        <div className="font-mono text-xs space-y-1 text-slate-300">
          <p className="text-sky-400 font-bold">anushka@macbook-pro ~ %</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2 border border-slate-800 p-3 rounded-lg bg-slate-950/60">
            <div className="text-sky-400 space-y-0.5 leading-tight select-none font-bold">
              <p>        .--.        </p>
              <p>       |o_o |   AI  </p>
              <p>       |:_/ |   C++ </p>
              <p>      //   \ \ PyTorch</p>
              <p>     (|     | ) React</p>
              <p>    /'\_   _/`\     </p>
              <p>    \___)=(___/     </p>
            </div>
            <div className="space-y-1 text-[11px]">
              <p><span className="text-sky-400 font-semibold">OS:</span> macOS Sonoma (Portfolio Edition)</p>
              <p><span className="text-sky-400 font-semibold">User:</span> Anushka Gupta (20 y/o)</p>
              <p><span className="text-sky-400 font-semibold">Degree:</span> Engineering (AI Specialization)</p>
              <p><span className="text-sky-400 font-semibold">Internship:</span> DTU Research Intern</p>
              <p><span className="text-sky-400 font-semibold">Programming:</span> C++, MySQL, Python</p>
              <p><span className="text-sky-400 font-semibold">Coursework:</span> Data Structures & Algorithms, Object Oriented Programming, Database Management System, Operating Systems</p>
              <p><span className="text-sky-400 font-semibold">Focus Areas:</span> Product, Analytics, AI Systems</p>
              <p><span className="text-sky-400 font-semibold">Projects:</span> ResuMate, BharatMat, LegalAIPro</p>
            </div>
          </div>
          <p className="text-slate-400">Type <span className="text-yellow-400 font-bold">help</span> to list available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-yellow-400 font-bold">Available Commands:</p>
            <p><span className="text-sky-400 font-mono w-28 inline-block">about</span> — Show Anushka's bio and background</p>
            <p><span className="text-sky-400 font-mono w-28 inline-block">experience</span> — Show DTU AI research internship</p>
            <p><span className="text-sky-400 font-mono w-28 inline-block">projects</span> — List top AI/Full-Stack projects</p>
            <p><span className="text-sky-400 font-mono w-28 inline-block">clear</span> — Clear terminal output</p>
            <p><span className="text-sky-400 font-mono w-28 inline-block">sudo hire</span> — Submit instant hire request!</p>
          </div>
        );
        break;

      case 'about':
        output = <p className="text-xs text-slate-200">{ABOUT_ME_DATA.bio}</p>;
        break;

      case 'experience':
        output = (
          <div className="text-xs space-y-1">
            <p className="font-bold text-sky-400">{EXPERIENCE_DATA.role} @ {EXPERIENCE_DATA.organization}</p>
            <p className="text-slate-300">{EXPERIENCE_DATA.description}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-1.5">
            {PROJECTS_DATA.map((p) => (
              <p key={p.id} className="text-slate-300">
                <span className="font-bold text-sky-300">[{p.title}]</span> — {p.subtitle}
              </p>
            ))}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo hire':
      case 'sudo hire_anushka':
        output = (
          <div className="text-xs font-mono text-emerald-400 space-y-1 border border-emerald-500/40 p-2.5 rounded bg-emerald-950/30">
            <p>[SUCCESS] Privilege escalated. Anushka has been hired!</p>
            <p>Email: anushkagupta5266@gmail.com</p>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-xs text-rose-400">
            zsh: command not found: {cmd}. Type <span className="text-yellow-400">help</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <WindowFrame id="terminal" headerTitle="Terminal — zsh">
      <div className="flex-1 bg-slate-950 p-4 font-mono text-xs overflow-y-auto scrollbar-thin select-text">
        {history.map((item, index) => (
          <div key={index} className="space-y-1 mb-3">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400 font-bold">anushka@macbook-pro</span>
              <span className="text-slate-500">~ %</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-2 border-l border-slate-800">{item.output}</div>
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="text-emerald-400 font-bold shrink-0">anushka@macbook-pro</span>
          <span className="text-slate-500 font-bold shrink-0">~ %</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-slate-100 focus:outline-none caret-sky-400"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </WindowFrame>
  );
};
