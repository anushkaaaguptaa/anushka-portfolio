import React, { useState, useEffect, useCallback } from 'react';
import { WindowFrame } from './WindowFrame';
import { PHOTOS_DATA, PHOTO_FOLDERS } from '../../data/photosData';
import { PhotoItem } from '../../types';
import { useWindowManager } from '../../context/WindowManagerContext';
import {
  Image as ImageIcon,
  Grid,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Folder,
  FolderOpen,
} from 'lucide-react';

export const PhotosWindow: React.FC = () => {
  const { selectedPhotoFolder, setSelectedPhotoFolder } = useWindowManager();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentFolder = PHOTO_FOLDERS.find((f) => f.id === selectedPhotoFolder) || PHOTO_FOLDERS[0];

  const filteredPhotos = PHOTOS_DATA.filter((p) => {
    const matchesFolder = selectedPhotoFolder === 'all' || p.folderId === selectedPhotoFolder;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  const handleNextPhoto = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  }, [selectedPhoto, filteredPhotos]);

  const handlePrevPhoto = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  }, [selectedPhoto, filteredPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, handleNextPhoto, handlePrevPhoto]);

  return (
    <WindowFrame id="photos" headerTitle="Photos — Anushka's Library">
      <div className="flex h-full w-full overflow-hidden text-sm bg-slate-950">
        {/* macOS Photos Folder Sidebar */}
        <div className="w-60 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 backdrop-blur-xl">
          <div className="p-3 border-b border-slate-800">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Photos & Folders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md bg-slate-800 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 border border-slate-700/60"
              />
            </div>
          </div>

          <div className="p-2 space-y-1 overflow-y-auto flex-1 scrollbar-thin">
            <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              My Folders & Albums
            </div>

            {PHOTO_FOLDERS.map((folder) => {
              const isSelected = selectedPhotoFolder === folder.id;
              const count =
                folder.id === 'all'
                  ? PHOTOS_DATA.length
                  : PHOTOS_DATA.filter((p) => p.folderId === folder.id).length;

              return (
                <button
                  key={folder.id}
                  onClick={() => setSelectedPhotoFolder(folder.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-all text-xs border ${
                    isSelected
                      ? 'bg-sky-600/30 text-sky-300 font-semibold border-sky-500/40 shadow-sm'
                      : 'border-transparent text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    {isSelected ? (
                      <FolderOpen className="h-4 w-4 text-sky-400 shrink-0" />
                    ) : folder.id === 'all' ? (
                      <Grid className="h-4 w-4 text-sky-400 shrink-0" />
                    ) : (
                      <Folder className="h-4 w-4 text-amber-400/90 shrink-0" />
                    )}
                    <span className="truncate">{folder.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/50 shrink-0">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Photos Grid Container */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-6 gap-2">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {selectedPhotoFolder === 'all' ? (
                  <ImageIcon className="h-5 w-5 text-sky-400" />
                ) : (
                  <FolderOpen className="h-5 w-5 text-amber-400" />
                )}
                <span>{currentFolder.label}</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentFolder.description} ({filteredPhotos.length} photos)
              </p>
            </div>
          </div>

          {/* Clean Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-video cursor-pointer shadow-md hover:border-sky-500/50 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="py-16 text-center space-y-2 border border-dashed border-slate-800 rounded-2xl p-8 bg-slate-900/40">
              <Folder className="h-10 w-10 text-slate-600 mx-auto" />
              <p className="text-sm font-semibold text-slate-300">Folder Empty</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No photos added to this folder yet. More photos will appear here when added!
              </p>
            </div>
          )}
        </div>

        {/* Fullscreen Photo Lightbox Modal with Floating Chevrons (< and >) and Bottom Caption */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          >
            {/* Modal Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-full rounded-2xl border border-slate-800/80 bg-slate-950 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-30 h-8 w-8 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center backdrop-blur-md border border-slate-700/60 transition-all shadow-md"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Main Image Display Area with Floating Navigation Chevrons */}
              <div className="relative flex-1 overflow-hidden bg-slate-950 flex items-center justify-center p-4 pt-6 min-h-[55vh]">
                {/* Left Navigation Chevron < */}
                {filteredPhotos.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevPhoto();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 text-white/90 hover:bg-slate-800 hover:text-white hover:scale-110 active:scale-95 backdrop-blur-md border border-slate-700/60 shadow-lg transition-all"
                    title="Previous photo (<)"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                {/* Photo Display */}
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Right Navigation Chevron > */}
                {filteredPhotos.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextPhoto();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 text-white/90 hover:bg-slate-800 hover:text-white hover:scale-110 active:scale-95 backdrop-blur-md border border-slate-700/60 shadow-lg transition-all"
                    title="Next photo (>)"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Centered Caption at Bottom when image is opened */}
              <div className="py-5 px-4 text-center bg-slate-950 shrink-0 border-t border-slate-900/50">
                <h3 className="text-sm font-medium text-white tracking-wide">{selectedPhoto.title}</h3>
                {selectedPhoto.date && (
                  <p className="text-xs text-slate-400 mt-1 font-sans">{selectedPhoto.date}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </WindowFrame>
  );
};
