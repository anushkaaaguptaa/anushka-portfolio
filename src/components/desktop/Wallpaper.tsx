import React from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';

export const Wallpaper: React.FC = () => {
  const { wallpaper, themeMode } = useWindowManager();

  const isLight = themeMode === 'light';

  return (
    <div
      className={`fixed inset-0 z-0 overflow-hidden select-none pointer-events-none transition-colors duration-500 ${
        isLight ? 'bg-slate-100' : 'bg-slate-950'
      }`}
    >
      {/* Wallpaper Presets */}
      {wallpaper === 'sonoma' && (
        <>
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-600/30 via-sky-600/20 to-purple-800/30 blur-[130px]" />
          <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-700/25 via-teal-600/20 to-indigo-900/30 blur-[140px]" />
          <div className="absolute -bottom-40 left-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-purple-900/30 via-sky-500/20 to-blue-900/30 blur-[120px]" />
        </>
      )}

      {wallpaper === 'gradient' && (
        <>
          <div className="absolute -top-20 left-1/4 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-fuchsia-600/40 via-purple-600/30 to-sky-500/30 blur-[140px]" />
          <div className="absolute bottom-0 right-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-cyan-500/30 via-blue-600/30 to-indigo-800/40 blur-[140px]" />
        </>
      )}

      {wallpaper === 'sunset' && (
        <>
          <div className="absolute -top-30 -right-20 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-amber-500/40 via-rose-600/30 to-orange-600/30 blur-[140px]" />
          <div className="absolute bottom-10 left-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-900/40 via-indigo-700/30 to-rose-900/30 blur-[130px]" />
        </>
      )}

      {wallpaper === 'ocean' && (
        <>
          <div className="absolute -top-40 left-10 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-teal-500/35 via-cyan-600/30 to-blue-900/40 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-blue-600/30 via-sky-500/25 to-slate-900/40 blur-[130px]" />
        </>
      )}

      {wallpaper === 'minimal' && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-90" />
      )}

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf808_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />

      {/* Minimalist Wallpaper Watermark — ANUSHKA */}
      <div className="absolute bottom-24 right-10 text-right opacity-25 pointer-events-none">
        <h1
          className={`text-5xl font-extrabold tracking-tighter ${
            isLight ? 'text-slate-900' : 'text-slate-100'
          }`}
        >
          ANUSHKA
        </h1>
      </div>
    </div>
  );
};
