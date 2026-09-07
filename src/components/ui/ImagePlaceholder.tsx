import React from 'react';
import { Image as ImageIcon, Sparkles, ExternalLink } from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';

interface ImagePlaceholderProps {
  title: string;
  category?: string;
  aspectRatio?: 'video' | 'square' | 'banner';
  className?: string;
  customSrc?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  category = 'Photos / Gallery Concept',
  aspectRatio = 'video',
  className = '',
  customSrc,
}) => {
  const { openWindow } = useWindowManager();

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'banner'
      ? 'aspect-[21/9]'
      : 'aspect-video';

  const handleOpenPhotos = () => {
    openWindow('photos');
  };

  return (
    <div
      onClick={handleOpenPhotos}
      className={`group relative overflow-hidden rounded-xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/90 p-4 transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer ${aspectClass} ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/25" />

      {customSrc ? (
        <img
          src={customSrc}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
      ) : (
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700/70 text-sky-400 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-sky-400/50 group-hover:text-sky-300">
            <ImageIcon className="h-6 w-6" />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400/90">
            <Sparkles className="h-3 w-3" />
            <span>{category}</span>
          </div>

          <h4 className="mt-1 text-sm font-medium text-slate-200 group-hover:text-white">
            {title}
          </h4>

          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-slate-800/90 px-3 py-1 text-[11px] font-mono text-slate-400 border border-slate-700/50 group-hover:border-sky-500/40 group-hover:text-sky-300">
            <span>[ Click to view in macOS Photos ]</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      )}
    </div>
  );
};
