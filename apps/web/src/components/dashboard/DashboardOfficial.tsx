'use client';
import React, { useState, useRef } from 'react';

const matches = [
  { date: '05 MAY 2026', games: [
    { t1: 'Jordan', f1: 'jo', t2: 'Tajikistan', f2: 'tj', time: '17:00' },
    { t1: 'Bahrain', f1: 'bh', t2: 'Afghanistan', f2: 'af', time: '17:00' },
    { t1: 'Saudi Arabia', f1: 'sa', t2: 'Oman', f2: 'om', time: '17:00' },
    { t1: 'Afghanistan', f1: 'af', t2: 'Saudi Arabia', f2: 'sa', time: '17:30' },
  ]},
  { date: '06 MAY 2026', games: [
    { t1: 'Germany', f1: 'de', t2: 'Bulgaria', f2: 'bg', time: '19:00' },
    { t1: 'Egypt', f1: 'eg', t2: 'Kenya', f2: 'ke', time: '19:00' },
    { t1: 'Italy', f1: 'it', t2: 'France', f2: 'fr', time: '20:00' },
    { t1: 'Brazil', f1: 'br', t2: 'Argentina', f2: 'ar', time: '20:00' },
  ]},
];
const banners = [
  { text: 'MATZON Nations League 2026 — Register Now!', grad: 'linear-gradient(135deg,#4ade80,#eab308)' },
  { text: 'World Cup 2026 Challenger Series — Claim your spot!', grad: 'linear-gradient(135deg,#7c3aed,#3b82f6)' },
  { text: 'MATZON World Cup 2026 - Claim your ranked position!', grad: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
];
const merch = [
  { title: 'MATZON World Cup 25 Cap', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300' },
  { title: 'MATZON World Cup 25 Jersey - Unisex', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300' },
];
const menuItems = ['Perfil','Ranking','Eventos e Torneios','Chat','Comunidade'];
const compact = [
  {f1:'🇻🇳',f2:'🇲🇻',t:'12:00'},{f1:'🇰🇬',f2:'🇳🇵',t:'12:00'},
  {f1:'🇭🇰',f2:'🇱🇦',t:'12:00'},{f1:'🇵🇬',f2:'🇵🇰',t:'12:00'},
  {f1:'🇮🇳',f2:'🇧🇹',t:'12:00'},{f1:'🇲🇴',f2:'🇧🇳',t:'12:00'},
];

export function DashboardOfficial() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Perfil');
  const [activeBanner, setActiveBanner] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => carouselRef.current?.scrollBy({ left: dir * 168, behavior: 'smooth' });

  return (
    <div style={{ backgroundColor: '#0d1016', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh', overflowX: 'hidden', paddingBottom: 40 }}>

      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 89 }} />}
      <nav style={{ position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '100%', maxWidth: 320, height: '100vh', zIndex: 90, display: 'flex', alignItems: 'center', paddingRight: 24, background: 'linear-gradient(90deg,rgba(13,16,22,0) 0%,rgba(13,16,22,0.85) 40%,rgba(13,16,22,1) 100%)', transition: 'right 0.4s cubic-bezier(0.4,0,0.2,1)', pointerEvents: menuOpen ? 'auto' : 'none' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 22, width: '100%' }}>
          {menuItems.map(item => (
            <li key={item} onClick={() => { setActiveMenu(item); setMenuOpen(false); }} style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'right', cursor: 'pointer', marginLeft: 'auto', ...(activeMenu === item ? { backgroundColor: '#fff', color: '#151921', padding: '10px 14px', borderRadius: 6, marginRight: -14 } : {}) }}>{item}</li>
          ))}
        </ul>
      </nav>

      <header style={{ backgroundColor: '#151921', borderRadius: 16, height: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', margin: '12px 16px 16px', position: 'sticky', top: 8, zIndex: 100, boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: -0.8, display: 'flex', alignItems: 'center', position: 'relative', paddingRight: 12 }}>
          MATZON
          <svg viewBox="0 0 100 50" style={{ width: 22, height: 13, fill: '#fff', marginLeft: 3 }}><rect x="0" y="10" width="100" height="8"/><rect x="0" y="25" width="100" height="8"/><rect x="0" y="40" width="100" height="8"/></svg>
          <sup style={{ fontSize: 7, position: 'absolute', top: -3, right: 0, color: 'rgba(255,255,255,0.5)' }}>®</sup>
        </div>
        <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10 }}>
          {menuOpen
            ? <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: '#fff' }}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            : <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: '#fff' }}><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>}
        </button>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ backgroundColor: '#151921', borderRadius: 20, padding: '12px 0', margin: '0 16px 16px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <button onClick={() => scroll(-1)} style={{ position: 'absolute', left: 0, zIndex: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 10, minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}><path d="M15 18l-6-6 6-6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div ref={carouselRef} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', padding: '0 40px', gap: 24, width: '100%' }} className="hide-scrollbar">
              {matches.map((day, di) => (
                <div key={di} style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#8b949e', letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>{day.date}</div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    {day.games.map((g, gi) => (
                      <div key={gi} style={{ display: 'flex', flexDirection: 'column', minWidth: 148, scrollSnapAlign: 'start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <img src={`https://flagcdn.com/w40/${g.f1}.png`} style={{ width: 20, height: 13, borderRadius: 2, objectFit: 'cover' }} alt={g.t1} />
                          <span style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap' }}>{g.t1}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <img src={`https://flagcdn.com/w40/${g.f2}.png`} style={{ width: 20, height: 13, borderRadius: 2, objectFit: 'cover' }} alt={g.t2} />
                          <span style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap' }}>{g.t2}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: '#fff' }}><path d="M5.5 8.5C5.5 5 8 2 12 2s6.5 3 6.5 6.5v4.5l2.5 5.5v2H3v-2l2.5-5.5V8.5z"/></svg>
                          <span style={{ width: 3, height: 3, backgroundColor: '#4b5563', borderRadius: '50%', display: 'inline-block' }} />
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#8b949e' }}>{g.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => scroll(1)} style={{ position: 'absolute', right: 0, zIndex: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 10, minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}><path d="M9 18l6-6-6-6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 44, background: 'linear-gradient(to right,transparent,#151921)', pointerEvents: 'none' }} />
        </div>

        <div style={{ padding: '0 16px', marginBottom: 16 }}>
          <div style={{ width: '100%', height: 220, borderRadius: 16, background: banners[activeBanner].grad, display: 'flex', alignItems: 'flex-end', padding: 20, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.8),transparent)' }} />
            <h2 style={{ position: 'relative', zIndex: 2, fontSize: 18, fontWeight: 800, lineHeight: 1.3, fontFamily: "'Montserrat',sans-serif", color: '#fff', margin: 0 }}>{banners[activeBanner].text}</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15, marginTop: 15 }}>
            <span style={{ fontSize: 16, color: '#8b949e', cursor: 'pointer' }} onClick={() => setActiveBanner(p => Math.max(0,p-1))}>‹</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {banners.map((_,i) => <div key={i} onClick={() => setActiveBanner(i)} style={{ width: i===activeBanner?24:6, height: 6, backgroundColor: i===activeBanner?'#0056e3':'#333b4d', borderRadius: 4, cursor: 'pointer', transition: 'width 0.3s' }} />)}
            </div>
            <span style={{ fontSize: 16, color: '#8b949e', cursor: 'pointer' }} onClick={() => setActiveBanner(p => Math.min(banners.length-1,p+1))}>›</span>
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0 16px 24px', backgroundColor: '#151921', borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }}>
          <div style={{ width: 120, minHeight: 90, flexShrink: 0, backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=300')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 8, right: 8, backgroundColor: '#0056e3', width: 24, height: 24, borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: 11 }}>↗</div>
          </div>
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 11, lineHeight: 1.4, color: '#d1d5db', fontWeight: 500 }}><strong style={{ color: '#fff', fontWeight: 800 }}>MATZON NATIONS LEAGUE</strong> Starting tomorrow with AFRICA, ASIA (WEST) & EUROPE on CONSOLE!</p>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#10b981', textTransform: 'uppercase', marginTop: 8 }}>2 DAYS AGO <span style={{ color: '#8b949e' }}>• BY MATZON</span></div>
          </div>
        </div>

        <h3 style={{ padding: '0 16px 15px', fontSize: 18, fontWeight: 800, fontFamily: "'Montserrat',sans-serif" }}>FeWC 2026 eFootball Console Nations League</h3>
        <div style={{ margin: '0 16px 16px', height: 60, borderRadius: 8, background: 'linear-gradient(135deg,#4ade80,#eab308)', display: 'flex', alignItems: 'center', padding: '0 15px', fontSize: 13, fontWeight: 700, color: '#fff', gap: 10, cursor: 'pointer' }}>
          <div style={{ width: 10, height: 10, backgroundColor: '#ef4444', borderRadius: '50%' }} />
          Follow the MATZON Nations League 2026! →
        </div>

        <div style={{ backgroundColor: '#151921', padding: 15, margin: '0 16px 16px', borderRadius: 12 }}>
          <div style={{ display: 'flex', gap: 15, alignItems: 'center', marginBottom: 15 }}>
            <div style={{ width: 80, height: 50, background: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200') center/cover", borderRadius: 6 }} />
            <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>MATZON World Cup 2026™ ft. eFootball™ console</div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 800, color: '#8b949e', marginBottom: 15, textTransform: 'uppercase' }}>•• 115 TEAMS</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#8b949e', textTransform: 'uppercase', marginBottom: 10 }}>TODAY</div>
          <div style={{ display: 'flex', overflowX: 'auto', borderTop: '1px solid #2a3143', paddingTop: 15 }} className="hide-scrollbar">
            {compact.map((m,i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 80, alignItems: 'center', borderRight: i<compact.length-1?'1px solid #2a3143':'none', padding: '0 8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 16, alignItems: 'center' }}><span>{m.f1}</span><span>{m.f2}</span></div>
                <span style={{ fontSize: 11, fontWeight: 700 }}>{m.t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px 15px' }}>
          <h3 style={{ fontSize: 18, fontFamily: "'Montserrat',sans-serif", fontWeight: 800 }}>All News</h3>
          <a href="#" style={{ fontSize: 12, color: '#0056e3', fontWeight: 600 }}>see all news</a>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div style={{ width: '100%', height: 200, background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', borderRadius: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: "'Montserrat',sans-serif", fontSize: 36, fontWeight: 900, fontStyle: 'italic', textAlign: 'center', lineHeight: 0.9, textTransform: 'uppercase' }}>
            <div>MATZ<span style={{ border: '3px solid #fff', padding: '0 4px', marginLeft: 2, fontFamily: 'serif', fontStyle: 'normal', fontSize: 32 }}>ON</span><br/>WORLD RANKING</div>
          </div>
          <div style={{ padding: '15px 0' }}>
            <div style={{ fontSize: 10, color: '#8b949e', fontWeight: 700, marginBottom: 5 }}>13.04.2026</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>MATZON World Ranking Explainer</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 16px 15px' }}>
          <h3 style={{ fontSize: 18, fontFamily: "'Montserrat',sans-serif", fontWeight: 800 }}>MATZON Merchandise</h3>
          <a href="#" style={{ fontSize: 12, color: '#0056e3', fontWeight: 600 }}>→ Go to MATZON Store</a>
        </div>
        <div style={{ display: 'flex', gap: 15, padding: '0 16px', overflowX: 'auto', scrollSnapType: 'x mandatory' }} className="hide-scrollbar">
          {merch.map((item,i) => (
            <div key={i} style={{ minWidth: 220, backgroundColor: '#151921', borderRadius: 16, overflow: 'hidden', flexShrink: 0, scrollSnapAlign: 'start' }}>
              <div style={{ height: 180, backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <img src={item.img} alt={item.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 15 }}>
                <button style={{ backgroundColor: '#0056e3', color: '#fff', fontSize: 12, fontWeight: 700, padding: '10px 15px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>Buy Now</button>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        <footer style={{ marginTop: 40, padding: '40px 16px', backgroundColor: '#101319', borderTop: '1px solid #1f2533' }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 24, color: '#4b5563', marginBottom: 30 }}>MATZON</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 30, paddingBottom: 30, borderBottom: '1px solid #1f2533' }}>
            {['MATZON','About MATZON','FAMEHERGAME','Good Game Promise','Registration','Events'].map(l => <a key={l} href="#" style={{ fontSize: 12, fontWeight: 700, color: '#8b92a5' }}>{l}</a>)}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15, marginBottom: 20 }}>
            {['Privacy Policy','Cookie Policy','Terms of Service'].map(l => <a key={l} href="#" style={{ fontSize: 11, fontWeight: 600, color: '#4b5563' }}>{l}</a>)}
          </div>
          <div style={{ fontSize: 11, color: '#4b5563' }}>Copyright© 2026 MATZON.GG. All rights reserved.</div>
        </footer>

      </div>
      <style dangerouslySetInnerHTML={{ __html: `.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}` }} />
    </div>
  );
}
