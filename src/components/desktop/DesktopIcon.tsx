import React from 'react';
import { motion } from 'framer-motion';
import { AppId } from '../../types';
import { useWindowManager } from '../../context/WindowManagerContext';
import { MacAppIcon, MacIconType } from '../ui/MacAppIcon';

interface DesktopIconProps {
  id: AppId | 'resume';
  title: string;
  iconType: MacIconType;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ id, title, iconType }) => {
  const { openWindow } = useWindowManager();

  const handleOpen = () => {
    if (id === 'resume') {
      openWindow('notes');
    } else {
      openWindow(id);
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      dragConstraints={{
        left: 0,
        top: 36,
        right: window.innerWidth - 120,
        bottom: window.innerHeight - 120,
      }}
      whileDrag={{ scale: 1.1, zIndex: 30 }}
      className="select-none z-10 cursor-grab active:cursor-grabbing inline-block"
    >
      <button
        onClick={handleOpen}
        className="group flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/10 transition-colors w-24 text-center select-none focus:outline-none"
      >
        <div className="group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-200 shrink-0">
          <MacAppIcon type={iconType} size="lg" />
        </div>
        <span className="mt-1.5 text-xs font-medium text-slate-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] truncate max-w-full group-hover:text-sky-300">
          {title}
        </span>
      </button>
    </motion.div>
  );
};
