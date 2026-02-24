'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, MoreVertical, X, Pencil, Share, Flag, BadgeCheck, Play, Heart } from 'lucide-react';

const chips = ['Todos', 'Valorant', 'CS2', 'Highlights', 'Torneios', 'Clutches', 'Liga Nacional'];
const tabs = ['Home All', 'Galeria', 'Jogos', 'Live', 'Torneio', 'Eventos', 'Clã', 'Grupo', 'Amigos', 'About'];
const posts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1542393545-facac42e67ee?q=80&w=800', views: '12K', type: 'video' },
  { id: 2, img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800', likes: '4.5K', type: 'photo' },
  { id: 3, img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800' },
  { id: 4, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800' },
  { id: 5, img: 'https://images.unsplash.com/photo-1593305841991-05c29736ce36?q=80&w=800' },
  { id: 6, img: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800' },
];

export function ProfileOfficial() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeChip, setActiveChip] = useState('FPS');
  const [activeTab, setActiveTab] = useState('Home All');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollCenter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-10 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 h-[60px] flex justify-between items-center px-4 z-[2100] pointer-events-none">
        <button onClick={() => window.history.back()}
          className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center cursor-pointer pointer-events-auto">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto">
          {isMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
        </button>
      </header>

      <div ref={menuRef} className="fixed top-[50px] right-4 w-[220px] z-[2000] rounded-[14px] border border-white/10 overflow-hidden transition-all duration-200"
        style={{ backgroundColor: 'rgba(30,30,30,0.9)', backdropFilter: 'blur(40px)',
          opacity: isMenuOpen ? 1 : 0, transform: isMenuOpen ? 'scale(1)' : 'scale(0.8)', pointerEvents: isMenuOpen ? 'auto' : 'none' }}>
        <button className="w-full px-4 py-3.5 flex items-center gap-3 text-[15px] font-medium border-b border-white/10 hover:bg-white/10"><Pencil className="w-5 h-5" /> Editar Perfil</button>
        <button className="w-full px-4 py-3.5 flex items-center gap-3 text-[15px] font-medium border-b border-white/10 hover:bg-white/10"><Share className="w-5 h-5" /> Compartilhar</button>
        <button className="w-full px-4 py-3.5 flex items-center gap-3 text-[15px] font-medium hover:bg-white/10 text-[#FF453A]"><Flag className="w-5 h-5" /> Denunciar</button>
      </div>

      <section className="relative pb-5">
        <div className="h-[180px] w-full relative">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" alt="Capa" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-[80px]" style={{ background: 'linear-gradient(to top, black, transparent)' }} />
        </div>
        <div className="relative w-[110px] h-[110px] mx-auto -mt-[55px] mb-2.5 z-10">
          <div className="absolute inset-0 rounded-full border-2 border-[#FF4655] animate-pulse" />
          <img src="https://images.unsplash.com/photo-1614741118830-c7344784e5c7?q=80&w=1000" alt="Avatar"
            className="w-full h-full rounded-full border-4 border-black object-cover relative z-10" />
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FF4655] text-white text-[10px] font-black px-2 py-0.5 rounded-[10px] border-[3px] border-black z-20">LIVE</span>
        </div>
        <div className="text-center px-4">
          <h1 className="text-[22px] font-bold mb-1 flex items-center justify-center gap-1.5">
            Awkiruun <BadgeCheck className="w-[18px] h-[18px] text-[#0A84FF]" />
          </h1>
          <p className="text-[14px] text-white/90 leading-snug">Pro Valorant Player for MATZON.<br/>Dominando o ranking global 🌍</p>
        </div>
      </section>

      <section className="flex justify-center gap-3 px-4 mb-4">
        {[
          { value: '4.850', label: 'ELO', color: '#2563FF' },
          { value: '68%', label: 'Winrate', color: '#30D158' },
          { value: '12', label: 'Torneios', color: '#7C3AED' },
          { value: 'Elite', label: 'Rank', color: '#FFD60A' },
        ].map((s, i) => (
          <div key={i} className="flex-1 text-center py-3 rounded-[16px]" style={{ backgroundColor: '#18181c' }}>
            <span className="block font-black text-[18px]" style={{ color: s.color }}>{s.value}</span>
            <span className="text-[11px] font-bold" style={{ color: '#808085' }}>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="flex justify-center items-center py-4 pb-6">
        {[{ value: '123', label: 'Following' }, { value: '10M', label: 'Followers' }, { value: '109', label: 'Posted' }].map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className="w-[1px] h-5 bg-white/15" />}
            <div className="text-center px-5">
              <span className="block font-bold text-[17px]">{s.value}</span>
              <span className="text-[12px] text-[#8E8E93]">{s.label}</span>
            </div>
          </React.Fragment>
        ))}
      </section>

      <section className="flex overflow-x-auto gap-2.5 px-4 mb-4 hide-scrollbar snap-x">
        {chips.map((chip) => (
          <button key={chip} onClick={(e) => { setActiveChip(chip); handleScrollCenter(e); }}
            className="px-4 py-2 rounded-[20px] text-[13px] font-semibold whitespace-nowrap transition-colors snap-start"
            style={{ backgroundColor: activeChip === chip ? '#FFF' : '#1C1C1E', color: activeChip === chip ? '#000' : '#8E8E93' }}>
            {chip}
          </button>
        ))}
      </section>

      <nav className="sticky top-[60px] bg-black/90 backdrop-blur-md z-[90] border-b border-white/15 pt-1 flex overflow-x-auto px-4 hide-scrollbar">
        {tabs.map((tab) => (
          <button key={tab} onClick={(e) => { setActiveTab(tab); handleScrollCenter(e); }}
            className="relative py-3 mr-4 text-[15px] font-semibold whitespace-nowrap transition-colors"
            style={{ color: activeTab === tab ? '#FFF' : '#8E8E93' }}>
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-[3px] bg-[#FF4655]" />}
          </button>
        ))}
      </nav>

      <main className="grid grid-cols-2 gap-2 p-4">
        {posts.map((post) => (
          <article key={post.id} className="relative rounded-xl overflow-hidden bg-[#1C1C1E] cursor-pointer group" style={{ aspectRatio: '3/4' }}>
            <img src={post.img} alt="Post" className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            {(post.views || post.likes) && (
              <div className="absolute bottom-0 left-0 w-full p-2.5 flex items-center text-[12px] font-semibold text-white"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                {post.type === 'video' ? <><Play className="w-3.5 h-3.5 mr-1 fill-white" />{post.views}</> : <><Heart className="w-3.5 h-3.5 mr-1 fill-white" />{post.likes}</>}
              </div>
            )}
          </article>
        ))}
      </main>
      <style dangerouslySetInnerHTML={{__html: '.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}'}} />
    </div>
  );
}
