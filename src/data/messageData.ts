import { ContactChat } from '../types';

export const CHATS_DATA: ContactChat[] = [
  {
    id: 'yann-lecun',
    name: 'Yann LeCun',
    avatar: '🤖',
    role: 'Chief AI Scientist & Turing Awardee',
    lastMessageSnippet: 'saw your PyTorch scripts for the contrastive learning pipeline. we need to talk.',
    time: '11:24 AM',
    unreadCount: 1,
    messages: [
      {
        id: 'y-1',
        sender: 'them',
        text: 'hey Anushka! reading through your infant cry classification research at DTU.',
        timestamp: '11:20 AM'
      },
      {
        id: 'y-2',
        sender: 'them',
        text: 'saw your PyTorch scripts for the contrastive learning pipeline. we need to talk.',
        timestamp: '11:24 AM'
      },
      {
        id: 'y-3',
        sender: 'me',
        text: 'wow Yann! honored! self-supervised representation learning was definitely the way to go for unlabelled audio data.',
        timestamp: '11:26 AM'
      },
      {
        id: 'y-4',
        sender: 'them',
        text: 'agreed. non-generative joint-embedding architecture (JEPA) vibes. keep pushing the ML pipelines!',
        timestamp: '11:28 AM'
      }
    ]
  },
  {
    id: 'cpp-compiler',
    name: 'C++ Compiler (g++)',
    avatar: '⚡',
    role: 'Strict Code Checker',
    lastMessageSnippet: "error: expected ';' before 'return'. I thought we were friends?",
    time: '10:45 AM',
    unreadCount: 2,
    messages: [
      {
        id: 'c-1',
        sender: 'them',
        text: "error: expected ';' before 'return'. I thought we were friends?",
        timestamp: '10:45 AM'
      },
      {
        id: 'c-2',
        sender: 'me',
        text: 'my bad, forgot the semicolon on line 42 again...',
        timestamp: '10:46 AM'
      },
      {
        id: 'c-3',
        sender: 'them',
        text: 'Also: warning: implicit conversion loses integer precision: int to char. Do you even value type safety?!',
        timestamp: '10:47 AM'
      },
      {
        id: 'c-4',
        sender: 'me',
        text: 'O(1) time complexity DSA solution runs clean now though! 😎',
        timestamp: '10:48 AM'
      },
      {
        id: 'c-5',
        sender: 'them',
        text: 'Compilation finished with 0 errors. You live to code another day.',
        timestamp: '10:49 AM'
      }
    ]
  },
  {
    id: 'tim-berners-lee',
    name: 'Tim Berners-Lee',
    avatar: '🌐',
    role: 'Inventor of the World Wide Web',
    lastMessageSnippet: 'heard you featured me in your Universal Human Values speech. honoured.',
    time: 'Yesterday',
    messages: [
      {
        id: 't-1',
        sender: 'them',
        text: 'Hello Anushka!',
        timestamp: 'Yesterday 4:15 PM'
      },
      {
        id: 't-2',
        sender: 'them',
        text: 'heard you featured me in your Universal Human Values speech. honoured.',
        timestamp: 'Yesterday 4:16 PM'
      },
      {
        id: 't-3',
        sender: 'me',
        text: 'Sir Tim! Yes! Decoupling content, decentralizing protocols, and keeping the web open for humanity is at the core of true engineering ethics.',
        timestamp: 'Yesterday 4:20 PM'
      },
      {
        id: 't-4',
        sender: 'them',
        text: 'Keep building open, accessible web apps like CampusConnect AI and S.A.N.K.A.L.P.!',
        timestamp: 'Yesterday 4:22 PM'
      }
    ]
  },
  {
    id: 'sam-altman',
    name: 'Sam Altman',
    avatar: '🌌',
    role: 'CEO @ OpenAI',
    lastMessageSnippet: 'is CampusConnect AI an early version of AGI?',
    time: 'Sep 4',
    messages: [
      {
        id: 's-1',
        sender: 'them',
        text: 'Hey Anushka, noticed your S.A.N.K.A.L.P. dropout prediction model and CampusConnect triage system.',
        timestamp: 'Sep 4 2:10 PM'
      },
      {
        id: 's-2',
        sender: 'them',
        text: 'is CampusConnect AI an early version of AGI?',
        timestamp: 'Sep 4 2:11 PM'
      },
      {
        id: 's-3',
        sender: 'me',
        text: 'haha not quite AGI yet Sam, but it does handle student intent classification pretty smoothly with FastAPI & PyTorch!',
        timestamp: 'Sep 4 2:15 PM'
      }
    ]
  }
];
