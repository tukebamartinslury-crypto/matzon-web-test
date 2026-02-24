'use client';
import React from 'react';

const footerLinks = [
  {
    title: 'MATZON',
    links: ['Sobre a MATZON', 'FAMEHERGAME', 'Good Game Promise', 'Registo', 'Eventos', 'Carreiras'],
  },
  {
    title: 'Competições',
    links: ['MATZON Finals', 'Torneios', 'Rankings', 'Matchmaking', 'Leaderboard', 'Historial'],
  },
  {
    title: 'Comunidade',
    links: ['Feed', 'Clas', 'Streamers', 'Blog', 'Discord', 'Parceiros'],
  },
  {
    title: 'Suporte',
    links: ['Centro de Ajuda', 'Contacto', 'Reportar Bug', 'Termos de Uso', 'Privacidade', 'Cookies'],
  },
];

const socials = [
  { label: '𝕏', href: '#' },
  { label: 'IG', href: '#' },
  { label: 'YT', href: '#' },
  { label: 'TTV', href: '#' },
  { label: 'DC', href: '#' },
];

const stats = [
  { value: '2.5M+', label: 'Jogadores' },
  { value: '$150K', label: 'Prémios' },
  { value: '10K+', label: 'Torneios' },
  { value: '15', label: 'Países' },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B111A', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: "'Inter', sans-serif" }}>

      {/* LINKS */}
      <div style={{ padding: '40px 20px 20px' }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -1, marginBottom: 32 }}>
          MATZ<span style={{ fontWeight: 400, fontFamily: 'serif', fontSize: 24 }}>ON</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40 }}>
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((l, j) => (
                  <a key={j} href="#" style={{ color: '#9AA4B6', textDecoration: 'none', fontSize: 12, fontWeight: 500 }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div style={{ backgroundColor: '#131A26', borderRadius: 12, padding: '20px', marginBottom: 32 }}>
          <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>Fica a par de tudo</h4>
          <p style={{ fontSize: 12, color: '#9AA4B6', marginBottom: 14 }}>Recebe novidades sobre torneios e eventos MATZON.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <input type="email" placeholder="O teu email" style={{ flex: 1, padding: '10px 14px', borderRadius: 6, backgroundColor: '#0B111A', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 13, outline: 'none' }} />
            <button style={{ backgroundColor: '#0075FF', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscrever</button>
          </div>
        </div>

        {/* SOCIALS */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href} style={{ color: '#9AA4B6', textDecoration: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{s.label}</a>
          ))}
        </div>

        {/* BOTTOM */}
        <div style={{ fontSize: 10, color: '#9AA4B6', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span>Copyright © 2026 MATZON.GG. All rights reserved.</span>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
            {['Privacidade', 'Termos', 'Cookies', 'Legal'].map((l, i) => (
              <a key={i} href="#" style={{ color: '#9AA4B6', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
