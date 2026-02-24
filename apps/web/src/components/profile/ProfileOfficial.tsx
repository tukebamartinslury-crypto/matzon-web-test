'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, MoreVertical, X, Pencil, Share, Flag, BadgeCheck, Play, Heart, Trophy, Users, Calendar } from 'lucide-react';

const chips = ['Todos', 'Valorant', 'CS2', 'Highlights', 'Torneios', 'Clutches', 'Liga Nacional'];
const tabs = ['Tudo', 'Galeria', 'Torneios', 'Estatisticas', 'Amigos', 'Sobre'];

const posts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1542393545-facac42e67ee?q=80&w=800', views: '12K', type: 'video' },
  { id: 2, img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800', likes: '4.5K', type: 'photo' },
  { id: 3, img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800', likes: '2.1K', type: 'photo' },
  { id: 4, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800', views: '8K', type: 'video' },
  { id: 5, img: 'https://images.unsplash.com/photo-1593305841991-05c29736ce36?q=80&w=800', likes: '3.2K', type: 'photo' },
  { id: 6, img: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800', views: '5K', type: 'video' },
];

const torneios = [
  { name: 'Champions Cup 2026', result: '1º Lugar', prize: 'EUR 5.000', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800', color: '#FFD60A' },
  { name: 'Pro League S3', result: 'Top 8', prize: 'EUR 500', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800', color: '#2563FF' },
  { name: 'Winter Clash', result: '2º Lugar', prize: 'EUR 1.200', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800', color: '#C0C0C0' },
  { name: 'Night Cup Series', result: 'Top 16', prize: 'EUR 100', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800', color: '#7C3AED' },
];

const amigos = [
  { name: 'Faker_EU', status: 'Online', game: 'Valorant', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200' },
  { name: 'S1mple', status: 'Em Jogo', game: 'CS2', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200' },
  { name: 'NiKo', status: 'Offline', game: 'CS2', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=200' },
  { name: 'Caps', status: 'Online', game: 'LoL', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=200' },
];

const stats = [
  { label: 'Partidas', value: '342' }, { label: 'Vitorias', value: '232' },
  { label: 'Derrotas', value: '110' }, { label: 'Winrate', value: '68%' },
  { label: 'ELO Maximo', value: '5.200' }, { label: 'ELO Atual', value: '4.850' },
  { label: 'Torneios', value: '12' }, { label: 'Premios', value: 'EUR 8.300' },
  { label: 'Kills/Jogo', value: '24.3' }, { label: 'KDA', value: '3.8' },
];

export function ProfileOfficial() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeChip, setActiveChip] = useState('Todos');
  const [activeTab, setActiveTab] = useState('Tudo');
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

  const handleShare = () => {
    if (navigator.share) navigator.share({ title: 'MATZON - Awkiruun', url: window.location.href });
    else navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-10 overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-[60px] flex justify-between items-center px-4 z-[2100] pointer-events-none">
        <button onClick={() => window.history.back()} className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center cursor-pointer pointer-events-auto">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto">
          {isMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
        </button>
      </header>

      {/* MENU */}
      <div ref={menuRef} className="fixed top-[50px] right-4 w-[220px] z-[2000] rounded-[14px] border border-white/10 overflow-hidden transition-all duration-200"
        style={{ backgroundColor: 'rgba(30,30,30,0.95)', backdropFilter: 'blur(40px)', opacity: isMenuOpen ? 1 : 0, transform: isMenuOpen ? 'scale(1)' : 'scale(0.8)', pointerEvents: isMenuOpen ? 'auto' : 'none' }}>
        <button onClick={() => { window.location.href='/configuracoes'; setIsMenuOpen(false); }} className="w-full px-4 py-3.5 flex items-center gap-3 text-[15px] font-medium border-b border-white/10 hover:bg-white/10"><Pencil className="w-5 h-5" /> Editar Perfil</button>
        <button onClick={() => { handleShare(); setIsMenuOpen(false); }} className="w-full px-4 py-3.5 flex items-center gap-3 text-[15px] font-medium border-b border-white/10 hover:bg-white/10"><Share className="w-5 h-5" /> Compartilhar</button>
        <button className="w-full px-4 py-3.5 flex items-center gap-3 text-[15px] font-medium hover:bg-white/10 text-[#FF453A]"><Flag className="w-5 h-5" /> Denunciar</button>
      </div>

      {/* CAPA + AVATAR */}
      <section className="relative pb-5">
        <div className="h-[180px] w-full relative">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" alt="Capa" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-[80px]" style={{ background: 'linear-gradient(to top, black, transparent)' }} />
        </div>
        <div className="relative w-[110px] h-[110px] mx-auto -mt-[55px] mb-2.5 z-10">
          <div className="absolute inset-0 rounded-full border-2 border-[#2563FF] animate-pulse" />
          <img src="https://images.unsplash.com/photo-1614741118830-c7344784e5c7?q=80&w=1000" alt="Avatar" className="w-full h-full rounded-full border-4 border-black object-cover relative z-10" />
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-2 py-0.5 rounded-[10px] border-[3px] border-black z-20" style={{ background: 'linear-gradient(135deg, #2563FF, #7C3AED)' }}>ELITE</span>
        </div>
        <div className="text-center px-4">
          <h1 className="text-[22px] font-bold mb-1 flex items-center justify-center gap-1.5">
            Awkiruun <BadgeCheck className="w-[18px] h-[18px] text-[#0A84FF]" />
          </h1>
          <p className="text-[14px] text-white/70 leading-snug">Pro Valorant Player — MATZON<br/>Dominando o ranking global 🌍</p>
        </div>
      </section>

      {/* STATS ELO */}
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

      {/* SEGUIDORES */}
      <section className="flex justify-center items-center py-3 pb-5">
        {[{ value: '123', label: 'A Seguir' }, { value: '10M', label: 'Seguidores' }, { value: '109', label: 'Posts' }].map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className="w-[1px] h-5 bg-white/15" />}
            <div className="text-center px-5 cursor-pointer">
              <span className="block font-bold text-[17px]">{s.value}</span>
              <span className="text-[12px] text-[#8E8E93]">{s.label}</span>
            </div>
          </React.Fragment>
        ))}
      </section>

      {/* CHIPS */}
      <section className="flex overflow-x-auto gap-2.5 px-4 mb-4 hide-scrollbar snap-x">
        {chips.map((chip) => (
          <button key={chip} onClick={(e) => { setActiveChip(chip); handleScrollCenter(e); }}
            className="px-4 py-2 rounded-[20px] text-[13px] font-semibold whitespace-nowrap transition-colors snap-start"
            style={{ backgroundColor: activeChip === chip ? '#FFF' : '#1C1C1E', color: activeChip === chip ? '#000' : '#8E8E93' }}>
            {chip}
          </button>
        ))}
      </section>

      {/* TABS */}
      <nav className="sticky top-[60px] z-[90] border-b border-white/10 pt-1 flex overflow-x-auto px-4 hide-scrollbar" style={{ backgroundColor: "#000" }}>
        {tabs.map((tab) => (
          <button key={tab} onClick={(e) => { setActiveTab(tab); handleScrollCenter(e); }}
            className="relative py-3 mr-5 text-[15px] font-semibold whitespace-nowrap transition-colors"
            style={{ color: activeTab === tab ? '#FFF' : '#8E8E93' }}>
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(135deg, #2563FF, #7C3AED)' }} />}
          </button>
        ))}
      </nav>

      {/* CONTEUDO POR TAB */}
      <main className="px-4 pt-4">

        {/* TUDO + GALERIA */}
        {(activeTab === 'Tudo' || activeTab === 'Galeria') && (
          <div className="grid grid-cols-2 gap-2">
            {posts.map((post) => (
              <article key={post.id} className="relative rounded-xl overflow-hidden bg-[#1C1C1E] cursor-pointer group" style={{ aspectRatio: '3/4' }}>
                <img src={post.img} alt="Post" className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {(post.views || post.likes) && (
                  <div className="absolute bottom-0 left-0 w-full p-2.5 flex items-center text-[12px] font-semibold text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                    {post.type === 'video' ? <><Play className="w-3.5 h-3.5 mr-1 fill-white" />{post.views}</> : <><Heart className="w-3.5 h-3.5 mr-1 fill-white" />{post.likes}</>}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* TORNEIOS */}
        {activeTab === 'Torneios' && (
          <div className="flex flex-col gap-3">
            {torneios.map((t, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-[16px] cursor-pointer" style={{ backgroundColor: '#18181c' }}>
                <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden flex-shrink-0">
                  <img src={t.img} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[15px] text-white">{t.name}</p>
                  <p className="text-[13px] font-bold" style={{ color: t.color }}>{t.result}</p>
                </div>
                <div className="text-right">
                  <Trophy className="w-4 h-4 mb-1 ml-auto" style={{ color: t.color }} />
                  <p className="text-[13px] font-bold text-white">{t.prize}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ESTATISTICAS */}
        {activeTab === 'Estatisticas' && (
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="p-4 rounded-[16px] text-center" style={{ backgroundColor: '#18181c' }}>
                <p className="font-black text-[22px] text-white">{s.value}</p>
                <p className="text-[12px] font-bold" style={{ color: '#808085' }}>{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* AMIGOS */}
        {activeTab === 'Amigos' && (
          <div className="flex flex-col gap-3">
            {amigos.map((a, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-[16px]" style={{ backgroundColor: '#18181c' }}>
                <div className="relative w-[48px] h-[48px] flex-shrink-0">
                  <img src={a.img} className="w-full h-full rounded-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black" style={{ backgroundColor: a.status === 'Offline' ? '#808085' : a.status === 'Em Jogo' ? '#FFD60A' : '#30D158' }} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[15px] text-white">{a.name}</p>
                  <p className="text-[13px]" style={{ color: '#808085' }}>{a.status} · {a.game}</p>
                </div>
                <button className="px-4 py-2 rounded-full text-[13px] font-bold" style={{ backgroundColor: '#1e1e24', color: '#2563FF' }}>Ver</button>
              </div>
            ))}
          </div>
        )}

        {/* SOBRE */}
        {activeTab === 'Sobre' && (
          <div className="flex flex-col gap-3">
            <div className="p-5 rounded-[16px]" style={{ backgroundColor: '#18181c' }}>
              <p className="font-bold text-[15px] mb-2">Sobre mim</p>
              <p className="text-[14px] leading-relaxed" style={{ color: '#A1A1AA' }}>Pro Valorant Player competindo na MATZON desde 2024. Especialista em Duelist e entry fragging. Disponivel para equipas profissionais.</p>
            </div>
            <div className="p-5 rounded-[16px]" style={{ backgroundColor: '#18181c' }}>
              <p className="font-bold text-[15px] mb-3">Jogos Principais</p>
              {['Valorant — Radiante', 'CS2 — Global Elite', 'LoL — Diamond I'].map((g, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2563FF' }} />
                  <p className="text-[14px]" style={{ color: '#A1A1AA' }}>{g}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-[16px]" style={{ backgroundColor: '#18181c' }}>
              <p className="font-bold text-[15px] mb-3">Conquistas</p>
              {[
                { icon: Trophy, text: '1º Lugar — Champions Cup 2026', color: '#FFD60A' },
                { icon: Users, text: 'Top 1% da plataforma', color: '#2563FF' },
                { icon: Calendar, text: 'Membro desde Janeiro 2024', color: '#7C3AED' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <c.icon className="w-5 h-5 flex-shrink-0" style={{ color: c.color }} />
                  <p className="text-[14px]" style={{ color: '#A1A1AA' }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
      <style dangerouslySetInnerHTML={{__html: '.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}'}} />
    </div>
  );
}
