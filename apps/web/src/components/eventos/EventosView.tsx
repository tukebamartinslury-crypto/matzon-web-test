'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const games = [
  { key: 'fm', label: 'GERENTE DE FUTEBOL', color: '#7B1FA2', short: 'FM' },
  { key: 'ufl', label: 'UFL', color: '#E61C3B', short: 'UFL' },
  { key: 'fc', label: 'EA SPORTS FC', color: '#005EFA', short: 'FC' },
];
const featuredMatches = [
  { team1: 'Saudi Arabia', team2: 'France', r1: 'L', r2: 'W', done: true },
  { team1: 'Saudi Arabia', team2: 'Brazil', r1: 'W', r2: 'L', done: true },
  { team1: 'France', team2: 'USA', r1: '', r2: '', done: false },
];
const competitions = [
  { icon: 'trophy', bg: 'linear-gradient(135deg,#FF9800,#F57C00)', name: 'Orange eLeague 2026 - Divisao 1', badge: 'FC' },
  { icon: 'shield', bg: 'linear-gradient(135deg,#005EFA,#003EB0)', name: 'Turk Telekom eSuper Lig', badge: 'FC' },
  { icon: 'cube', bg: 'linear-gradient(135deg,#00BFA5,#00897B)', name: 'ERGO-ePokal com o apoio da DFB', badge: 'FC' },
  { icon: 'flash', bg: 'linear-gradient(135deg,#00E5FF,#00B8D4)', name: 'Evento de playoff', badge: 'FC' },
  { icon: 'trophy', bg: 'linear-gradient(135deg,#FF9800,#F57C00)', name: 'Orange eLeague 2026 - Divisao 2', badge: 'FC' },
];
const recent = [
  { img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=150&auto=format&fit=crop', date: '29.10 - 02.11.25', name: 'Qualificador Comunitario 1', badge: 'FC' },
];
const iconMap: Record<string, string> = { trophy: '🏆', shield: '🛡️', cube: '🎮', flash: '⚡' };

export function EventosView() {
  const [activeGame, setActiveGame] = useState('fc');
  const [search, setSearch] = useState('');
  const [activeEvent, setActiveEvent] = useState<'liga'|'champions'|null>(null);
  const router = useRouter();
  const filtered = competitions.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#0B121E', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh', paddingBottom: 40 }}>

      <div style={{ padding: '80px 20px 20px' }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>Esteja preparado quando o mundo se unir!</h1>
        <div style={{ backgroundColor: '#151C2B', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 12, padding: 15, borderBottom: '1px solid #262F44' }}>
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop" style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>Copa do Mundo MATZON 25 com Rocket League</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#9AA4B6', fontWeight: 600, textTransform: 'uppercase' }}>
                <span>15/12 - 19/12/2025</span><span>•</span><span>16 EQUIPES</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '12px 0 15px 15px' }}>
            <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 700, marginBottom: 10 }}>19.12.2025</div>
            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingRight: 15 }}>
              {featuredMatches.map((m, i) => (
                <div key={i} style={{ backgroundColor: '#1C2436', borderRadius: 8, padding: 10, display: 'flex', alignItems: 'center', gap: 15, minWidth: 180, flexShrink: 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{m.team1}</span>{m.done && <span style={{ color: m.r1==='W'?'#fff':'#9AA4B6', fontWeight: 700 }}>{m.r1}</span>}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{m.team2}</span>{m.done && <span style={{ color: m.r2==='W'?'#fff':'#9AA4B6', fontWeight: 700 }}>{m.r2}</span>}
                    </div>
                  </div>
                  <div style={{ color: '#005EFA', fontSize: 20 }}>{m.done ? '▶' : '›'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ fontSize: 18 }}>🏅</span>
          <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Eventos Oficiais MATZON</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          <div onClick={() => setActiveEvent(activeEvent==='liga'?null:'liga')} style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', border: activeEvent==='liga'?'1px solid #7C3AED':'1px solid #262F44', background: 'linear-gradient(135deg,#1A1040,#0D1625)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px' }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, flexShrink: 0, background: 'linear-gradient(135deg,#7C3AED,#4F46E5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}>⚽</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800 }}>Liga Elite</span>
                  <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: '#7C3AED', color: '#fff', padding: '2px 7px', borderRadius: 5 }}>OFICIAL</span>
                </div>
                <div style={{ fontSize: 11, color: '#9AA4B6', fontWeight: 600 }}>Liga oficial MATZON • A cada 10 temporadas • 30 jogadores</div>
              </div>
              <div style={{ display:'flex', gap:8, alignItems:'center' }}><button onClick={e=>{e.stopPropagation();router.push('/liga-elite')}} style={{ backgroundColor:'#7C3AED', color:'#fff', border:'none', borderRadius:8, padding:'6px 12px', fontSize:11, fontWeight:700, cursor:'pointer' }}>Entrar →</button><div style={{ fontSize:18, color:'#9AA4B6', transform:activeEvent==='liga'?'rotate(90deg)':'rotate(0deg)', transition:'transform 0.2s' }}>›</div></div>
            </div>
            {activeEvent==='liga' && (
              <div style={{ padding: '0 16px 16px', borderTop: '1px solid rgba(124,58,237,0.2)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
                  {[{label:'Participantes',value:'30 jogadores'},{label:'Jogos por temp.',value:'15 partidas'},{label:'Periodicidade',value:'A cada 10 temp.'},{label:'Prémio total',value:'$255'}].map((item,i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(124,58,237,0.1)', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 10, backgroundColor: 'rgba(124,58,237,0.1)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginBottom: 6 }}>DISTRIBUIÇÃO DE PRÉMIOS</div>
                  {[{pos:'🥇 1º',prize:'$100'},{pos:'🥈 2º',prize:'$75'},{pos:'🥉 3º',prize:'$50'},{pos:'4º lugar',prize:'$30'}].map((p,i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                      <span style={{ color: '#ccc' }}>{p.pos}</span><span style={{ color: '#A78BFA', fontWeight: 800 }}>{p.prize}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div onClick={() => setActiveEvent(activeEvent==='champions'?null:'champions')} style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', border: activeEvent==='champions'?'1px solid #F59E0B':'1px solid #262F44', background: 'linear-gradient(135deg,#1A1200,#0D1625)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px' }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, flexShrink: 0, background: 'linear-gradient(135deg,#F59E0B,#D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 20px rgba(245,158,11,0.4)' }}>🏆</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800 }}>Champions Cup</span>
                  <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: '#D97706', color: '#fff', padding: '2px 7px', borderRadius: 5 }}>OFICIAL</span>
                </div>
                <div style={{ fontSize: 11, color: '#9AA4B6', fontWeight: 600 }}>Torneio MATZON • Eliminatorias • 30 jogadores</div>
              </div>
              <div style={{ display:'flex', gap:8, alignItems:'center' }}><button onClick={e=>{e.stopPropagation();router.push('/champions-cup')}} style={{ backgroundColor:'#D97706', color:'#fff', border:'none', borderRadius:8, padding:'6px 12px', fontSize:11, fontWeight:700, cursor:'pointer' }}>Entrar →</button><div style={{ fontSize:18, color:'#9AA4B6', transform:activeEvent==='champions'?'rotate(90deg)':'rotate(0deg)', transition:'transform 0.2s' }}>›</div></div>
            </div>
            {activeEvent==='champions' && (
              <div style={{ padding: '0 16px 16px', borderTop: '1px solid rgba(245,158,11,0.2)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
                  {[{label:'Participantes',value:'30 jogadores'},{label:'Formato',value:'Eliminatorias'},{label:'Play-Off',value:'Ida e volta'},{label:'Prémio total',value:'$255'}].map((item,i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(245,158,11,0.1)', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 10, backgroundColor: 'rgba(245,158,11,0.1)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginBottom: 6 }}>DISTRIBUIÇÃO DE PRÉMIOS</div>
                  {[{pos:'🥇 1º',prize:'$100'},{pos:'🥈 2º',prize:'$75'},{pos:'🥉 3º',prize:'$50'},{pos:'4º lugar',prize:'$30'}].map((p,i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                      <span style={{ color: '#ccc' }}>{p.pos}</span><span style={{ color: '#FCD34D', fontWeight: 800 }}>{p.prize}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, padding: '0 20px', overflowX: 'auto', borderBottom: '1px solid #262F44', marginBottom: 20 }}>
        {games.map(g => (
          <button key={g.key} onClick={() => setActiveGame(g.key)} style={{ background: 'none', border: 'none', color: activeGame===g.key?'#fff':'#9AA4B6', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8, padding: '15px 0', cursor: 'pointer', whiteSpace: 'nowrap', borderBottom: activeGame===g.key?'3px solid #005EFA':'3px solid transparent', outline: 'none' }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, backgroundColor: g.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff', fontWeight: 800 }}>{g.short}</div>
            {g.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, padding: '0 20px', marginBottom: 20 }}>
        <div style={{ flex: 1, backgroundColor: '#1C2436', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 15px', gap: 10 }}>
          <span style={{ color: '#9AA4B6' }}>🔍</span>
          <input type="text" placeholder="Pesquisar todas as competicoes" value={search} onChange={e => setSearch(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: 13, fontWeight: 500, width: '100%', height: 45, outline: 'none' }} />
        </div>
        <button style={{ backgroundColor: '#1C2436', border: 'none', color: '#005EFA', width: 45, height: 45, borderRadius: 8, fontSize: 20, cursor: 'pointer' }}>⚙</button>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 30 }}>
        {filtered.map((c, i) => (
          <div key={i} style={{ backgroundColor: '#151C2B', borderRadius: 12, padding: '12px 15px', display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }}>
            <div style={{ width: 45, height: 45, borderRadius: 8, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{iconMap[c.icon]}</div>
            <div style={{ flex: 1, fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{c.name}</div>
            <div style={{ backgroundColor: '#005EFA', color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 6px', borderRadius: 4 }}>{c.badge}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 15 }}>Competicoes recentemente concluidas</h2>
        {recent.map((r, i) => (
          <div key={i} style={{ backgroundColor: '#151C2B', borderRadius: 12, padding: 8, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }}>
            <img src={r.img} style={{ width: 70, height: 50, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginBottom: 4 }}>{r.date}</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{r.name}</div>
            </div>
            <div style={{ backgroundColor: '#005EFA', color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 6px', borderRadius: 4 }}>{r.badge}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
