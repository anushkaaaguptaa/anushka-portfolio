import React, { useState, useEffect } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import {
  Wifi,
  Bluetooth,
  Battery,
  SlidersHorizontal,
  Volume2,
  MonitorPlay,
  CloudSun,
  Settings as SettingsIcon,
  Terminal as TerminalIcon,
  MessageSquare,
} from 'lucide-react';

export const MenuBar: React.FC = () => {
  const {
    activeAppId,
    openWindow,
    windows,
    wifiEnabled,
    setWifiEnabled,
    bluetoothEnabled,
    setBluetoothEnabled,
    displayBrightness,
    setDisplayBrightness,
    soundVolume,
    setSoundVolume,
  } = useWindowManager();

  const [timeStr, setTimeStr] = useState<string>('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showControlCenter, setShowControlCenter] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format matching media_1788785949493.png: "Mon 7 Sep 6:29:04 PM"
      const dayName = now.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = now.getDate();
      const monthName = now.toLocaleDateString('en-US', { month: 'short' });
      const timePart = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      setTimeStr(`${dayName} ${dayNum} ${monthName} ${timePart}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getAppName = () => {
    if (activeAppId === 'finder') return 'Finder';
    if (activeAppId === 'weather') return 'Weather';
    return windows[activeAppId]?.title.split('—')[0].trim() || 'Notes';
  };

  const handleMenuClick = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
    setShowControlCenter(false);
  };

  const toggleControlCenter = () => {
    setShowControlCenter((prev) => !prev);
    setActiveDropdown(null);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed top-0 left-0 right-0 h-8 z-50 flex items-center justify-between px-3 text-xs font-medium bg-slate-900/60 backdrop-blur-xl border-b border-white/10 text-slate-200 select-none shadow-sm"
    >
      {/* Left Menu Options */}
      <div className="flex items-center gap-3.5 relative">
        {/* Apple Logo Menu */}
        <div className="relative">
          <button
            onClick={() => handleMenuClick('apple')}
            className={`px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors font-bold text-sm leading-none ${
              activeDropdown === 'apple' ? 'bg-white/20' : ''
            }`}
          >
            
          </button>

          {activeDropdown === 'apple' && (
            <div className="absolute left-0 top-7 w-52 rounded-lg bg-slate-900/95 backdrop-blur-2xl border border-white/15 p-1.5 shadow-mac-menu text-xs text-slate-200 z-50 space-y-0.5">
              <button
                onClick={() => {
                  openWindow('notes');
                  setActiveDropdown(null);
                }}
                className="w-full text-left px-2.5 py-1.5 rounded hover:bg-sky-600 hover:text-white transition-colors"
              >
                About This Mac
              </button>
              <button
                onClick={() => {
                  openWindow('settings');
                  setActiveDropdown(null);
                }}
                className="w-full text-left px-2.5 py-1.5 rounded hover:bg-sky-600 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>System Settings...</span>
                <span className="text-[10px] text-slate-400 font-mono">⌘,</span>
              </button>
              <div className="h-px bg-white/10 my-1" />
              <button
                onClick={() => {
                  openWindow('terminal');
                  setActiveDropdown(null);
                }}
                className="w-full text-left px-2.5 py-1.5 rounded hover:bg-sky-600 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Terminal CLI</span>
                <span className="text-[10px] text-slate-400 font-mono">⌘T</span>
              </button>
              <button
                onClick={() => {
                  openWindow('messages');
                  setActiveDropdown(null);
                }}
                className="w-full text-left px-2.5 py-1.5 rounded hover:bg-sky-600 hover:text-white transition-colors"
              >
                Messages (iMessage)
              </button>
              <div className="h-px bg-white/10 my-1" />
              <button
                onClick={() => {
                  alert('Restarting Anushka OS Portfolio Desktop...');
                  window.location.reload();
                }}
                className="w-full text-left px-2.5 py-1.5 rounded hover:bg-sky-600 hover:text-white transition-colors"
              >
                Restart...
              </button>
            </div>
          )}
        </div>

        <span className="font-bold text-white tracking-wide">{getAppName()}</span>

        {['File', 'Edit', 'View', 'Window', 'Help'].map((menu) => (
          <div key={menu} className="relative hidden sm:block">
            <button
              onClick={() => handleMenuClick(menu)}
              className={`px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors ${
                activeDropdown === menu ? 'bg-white/20 text-white' : 'text-slate-300'
              }`}
            >
              {menu}
            </button>

            {activeDropdown === menu && (
              <div className="absolute left-0 top-7 w-48 rounded-lg bg-slate-900/95 backdrop-blur-2xl border border-white/15 p-1.5 shadow-mac-menu text-xs text-slate-200 z-50 space-y-0.5">
                <button
                  onClick={() => {
                    openWindow('notes');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-2.5 py-1 rounded hover:bg-sky-600 hover:text-white transition-colors"
                >
                  Open {menu} View
                </button>
                <button
                  onClick={() => setActiveDropdown(null)}
                  className="w-full text-left px-2.5 py-1 rounded hover:bg-sky-600 hover:text-white transition-colors"
                >
                  Close Menu
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Status Bar Items matching media_1788785949493.png */}
      <div className="flex items-center gap-3 relative text-slate-300">
        {/* Weather Widget Button — Opens Weather App */}
        <button
          onClick={() => openWindow('weather')}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-white/10 text-slate-200 transition-colors cursor-pointer"
          title="Open macOS Weather App"
        >
          <CloudSun className="h-3.5 w-3.5 text-amber-300" />
          <span className="text-xs font-medium">31°C</span>
        </button>

        {/* Volume Icon */}
        <button
          onClick={toggleControlCenter}
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
          title="Volume"
        >
          <Volume2 className="h-3.5 w-3.5" />
        </button>

        {/* Display / Screen Mirroring Icon */}
        <button
          onClick={toggleControlCenter}
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
          title="AirPlay / Screen Mirroring"
        >
          <MonitorPlay className="h-3.5 w-3.5" />
        </button>

        {/* Wi-Fi Toggle */}
        <button
          onClick={() => setWifiEnabled(!wifiEnabled)}
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
          title={`Wi-Fi: ${wifiEnabled ? 'Connected (5Ghz)' : 'Off'}`}
        >
          <Wifi className={`h-3.5 w-3.5 ${wifiEnabled ? 'text-white' : 'text-slate-500'}`} />
        </button>

        {/* Bluetooth Toggle */}
        <button
          onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
          title={`Bluetooth: ${bluetoothEnabled ? 'On' : 'Off'}`}
        >
          <Bluetooth className={`h-3.5 w-3.5 ${bluetoothEnabled ? 'text-white' : 'text-slate-500'}`} />
        </button>

        {/* Battery percentage and battery icon */}
        <div
          className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors cursor-pointer"
          title="Battery: 87% (Charging)"
        >
          <span className="text-xs font-mono">87%</span>
          <div className="relative flex items-center">
            <Battery className="h-4 w-4 text-slate-200" />
            <span className="absolute inset-0 flex items-center justify-center text-[7px] text-amber-300 font-bold">⚡</span>
          </div>
        </div>

        {/* Control Center Toggle Icon */}
        <button
          onClick={toggleControlCenter}
          className={`hover:text-white transition-colors p-1 rounded hover:bg-white/10 ${
            showControlCenter ? 'bg-white/20 text-white' : ''
          }`}
          title="Control Center"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
        </button>

        {/* Control Center Dropdown Modal matching media_1788786005046.png */}
        {showControlCenter && (
          <div className="absolute right-0 top-8 w-72 rounded-2xl bg-[#232328]/95 backdrop-blur-2xl border border-white/15 p-3.5 shadow-2xl text-xs text-slate-200 z-50 space-y-4">
            {/* Top Row: Wi-Fi & Bluetooth Pill Buttons */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setWifiEnabled(!wifiEnabled)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl border transition-all text-left ${
                  wifiEnabled
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-slate-800/90 border-white/10 text-slate-400'
                }`}
              >
                <Wifi className="h-4 w-4 shrink-0" />
                <span className="font-medium text-xs truncate">
                  {wifiEnabled ? 'Wi-Fi · Home' : 'Wi-Fi · Off'}
                </span>
              </button>

              <button
                onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl border transition-all text-left ${
                  bluetoothEnabled
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-slate-800/90 border-white/10 text-slate-400'
                }`}
              >
                <Bluetooth className="h-4 w-4 shrink-0" />
                <span className="font-medium text-xs truncate">
                  {bluetoothEnabled ? 'Blueto...' : 'Bluetooth'}
                </span>
              </button>
            </div>

            {/* Display Brightness Slider */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-xs font-semibold">Display</span>
                <span className="text-[10px] text-slate-400 font-mono">{displayBrightness}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={displayBrightness}
                onChange={(e) => setDisplayBrightness(Number(e.target.value))}
                className="w-full accent-blue-500 h-1.5 rounded-lg bg-slate-700/80 cursor-pointer"
              />
            </div>

            {/* Sound Volume Slider */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-xs font-semibold">Sound</span>
                <span className="text-[10px] text-slate-400 font-mono">{soundVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={soundVolume}
                onChange={(e) => setSoundVolume(Number(e.target.value))}
                className="w-full accent-blue-500 h-1.5 rounded-lg bg-slate-700/80 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Live Date and Time */}
        <span className="font-medium text-slate-100 font-mono tracking-tight pl-1">
          {timeStr}
        </span>
      </div>
    </div>
  );
};
