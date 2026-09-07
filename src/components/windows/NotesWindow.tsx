import React, { useState } from 'react';
import { WindowFrame } from './WindowFrame';
import { NotesSectionId } from '../../types';
import {
  ABOUT_ME_DATA,
  BEYOND_THE_CODE_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  HACKATHONS_PAGE_DATA,
  CONTACT_DATA,
  ACHIEVEMENTS_DATA,
} from '../../data/portfolioData';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import {
  Folder,
  FileText,
  Search,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Brain,
  Sparkles,
  Award,
  Check,
  Copy,
  Heart,
  GraduationCap,
  Trophy,
  FolderArchive,
  Compass,
  MessageCircle,
  Twitter,
  Sprout,
  Users,
  BookOpen,
  Camera,
  Terminal,
  Zap,
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';

export const NotesWindow: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NotesSectionId>('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { openWindow, openPhotosFolder } = useWindowManager();

  const sidebarItems: Array<{ id: NotesSectionId; label: string; icon: string; snippet: string }> = [
    {
      id: 'about',
      label: '👋 about me',
      icon: '👋',
      snippet: 'CSE-AI student interested in AI, problem solving & product building.',
    },
    {
      id: 'beyond-the-code',
      label: '🌱 beyond the code',
      icon: '🌱',
      snippet: 'Karuna NGO community work & personal reflections outside the screen.',
    },
    {
      id: 'experience',
      label: '💼 experience',
      icon: '💼',
      snippet: 'AI/ML Research Intern at DTU & Karuna NGO Social Work.',
    },
    {
      id: 'achievements',
      label: '🏆 little wins',
      icon: '🏆',
      snippet: 'Scholarships, fellowships, national hackathon awards & receipts.',
    },
    {
      id: 'projects',
      label: '🛠️ projects',
      icon: '🛠️',
      snippet: 'ResuMate, CampusConnect AI, S.A.N.K.A.L.P., BharatMat.',
    },
    {
      id: 'hackathons',
      label: '👩‍💻 hackathons',
      icon: '👩‍💻',
      snippet: 'i really like the part where an idea goes from “what if...” to “wait, we actually built this.”',
    },
    {
      id: 'contact',
      label: '💬 hit me up',
      icon: '💬',
      snippet: 'DMs open on LinkedIn, GitHub, X & Email.',
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredItems = sidebarItems.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WindowFrame id="notes" headerTitle="Notes — Anushka Portfolio">
      <div className="flex h-full w-full overflow-hidden text-sm">
        {/* Left Sidebar (Notes Folder View) */}
        <div className="w-64 border-r border-slate-700/50 bg-slate-900/80 flex flex-col backdrop-blur-xl shrink-0">
          <div className="p-3 border-b border-slate-700/40">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md bg-slate-800/90 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500/50 border border-slate-700/50"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Folder className="h-3 w-3 text-sky-400" /> Notes Folder
              </span>
              <span>{sidebarItems.length} Notes</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
            {filteredItems.map((item) => {
              const isSelected = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 border ${
                    isSelected
                      ? 'bg-sky-600/20 border-sky-500/40 text-white shadow-sm'
                      : 'hover:bg-slate-800/60 border-transparent text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs flex items-center gap-1.5">
                      <FileText className={`h-3.5 w-3.5 ${isSelected ? 'text-sky-400' : 'text-slate-400'}`} />
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Note</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed pl-5">
                    {item.snippet}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Content Pane */}
        <div className="flex-1 overflow-y-auto bg-slate-950/70 p-6 md:p-8 scrollbar-thin">
          {/* SECTION 1: ABOUT ME */}
          {activeSection === 'about' && (
            <div className="max-w-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <Brain className="h-4 w-4" />
                  <span>Introduction</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">👋 about me</h1>
                <p className="text-xs text-slate-400 mt-1 font-mono">Last edited: Today at 11:32 AM</p>
              </div>

              {/* Hero Profile Photo matching reference design */}
              <div
                onClick={() => openWindow('photos')}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-xl cursor-pointer"
              >
                <img
                  src="/photos/anushka_profile.jpg"
                  alt="Anushka Gupta"
                  className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end justify-between">
                  <span className="text-xs font-medium text-slate-200">Anushka Gupta — CSE-AI @ IGDTUW</span>
                  <span className="text-[11px] text-sky-400 font-mono">View in Photos →</span>
                </div>
              </div>

              <div className="rounded-xl border border-sky-500/20 bg-slate-900/60 p-5 shadow-inner leading-relaxed">
                <p className="text-sm text-slate-200 font-normal">
                  {ABOUT_ME_DATA.bio}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/30 bg-slate-900/70 p-5 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                  <Compass className="h-4 w-4 text-purple-400" />
                  <span>{ABOUT_ME_DATA.figuringOut.subheading}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ABOUT_ME_DATA.figuringOut.paragraph2}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ABOUT_ME_DATA.figuringOut.paragraph3}
                </p>
                <div className="pt-2 text-xs font-mono text-purple-300 font-semibold italic">
                  {ABOUT_ME_DATA.figuringOut.tagline}
                </div>
              </div>

              {/* What's Next Block */}
              <div className="rounded-xl border border-sky-500/30 bg-slate-900/70 p-5 space-y-2 shadow-md">
                <h3 className="text-sm font-bold text-sky-300 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  <span>{ABOUT_ME_DATA.whatsNext.title}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ABOUT_ME_DATA.whatsNext.line1}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ABOUT_ME_DATA.whatsNext.line2}
                </p>
              </div>

              {/* Want to Dig Deeper Block */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Compass className="h-3.5 w-3.5 text-sky-400" /> want to dig deeper?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => setActiveSection('experience')}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-sky-600/20 hover:border-sky-500/40 text-left group transition-all"
                  >
                    <span className="text-xs text-slate-200 group-hover:text-sky-300">
                      💼 see what i've worked on
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-sky-400 font-medium ml-2 shrink-0">
                      → experience
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveSection('projects')}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-sky-600/20 hover:border-sky-500/40 text-left group transition-all"
                  >
                    <span className="text-xs text-slate-200 group-hover:text-sky-300">
                      🛠️ see what i've built
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-sky-400 font-medium ml-2 shrink-0">
                      → projects
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveSection('achievements')}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-sky-600/20 hover:border-sky-500/40 text-left group transition-all"
                  >
                    <span className="text-xs text-slate-200 group-hover:text-sky-300">
                      🏆 see what i've gotten myself into
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-sky-400 font-medium ml-2 shrink-0">
                      → little wins
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveSection('contact')}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-sky-600/20 hover:border-sky-500/40 text-left group transition-all"
                  >
                    <span className="text-xs text-slate-200 group-hover:text-sky-300">
                      💬 or just say hi
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-sky-400 font-medium ml-2 shrink-0">
                      → hit me up
                    </span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-sky-400" /> focus areas & strengths
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ABOUT_ME_DATA.focusAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5 hover:border-sky-500/30 transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{item.icon}</span>
                        <h4 className="text-xs font-bold text-white lowercase tracking-wide">{item.title}</h4>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-normal lowercase">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sprout className="h-3.5 w-3.5 text-emerald-400" /> giving back to the community
                </h4>
                <div
                  onClick={() => setActiveSection('beyond-the-code')}
                  className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-slate-900 aspect-video cursor-pointer"
                >
                  <img
                    src="/photos/karuna_ngo_team.jpg"
                    alt="Karuna NGO Team"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300">
                      Karuna — The Compassion NGO Volunteer Work
                    </span>
                    <span className="text-[11px] text-emerald-300 font-mono mt-0.5">
                      Child education drives, kit distributions & workshops. Read 🌱 beyond the code →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: BEYOND THE CODE */}
          {activeSection === 'beyond-the-code' && (
            <div className="max-w-2xl space-y-6">
              {/* Header */}
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Sprout className="h-4 w-4" />
                  <span>{BEYOND_THE_CODE_DATA.organization}</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">
                  {BEYOND_THE_CODE_DATA.title}
                </h1>
                <p className="text-xs text-slate-300 italic mt-1">
                  {BEYOND_THE_CODE_DATA.subtitle}
                </p>
                <p className="text-[11px] text-slate-400 mt-1.5 font-mono">
                  Last edited: {BEYOND_THE_CODE_DATA.lastEdited}
                </p>
              </div>

              {/* Opening Paragraphs */}
              <div className="rounded-xl border border-emerald-500/20 bg-slate-900/60 p-5 space-y-3 shadow-inner leading-relaxed">
                {BEYOND_THE_CODE_DATA.openingParagraphs.map((para, idx) => (
                  <p key={idx} className="text-sm text-slate-200 font-normal">
                    {para}
                  </p>
                ))}
              </div>

              {/* Narrative Story Box */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/70 p-5 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <Heart className="h-4 w-4 text-emerald-400" />
                  <span>The Story & Context</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {BEYOND_THE_CODE_DATA.narrativeIntro}
                </p>
              </div>

              {/* What I Actually Did */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{BEYOND_THE_CODE_DATA.whatIDid.heading}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {BEYOND_THE_CODE_DATA.whatIDid.intro}
                </p>
                <div className="space-y-2 pt-1">
                  {BEYOND_THE_CODE_DATA.whatIDid.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Journal / Archive */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Camera className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{BEYOND_THE_CODE_DATA.photoJournal.heading}</span>
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">Photo Journal</span>
                </div>

                {/* Main Featured Photo */}
                <div
                  onClick={() => openWindow('photos')}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-xl cursor-pointer"
                >
                  <img
                    src={BEYOND_THE_CODE_DATA.photoJournal.featuredMain.src}
                    alt={BEYOND_THE_CODE_DATA.photoJournal.featuredMain.alt}
                    className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-4 flex flex-col justify-end">
                    <p className="text-xs font-medium text-slate-200 italic">
                      {BEYOND_THE_CODE_DATA.photoJournal.featuredMain.caption}
                    </p>
                    <span className="text-[10px] text-emerald-400 font-mono mt-1">View in Photos App →</span>
                  </div>
                </div>

                {/* 2-Column Supporting Photos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BEYOND_THE_CODE_DATA.photoJournal.gridPhotos.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => openWindow('photos')}
                      className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-video cursor-pointer"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-3 flex flex-col justify-end">
                        <p className="text-[11px] text-slate-200 italic line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Secondary Featured Photo */}
                <div
                  onClick={() => openWindow('photos')}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 h-48 cursor-pointer"
                >
                  <img
                    src={BEYOND_THE_CODE_DATA.photoJournal.featuredSecondary.src}
                    alt={BEYOND_THE_CODE_DATA.photoJournal.featuredSecondary.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-3.5 flex flex-col justify-end">
                    <p className="text-xs text-slate-200 italic">
                      {BEYOND_THE_CODE_DATA.photoJournal.featuredSecondary.caption}
                    </p>
                  </div>
                </div>
              </div>

              {/* What Stayed With Me */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{BEYOND_THE_CODE_DATA.whatStayedWithMe.heading}</span>
                </h3>
                <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <p>{BEYOND_THE_CODE_DATA.whatStayedWithMe.intro1}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {BEYOND_THE_CODE_DATA.whatStayedWithMe.reflections.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1 hover:border-emerald-500/30 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Clickable Google Drive Video Link Button */}
                <div className="pt-2">
                  <a
                    href={BEYOND_THE_CODE_DATA.whatStayedWithMe.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/40 bg-slate-900/80 hover:bg-emerald-950/40 hover:border-emerald-400 transition-all group shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 group-hover:scale-105 transition-transform">
                        📹
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {BEYOND_THE_CODE_DATA.whatStayedWithMe.videoTitle}
                        </div>
                        <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                          {BEYOND_THE_CODE_DATA.whatStayedWithMe.videoText}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </a>
                </div>
              </div>

              {/* Understated Footer */}
              <div className="pt-6 pb-2 text-center space-y-2 border-t border-slate-800/60">
                <p className="text-xs text-slate-400 italic">
                  {BEYOND_THE_CODE_DATA.footer.line1}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  {BEYOND_THE_CODE_DATA.footer.line2}
                </p>
                <div className="pt-3 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveSection('about')}
                    className="text-xs text-slate-400 hover:text-emerald-300 transition-colors px-3 py-1.5 rounded-lg border border-slate-800 hover:border-emerald-500/40 bg-slate-900/50"
                  >
                    ← back to about me
                  </button>
                  <button
                    onClick={() => setActiveSection('projects')}
                    className="text-xs text-slate-400 hover:text-emerald-300 transition-colors px-3 py-1.5 rounded-lg border border-slate-800 hover:border-emerald-500/40 bg-slate-900/50"
                  >
                    see what i've built →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: EXPERIENCE */}
          {activeSection === 'experience' && (
            <div className="max-w-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <Brain className="h-4 w-4" />
                  <span>Research & Industry</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">💼 experience</h1>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-slate-900/80 p-5 space-y-4 shadow-lg">
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {EXPERIENCE_DATA.role}
                    </h2>
                    <p className="text-xs font-medium text-sky-400">
                      {EXPERIENCE_DATA.organization}
                    </p>
                  </div>
                  <span className="rounded-full bg-sky-950/80 border border-sky-500/30 px-3 py-1 text-xs font-mono text-sky-300">
                    {EXPERIENCE_DATA.period}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-700/50 bg-slate-950/80 p-4">
                  <p className="text-sm font-medium text-slate-100 leading-relaxed italic">
                    {EXPERIENCE_DATA.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Technical Contributions:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                    {EXPERIENCE_DATA.details.map((detail, idx) => (
                      <li key={idx} className="marker:text-sky-400">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {EXPERIENCE_DATA.techUsed.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-800 px-2.5 py-0.5 text-[11px] font-mono text-sky-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-slate-900/80 p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Heart className="h-4 w-4 text-rose-400" />
                      <span>Karuna — The Compassion NGO</span>
                    </h3>
                    <p className="text-xs text-rose-300">Community Volunteer & Education Outreach</p>
                  </div>
                  <span className="rounded-full bg-rose-950/80 border border-rose-500/30 px-2.5 py-0.5 text-[10px] font-mono text-rose-300">
                    Volunteer
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Active volunteer conducting child education drives, distributing learning materials, and organizing interactive skill workshops in underserved communities.
                </p>
              </div>
            </div>
          )}

          {/* SECTION 3: LITTLE WINS / ACHIEVEMENTS */}
          {activeSection === 'achievements' && (
            <div className="max-w-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Trophy className="h-4 w-4" />
                  <span>Milestones & Recognitions</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">🏆 little wins</h1>
                <p className="text-xs text-slate-400 mt-1 font-mono">Scholarships, Fellowships & Competitions</p>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-slate-900/80 p-5 space-y-3 shadow-lg">
                <p className="text-sm leading-relaxed text-slate-200">
                  {ACHIEVEMENTS_DATA.introParagraph1}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {ACHIEVEMENTS_DATA.introParagraph2}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Scholarships & Fellowships
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {ACHIEVEMENTS_DATA.scholarships.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.name}</div>
                          <div className="text-[11px] text-amber-300/90 font-mono mt-0.5">{item.detail}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                        Awarded
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Trophy className="h-4 w-4" /> Hackathons & Innovation Competitions
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {ACHIEVEMENTS_DATA.hackathons.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{h.title}</div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">{h.description}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => openPhotosFolder(h.folderId || 'all')}
                        className="text-[11px] font-mono text-sky-400 bg-sky-950/60 hover:bg-sky-900/60 px-2.5 py-1 rounded border border-sky-500/30 transition-colors shrink-0 flex items-center gap-1"
                      >
                        <span>View Photo</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-sky-500/30 bg-slate-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <FolderArchive className="h-5 w-5 text-sky-400 shrink-0" />
                  <div className="text-sm font-semibold text-white">
                    want the receipts? 📁
                  </div>
                </div>
                <a
                  href={ACHIEVEMENTS_DATA.driveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-3.5 py-1.5 text-xs font-medium transition-colors shadow-sm flex items-center gap-1.5 shrink-0"
                >
                  <span>View all Certificates </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="text-center pt-2 text-xs font-mono text-slate-500 italic">
                more little wins loading...
              </div>
            </div>
          )}

          {/* SECTION 4: PROJECTS */}
          {activeSection === 'projects' && (
            <div className="max-w-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <Code2 className="h-4 w-4" />
                  <span>Featured Work</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">🛠️ projects</h1>
                <p className="text-xs text-slate-400 mt-1 font-mono">3 Featured Projects</p>
              </div>

              <div className="space-y-6">
                {PROJECTS_DATA.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4 hover:border-sky-500/40 transition-colors shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {proj.title}
                          <span className="text-xs font-normal text-slate-400">
                            — {proj.subtitle}
                          </span>
                        </h3>
                        <p className="text-xs text-sky-400 font-mono mt-0.5">
                          {proj.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                            title="View GitHub Repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-sky-500/40 bg-sky-600/20 px-3 py-1.5 text-xs font-medium text-sky-300 hover:bg-sky-600/40 transition-colors flex items-center gap-1"
                          >
                            <span>Demo</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 5: HACKATHONS */}
          {activeSection === 'hackathons' && (
            <div className="max-w-2xl space-y-6">
              {/* Header */}
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>Late Nights, Demos & Code</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">
                  {HACKATHONS_PAGE_DATA.title}
                </h1>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {HACKATHONS_PAGE_DATA.subtitle}
                </p>
              </div>

              {/* Opening Paragraphs */}
              <div className="rounded-xl border border-sky-500/20 bg-slate-900/60 p-5 space-y-3 shadow-inner leading-relaxed">
                {HACKATHONS_PAGE_DATA.openingParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className={`text-xs sm:text-sm text-slate-200 ${
                      idx === 0 ? 'font-medium text-slate-100 text-sm' : ''
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Featured Story: Hack4Delhi */}
              <div className="rounded-xl border border-amber-500/30 bg-slate-900/80 p-5 space-y-4 shadow-lg">
                <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{HACKATHONS_PAGE_DATA.featuredHackathon.name}</span>
                      <span className="text-xs font-semibold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-mono">
                        {HACKATHONS_PAGE_DATA.featuredHackathon.result}
                      </span>
                    </h2>
                    <p className="text-xs text-amber-300/90 italic font-mono mt-0.5">
                      {HACKATHONS_PAGE_DATA.featuredHackathon.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>{HACKATHONS_PAGE_DATA.featuredHackathon.paragraph1}</p>
                  <p>{HACKATHONS_PAGE_DATA.featuredHackathon.journey}</p>
                  <p className="text-slate-200 font-medium">
                    {HACKATHONS_PAGE_DATA.featuredHackathon.paragraph3}
                  </p>
                </div>

                {/* Hack4Delhi Featured Image */}
                <div
                  onClick={() => openWindow('photos')}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-video cursor-pointer mt-2"
                >
                  <img
                    src={HACKATHONS_PAGE_DATA.featuredHackathon.image.src}
                    alt={HACKATHONS_PAGE_DATA.featuredHackathon.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-3.5 flex flex-col justify-end">
                    <span className="text-xs font-bold text-white">
                      {HACKATHONS_PAGE_DATA.featuredHackathon.image.caption}
                    </span>
                    <span className="text-[10px] text-sky-400 font-mono mt-0.5">
                      Click to view in macOS Photos →
                    </span>
                  </div>
                </div>
              </div>

              {/* Other Competitions Section */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5 text-amber-400" />
                  <span>{HACKATHONS_PAGE_DATA.otherCompetitions.heading}</span>
                </h3>
                <p className="text-xs text-slate-400 italic">
                  {HACKATHONS_PAGE_DATA.otherCompetitions.subheading}
                </p>

                <div className="grid grid-cols-1 gap-3 pt-1">
                  {HACKATHONS_PAGE_DATA.otherCompetitions.items.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/30 transition-colors space-y-1.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-bold text-white flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          {comp.name}
                        </h4>
                        <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30 shrink-0">
                          {comp.result}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed pl-3.5">
                        {comp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Like About Hackathons */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                  <span>{HACKATHONS_PAGE_DATA.whatILike.heading}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {HACKATHONS_PAGE_DATA.whatILike.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1 hover:border-sky-500/30 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        {pt.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed italic">
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Tagline */}
              <div className="pt-4 pb-2 text-center border-t border-slate-800/60">
                <p className="text-xs font-mono text-slate-400 italic">
                  {HACKATHONS_PAGE_DATA.closingLine}
                </p>
              </div>
            </div>
          )}

          {/* SECTION 6: HIT ME UP */}
          {activeSection === 'contact' && (
            <div className="max-w-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <MessageCircle className="h-4 w-4" />
                  <span>Get In Touch</span>
                </div>
                <h1 className="text-2xl font-bold text-white mt-1">💬 hit me up</h1>
                <p className="text-xs text-slate-400 mt-1 font-mono">Let's build something together</p>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-slate-900/80 p-5 space-y-4 shadow-lg">
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {CONTACT_DATA.bio}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/80">
                  {CONTACT_DATA.paragraph2}
                </p>

                {/* Good reasons to reach out list */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    good reasons to reach out
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {CONTACT_DATA.reasonsToReachOut.map((reason, idx) => (
                      <li key={idx} className="marker:text-sky-400">
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Where to find me */}
                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    where to find me
                  </h3>
                  <p className="text-xs text-slate-300">
                    DMs are open on{' '}
                    <a
                      href={CONTACT_DATA.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 font-semibold underline underline-offset-2 hover:text-sky-300"
                    >
                      LinkedIn
                    </a>{' '}
                    ·{' '}
                    <a
                      href={CONTACT_DATA.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 font-semibold underline underline-offset-2 hover:text-sky-300"
                    >
                      GitHub
                    </a>{' '}
                    ·{' '}
                    <a
                      href={CONTACT_DATA.links.x}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 font-semibold underline underline-offset-2 hover:text-sky-300"
                    >
                      X (Twitter)
                    </a>{' '}
                    or just send me an{' '}
                    <a
                      href={`mailto:${CONTACT_DATA.links.email}`}
                      className="text-sky-400 font-semibold underline underline-offset-2 hover:text-sky-300"
                    >
                      email
                    </a>
                    .
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <a
                      href={CONTACT_DATA.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-950/80 hover:border-sky-500/50 text-slate-200 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-sky-400" />
                      <span className="text-xs font-bold">LinkedIn</span>
                    </a>

                    <a
                      href={CONTACT_DATA.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-950/80 hover:border-sky-500/50 text-slate-200 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4 text-sky-400" />
                      <span className="text-xs font-bold">GitHub</span>
                    </a>

                    <a
                      href={CONTACT_DATA.links.x}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-950/80 hover:border-sky-500/50 text-slate-200 hover:text-white transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-sky-400" />
                      <span className="text-xs font-bold">X (Twitter)</span>
                    </a>

                    <a
                      href={CONTACT_DATA.links.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-950/80 hover:border-amber-500/50 text-slate-200 hover:text-white transition-colors"
                    >
                      <span className="font-extrabold text-amber-400 text-xs font-mono">&lt;/&gt;</span>
                      <span className="text-xs font-bold">LeetCode</span>
                    </a>
                  </div>

                  {/* Copy Email Box */}
                  <div className="flex items-center justify-between p-3 rounded-xl border border-sky-500/20 bg-slate-950/90 text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-sky-400" />
                      <span className="text-xs font-mono text-slate-300">{CONTACT_DATA.links.email}</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-600/20 px-2.5 py-1 text-xs font-medium text-sky-300 hover:bg-sky-600/30 transition-colors"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs font-mono text-slate-400 italic border-t border-slate-800/60">
                  {CONTACT_DATA.footerNote}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </WindowFrame>
  );
};
