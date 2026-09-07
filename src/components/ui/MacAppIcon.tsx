import React from 'react';

export type MacIconType =
  | 'notes'
  | 'messages'
  | 'terminal'
  | 'photos'
  | 'github'
  | 'linkedin'
  | 'leetcode'
  | 'resume'
  | 'settings';

interface MacAppIconProps {
  type: MacIconType;
  size?: 'sm' | 'md' | 'lg'; // sm = 28px, md = 44px (dock), lg = 56px (desktop)
  className?: string;
}

export const MacAppIcon: React.FC<MacAppIconProps> = ({ type, size = 'md', className = '' }) => {
  const sizeClasses =
    size === 'sm'
      ? 'w-7 h-7 rounded-lg'
      : size === 'lg'
      ? 'w-14 h-14 rounded-2xl'
      : 'w-11 h-11 rounded-xl';

  const baseContainerClass = `relative overflow-hidden shrink-0 border border-white/20 shadow-md select-none flex items-center justify-center ${sizeClasses} ${className}`;

  switch (type) {
    case 'notes':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/notes_mac_icon.png"
            alt="macOS Notes App Icon"
            className="w-full h-full object-cover"
          />
        </div>
      );

    case 'messages':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/messages_mac_icon.png"
            alt="macOS Messages App Icon"
            className="w-full h-full object-cover scale-[1.14]"
          />
        </div>
      );

    case 'terminal':
      return (
        <div
          className={`bg-gradient-to-b from-[#2d3748] via-[#1a202c] to-[#0f172a] flex flex-col p-1.5 justify-between ${baseContainerClass}`}
        >
          <div className="flex items-center gap-1 opacity-70">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-0.5 text-white font-mono font-bold text-[11px] leading-none mb-1 pl-0.5">
            <span className="text-emerald-400">&gt;</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      );

    case 'photos':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/photos_mac_icon.png"
            alt="macOS Photos App Icon"
            className="w-full h-full object-cover"
          />
        </div>
      );

    case 'settings':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/settings_mac_icon.png"
            alt="macOS Settings App Icon"
            className="w-full h-full object-cover scale-[1.15]"
          />
        </div>
      );

    case 'linkedin':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/linkedin_mac_icon.png"
            alt="LinkedIn App Icon"
            className="w-full h-full object-cover"
          />
        </div>
      );

    case 'github':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/github_mac_icon.png"
            alt="GitHub Icon"
            className="w-full h-full object-cover"
          />
        </div>
      );

    case 'leetcode':
      return (
        <div className={baseContainerClass}>
          <img
            src="/icons/leetcode_mac_icon.png"
            alt="LeetCode Icon"
            className="w-full h-full object-cover"
          />
        </div>
      );

    case 'resume':
      return (
        <div
          className={`bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border border-slate-300 flex flex-col justify-between p-1.5 ${baseContainerClass}`}
        >
          <div className="flex items-center justify-between border-b border-slate-300 pb-0.5 w-full">
            <span className="text-[9px] font-bold text-rose-600 font-mono">PDF</span>
            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
          </div>
          <div className="space-y-1 my-auto w-full">
            <div className="h-1 bg-slate-400/50 rounded w-full" />
            <div className="h-1 bg-slate-400/50 rounded w-3/4" />
            <div className="h-1 bg-slate-400/50 rounded w-5/6" />
          </div>
        </div>
      );
  }
};
