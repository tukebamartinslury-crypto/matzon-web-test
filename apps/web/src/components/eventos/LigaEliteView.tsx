'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const seasons = [
  { season: 1, champion: 'Jogador A', matches: 15, prize: '$100' },
  { season: 2, champion: 'Jogador B', matches: 15, prize: '$100' },
];

const standings = [
  { pos: 1, name: 'Jogador A', pts: 38, w: 12, d: 2, l: 1, gf: 34, gc: 12 },
  { pos: 2, name: 'Jogador B', pts: 35, w: 11, d: 2, l: 2, gf: 28, gc: 14 },
  { pos: 3, name: 'Jogador C', pts: 30, w: 9,  d: 3, l: 3, gf: 25, gc: 18 },
  { pos: 4, name: 'Jogador D', pts: 27, w: 8,  d: 3, l: 4, gf: 22, gc: 20 },
  { pos: 5, name: 'Jogador E', pts: 24, w: 7,  d: 3, l: 5, gf: 20, gc: 22 },
];

export function LigaEliteView() {
  const router = useRouter();
  const [tab, setTab] = useState<'info'|'classificacao'|'historico'>('info');

  const tabStyle = (t: string) => ({
    background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700,
    color: tab === t ? '#fff' : '#9AA4B6', padding: '14px 0',
    borderBottom: tab === t ? '3px solid #7C3AED' : '3px solid transparent',
    outline: 'none', whiteSpace: 'nowrap' as const,
  });

  return (
    <div style={{ backgroundColor: '#0B121E', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh', paddingBottom: 80 }}>

      {/* HEADER */}
      <div style={{ background: 'linear-gradient(180deg,#1A1040 0%,#0B121E 100%)', padding: '80px 20px 24px' }}>
        <button onClick={() => router.push('/eventos')} style={{ background: 'none', border: 'none', color: '#9AA4B6', fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
          ← Voltar aos Eventos
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg,#7C3AED,#4F46E5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, boxShadow: '0 0 30px rgba(124,58,237,0.5)', flexShrink: 0 }}>⚽</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Liga Elite</h1>
              <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: '#7C3AED', color: '#fff', padding: '3px 8px', borderRadius: 6 }}>OFICIAL</span>
            </div>
            <div style={{ fontSize: 12, color: '#9AA4B6', fontWeight: 600 }}>Liga oficial MATZON • A cada 10 temporadas</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
          {[{label:'Jogadores',value:'30'},{label:'Jogos/Temp.',value:'15'},{label:'Prémio',value:'$255'},{label:'Periodicidade',value:'10 temp.'}].map((s,i) => (
            <div key={i} style={{ backgroundColor: 'rgba(124,58,237,0.15)', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#A78BFA' }}>{s.value}</div>
              <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TABS */}
      <div style={{ display: 'flex', gap: 24, padding: '0 20px', borderBottom: '1px solid #262F44', overflowX: 'auto' }}>
        <button style={tabStyle('info')} onClick={() => setTab('info')}>Informações</button>
        <button style={tabStyle('classificacao')} onClick={() => setTab('classificacao')}>Classificação</button>
        <button style={tabStyle('historico')} onClick={() => setTab('historico')}>Histórico</button>
      </div>

      <div style={{ padding: '20px' }}>

        {tab === 'info' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { title: '📋 Formato', text: 'Liga a duas voltas com 30 jogadores. Cada jogador enfrenta todos os adversários duas vezes — em casa e fora. Total de 15 partidas por temporada.' },
              { title: '📅 Quando acontece', text: 'A Liga Elite realiza-se a cada 10 temporadas regulares. É o evento mais importante do calendário MATZON.' },
              { title: '💰 Prémios', items: ['🥇 1º lugar — $100','🥈 2º lugar — $75','🥉 3º lugar — $50','4º lugar — $30'] },
              { title: '📊 Qualificação', text: 'Os 30 jogadores com melhor desempenho nas 10 temporadas anteriores qualificam-se automaticamente.' },
            ].map((block, i) => (
              <div key={i} style={{ backgroundColor: '#151C2B', borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{block.title}</div>
                {block.text && <div style={{ fontSize: 13, color: '#9AA4B6', lineHeight: 1.6 }}>{block.text}</div>}
                {block.items && block.items.map((item, j) => (
                  <div key={j} style={{ fontSize: 13, color: '#9AA4B6', padding: '4px 0', borderBottom: j < block.items!.length-1 ? '1px solid #262F44' : 'none' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === 'classificacao' && (
          <div style={{ backgroundColor: '#151C2B', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 40px 30px 30px 30px 40px 40px', gap: 4, padding: '10px 12px', borderBottom: '1px solid #262F44', fontSize: 10, color: '#9AA4B6', fontWeight: 700 }}>
              <span>#</span><span>Jogador</span><span style={{textAlign:'center'}}>PTS</span><span style={{textAlign:'center'}}>V</span><span style={{textAlign:'center'}}>E</span><span style={{textAlign:'center'}}>D</span><span style={{textAlign:'center'}}>GM</span><span style={{textAlign:'center'}}>GS</span>
            </div>
            {standings.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '30px 1fr 40px 30px 30px 30px 40px 40px', gap: 4, padding: '12px', borderBottom: i < standings.length-1 ? '1px solid #1C2436' : 'none', alignItems: 'center', backgroundColor: i === 0 ? 'rgba(124,58,237,0.08)' : 'transparent' }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: i===0?'#A78BFA':i===1?'#9AA4B6':i===2?'#CD7F32':'#fff' }}>{p.pos}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{p.name}</span>
                <span style={{ fontSize: 13, fontWeight: 900, color: '#A78BFA', textAlign: 'center' }}>{p.pts}</span>
                <span style={{ fontSize: 12, color: '#9AA4B6', textAlign: 'center' }}>{p.w}</span>
                <span style={{ fontSize: 12, color: '#9AA4B6', textAlign: 'center' }}>{p.d}</span>
                <span style={{ fontSize: 12, color: '#9AA4B6', textAlign: 'center' }}>{p.l}</span>
                <span style={{ fontSize: 12, color: '#9AA4B6', textAlign: 'center' }}>{p.gf}</span>
                <span style={{ fontSize: 12, color: '#9AA4B6', textAlign: 'center' }}>{p.gc}</span>
              </div>
            ))}
          </div>
        )}

        {tab === 'historico' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {seasons.map((s, i) => (
              <div key={i} style={{ backgroundColor: '#151C2B', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#9AA4B6', fontWeight: 600, marginBottom: 4 }}>Temporada {s.season}</div>
                  <div style={{ fontSize: 15, fontWeight: 800 }}>🏆 {s.champion}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: '#A78BFA', fontWeight: 800 }}>{s.prize}</div>
                  <div style={{ fontSize: 11, color: '#9AA4B6', marginTop: 2 }}>{s.matches} jogos</div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
