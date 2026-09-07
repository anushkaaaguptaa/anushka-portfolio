import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { WindowManagerProvider, useWindowManager } from './context/WindowManagerContext';
import { MenuBar } from './components/desktop/MenuBar';
import { Wallpaper } from './components/desktop/Wallpaper';
import { DesktopIcon } from './components/desktop/DesktopIcon';
import { Dock } from './components/desktop/Dock';
import { NotesWindow } from './components/windows/NotesWindow';
import { MessagesWindow } from './components/windows/MessagesWindow';
import { TerminalWindow } from './components/windows/TerminalWindow';
import { PhotosWindow } from './components/windows/PhotosWindow';
import { SettingsWindow } from './components/windows/SettingsWindow';
import { WeatherWindow } from './components/windows/WeatherWindow';
import { MobileLayout } from './components/mobile/MobileLayout';

const DesktopContent: React.FC = () => {
  const { isMobile, displayBrightness } = useWindowManager();

  if (isMobile) {
    return <MobileLayout />;
  }

  return (
    <div
      className="relative h-screen w-screen overflow-hidden transition-all duration-200"
      style={{ filter: `brightness(${displayBrightness}%)` }}
    >
      {/* Top Status Menu Bar */}
      <MenuBar />

      {/* Desktop Background Wallpaper */}
      <Wallpaper />

      {/* Desktop Icons Left Column (Weather omitted as requested) */}
      <div className="absolute top-12 left-6 z-10 flex flex-col gap-4">
        <DesktopIcon id="notes" title="Notes" iconType="notes" />
        <DesktopIcon id="messages" title="Messages" iconType="messages" />
        <DesktopIcon id="terminal" title="Terminal" iconType="terminal" />
        <DesktopIcon id="photos" title="Photos" iconType="photos" />
        <DesktopIcon id="settings" title="Settings" iconType="settings" />
      </div>

      {/* Desktop Icon Top Right Corner — Resume.pdf */}
      <div className="absolute top-12 right-6 z-10">
        <DesktopIcon id="resume" title="Resume.pdf" iconType="resume" />
      </div>

      {/* Floating macOS Windows Container */}
      <div className="relative h-full w-full pointer-events-auto">
        <NotesWindow />
        <MessagesWindow />
        <TerminalWindow />
        <PhotosWindow />
        <SettingsWindow />
        <WeatherWindow />
      </div>

      {/* macOS Glassmorphism Dock */}
      <Dock />
    </div>
  );
};

export default function App() {
  return (
    <WindowManagerProvider>
      <DesktopContent />
      <Analytics />
    </WindowManagerProvider>
  );
}
