import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Minus, Square, X, Maximize2, Minimize2 } from 'lucide-react';
import { AppId } from '../../types';
import { useWindowManager } from '../../context/WindowManagerContext';

interface WindowFrameProps {
  id: AppId;
  children: React.ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  leftHeaderControls?: React.ReactNode;
  rightHeaderControls?: React.ReactNode;
  className?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  id,
  children,
  headerTitle,
  headerSubtitle,
  leftHeaderControls,
  rightHeaderControls,
  className = '',
}) => {
  const {
    windows,
    activeAppId,
    closeWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    focusWindow,
  } = useWindowManager();

  const windowState = windows[id];
  const windowRef = useRef<HTMLDivElement>(null);

  if (!windowState || !windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  const isActive = activeAppId === id;

  const handleMouseDown = () => {
    focusWindow(id);
  };

  return (
    <motion.div
      ref={windowRef}
      drag={!windowState.isMaximized}
      dragMomentum={false}
      dragElastic={0.05}
      dragConstraints={{ left: 0, top: 32, right: window.innerWidth - 300, bottom: window.innerHeight - 150 }}
      onMouseDown={handleMouseDown}
      initial={{ scale: 0.95, opacity: 0, y: 15 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        x: windowState.isMaximized ? 0 : undefined,
        width: windowState.isMaximized ? '100vw' : windowState.size.width,
        height: windowState.isMaximized ? 'calc(100vh - 32px)' : windowState.size.height,
        top: windowState.isMaximized ? '32px' : undefined,
        left: windowState.isMaximized ? '0px' : undefined,
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        zIndex: windowState.zIndex,
        left: windowState.isMaximized ? 0 : windowState.position.x,
        top: windowState.isMaximized ? 32 : windowState.position.y,
      }}
      className={`group flex flex-col rounded-xl overflow-hidden backdrop-blur-2xl transition-shadow duration-200 border ${
        isActive
          ? 'shadow-2xl shadow-black/50 border-white/20 bg-slate-900/90 text-slate-100'
          : 'shadow-lg border-white/10 bg-slate-900/75 text-slate-300 opacity-95'
      } ${className}`}
    >
      {/* Titlebar / Drag Handle */}
      <div
        className={`flex h-11 items-center justify-between px-3 select-none cursor-grab active:cursor-grabbing border-b transition-colors ${
          isActive
            ? 'bg-slate-800/80 border-slate-700/60'
            : 'bg-slate-850/60 border-slate-800/40'
        }`}
      >
        {/* Traffic Light Window Buttons */}
        <div className="flex items-center gap-2 w-24">
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            title="Close"
            className="group/btn flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f56] hover:bg-[#e0443e] border border-black/10 transition-colors"
          >
            <X className="h-2 w-2 opacity-0 group-hover/btn:opacity-100 text-black/70 stroke-[3]" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            title="Minimize"
            className="group/btn flex h-3 w-3 items-center justify-center rounded-full bg-[#ffbd2e] hover:bg-[#dea123] border border-black/10 transition-colors"
          >
            <Minus className="h-2 w-2 opacity-0 group-hover/btn:opacity-100 text-black/70 stroke-[3]" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximizeWindow(id);
            }}
            title={windowState.isMaximized ? "Restore" : "Maximize"}
            className="group/btn flex h-3 w-3 items-center justify-center rounded-full bg-[#27c93f] hover:bg-[#1aab29] border border-black/10 transition-colors"
          >
            {windowState.isMaximized ? (
              <Minimize2 className="h-2 w-2 opacity-0 group-hover/btn:opacity-100 text-black/70 stroke-[3]" />
            ) : (
              <Maximize2 className="h-2 w-2 opacity-0 group-hover/btn:opacity-100 text-black/70 stroke-[3]" />
            )}
          </button>
        </div>

        {/* Center Title or Custom Header Controls */}
        <div className="flex-1 text-center truncate px-2">
          {leftHeaderControls || (
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs font-semibold tracking-wide text-slate-200 truncate">
                {headerTitle || windowState.title}
              </span>
              {headerSubtitle && (
                <span className="text-[10px] text-slate-400 truncate">
                  {headerSubtitle}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right Header Extra Controls */}
        <div className="flex items-center justify-end gap-2 w-24">
          {rightHeaderControls}
        </div>
      </div>

      {/* Main Window Content */}
      <div className="flex-1 overflow-hidden flex flex-col relative bg-slate-900/40">
        {children}
      </div>
    </motion.div>
  );
};
