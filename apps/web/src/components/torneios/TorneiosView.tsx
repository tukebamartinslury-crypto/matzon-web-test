'use client';
import React, { useState } from 'react';

const tabs = ['Em Destaque', 'Classificação', 'Bracket', 'Sobre'];

const matches = [
  { date: 'HOJE • 21:00', team1: 'MATZON FC', team2: 'Elite Squad', score: '2 - 1', live: true, time: null },
  { date: 'AMANHÃ • 18:00', team1: 'Pro Lions', team2: 'Storm Kings', score: null, time: '18:00' },
  { date: 'QUI • 20:00', team1: 'Cyber Wolves', team2: 'Royal Flash', score: null, time: '20:00' },
];

const standings = [
  { pos: 1, name: 'MATZON FC', j: 6, g: 5, e: 0, d: 1, gd: '+12', pts: 15, form: ['W','W','W','D','W'], qual: 'direct' },
  { pos: 2, name: 'Elite Squad', j: 6, g: 4, e: 1, d: 1, gd: '+8', pts: 13, form: ['W','W','D','W','L'], qual: 'direct' },
  { pos: 3, name: 'Pro Lions', j: 6, g: 3, e: 2, d: 1, gd: '+4', pts: 11, form: ['D','W','W','D','W'], qual: 'playoff' },
  { pos: 4, name: 'Storm Kings', j: 6, g: 3, e: 1, d: 2, gd: '+2', pts: 10, form: ['W','L','W','W','D'], qual: 'playoff' },
  { pos: 5, name: 'Cyber Wolves', j: 6, g: 2, e: 1, d: 3, gd: '-3', pts: 7, form: ['L','W','L','W','L'], qual: '' },
  { pos: 6, name: 'Royal Flash', j: 6, g: 1, e: 2, d: 3, gd: '-5', pts: 5, form: ['L','D','L','W','L'], qual: '' },
  { pos: 7, name: 'Night Hawks', j: 6, g: 1, e: 1, d: 4, gd: '-8', pts: 4, form: ['L','L','W','D','L'], qual: '' },
  { pos: 8, name: 'Alpha Dogs', j: 6, g: 0, e: 2, d: 4, gd: '-10', pts: 2, form: ['L','D','L','L','D'], qual: 'eliminated' },
];

const formColor = (r: string) => r === 'W' ? '#34A853' : r === 'D' ? '#9AA4B6' : '#EA4335';
const qualColor = (q: string) => q === 'direct' ? '#4285F4' : q === 'playoff' ? '#FA7B17' : 'transparent';

// BRACKET UCL STYLE
const bracketRounds = [
  {
    label: 'Quartos de Final',
    matches: [
      { t1: 'MATZON FC', s1: 3, t2: 'Night Hawks', s2: 0, winner: 1, date: '15 Fev' },
      { t1: 'Elite Squad', s1: 2, t2: 'Alpha Dogs', s2: 1, winner: 1, date: '15 Fev' },
      { t1: 'Pro Lions', s1: null, t2: 'Royal Flash', s2: null, winner: 0, date: '21 Fev' },
      { t1: 'Storm Kings', s1: null, t2: 'Cyber Wolves', s2: null, winner: 0, date: '22 Fev' },
    ],
  },
  {
    label: 'Meias-Finais',
    matches: [
      { t1: 'MATZON FC', s1: null, t2: 'Elite Squad', s2: null, winner: 0, date: '28 Fev' },
      { t1: 'TBD', s1: null, t2: 'TBD', s2: null, winner: 0, date: '01 Mar' },
    ],
  },
  {
    label: 'Final',
    matches: [
      { t1: 'TBD', s1: null, t2: 'TBD', s2: null, winner: 0, date: '08 Mar' },
    ],
  },
];

function BracketMatch({ m }: { m: typeof bracketRounds[0]['matches'][0] }) {
  const isDone = m.s1 !== null;
  const isTBD = m.t1 === 'TBD';
  return (
    <div style={{ backgroundColor: '#171E2D', borderRadius: 12, border: '1px solid #222A3B', overflow: 'hidden', opacity: isTBD ? 0.45 : 1, minWidth: 210 }}>
      {/* Data */}
      <div style={{ padding: '6px 12px', borderBottom: '1px solid #222A3B', fontSize: 10, fontWeight: 700, color: '#005EFA', letterSpacing: 1, textTransform: 'uppercase' }}>
        {m.date}
      </div>
      {/* Team 1 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.04)', backgroundColor: isDone && m.winner === 1 ? 'rgba(0,94,250,0.08)' : 'transparent' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#005EFA', flexShrink: 0 }} />
          <span style={{ fontSize: 13, fontWeight: isDone && m.winner === 1 ? 700 : 500, color: isDone && m.winner === 2 ? '#9AA4B6' : '#fff' }}>{m.t1}</span>
        </div>
        <span style={{ fontSize: 15, fontWeight: 800, color: isDone && m.winner === 1 ? '#fff' : '#9AA4B6', marginLeft: 12, minWidth: 16, textAlign: 'right' }}>
          {m.s1 !== null ? m.s1 : '—'}
        </span>
      </div>
      {/* Team 2 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: isDone && m.winner === 2 ? 'rgba(0,94,250,0.08)' : 'transparent' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#7C3AED', flexShrink: 0 }} />
          <span style={{ fontSize: 13, fontWeight: isDone && m.winner === 2 ? 700 : 500, color: isDone && m.winner === 1 ? '#9AA4B6' : '#fff' }}>{m.t2}</span>
        </div>
        <span style={{ fontSize: 15, fontWeight: 800, color: isDone && m.winner === 2 ? '#fff' : '#9AA4B6', marginLeft: 12, minWidth: 16, textAlign: 'right' }}>
          {m.s2 !== null ? m.s2 : '—'}
        </span>
      </div>
    </div>
  );
}

export function TorneiosView() {
  const [activeTab, setActiveTab] = useState('Em Destaque');
  const [bracketView, setBracketView] = useState<'bracket' | 'lista'>('bracket');

  return (
    <div style={{ backgroundColor: '#0B121E', color: '#F8F9FA', fontFamily: "'Inter', sans-serif", minHeight: '100vh', paddingBottom: 40 }}>

      {/* HERO */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden', marginTop: 80 }}>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0B121E 0%, rgba(11,18,30,0.4) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 15, left: 20, zIndex: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#005EFA', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>MATZON • Champions Cup 2026</div>
          <h1 style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>Torneios em Destaque</h1>
        </div>
        <div style={{ position: 'absolute', bottom: 15, right: 20, zIndex: 10, width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #005EFA, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 12 }}>MZ</div>
      </div>{/* TABS */}
      <div style={{ display: 'flex', borderBottom: '1px solid #222A3B', padding: '0 20px', overflowX: 'auto' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: 'none', border: 'none', color: activeTab === tab ? '#F8F9FA' : '#9AA4B6', fontSize: 15, fontWeight: 600, padding: '15px 0', marginRight: 25, cursor: 'pointer', whiteSpace: 'nowrap', borderBottom: activeTab === tab ? '3px solid #005EFA' : '3px solid transparent' }}>{tab}</button>
        ))}
      </div>

      {/* EM DESTAQUE */}
      {activeTab === 'Em Destaque' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{ padding: '25px 20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700 }}>Jogos Ao Vivo & Próximos</h2>
              <a href="#" style={{ color: '#005EFA', fontSize: 13, fontWeight: 500 }}>Ver todos</a>
            </div>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 10 }}>
              {matches.map((m, i) => (
                <div key={i} style={{ backgroundColor: '#171E2D', borderRadius: 12, padding: 12, minWidth: 260, position: 'relative', flexShrink: 0, border: m.live ? '1px solid rgba(255,59,48,0.3)' : '1px solid transparent' }}>
                  <div style={{ fontSize: 11, color: '#9AA4B6', fontWeight: 600, marginBottom: 8 }}>{m.date}</div>
                  {m.live && <div style={{ position: 'absolute', top: 12, right: 12, width: 6, height: 6, backgroundColor: '#FF3B30', borderRadius: '50%' }} />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                      {[m.team1, m.team2].map((t, ti) => (
                        <div key={ti} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600 }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: ti === 0 ? '#005EFA' : '#7C3AED', flexShrink: 0 }} />{t}
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: m.live ? 18 : 13, fontWeight: 700, color: m.live ? '#fff' : '#9AA4B6', marginLeft: 12 }}>{m.score || m.time}</div>
                  </div>
                  {m.live && <div style={{ marginTop: 8, fontSize: 10, fontWeight: 800, color: '#FF3B30', textTransform: 'uppercase', letterSpacing: 1 }}>● Ao Vivo</div>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '25px 20px 0' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 15 }}>Torneios Ativos</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Champions Cup 2026', prize: 'EUR 25.000', teams: 32, badge: 'A decorrer', bc: '#30D158', tc: '#fff', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' },
                { name: 'Pro League Season 3', prize: 'EUR 10.000', teams: 16, badge: 'Inscricoes abertas', bc: '#005EFA', tc: '#fff', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400' },
                { name: 'World Masters 2026', prize: 'EUR 100.000', teams: 64, badge: 'Internacional', bc: '#FFD60A', tc: '#000', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400' },
                { name: 'Night Cup Series', prize: 'EUR 3.000', teams: 8, badge: 'Esgotado', bc: '#FF453A', tc: '#fff', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' },
              ].map((t, i) => (
                <div key={i} style={{ backgroundColor: '#171E2D', borderRadius: 12, overflow: 'hidden', display: 'flex', border: '1px solid #222A3B' }}>
                  <div style={{ width: 80, height: 80, flexShrink: 0 }}>
                    <img src={t.img} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: t.badge === 'Esgotado' ? 'grayscale(60%)' : 'none' }} />
                  </div>
                  <div style={{ padding: '10px 14px', flex: 1 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: t.bc, color: t.tc, padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 4 }}>{t.badge}</span>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{t.name}</div>
                    <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#9AA4B6' }}>
                      <span style={{ color: '#005EFA', fontWeight: 700 }}>{t.prize}</span>
                      <span>{t.teams} equipas</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CLASSIFICAÇÃO */}
      {activeTab === 'Classificação' && (
        <div style={{ padding: '20px', animation: 'fadeIn 0.3s ease' }}>
          <div style={{ backgroundColor: '#171E2D', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '20px 20px 15px', borderBottom: '1px solid #222A3B' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Classificacao</h2>
              <div style={{ fontSize: 11, color: '#9AA4B6' }}>Temporada</div>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>Champions Cup 2026</div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', whiteSpace: 'nowrap' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, padding: '12px 8px 12px 20px', borderBottom: '1px solid #222A3B', textAlign: 'left' }}>POS</th>
                    {['J','G','E','D','DG','PTS'].map(h => (
                      <th key={h} style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, padding: '12px 8px', borderBottom: '1px solid #222A3B', textAlign: 'center', borderLeft: h === 'PTS' ? '1px solid #222A3B' : 'none' }}>{h}</th>
                    ))}
                    <th style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, padding: '12px 8px', borderBottom: '1px solid #222A3B', textAlign: 'center' }}>FORMA</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((s, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '10px 8px 10px 0', borderBottom: '1px solid rgba(255,255,255,0.02)', borderLeft: `3px solid ${qualColor(s.qual)}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 12 }}>
                          <span style={{ width: 20, textAlign: 'center', fontSize: 12, color: '#9AA4B6' }}>{s.pos}</span>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#005EFA' }} />
                          <span style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</span>
                        </div>
                      </td>
                      {[s.j, s.g, s.e, s.d, s.gd].map((v, vi) => (
                        <td key={vi} style={{ padding: '10px 8px', fontSize: 13, textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.02)', color: '#fff' }}>{v}</td>
                      ))}
                      <td style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 700, borderLeft: '1px solid #222A3B', borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: 13 }}>{s.pts}</td>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                          {s.form.map((r, ri) => <span key={ri} style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: formColor(r), display: 'inline-block' }} />)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 20, backgroundColor: '#121825' }}>
              {[{ color: '#4285F4', label: 'Qualificacao Direta' }, { color: '#FA7B17', label: 'Playoff' }, { color: '#EA4335', label: 'Eliminado' }].map((l, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#9AA4B6' }}>
                  <span style={{ width: 8, height: 8, backgroundColor: l.color, borderRadius: 1, display: 'inline-block' }} />{l.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BRACKET UCL STYLE */}
      {activeTab === 'Bracket' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{ padding: '20px 20px 0' }}>
            {/* Toggle */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              {(['bracket', 'lista'] as const).map(v => (
                <button key={v} onClick={() => setBracketView(v)} style={{ flex: 1, backgroundColor: bracketView === v ? '#005EFA' : '#171E2D', color: bracketView === v ? '#fff' : '#9AA4B6', border: 'none', padding: 10, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
                  {v === 'bracket' ? 'Chaveamento' : 'Lista'}
                </button>
              ))}
            </div>

            {/* CHAVEAMENTO */}
            {bracketView === 'bracket' && (
              <div style={{ overflowX: 'auto', paddingBottom: 20 }}>
                <div style={{ display: 'flex', gap: 0, minWidth: 700, alignItems: 'center' }}>
                  {bracketRounds.map((round, ri) => (
                    <React.Fragment key={ri}>
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 220 }}>
                        {/* Round label */}
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#005EFA', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, textAlign: 'center' }}>{round.label}</div>
                        {/* Matches with vertical spacing to align connectors */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: ri === 0 ? 12 : ri === 1 ? 80 : 0, flex: 1 }}>
                          {round.matches.map((m, mi) => (
                            <BracketMatch key={mi} m={m} />
                          ))}
                        </div>
                      </div>
                      {/* Connector arrows between rounds */}
                      {ri < bracketRounds.length - 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '32px 4px', gap: ri === 0 ? 80 : 0 }}>
                          {bracketRounds[ri + 1].matches.map((_, ci) => (
                            <div key={ci} style={{ fontSize: 16, color: '#222A3B' }}>›</div>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                  {/* CAMPEÃO */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 16px' }}>
                    <div style={{ fontSize: 28 }}>🏆</div>
                    <div style={{ fontSize: 10, color: '#FFD60A', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Campeão</div>
                  </div>
                </div>
              </div>
            )}

            {/* LISTA */}
            {bracketView === 'lista' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {bracketRounds.map((round, ri) => (
                  <div key={ri}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#005EFA', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{round.label}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {round.matches.map((m, mi) => <BracketMatch key={mi} m={m} />)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LEGENDA */}
          <div style={{ padding: '20px', marginTop: 16 }}>
            <div style={{ backgroundColor: '#121825', borderRadius: 12, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Legenda</div>
              {[
                { color: '#005EFA', label: 'Equipa classificada' },
                { color: '#34A853', label: 'Vitória' },
                { color: '#EA4335', label: 'Eliminado' },
                { color: '#9AA4B6', label: 'Por jogar / TBD' },
              ].map((l, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#9AA4B6' }}>
                  <span style={{ width: 10, height: 10, backgroundColor: l.color, borderRadius: 2, display: 'inline-block', flexShrink: 0 }} />{l.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SOBRE */}
      {activeTab === 'Sobre' && (
        <div style={{ padding: '25px 20px', color: '#9AA4B6', fontSize: 13, lineHeight: 1.6, animation: 'fadeIn 0.3s ease' }}>
          <h2 style={{ color: '#fff', fontSize: 16, marginBottom: 15, marginTop: 0 }}>Sobre a Champions Cup 2026</h2>
          <p style={{ marginBottom: 15 }}>A Champions Cup e o torneio mais prestigiado da MATZON, reunindo as 32 melhores equipas do mundo pelo titulo supremo e EUR 25.000 em premios.</p>
          <h3 style={{ color: '#fff', fontSize: 14, marginBottom: 8, marginTop: 20 }}>Formato</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 15 }}>
            <li style={{ marginBottom: 6 }}>Fase de grupos — 8 grupos de 4 equipas</li>
            <li style={{ marginBottom: 6 }}>Quartos de Final — eliminacao direta</li>
            <li style={{ marginBottom: 6 }}>Meias-Finais e Final ao vivo</li>
          </ul>
          <h3 style={{ color: '#fff', fontSize: 14, marginBottom: 8, marginTop: 20 }}>Premios</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 15 }}>
            <li style={{ marginBottom: 6 }}>1 Lugar — EUR 15.000</li>
            <li style={{ marginBottom: 6 }}>2 Lugar — EUR 7.000</li>
            <li style={{ marginBottom: 6 }}>3/4 Lugar — EUR 1.500 cada</li>
          </ul>
          <h3 style={{ color: '#fff', fontSize: 14, marginBottom: 8, marginTop: 20 }}>Regras</h3>
          <p>Todos os participantes devem ter conta verificada. Jogos em servidores oficiais com anticheat ativo. Disputas resolvidas pela arbitragem MATZON.</p>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: '@keyframes fadeIn{from{opacity:0}to{opacity:1}}'}} />
    </div>
  );
}
