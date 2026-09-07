import React, { useState } from 'react';
import { WindowFrame } from './WindowFrame';
import { useWindowManager, WallpaperPreset, ThemeMode } from '../../context/WindowManagerContext';
import {
  Search,
  Wifi,
  Bluetooth,
  Sliders,
  Sparkles,
  ChevronRight,
  Shield,
  CreditCard,
  Cloud,
  Laptop,
  Check,
  Moon,
  Sun,
  Monitor,
} from 'lucide-react';

type SettingsTab = 'account' | 'wifi' | 'bluetooth' | 'general' | 'appearance';

export const SettingsWindow: React.FC = () => {
  const {
    wallpaper,
    setWallpaper,
    themeMode,
    setThemeMode,
    wifiEnabled,
    setWifiEnabled,
    bluetoothEnabled,
    setBluetoothEnabled,
  } = useWindowManager();

  const [activeTab, setActiveTab] = useState<SettingsTab>('appearance');
  const [searchQuery, setSearchQuery] = useState('');

  const wallpapersList: Array<{ id: WallpaperPreset; title: string; subtitle: string; previewClass: string }> = [
    {
      id: 'sonoma',
      title: 'macOS Sonoma',
      subtitle: '14.5 Default',
      previewClass: 'from-indigo-900 via-sky-900 to-purple-950',
    },
    {
      id: 'gradient',
      title: 'Ventura Gradient',
      subtitle: '13.0 Mesh',
      previewClass: 'from-fuchsia-800 via-purple-900 to-cyan-900',
    },
    {
      id: 'sunset',
      title: 'Sunset Glow',
      subtitle: 'Dynamic Warm',
      previewClass: 'from-amber-700 via-rose-800 to-purple-950',
    },
    {
      id: 'ocean',
      title: 'Ocean Blue',
      subtitle: 'Deep Aqua',
      previewClass: 'from-teal-800 via-cyan-900 to-slate-950',
    },
    {
      id: 'minimal',
      title: 'Minimal Slate',
      subtitle: 'Clean Monochromatic',
      previewClass: 'from-slate-800 via-slate-900 to-black',
    },
  ];

  return (
    <WindowFrame id="settings" headerTitle="System Settings">
      <div className="flex h-full w-full overflow-hidden text-sm bg-slate-950 text-slate-100">
        {/* Left Sidebar */}
        <div className="w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 backdrop-blur-xl">
          {/* Search bar */}
          <div className="p-3 border-b border-slate-800">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md bg-slate-800/90 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 border border-slate-700/60"
              />
            </div>
          </div>

          {/* Sidebar Menu */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
            {/* Apple Account Profile Item */}
            <button
              onClick={() => setActiveTab('account')}
              className={`w-full text-left p-2 rounded-xl flex items-center gap-3 transition-all border ${
                activeTab === 'account'
                  ? 'bg-sky-600/30 border-sky-500/50 text-white'
                  : 'hover:bg-slate-800/60 border-transparent text-slate-200'
              }`}
            >
              <img
                src="/photos/anushka_profile.jpg"
                alt="Anushka Gupta"
                className="h-10 w-10 rounded-full object-cover border border-slate-700 shrink-0 shadow-sm"
              />
              <div className="min-w-0">
                <div className="font-bold text-xs truncate">Anushka Gupta</div>
                <div className="text-[10px] text-slate-400 truncate">Apple Account</div>
              </div>
            </button>

            <div className="h-px bg-slate-800 my-1" />

            {/* Wi-Fi */}
            <button
              onClick={() => setActiveTab('wifi')}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all text-xs ${
                activeTab === 'wifi'
                  ? 'bg-sky-600/30 text-sky-300 font-semibold border border-sky-500/40'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500 text-white">
                <Wifi className="h-3.5 w-3.5" />
              </div>
              <span>Wi-Fi</span>
              <span className="ml-auto text-[10px] text-slate-400 font-mono">
                {wifiEnabled ? 'On' : 'Off'}
              </span>
            </button>

            {/* Bluetooth */}
            <button
              onClick={() => setActiveTab('bluetooth')}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all text-xs ${
                activeTab === 'bluetooth'
                  ? 'bg-sky-600/30 text-sky-300 font-semibold border border-sky-500/40'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white">
                <Bluetooth className="h-3.5 w-3.5" />
              </div>
              <span>Bluetooth</span>
              <span className="ml-auto text-[10px] text-slate-400 font-mono">
                {bluetoothEnabled ? 'On' : 'Off'}
              </span>
            </button>

            {/* General */}
            <button
              onClick={() => setActiveTab('general')}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all text-xs ${
                activeTab === 'general'
                  ? 'bg-sky-600/30 text-sky-300 font-semibold border border-sky-500/40'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-600 text-white">
                <Laptop className="h-3.5 w-3.5" />
              </div>
              <span>General</span>
            </button>

            {/* Appearance */}
            <button
              onClick={() => setActiveTab('appearance')}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all text-xs ${
                activeTab === 'appearance'
                  ? 'bg-sky-600/30 text-sky-300 font-semibold border border-sky-500/40'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-purple-500 via-indigo-500 to-sky-400 text-white">
                <Sliders className="h-3.5 w-3.5" />
              </div>
              <span>Appearance</span>
            </button>
          </div>
        </div>

        {/* Right Main Content Pane */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin bg-slate-950/80">
          {/* TAB 1: APPLE ACCOUNT */}
          {activeTab === 'account' && (
            <div className="max-w-xl space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Apple Account</span>
              </h2>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex items-center gap-4 shadow-lg">
                <img
                  src="/photos/anushka_profile.jpg"
                  alt="Anushka Gupta"
                  className="h-16 w-16 rounded-full object-cover border-2 border-sky-500/50 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-white">Anushka Gupta</h3>
                  <p className="text-xs text-sky-400 font-mono">anushkagupta5266@gmail.com</p>
                  <span className="inline-block mt-1 text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    Primary Apple ID
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden text-xs divide-y divide-slate-800">
                <div className="p-3.5 flex items-center justify-between hover:bg-slate-800/40 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-sky-400" />
                    <span>Sign-In & Security</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>

                <div className="p-3.5 flex items-center justify-between hover:bg-slate-800/40 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-4 w-4 text-emerald-400" />
                    <span>Media & Purchases</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>

                <div className="p-3.5 flex items-center justify-between hover:bg-slate-800/40 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-4 w-4 text-purple-400" />
                    <span>iCloud Storage</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">50 GB of 200 GB</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WI-FI */}
          {activeTab === 'wifi' && (
            <div className="max-w-xl space-y-6">
              <h2 className="text-lg font-bold text-white">Wi-Fi</h2>

              {/* Wi-Fi Switch Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500 text-white">
                    <Wifi className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Wi-Fi</span>
                    <p className="text-[11px] text-slate-400">Wireless network connection</p>
                  </div>
                </div>

                <button
                  onClick={() => setWifiEnabled(!wifiEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    wifiEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform shadow-md ${
                      wifiEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Known Networks */}
              {wifiEnabled && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Known Network
                  </span>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden text-xs divide-y divide-slate-800">
                    <div className="p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Wifi className="h-4 w-4 text-sky-400" />
                        <span className="font-medium text-white">Anushka Home 5G</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono font-medium">
                        Connected
                      </span>
                    </div>

                    <div className="p-3.5 flex items-center justify-between opacity-60">
                      <div className="flex items-center gap-2.5">
                        <Wifi className="h-4 w-4 text-slate-400" />
                        <span>DTU-Campus-WiFi</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">Saved</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BLUETOOTH */}
          {activeTab === 'bluetooth' && (
            <div className="max-w-xl space-y-6">
              <h2 className="text-lg font-bold text-white">Bluetooth</h2>

              {/* Bluetooth Switch Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Bluetooth className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Bluetooth</span>
                    <p className="text-[11px] text-slate-400">Discover and pair wireless accessories</p>
                  </div>
                </div>

                <button
                  onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    bluetoothEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform shadow-md ${
                      bluetoothEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* My Devices */}
              {bluetoothEnabled && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    My Devices
                  </span>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden text-xs divide-y divide-slate-800">
                    <div className="p-3.5 flex items-center justify-between">
                      <span className="font-medium text-white">Anushka's AirPods Pro</span>
                      <span className="text-[11px] text-emerald-400 font-mono font-medium">
                        Connected
                      </span>
                    </div>
                    <div className="p-3.5 flex items-center justify-between opacity-60">
                      <span>Magic Keyboard</span>
                      <span className="text-[11px] text-slate-500 font-mono">Not Connected</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: APPEARANCE */}
          {activeTab === 'appearance' && (
            <div className="max-w-2xl space-y-6">
              <div className="text-center py-2 space-y-1">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-md">
                  <Sliders className="h-5 w-5" />
                </div>
                <h2 className="text-base font-bold text-white">Appearance</h2>
                <p className="text-xs text-slate-400">Customize the look and feel of your Mac.</p>
              </div>

              {/* Theme Mode Selector (Auto / Light / Dark) */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Appearance Mode
                </span>

                <div className="grid grid-cols-3 gap-3">
                  {/* Auto */}
                  <div
                    onClick={() => setThemeMode('auto')}
                    className={`rounded-xl p-3 border cursor-pointer transition-all flex flex-col items-center gap-2 ${
                      themeMode === 'auto'
                        ? 'border-sky-500 bg-sky-500/10 shadow-lg'
                        : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="h-10 w-full rounded-lg bg-gradient-to-r from-slate-200 to-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                      <Monitor className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-medium text-white">Auto</span>
                  </div>

                  {/* Light */}
                  <div
                    onClick={() => setThemeMode('light')}
                    className={`rounded-xl p-3 border cursor-pointer transition-all flex flex-col items-center gap-2 ${
                      themeMode === 'light'
                        ? 'border-sky-500 bg-sky-500/10 shadow-lg'
                        : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="h-10 w-full rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-800">
                      <Sun className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-medium text-white">Light</span>
                  </div>

                  {/* Dark */}
                  <div
                    onClick={() => setThemeMode('dark')}
                    className={`rounded-xl p-3 border cursor-pointer transition-all flex flex-col items-center gap-2 ${
                      themeMode === 'dark'
                        ? 'border-sky-500 bg-sky-500/10 shadow-lg'
                        : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="h-10 w-full rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                      <Moon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-medium text-white">Dark</span>
                  </div>
                </div>
              </div>

              {/* Wallpaper Selector */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  macOS Wallpapers
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {wallpapersList.map((wp) => {
                    const isSelected = wallpaper === wp.id;
                    return (
                      <div
                        key={wp.id}
                        onClick={() => setWallpaper(wp.id)}
                        className={`group relative overflow-hidden rounded-xl border p-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-sky-500 bg-sky-500/10 shadow-md ring-1 ring-sky-500'
                            : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                        }`}
                      >
                        <div
                          className={`h-16 w-full rounded-lg bg-gradient-to-br ${wp.previewClass} border border-white/10 shadow-inner relative flex items-center justify-center`}
                        >
                          {isSelected && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-white shadow-md">
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        <div className="mt-2 text-left">
                          <div className="font-bold text-xs text-white truncate">{wp.title}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{wp.subtitle}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: GENERAL */}
          {activeTab === 'general' && (
            <div className="max-w-xl space-y-6">
              <h2 className="text-lg font-bold text-white">General</h2>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-3 shadow-lg">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <Laptop className="h-6 w-6 text-sky-400" />
                  <div>
                    <h3 className="text-base font-bold text-white">Anushka's MacBook Pro</h3>
                    <p className="text-xs text-slate-400 font-mono">Apple M3 Max • 36 GB RAM</p>
                  </div>
                </div>

                <div className="text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">macOS Version</span>
                    <span className="font-mono text-sky-300">Sonoma 14.5 (23F79)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Serial Number</span>
                    <span className="font-mono text-slate-300">C02G90XXMD6M</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Storage</span>
                    <span className="font-mono text-slate-300">512 GB SSD (320 GB Available)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </WindowFrame>
  );
};
