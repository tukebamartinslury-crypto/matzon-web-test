'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Play, Plus, Star } from 'lucide-react';

export function LandingPage() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(0);
  const [activeTab, setActiveTab] = useState('Torneios');

  

  const players = [
    { name: 'Faker_EU', game: 'Valorant', elo: 4850, wins: 342, img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop', color: '#2563FF' },
    { name: 'S1mple', game: 'CS2', elo: 4720, wins: 298, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop', color: '#7C3AED' },
    { name: 'NiKo', game: 'CS2', elo: 4680, wins: 276, img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop', color: '#06B6D4' },
  ];

  const [activePlayer, setActivePlayer] = useState(0);
  const player = players[activePlayer];

  const tournaments = [
    { name: 'Champions Cup', game: 'Valorant', prize: '€5,000', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop', rating: 4.8, year: 2026, sub: true },
    { name: 'Pro League S3', game: 'LoL', prize: '€10,000', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&auto=format&fit=crop', rating: 4.7, year: 2026, sub: false },
    { name: 'Winter Clash', game: 'CS2', prize: '€2,500', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop', rating: 4.6, year: 2026, sub: false },
    { name: 'Elite Invitational', game: 'Dota 2', prize: '€25,000', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop', rating: 4.9, year: 2026, sub: true },
    { name: 'Weekend Brawl', game: 'Fortnite', prize: '€500', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&auto=format&fit=crop', rating: 4.4, year: 2026, sub: false },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0c', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

      

      {/* MAIN CONTENT */}
      <main style={{  flex: 1, padding: '32px 48px', paddingTop: 80 }}>

        {/* TOP NAV */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <nav style={{ display: 'flex', gap: 32 }}>
            {['Torneios', 'Clãs', 'Eventos', 'Ranking'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 500, color: activeTab === tab ? '#fff' : '#808085', transition: 'color 0.2s', borderBottom: activeTab === tab ? '2px solid #2563FF' : '2px solid transparent', paddingBottom: 4 }}>
                {tab}
              </button>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <button style={{ background: 'transparent', border: 'none', color: '#808085', cursor: 'pointer' }}>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => router.push('/login')}>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#808085' }}>Entrar</span>
              <img src="https://ui-avatars.com/api/?name=User&background=2563FF&color=fff&size=35" style={{ width: 35, height: 35, borderRadius: '50%' }} />
            </div>
          </div>
        </header>

        {/* HERO */}
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 80, position: 'relative', minHeight: 480 }}>
          
          {/* LEFT INFO */}
          <div style={{ maxWidth: 440, zIndex: 10 }}>
            <span style={{ fontSize: 11, color: '#808085', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>🏆 Top Jogador do Mês</span>
            <h1 style={{ fontSize: 'clamp(48px,6vw,72px)', fontWeight: 800, lineHeight: 1.05, margin: '12px 0 20px', letterSpacing: '-0.02em' }}>{player.name}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#808085', letterSpacing: '0.1em' }}>ELO RATING</span>
              <div style={{ display: 'flex', gap: 3 }}>
                {[1,2,3,4,5].map(s => <Star key={s} style={{ width: 14, height: 14, color: '#f5c518', fill: '#f5c518' }} />)}
              </div>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{(player.elo/1000).toFixed(1)}k</span>
            </div>

            <div style={{ fontSize: 13, color: '#808085', marginBottom: 20 }}>{player.game} · 2026 · {player.wins} vitórias</div>

            <p style={{ fontSize: 15, color: '#808085', lineHeight: 1.7, marginBottom: 32 }}>
              Um dos melhores jogadores competitivos da Europa. Especialista em clutch plays e estratégia avançada. ELO máximo atingido: {player.elo.toLocaleString()}.
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
              <button onClick={() => router.push('/login')}
                style={{ background: 'linear-gradient(135deg, #2563FF, #7C3AED)', color: '#fff', border: 'none', padding: '13px 32px', borderRadius: 30, fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 24px rgba(37,99,255,0.4)' }}>
                Começar agora
              </button>
              <button style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', width: 46, height: 46, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Plus style={{ width: 20, height: 20 }} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              {players.map((_, i) => (
                <button key={i} onClick={() => setActivePlayer(i)}
                  style={{ width: i === activePlayer ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === activePlayer ? '#2563FF' : 'rgba(255,255,255,0.2)' }} />
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div style={{ position: 'relative', width: '52%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minHeight: 460 }}>
            {/* BLOB */}
            <div style={{ position: 'absolute', width: 420, height: 420, background: player.color, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5, zIndex: 0, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            
            {/* PLAY BUTTON */}
            <button style={{ position: 'absolute', top: '15%', left: '8%', width: 56, height: 56, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
              <Play style={{ width: 20, height: 20, color: '#fff', fill: '#fff' }} />
            </button>

            {/* HERO IMAGE */}
            <motion.img key={activePlayer} src={player.img}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              style={{ position: 'relative', zIndex: 5, maxHeight: 460, width: '80%', objectFit: 'cover', borderRadius: 24, boxShadow: `0 32px 80px rgba(0,0,0,0.6)` }} />

            {/* THUMBNAILS */}
            <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex', flexDirection: 'column', gap: 10, zIndex: 10 }}>
              {['https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=200','https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200','https://images.unsplash.com/photo-1518770660439-4636190af475?w=200'].map((src, i) => (
                <div key={i} style={{ position: 'relative', width: 90, height: 58, borderRadius: 10, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
                  <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  {i === 2 && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>99+ clips</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TORNEIOS GRID */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700 }}>Torneios em Destaque</h2>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Género','Região','Ano'].map((f,i) => (
                <select key={i} style={{ background: '#18181c', color: '#808085', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 16px', borderRadius: 20, fontSize: 12, outline: 'none', cursor: 'pointer' }}>
                  <option>{f}</option>
                </select>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#18181c', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 16px', borderRadius: 20 }}>
                <input placeholder="Pesquisar" style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: 12, width: 80 }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px,1fr))', gap: 20, marginBottom: 28 }}>
            {tournaments.map((t, i) => (
              <div key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ background: '#18181c', borderRadius: 16, overflow: 'hidden', position: 'relative', height: 240, cursor: 'pointer', transition: 'transform 0.3s', transform: hoveredCard === i ? 'scale(1.03)' : 'scale(1)' }}>
                <img src={t.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: hoveredCard === i ? 0.4 : 0.75, transition: 'opacity 0.3s' }} />
                
                {t.sub && <span style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,159,10,0.85)', color: '#fff', fontSize: 10, padding: '2px 8px', borderRadius: 10, fontWeight: 700 }}>Premium</span>}
                <button style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', width: 26, height: 26, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus style={{ width: 14, height: 14 }} />
                </button>

                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px 14px 14px', background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)', transform: hoveredCard === i ? 'translateY(0)' : 'translateY(20px)', transition: 'transform 0.3s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#f5c518', fontSize: 11, marginBottom: 4 }}>
                    <Star style={{ width: 11, height: 11, fill: '#f5c518' }} /> {t.rating} <span style={{ color: '#808085', marginLeft: 4 }}>{t.year}</span>
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#fff' }}>{t.name}</h3>
                  <div style={{ fontSize: 11, color: '#2563FF', fontWeight: 700, marginBottom: hoveredCard === i ? 8 : 0 }}>{t.prize}</div>
                  {hoveredCard === i && (
                    <button onClick={() => router.push('/torneios')}
                      style={{ width: '100%', background: '#2563FF', color: '#fff', border: 'none', padding: '7px', borderRadius: 12, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                      Inscrever
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* PAGINAÇÃO */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, color: '#808085' }}>
            {['‹','1','2','3','4','...','25','›'].map((p,i) => (
              <button key={i} style={{ width: 32, height: 32, borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: 14, background: p === '1' ? '#2563FF' : 'transparent', color: p === '1' ? '#fff' : '#808085', fontWeight: p === '1' ? 700 : 400 }}>{p}</button>
            ))}
          </div>
        </section>

        {/* PLANOS */}
        <section style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Escolhe o teu plano</h2>
          <p style={{ color: '#808085', fontSize: 14, marginBottom: 48 }}>Compete sem limites. Cancela quando quiseres.</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            {[
              { name: 'Starter', price: '0', period: 'grátis', features: ['5 torneios/mês','Chat básico','ELO básico','Perfil público'], featured: false },
              { name: 'Pro', price: '9.99', period: '/mês', features: ['Torneios ilimitados','Analytics avançado','Badge Pro','Sem anúncios','Suporte 24/7'], featured: true },
              { name: 'Elite', price: '24.99', period: '/mês', features: ['Tudo do Pro','Torneios exclusivos','Coaching IA','Aura exclusiva','Acesso antecipado'], featured: false },
            ].map((plan, i) => (
              <div key={i} style={{ background: plan.featured ? '#1a1a22' : '#18181c', borderRadius: 20, padding: '32px 28px', width: 260, textAlign: 'left', border: plan.featured ? '1px solid rgba(37,99,255,0.4)' : '1px solid rgba(255,255,255,0.05)', transform: plan.featured ? 'scale(1.05)' : 'scale(1)', boxShadow: plan.featured ? '0 0 40px rgba(37,99,255,0.15)' : 'none' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{plan.name}</h3>
                <div style={{ fontSize: 34, fontWeight: 800, color: '#2563FF', marginBottom: 20 }}>
                  €{plan.price}<span style={{ fontSize: 14, color: '#808085', fontWeight: 400 }}>{plan.period}</span>
                </div>
                <ul style={{ listStyle: 'none', marginBottom: 28 }}>
                  {plan.features.map((f,fi) => (
                    <li key={fi} style={{ fontSize: 13, color: '#808085', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563FF', display: 'inline-block', flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
                {plan.featured && (
                  <button onClick={() => router.push('/subscricoes')}
                    style={{ width: '100%', background: 'linear-gradient(135deg, #2563FF, #7C3AED)', color: '#fff', border: 'none', padding: '13px', borderRadius: 20, fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 5px 20px rgba(37,99,255,0.35)' }}>
                    Subscrever
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
