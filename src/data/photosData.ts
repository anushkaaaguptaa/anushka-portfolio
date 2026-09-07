import { PhotoItem, PhotoFolderId } from '../types';

export interface PhotoFolder {
  id: PhotoFolderId;
  label: string;
  icon: string;
  description: string;
}

export const PHOTO_FOLDERS: PhotoFolder[] = [
  {
    id: 'all',
    label: 'All Photos',
    icon: '🖼️',
    description: 'Complete photo collection across hackathons, awards & community work.'
  },
  {
    id: 'hack4delhi',
    label: 'hack4delhi',
    icon: '📁',
    description: 'BharatMat 3rd Place winning presentation & team photos at Hack4Delhi.'
  },
  {
    id: 'oblivion-nsut',
    label: 'Oblivion NSUT',
    icon: '📁',
    description: 'Oblivion 2025 D’Code NSUT 3rd place award ceremony & trophy photos.'
  },
  {
    id: 'bizignite-dtu',
    label: 'BizIgnite DTU',
    icon: '📁',
    description: '2nd Place pitch presentation & research award moments at DTU.'
  },
  {
    id: 'innovation-mela-mait',
    label: 'Innovation Mela MAIT',
    icon: '📁',
    description: '1st Place Innovation Mela MAIT & S.A.N.K.A.L.P. project showcases.'
  },
  {
    id: 'innoquest-ideathon',
    label: 'Innoquest Ideathon',
    icon: '📁',
    description: 'Microsoft Azure Community Innoquest & hardware hackathon builds.'
  },
  {
    id: 'community-work',
    label: 'Community work',
    icon: '📁',
    description: 'Karuna NGO education drives, kit distributions & youth activity workshops.'
  }
];

export const PHOTOS_DATA: PhotoItem[] = [
  {
    id: 'photo-bharatmat',
    title: 'BharatMat Team Presentation — Hack4Delhi',
    subtitle: 'Presenting the BharatMat digital voter verification concept at auditorium (3rd Place).',
    category: 'Projects',
    folderId: 'hack4delhi',
    date: 'Dec 2024',
    src: '/photos/bharatmat_team.jpg',
  },
  {
    id: 'photo-hack4delhi-banner',
    title: 'India Innovates Hack4Delhi Team',
    subtitle: 'Team photo in front of the India Innovates banner at Hack4Delhi.',
    category: 'Hackathons',
    folderId: 'hack4delhi',
    date: '2025',
    src: '/photos/hack4delhi_team_banner.jpg',
  },
  {
    id: 'photo-hack4delhi-prize',
    title: '3rd Place Prize Ceremony & Token',
    subtitle: 'Receiving the 3rd place cash token award on stage at Hack4Delhi.',
    category: 'Awards',
    folderId: 'hack4delhi',
    date: '2025',
    src: '/photos/hack4delhi_prize_cash.jpg',
  },
  {
    id: 'photo-hack4delhi-pitch',
    title: 'Jury Pitch & Live Demonstration',
    subtitle: 'Explaining the BharatMat verification flow to visiting judges and dignitaries.',
    category: 'Hackathons',
    folderId: 'hack4delhi',
    date: '2025',
    src: '/photos/hack4delhi_jury_pitch.jpg',
  },
  {
    id: 'photo-hack4delhi-behind-scenes',
    title: 'Hack4Delhi Late Night Work & Team',
    subtitle: 'Behind the scenes during the intensive build phase.',
    category: 'Hackathons',
    folderId: 'hack4delhi',
    date: '2025',
    src: '/photos/hack4delhi_behind_scenes.jpg',
  },
  {
    id: 'photo-oblivion-team',
    title: "Oblivion 2025 Award Ceremony — 3rd Place",
    subtitle: "Team Neural Nomads receiving 3rd Place trophy and certificate at D'Code NSUT.",
    category: 'Awards',
    folderId: 'oblivion-nsut',
    date: 'Aug 31, 2025',
    src: '/photos/oblivion_award_team.jpg',
  },
  {
    id: 'photo-certificate',
    title: "3rd Place Certificate & Trophy — Oblivion 2025",
    subtitle: "Team Neural Nomads awarded 3rd position certificate and trophy.",
    category: 'Awards',
    folderId: 'oblivion-nsut',
    date: 'Aug 31, 2025',
    src: '/photos/certificate_trophy.jpg',
  },
  {
    id: 'photo-bizignite',
    title: '2nd Place — BizIgnite Case Study Competition, DTU',
    subtitle: 'Delivering the winning pitch presentation for the BizIgnite Case Study Competition.',
    category: 'Awards',
    folderId: 'bizignite-dtu',
    date: '2025',
    src: '/photos/bizignite_pitch.jpg',
  },
  {
    id: 'photo-code-czars',
    title: 'Code Czars — Innovation Mela Showcase',
    subtitle: '1st Place Innovation Mela desk presentation for policy integration prototype.',
    category: 'Projects',
    folderId: 'innovation-mela-mait',
    date: '2025',
    src: '/photos/code_czars_policy_integration.jpg',
  },
  {
    id: 'photo-aryabhatta',
    title: 'Aryabhatta Block Faculty & Research Group',
    subtitle: 'Faculty Development Program & student research group gathering at MAIT / DTU.',
    category: 'Awards',
    folderId: 'innovation-mela-mait',
    date: '2025',
    src: '/photos/aryabhatta_faculty_event.jpg',
  },
  {
    id: 'photo-ceremony',
    title: 'Innoquest Ideathon Award Ceremony',
    subtitle: 'Felicitation ceremony with faculty and team members at Innoquest Ideathon.',
    category: 'Awards',
    folderId: 'innoquest-ideathon',
    date: '2025',
    src: '/photos/award_ceremony.jpg',
  },
  {
    id: 'photo-innoquest-azure-swag',
    title: 'Microsoft Azure Community Swag',
    subtitle: 'Azure Developer Community goodies and bags at Innoquest Ideathon.',
    category: 'Projects',
    folderId: 'innoquest-ideathon',
    date: '2025',
    src: '/photos/innoquest_azure_swag.jpg',
  },
  {
    id: 'photo-innoquest-team-group',
    title: 'Innoquest Ideathon Team Group Photo',
    subtitle: 'Team members posing together at Innoquest Ideathon.',
    category: 'Hackathons',
    folderId: 'innoquest-ideathon',
    date: '2025',
    src: '/photos/innoquest_team_group.jpg',
  },
  {
    id: 'photo-karuna-team',
    title: 'Karuna — The Compassion NGO Volunteers',
    subtitle: 'Team of student volunteers supporting child welfare and community empowerment initiatives.',
    category: 'NGO & Social Work',
    folderId: 'community-work',
    date: '2025',
    src: '/photos/karuna_ngo_team.jpg',
  },
  {
    id: 'photo-education-drive',
    title: 'Community Education & Child Welfare Drive',
    subtitle: 'Engaging with children during local educational outreach and mentorship drives.',
    category: 'NGO & Social Work',
    folderId: 'community-work',
    date: '2025',
    src: '/photos/education_drive_children.jpg',
  },
  {
    id: 'photo-ngo-distribution',
    title: 'Educational Kits & Goods Distribution',
    subtitle: 'Distributing books, stationery, and refreshments to children in underserved communities.',
    category: 'NGO & Social Work',
    folderId: 'community-work',
    date: '2025',
    src: '/photos/ngo_distribution.jpg',
  },
  {
    id: 'photo-stickers-workshop',
    title: 'Youth Engagement & Activity Workshop',
    subtitle: 'Interactive activity session with children celebrating creativity and teamwork.',
    category: 'NGO & Social Work',
    folderId: 'community-work',
    date: '2025',
    src: '/photos/community_stickers_workshop.jpg',
  },
  {
    id: 'photo-community-outreach-kids',
    title: 'Community Interaction & Child Mentorship',
    subtitle: 'Spending time and interacting with children during community outreach.',
    category: 'NGO & Social Work',
    folderId: 'community-work',
    date: '2025',
    src: '/photos/community_outreach_children.jpg',
  },
  {
    id: 'photo-hack4delhi-poster',
    title: 'Hack4Delhi Event Poster',
    subtitle: 'India Innovates 2026 Hack4Delhi poster at venue entrance.',
    category: 'Hackathons',
    folderId: 'hack4delhi',
    date: '2025',
    src: '/photos/hack4delhi_poster.jpg',
  },
  {
    id: 'photo-hack4delhi-stage-screen',
    title: 'Hack4Delhi Main Stage Projection',
    subtitle: 'India Innovates 2026 Hack4Delhi stage presentation screen.',
    category: 'Hackathons',
    folderId: 'hack4delhi',
    date: '2025',
    src: '/photos/hack4delhi_stage_screen.png',
  },
  {
    id: 'photo-bizignite-team-outdoors',
    title: 'BizIgnite Team Outdoors',
    subtitle: 'BizIgnite DTU competition team group photo outdoors.',
    category: 'Hackathons',
    folderId: 'bizignite-dtu',
    date: '2025',
    src: '/photos/bizignite_team_outdoors.jpg',
  },
  {
    id: 'photo-bizignite-stage-pitch',
    title: 'BizIgnite Stage Pitch Screen',
    subtitle: 'BizIgnite case study competition presentation projection.',
    category: 'Awards',
    folderId: 'bizignite-dtu',
    date: '2025',
    src: '/photos/bizignite_stage_pitch.png',
  },
  {
    id: 'photo-bizignite-ai-solution',
    title: 'BizIgnite AI Emotion Tracking Slide',
    subtitle: 'Real-time emotion tracking slide projection during BizIgnite pitch presentation at DTU.',
    category: 'Awards',
    folderId: 'bizignite-dtu',
    date: '2025',
    src: '/photos/bizignite_ai_solution.png',
  },
];
