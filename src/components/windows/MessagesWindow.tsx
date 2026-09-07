import React, { useState } from 'react';
import { WindowFrame } from './WindowFrame';
import { CHATS_DATA } from '../../data/messageData';
import { ContactChat } from '../../types';
import { Send, Search, Phone, Video, Info, Sparkles } from 'lucide-react';

export const MessagesWindow: React.FC = () => {
  const [chats, setChats] = useState<ContactChat[]>(CHATS_DATA);
  const [selectedChatId, setSelectedChatId] = useState<string>('yann-lecun');
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const currentChat = chats.find((c) => c.id === selectedChatId) || chats[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessageText = inputText.trim();
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'me' as const,
      text: userMessageText,
      timestamp: nowTime,
    };

    // Update messages in current chat
    setChats((prevChats) =>
      prevChats.map((c) => {
        if (c.id === currentChat.id) {
          return {
            ...c,
            lastMessageSnippet: `You: ${userMessageText}`,
            time: nowTime,
            messages: [...c.messages, newMsg],
          };
        }
        return c;
      })
    );

    setInputText('');

    // Generate funny automated response after a short delay
    setTimeout(() => {
      let replyText = "Fascinating perspective! Let's schedule a deep-dive call soon.";
      if (currentChat.id === 'cpp-compiler') {
        replyText = "Segmentation fault (core dumped). Just kidding! Clean syntax acknowledged.";
      } else if (currentChat.id === 'yann-lecun') {
        replyText = "Valid point! PyTorch contrastive embeddings for audio classification scale amazingly well.";
      } else if (currentChat.id === 'tim-berners-lee') {
        replyText = "The future of the web remains open, decentralized, and human-centric!";
      } else if (currentChat.id === 'sam-altman') {
        replyText = "Compute cluster scaling is proceeding nicely! Keep building!";
      }

      const autoReply = {
        id: `msg-reply-${Date.now()}`,
        sender: 'them' as const,
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChats((prevChats) =>
        prevChats.map((c) => {
          if (c.id === currentChat.id) {
            return {
              ...c,
              lastMessageSnippet: replyText,
              time: autoReply.timestamp,
              messages: [...c.messages, autoReply],
            };
          }
          return c;
        })
      );
    }, 1000);
  };

  const filteredChats = chats.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMessageSnippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WindowFrame id="messages" headerTitle={`Messages — ${currentChat.name}`}>
      <div className="flex h-full w-full overflow-hidden text-sm">
        {/* iMessage Sidebar */}
        <div className="w-64 border-r border-slate-700/50 bg-slate-900/85 flex flex-col shrink-0 backdrop-blur-xl">
          {/* Sidebar Search Bar */}
          <div className="p-3 border-b border-slate-700/40">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md bg-slate-800/90 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500/50 border border-slate-700/50"
              />
            </div>
          </div>

          {/* Contact Threads List */}
          <div className="flex-1 overflow-y-auto p-1.5 space-y-0.5 scrollbar-thin">
            {filteredChats.map((chat) => {
              const isSelected = chat.id === currentChat.id;
              return (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChatId(chat.id)}
                  className={`w-full text-left p-2.5 rounded-lg transition-all flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-sky-600/30 border-sky-500/50 text-white shadow-sm'
                      : 'hover:bg-slate-800/60 border-transparent text-slate-300'
                  }`}
                >
                  {/* Avatar */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-base shrink-0 shadow-inner">
                    {chat.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-100 truncate">
                        {chat.name}
                      </span>
                      <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5 leading-snug">
                      {chat.lastMessageSnippet}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Conversation Pane */}
        <div className="flex-1 flex flex-col bg-slate-950/80 overflow-hidden">
          {/* Chat Header Bar */}
          <div className="flex h-12 items-center justify-between border-b border-slate-800 px-4 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm border border-slate-700">
                {currentChat.avatar}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-100">{currentChat.name}</h3>
                <p className="text-[10px] text-sky-400 font-mono">{currentChat.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button title="Audio Call" className="p-1.5 hover:text-sky-400 transition-colors">
                <Phone className="h-3.5 w-3.5" />
              </button>
              <button title="FaceTime" className="p-1.5 hover:text-sky-400 transition-colors">
                <Video className="h-3.5 w-3.5" />
              </button>
              <button title="Info" className="p-1.5 hover:text-sky-400 transition-colors">
                <Info className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
            <div className="text-center my-2">
              <span className="rounded-full bg-slate-800/80 border border-slate-700/60 px-3 py-1 text-[10px] font-mono text-slate-400">
                iMessage with {currentChat.name}
              </span>
            </div>

            {currentChat.messages.map((msg) => {
              const isMe = msg.sender === 'me';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-sm ${
                      isMe
                        ? 'bg-sky-600 text-white rounded-br-xs'
                        : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="mt-1 text-[10px] text-slate-500 font-mono px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Input Box */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={`iMessage to ${currentChat.name}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 rounded-full bg-slate-800/90 px-4 py-2 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 border border-slate-700/60"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:hover:bg-sky-600 text-white transition-colors shadow-sm"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </WindowFrame>
  );
};
