import React, { useState } from 'react';
import { WindowFrame } from './WindowFrame';
import { Search, Sun, Cloud, CloudRain, CloudLightning, Wind } from 'lucide-react';

interface CityWeather {
  id: string;
  name: string;
  time: string;
  condition: string;
  temp: number;
  high: number;
  low: number;
  bgGradient: string;
  sidebarBg: string;
  summary: string;
  hourly: Array<{ time: string; temp: number; icon: string }>;
  forecast: Array<{ day: string; icon: string; low: number; high: number; minBar: number; maxBar: number }>;
}

const CITIES: CityWeather[] = [
  {
    id: 'delhi',
    name: 'New Delhi',
    time: '10:24 PM',
    condition: 'Haze',
    temp: 34,
    high: 38,
    low: 29,
    bgGradient: 'bg-gradient-to-b from-[#6b583e] via-[#524431] to-[#3a3023]',
    sidebarBg: 'bg-[#5c4a35]',
    summary: 'Hazy and warm through the evening. Winds gusting to 12 km/h.',
    hourly: [
      { time: 'Now', temp: 34, icon: '🌤️' },
      { time: '1PM', temp: 35, icon: '🌤️' },
      { time: '2PM', temp: 35, icon: '🌤️' },
      { time: '3PM', temp: 34, icon: '🌤️' },
      { time: '4PM', temp: 33, icon: '🌤️' },
      { time: '5PM', temp: 33, icon: '⛅' },
      { time: '6PM', temp: 32, icon: '⛅' },
      { time: '7PM', temp: 31, icon: '🌙' },
      { time: '8PM', temp: 30, icon: '🌙' },
    ],
    forecast: [
      { day: 'Today', icon: '🌤️', low: 29, high: 38, minBar: 40, maxBar: 90 },
      { day: 'Wed', icon: '☀️', low: 30, high: 39, minBar: 45, maxBar: 95 },
      { day: 'Thu', icon: '⛅', low: 28, high: 37, minBar: 35, maxBar: 85 },
      { day: 'Fri', icon: '🌧️', low: 26, high: 34, minBar: 25, maxBar: 75 },
      { day: 'Sat', icon: '🌩️', low: 25, high: 32, minBar: 20, maxBar: 65 },
      { day: 'Sun', icon: '🌤️', low: 27, high: 35, minBar: 30, maxBar: 80 },
    ],
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    time: '10:24 PM',
    condition: 'Partly Cloudy',
    temp: 24,
    high: 28,
    low: 20,
    bgGradient: 'bg-gradient-to-b from-[#2d4d6e] via-[#243d57] to-[#1a2b3d]',
    sidebarBg: 'bg-[#294563]',
    summary: 'Partly cloudy with pleasant evening breeze.',
    hourly: [
      { time: 'Now', temp: 24, icon: '⛅' },
      { time: '1PM', temp: 27, icon: '⛅' },
      { time: '2PM', temp: 28, icon: '🌤️' },
      { time: '3PM', temp: 27, icon: '🌤️' },
      { time: '4PM', temp: 26, icon: '⛅' },
      { time: '5PM', temp: 25, icon: '⛅' },
      { time: '6PM', temp: 24, icon: '🌙' },
    ],
    forecast: [
      { day: 'Today', icon: '⛅', low: 20, high: 28, minBar: 30, maxBar: 70 },
      { day: 'Wed', icon: '🌧️', low: 19, high: 26, minBar: 25, maxBar: 60 },
      { day: 'Thu', icon: '⛅', low: 20, high: 27, minBar: 30, maxBar: 65 },
      { day: 'Fri', icon: '☀️', low: 21, high: 29, minBar: 35, maxBar: 75 },
      { day: 'Sat', icon: '🌤️', low: 20, high: 28, minBar: 30, maxBar: 70 },
    ],
  },
  {
    id: 'sanfrancisco',
    name: 'San Francisco',
    time: '9:54 AM',
    condition: 'Clear',
    temp: 14,
    high: 21,
    low: 11,
    bgGradient: 'bg-gradient-to-b from-[#1b518c] via-[#153e6c] to-[#0e2a4a]',
    sidebarBg: 'bg-[#1a4a7f]',
    summary: 'Sunny throughout the day. Mild fog near coast.',
    hourly: [
      { time: 'Now', temp: 14, icon: '☀️' },
      { time: '11AM', temp: 17, icon: '☀️' },
      { time: '12PM', temp: 19, icon: '☀️' },
      { time: '1PM', temp: 21, icon: '☀️' },
      { time: '2PM', temp: 20, icon: '☀️' },
    ],
    forecast: [
      { day: 'Today', icon: '☀️', low: 11, high: 21, minBar: 20, maxBar: 65 },
      { day: 'Wed', icon: '🌤️', low: 12, high: 20, minBar: 25, maxBar: 60 },
      { day: 'Thu', icon: '🌫️', low: 10, high: 18, minBar: 15, maxBar: 50 },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    time: '12:54 AM',
    condition: 'Rain',
    temp: 28,
    high: 31,
    low: 26,
    bgGradient: 'bg-gradient-to-b from-[#1f364a] via-[#182a3a] to-[#101d29]',
    sidebarBg: 'bg-[#1f3549]',
    summary: 'Tropical rain showers expected throughout the night.',
    hourly: [
      { time: 'Now', temp: 28, icon: '🌧️' },
      { time: '1AM', temp: 28, icon: '🌧️' },
      { time: '2AM', temp: 27, icon: '🌩️' },
    ],
    forecast: [
      { day: 'Today', icon: '🌧️', low: 26, high: 31, minBar: 50, maxBar: 80 },
      { day: 'Wed', icon: '🌩️', low: 25, high: 30, minBar: 45, maxBar: 75 },
    ],
  },
  {
    id: 'newyork',
    name: 'New York',
    time: '12:54 PM',
    condition: 'Sunny',
    temp: 27,
    high: 30,
    low: 22,
    bgGradient: 'bg-gradient-[#225087] via-[#1a3d68] to-[#122a48]',
    sidebarBg: 'bg-[#214b7e]',
    summary: 'Clear skies with warm afternoon sunshine.',
    hourly: [
      { time: 'Now', temp: 27, icon: '☀️' },
      { time: '1PM', temp: 29, icon: '☀️' },
      { time: '2PM', temp: 30, icon: '☀️' },
    ],
    forecast: [
      { day: 'Today', icon: '☀️', low: 22, high: 30, minBar: 40, maxBar: 80 },
    ],
  },
  {
    id: 'london',
    name: 'London',
    time: '5:54 PM',
    condition: 'Cloudy',
    temp: 18,
    high: 21,
    low: 13,
    bgGradient: 'bg-gradient-to-b from-[#313947] via-[#252c38] to-[#191e27]',
    sidebarBg: 'bg-[#313845]',
    summary: 'Overcast skies with light breezes.',
    hourly: [
      { time: 'Now', temp: 18, icon: '☁️' },
      { time: '6PM', temp: 17, icon: '☁️' },
    ],
    forecast: [
      { day: 'Today', icon: '☁️', low: 13, high: 21, minBar: 25, maxBar: 60 },
    ],
  },
];

export const WeatherWindow: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>('delhi');
  const [searchQuery, setSearchQuery] = useState('');

  const activeCity = CITIES.find((c) => c.id === selectedCityId) || CITIES[0];

  const filteredCities = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WindowFrame id="weather" headerTitle={`Weather — ${activeCity.name}`}>
      <div className="flex h-full w-full overflow-hidden text-white font-sans">
        {/* Left Sidebar City List matching media_1788785980968.png */}
        <div className="w-64 border-r border-white/10 bg-[#16171b]/95 backdrop-blur-2xl flex flex-col shrink-0 p-2.5 space-y-2">
          {/* Search Input */}
          <div className="relative mb-1">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for a city or airport"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg bg-slate-800/80 pl-8 pr-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none border border-slate-700/60"
            />
          </div>

          {/* City Cards List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
            {filteredCities.map((city) => {
              const isSelected = city.id === selectedCityId;
              return (
                <div
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`rounded-2xl p-3 cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? `${city.sidebarBg} border-white/30 shadow-lg ring-1 ring-white/20`
                      : 'bg-slate-800/50 border-white/5 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-sm leading-tight text-white">{city.name}</h4>
                      <p className="text-[10px] text-slate-300/80 mt-0.5 font-mono">{city.time}</p>
                    </div>
                    <span className="text-2xl font-light tracking-tighter text-white">{city.temp}°</span>
                  </div>

                  <div className="flex justify-between items-end mt-3">
                    <span className="text-[11px] text-slate-200 font-medium">{city.condition}</span>
                    <span className="text-[10px] text-slate-300 font-mono">
                      H:{city.high}° L:{city.low}°
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Main Weather View */}
        <div className={`flex-1 overflow-y-auto ${activeCity.bgGradient} p-6 sm:p-8 scrollbar-thin`}>
          <div className="max-w-xl mx-auto space-y-6">
            {/* Header City & Temp */}
            <div className="text-center py-2">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{activeCity.name}</h1>
              <div className="text-6xl sm:text-7xl font-extralight tracking-tight my-1 text-white">{activeCity.temp}°</div>
              <div className="text-sm font-medium text-slate-200 flex items-center justify-center gap-1.5">
                <span>{activeCity.condition}</span>
              </div>
              <div className="text-xs font-mono text-slate-300 mt-1">
                H:{activeCity.high}° L:{activeCity.low}°
              </div>
            </div>

            {/* Weather Summary Box */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 backdrop-blur-md text-xs text-slate-200 leading-relaxed shadow-sm">
              {activeCity.summary}
            </div>

            {/* Hourly Forecast */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 backdrop-blur-md space-y-3 shadow-sm">
              <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider border-b border-white/10 pb-2">
                HOURLY FORECAST
              </div>
              <div className="flex items-center gap-6 overflow-x-auto pb-1 scrollbar-thin">
                {activeCity.hourly.map((h, i) => (
                  <div key={i} className="flex flex-col items-center shrink-0 space-y-1.5">
                    <span className="text-xs font-medium text-slate-200">{h.time}</span>
                    <span className="text-lg">{h.icon}</span>
                    <span className="text-sm font-semibold">{h.temp}°</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6-Day Forecast */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 backdrop-blur-md space-y-3 shadow-sm">
              <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider border-b border-white/10 pb-2">
                6-DAY FORECAST
              </div>
              <div className="space-y-2.5">
                {activeCity.forecast.map((f, i) => (
                  <div key={i} className="flex items-center justify-between text-xs text-slate-200">
                    <span className="w-16 font-medium">{f.day}</span>
                    <span className="text-base w-8 text-center">{f.icon}</span>
                    <span className="w-8 text-right font-mono text-slate-300">{f.low}°</span>

                    {/* Temperature Visual Range Bar */}
                    <div className="flex-1 mx-3 h-1.5 rounded-full bg-black/30 overflow-hidden relative">
                      <div
                        className="absolute h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                        style={{
                          left: `${f.minBar}%`,
                          width: `${f.maxBar - f.minBar}%`,
                        }}
                      />
                    </div>

                    <span className="w-8 font-mono text-white font-semibold">{f.high}°</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
};
