export type AppId = 'notes' | 'messages' | 'terminal' | 'photos' | 'settings' | 'weather';

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  iconName: string;
}

export type NotesSectionId = 'about' | 'beyond-the-code' | 'experience' | 'achievements' | 'projects' | 'hackathons' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  placeholderImage: string;
  tagline: string;
}

export type PhotoFolderId =
  | 'all'
  | 'hack4delhi'
  | 'oblivion-nsut'
  | 'bizignite-dtu'
  | 'innovation-mela-mait'
  | 'innoquest-ideathon'
  | 'community-work';

export interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'All' | 'Hackathons' | 'Projects' | 'Awards' | 'NGO & Social Work';
  folderId: PhotoFolderId;
  date: string;
  src: string;
  aspectRatio?: string;
}

export interface ContactChat {
  id: string;
  name: string;
  avatar: string;
  role: string;
  lastMessageSnippet: string;
  time: string;
  unreadCount?: number;
  messages: Array<{
    id: string;
    sender: 'them' | 'me';
    text: string;
    timestamp: string;
  }>;
}
