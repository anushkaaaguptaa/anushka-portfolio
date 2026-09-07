import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppId, WindowState, PhotoFolderId } from '../types';

export type WallpaperPreset = 'sonoma' | 'gradient' | 'sunset' | 'ocean' | 'minimal';
export type ThemeMode = 'dark' | 'light' | 'auto';

interface WindowManagerContextType {
  windows: Record<AppId, WindowState>;
  activeAppId: AppId | 'finder';
  openWindow: (id: AppId, options?: { folderId?: PhotoFolderId }) => void;
  openPhotosFolder: (folderId: PhotoFolderId) => void;
  closeWindow: (id: AppId) => void;
  minimizeWindow: (id: AppId) => void;
  toggleMaximizeWindow: (id: AppId) => void;
  focusWindow: (id: AppId) => void;
  selectedPhotoFolder: PhotoFolderId;
  setSelectedPhotoFolder: (folderId: PhotoFolderId) => void;
  isMobile: boolean;
  activeMobileTab: AppId;
  setActiveMobileTab: (tab: AppId) => void;

  // Control Center & Settings states
  wallpaper: WallpaperPreset;
  setWallpaper: (wp: WallpaperPreset) => void;
  themeMode: ThemeMode;
  setThemeMode: (tm: ThemeMode) => void;
  wifiEnabled: boolean;
  setWifiEnabled: (enabled: boolean) => void;
  bluetoothEnabled: boolean;
  setBluetoothEnabled: (enabled: boolean) => void;
  displayBrightness: number;
  setDisplayBrightness: (val: number) => void;
  soundVolume: number;
  setSoundVolume: (val: number) => void;
}

const DEFAULT_WINDOWS: Record<AppId, WindowState> = {
  notes: {
    id: 'notes',
    title: 'Notes — Anushka Portfolio',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 80, y: 55 },
    size: { width: 840, height: 540 },
    iconName: 'Notebook',
  },
  messages: {
    id: 'messages',
    title: 'Messages',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: 9,
    position: { x: 260, y: 110 },
    size: { width: 720, height: 480 },
    iconName: 'MessageSquare',
  },
  terminal: {
    id: 'terminal',
    title: 'Terminal — zsh',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 8,
    position: { x: 180, y: 130 },
    size: { width: 680, height: 420 },
    iconName: 'Terminal',
  },
  photos: {
    id: 'photos',
    title: 'Photos — Anushka\'s Library',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 7,
    position: { x: 220, y: 90 },
    size: { width: 780, height: 520 },
    iconName: 'Image',
  },
  settings: {
    id: 'settings',
    title: 'System Settings',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 11,
    position: { x: 200, y: 80 },
    size: { width: 780, height: 520 },
    iconName: 'Settings',
  },
  weather: {
    id: 'weather',
    title: 'Weather — New Delhi',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 6,
    position: { x: 140, y: 70 },
    size: { width: 840, height: 560 },
    iconName: 'CloudSun',
  },
};

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export const WindowManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(DEFAULT_WINDOWS);
  const [activeAppId, setActiveAppId] = useState<AppId | 'finder'>('notes');
  const [topZIndex, setTopZIndex] = useState<number>(20);
  const [selectedPhotoFolder, setSelectedPhotoFolder] = useState<PhotoFolderId>('all');
  
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeMobileTab, setActiveMobileTab] = useState<AppId>('notes');

  // Settings & Control Center global states
  const [wallpaper, setWallpaper] = useState<WallpaperPreset>('sonoma');
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [wifiEnabled, setWifiEnabled] = useState<boolean>(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState<boolean>(true);
  const [displayBrightness, setDisplayBrightness] = useState<number>(100);
  const [soundVolume, setSoundVolume] = useState<number>(80);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const focusWindow = (id: AppId) => {
    setTopZIndex((prev) => {
      const nextZ = prev + 1;
      setWindows((wPrev) => ({
        ...wPrev,
        [id]: {
          ...wPrev[id],
          isMinimized: false,
          zIndex: nextZ,
        },
      }));
      return nextZ;
    });
    setActiveAppId(id);
  };

  const openWindow = (id: AppId, options?: { folderId?: PhotoFolderId }) => {
    if (id === 'photos' && options?.folderId) {
      setSelectedPhotoFolder(options.folderId);
    }
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
      },
    }));
    focusWindow(id);
  };

  const openPhotosFolder = (folderId: PhotoFolderId) => {
    setSelectedPhotoFolder(folderId);
    openWindow('photos');
  };

  const closeWindow = (id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
      },
    }));
    if (activeAppId === id) {
      setActiveAppId('finder');
    }
  };

  const minimizeWindow = (id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));
    if (activeAppId === id) {
      setActiveAppId('finder');
    }
  };

  const toggleMaximizeWindow = (id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
      },
    }));
    focusWindow(id);
  };

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        activeAppId,
        openWindow,
        openPhotosFolder,
        closeWindow,
        minimizeWindow,
        toggleMaximizeWindow,
        focusWindow,
        selectedPhotoFolder,
        setSelectedPhotoFolder,
        isMobile,
        activeMobileTab,
        setActiveMobileTab,
        wallpaper,
        setWallpaper,
        themeMode,
        setThemeMode,
        wifiEnabled,
        setWifiEnabled,
        bluetoothEnabled,
        setBluetoothEnabled,
        displayBrightness,
        setDisplayBrightness,
        soundVolume,
        setSoundVolume,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within WindowManagerProvider');
  }
  return context;
};
