'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const bracket = [
  { round: 'Oitavos', matches: [
    { p1: 'Jogador A', p2: 'Jogador B', s1: 3, s2: 1, done: true },
    { p1: 'Jogador C', p2: 'Jogador D', s1: 2, s2: 2, done: true },
    { p1: 'Jogador E', p2: 'Jogador F', s1: 0, s2: 0, done: false },
    { p1: 'Jogador G', p2: 'Jogador H', s1: 0, s2: 0, done: false },
  ]},
  { round: 'Quartos', matches: [
    { p1: 'Jogador A', p2: '?', s1: 0, s2: 0, done: false },
    { p1: '?', p2: '?', s1: 0, s2: 0, done: false },
  ]},
  { round: 'Final', matches: [
    { p1: '?', p2: '?', s1: 0, s2: 0, done: false },
  ]},
];

export function ChampionsCupView() {
  const router = useRouter();
  const [tab, setTab] = useState<'info'|'bracket'>('info');

  const tabStyle = (t: string) => ({
    background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700,
    color: tab === t ? '#fff' : '#9AA4B6', padding: '14px 0',
    borderBottom: tab === t ? '3px solid #F59E0B' : '3px solid transparent',
    outline: 'none', whiteSpace: 'nowrap' as const,
  });

  return (
    <div style={{ backgroundColor: '#0B121E', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh', paddingBottom: 80 }}>

      <div style={{ background: 'linear-gradient(180deg,#1A1200 0%,#0B121E 100%)', padding: '80px 20px 24px' }}>
        <button onClick={() => router.push('/eventos')} style={{ background: 'none', border: 'none', color: '#9AA4B6', fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
          ← Voltar aos Eventos
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg,#F59E0B,#D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, boxShadow: '0 0 30px rgba(245,158,11,0.5)', flexShrink: 0 }}>🏆</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Champions Cup</h1>
              <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: '#D97706', color: '#fff', padding: '3px 8px', borderRadius: 6 }}>OFICIAL</span>
            </div>
            <div style={{ fontSize: 12, color: '#9AA4B6', fontWeight: 600 }}>Torneio MATZON • Eliminatórias • Ida e volta</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
          {[{label:'Jogadores',value:'30'},{label:'Formato',value:'Elim.'},{label:'Play-Off',value:'2 mãos'},{label:'Prémio',value:'$255'}].map((s,i) => (
            <div key={i} style={{ backgroundColor: 'rgba(245,158,11,0.15)', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#FCD34D' }}>{s.value}</div>
              <div style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 24, padding: '0 20px', borderBottom: '1px solid #262F44' }}>
        <button style={tabStyle('info')} onClick={() => setTab('info')}>Informações</button>
        <button style={tabStyle('bracket')} onClick={() => setTab('bracket')}>Eliminatórias</button>
      </div>

      <div style={{ padding: '20px' }}>
        {tab === 'info' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { title: '📋 Formato', text: 'Torneio de eliminatórias directas. A fase de Play-Off é disputada em dois jogos (ida e volta). O agregado determina o vencedor.' },
              { title: '👥 Qualificação', text: 'Os 30 melhores jogadores do ranking MATZON qualificam-se para a Champions Cup. O top 16 entra directamente nos oitavos.' },
              { title: '💰 Prémios', items: ['🥇 1º lugar — $100','🥈 2º lugar — $75','🥉 3º lugar — $50','4º lugar — $30'] },
              { title: '📅 Regulamento Play-Off', text: 'Em caso de empate no agregado, disputa-se prolongamento. Se persistir, vai a penáltis. O jogo da 2ª mão é em casa do melhor classificado.' },
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

        {tab === 'bracket' && (
          <div style={{ overflowX: 'auto' }}>
            <div style={{ display: 'flex', gap: 16, minWidth: 600 }}>
              {bracket.map((round, ri) => (
                <div key={ri} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#FCD34D', textTransform: 'uppercase', textAlign: 'center', marginBottom: 4 }}>{round.round}</div>
                  {round.matches.map((m, mi) => (
                    <div key={mi} style={{ backgroundColor: '#151C2B', borderRadius: 10, overflow: 'hidden', border: '1px solid #262F44' }}>
                      {[{name:m.p1,score:m.s1,win:m.done&&m.s1>m.s2},{name:m.p2,score:m.s2,win:m.done&&m.s2>m.s1}].map((player, pi) => (
                        <div key={pi} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderBottom: pi===0?'1px solid #1C2436':'none', backgroundColor: player.win?'rgba(245,158,11,0.08)':'transparent' }}>
                          <span style={{ fontSize: 12, fontWeight: player.win?700:500, color: player.win?'#fff':'#9AA4B6' }}>{player.name}</span>
                          {m.done && <span style={{ fontSize: 13, fontWeight: 800, color: player.win?'#FCD34D':'#9AA4B6' }}>{player.score}</span>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
