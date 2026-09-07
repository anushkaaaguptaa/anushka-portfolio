import React from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { AppId } from '../../types';
import { MacAppIcon, MacIconType } from '../ui/MacAppIcon';
import { CONTACT_DATA } from '../../data/portfolioData';

interface DockItem {
  id: AppId | 'github' | 'linkedin' | 'leetcode';
  title: string;
  isApp: boolean;
  url?: string;
  iconType: MacIconType;
}

export const Dock: React.FC = () => {
  const { windows, openWindow, activeAppId } = useWindowManager();

  const dockItems: DockItem[] = [
    {
      id: 'notes',
      title: 'Notes (Portfolio)',
      isApp: true,
      iconType: 'notes',
    },
    {
      id: 'messages',
      title: 'Messages',
      isApp: true,
      iconType: 'messages',
    },
    {
      id: 'terminal',
      title: 'Terminal CLI',
      isApp: true,
      iconType: 'terminal',
    },
    {
      id: 'photos',
      title: 'Photos Library',
      isApp: true,
      iconType: 'photos',
    },
    {
      id: 'settings',
      title: 'System Settings',
      isApp: true,
      iconType: 'settings',
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      isApp: false,
      url: CONTACT_DATA.links.github,
      iconType: 'github',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      isApp: false,
      url: CONTACT_DATA.links.linkedin,
      iconType: 'linkedin',
    },
    {
      id: 'leetcode',
      title: 'LeetCode Profile',
      isApp: false,
      url: CONTACT_DATA.links.leetcode,
      iconType: 'leetcode',
    },
  ];

  const handleClick = (item: DockItem) => {
    if (item.isApp) {
      openWindow(item.id as AppId);
    } else if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-slate-900/60 backdrop-blur-2xl border border-white/15 shadow-mac-dock">
        {dockItems.map((item, index) => {
          const isOpen = item.isApp && windows[item.id as AppId]?.isOpen;
          const isActive = item.isApp && activeAppId === item.id;

          return (
            <React.Fragment key={item.id}>
              {index === 5 && (
                <div className="h-8 w-px bg-white/15 my-auto mx-1" />
              )}

              <div className="relative group flex flex-col items-center">
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                  <div className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/15 shadow-lg whitespace-nowrap">
                    {item.title}
                  </div>
                </div>

                <button
                  onClick={() => handleClick(item)}
                  className="transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110 active:scale-95 shrink-0"
                >
                  <MacAppIcon type={item.iconType} size="md" />
                </button>

                {item.isApp && (
                  <div
                    className={`mt-1 h-1 w-1 rounded-full transition-all ${
                      isActive
                        ? 'bg-sky-400 w-2.5'
                        : isOpen
                        ? 'bg-slate-300'
                        : 'bg-transparent'
                    }`}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
