'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Globe, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MessageCircle, Gamepad2 } from 'lucide-react';

const impactSlides = [
  { number: '2.5M+', label: 'Jogadores Ativos', desc: 'Mais de 2.5 milhões de jogadores competem na plataforma MATZON em todo o mundo.', icon: '👥' },
  { number: '$150K', label: 'Prémios Distribuídos', desc: 'Em prémios distribuídos pelos nossos campeões ao longo das competições globais.', icon: '🏆' },
  { number: '10K+', label: 'Torneios Realizados', desc: 'Mais de 10 mil torneios organizados em múltiplos títulos e categorias.', icon: '⚔️' },
  { number: '15', label: 'Países', desc: 'Países diferentes em 4 continentes diferentes acolheram as Finais MATZON!', icon: '🌍' },
];

const milestones = [
  { year: '2026', img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=300', desc: 'MATZON Finals regressa com edição multi-titulo com as melhores equipas do mundo.' },
  { year: '2025', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300', desc: 'Primeiro MATZON Finals multi-titulo com Rocket League, EA SPORTS FC e Football Manager.' },
];

const gameTitles = [
  { img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=300', info: '3v3 - PC' },
  { img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300', info: '2v2 - PS5 / 1v1 - Mobile' },
  { img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300', info: '1v1 - PC' },
  { img: 'https://images.unsplash.com/photo-1518605368461-1ee7e12f65f0?w=300', info: '2v2 - PS5' },
];

const matzGames = [
  { name: 'MATZON\nRIVALS', bg: 'linear-gradient(135deg, #FF0055, #FF5555)', color: '#fff' },
  { name: 'SUPER LEAGUE\nSOCCER', bg: 'linear-gradient(135deg, #00C853, #69F0AE)', color: '#000' },
  { name: 'MATZON\nHEROES', bg: 'linear-gradient(135deg, #8E24AA, #E040FB)', color: '#fff' },
];

const healthList = [
  { n: 1, text: 'Suporte de performance focado no bem-estar dos jogadores com FITGMR' },
  { n: 2, text: 'Treino MATZON Fit & Saúde Física para jogadores' },
  { n: 3, text: 'Bootcamps FAMEHERGAME para capacitar mulheres no esports' },
  { n: 4, text: 'Iniciativas inclusivas com EveryoneCan, TheRockinR e mais' },
  { n: 5, text: 'Ferramenta de Proteção de Redes Sociais MATZON para criar um espaço online mais seguro' },
];

const faqs = [
  { q: 'O que é a MATZON?', a: 'MATZON é o ecossistema definitivo de esports de futebol digital, com competições, iniciativas comunitárias e uma plataforma global em MATZON.GG.' },
  { q: 'O que é MATZON.GG?', a: 'MATZON.GG é a plataforma online oficial onde podes competir, seguir torneios e ligar-te à comunidade global.' },
  { q: 'Como posso participar?', a: 'Cria uma conta, escolhe o teu jogo e inscreve-te nos torneios disponíveis na plataforma.' },
  { q: 'Quem pode usar MATZON.GG?', a: 'Qualquer jogador de futebol digital, independentemente do nível. Temos competições para todos os níveis.' },
];

export function LandingPage() {
  const router = useRouter();
  const { isLoggedIn, openAuthModal } = useAuth();
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % impactSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#0B111A', color: '#fff', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" alt="Hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,17,26,0.3) 0%, #0B111A 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 20px', marginTop: 100 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 5 }}>Bem-vindo à MATZON!</h1>
          <h2 style={{ fontSize: 16, fontWeight: 700 }}>The Home of Digital Football</h2>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: '0 25px 40px', textAlign: 'center', fontSize: 13, color: '#9AA4B6', lineHeight: 1.6 }}>
        <p style={{ marginBottom: 15 }}>MATZON é a marca oficial para o <strong style={{ color: '#fff' }}>futebol digital</strong> — onde a paixão pelo jogo mais popular do mundo encontra o poder da competição, entretenimento e inovação.</p>
        <p>Através de competições pioneiras e experiências ao vivo, <strong style={{ color: '#fff' }}>MATZON inspira e une uma nova geração sob a bandeira do futebol digital.</strong></p>
      </section>

      {/* IMPACTO CARROSSEL */}
      <section style={{ position: 'relative', padding: '60px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,17,26,0.88)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Globe style={{ width: 32, height: 32, color: '#0075FF', display: 'block', margin: '0 auto 15px' }} />
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 30 }}>Impacto Global da MATZON</h2>
          <div style={{ fontSize: 90, fontWeight: 900, color: '#0075FF', lineHeight: 1, letterSpacing: -5, transition: 'all 0.4s ease' }}>
            {impactSlides[activeSlide].number}
          </div>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginTop: 8, marginBottom: 12 }}>
            {impactSlides[activeSlide].label}
          </div>
          <p style={{ fontSize: 13, color: '#9AA4B6', padding: '0 20px', lineHeight: 1.6, minHeight: 48 }}>
            {impactSlides[activeSlide].desc}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 25 }}>
            <button onClick={() => setActiveSlide(prev => (prev - 1 + impactSlides.length) % impactSlides.length)} style={{ background: 'none', border: 'none', color: '#9AA4B6', cursor: 'pointer' }}>
              <ChevronLeft style={{ width: 16, height: 16 }} />
            </button>
            {impactSlides.map((_, i) => (
              <button key={i} onClick={() => setActiveSlide(i)} style={{ width: i === activeSlide ? 25 : 15, height: 3, background: i === activeSlide ? '#0075FF' : 'rgba(255,255,255,0.2)', borderRadius: 2, border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} />
            ))}
            <button onClick={() => setActiveSlide(prev => (prev + 1) % impactSlides.length)} style={{ background: 'none', border: 'none', color: '#9AA4B6', cursor: 'pointer' }}>
              <ChevronRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section style={{ padding: '50px 25px 30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 15 }}>Uma Rica História de Competições</h2>
        <h3 style={{ color: '#0075FF', fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>MAIS DE 20 ANOS DE EXCELÊNCIA COMPETITIVA</h3>
        <p style={{ fontSize: 13, color: '#9AA4B6', lineHeight: 1.6 }}>Desde o início, a MATZON redefiniu continuamente o que o futebol pode ser. De competições de consola aos <strong style={{ color: '#fff' }}>espetáculos multi-titulo</strong> de hoje, a jornada foi impulsionada por ambição, rivalidade e unidade.</p>
      </section>

      {/* MILESTONES */}
      <section style={{ paddingBottom: 50 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', marginBottom: 15 }}>Marcos MATZON</h2>
        <div style={{ display: 'flex', gap: 20, padding: '20px 25px 40px', overflowX: 'auto', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '60%', left: 0, right: 0, height: 2, backgroundColor: '#0075FF' }} />
          {milestones.map((m, i) => (
            <div key={i} style={{ position: 'relative', minWidth: 220, width: 220, height: 300, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
              <img src={m.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20, textAlign: 'center' }}>
                <h3 style={{ fontSize: 40, fontWeight: 900, marginBottom: 10 }}>{m.year}</h3>
                <p style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.4 }}>{m.desc}</p>
              </div>
              <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%,-50%)', width: 12, height: 12, backgroundColor: '#0075FF', borderRadius: '50%', border: '3px solid #0B111A' }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '0 20px' }}>
          <p style={{ fontSize: 12, color: '#9AA4B6', marginBottom: 15 }}>Explora o historial completo de competições MATZON:</p>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button style={{ backgroundColor: '#0075FF', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Historial Completo</button>
            <span style={{ position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: '#fff', fontSize: 9, fontWeight: 800, padding: '4px 10px', borderRadius: 4, whiteSpace: 'nowrap' }}>EM BREVE</span>
          </div>
        </div>
      </section>

      {/* JOGOS */}
      <section style={{ padding: '50px 20px', backgroundColor: '#131A26' }}>
        <Gamepad2 style={{ width: 32, height: 32, color: '#0075FF', display: 'block', margin: '0 auto 15px' }} />
        <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>Títulos de Jogo de Confiança</h2>
        <p style={{ fontSize: 11, fontWeight: 800, textAlign: 'center', letterSpacing: 1, marginBottom: 20, textTransform: 'uppercase' }}>TÍTULOS DE COMPETIÇÃO MATZON</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 25 }}>
          {gameTitles.map((g, i) => (
            <div key={i} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={g.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', background: 'rgba(0,0,0,0.8)', padding: 8, fontSize: 10, fontWeight: 800 }}>{g.info}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#9AA4B6', textAlign: 'center', lineHeight: 1.6, padding: '0 10px' }}>As competições MATZON abrangem os principais títulos de jogos de futebol, contribuindo para a diversidade do ecossistema global.</p>
      </section>

      {/* MATZON GAMES */}
      <section style={{ padding: '50px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, marginBottom: 20, textTransform: 'uppercase' }}>MATZON GAMES</p>
        <div style={{ display: 'flex', gap: 15, padding: '0 20px 20px', overflowX: 'auto' }}>
          {matzGames.map((g, i) => (
            <div key={i} style={{ minWidth: 140, height: 200, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20, background: g.bg, color: g.color, flexShrink: 0 }}>
              <h2 style={{ fontSize: 18, fontStyle: 'italic', whiteSpace: 'pre-line', margin: 0 }}>{g.name}</h2>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#9AA4B6', padding: '0 20px', lineHeight: 1.6, marginBottom: 25 }}>A MATZON Play Zone está repleta de desafios e quizzes que te ajudam a testar os teus conhecimentos!</p>
        <button style={{ backgroundColor: '#0075FF', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Explorar MATZON Games</button>
      </section>

      {/* EVENTOS */}
      <section style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#131A26' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20 }}>Eventos Líderes da Indústria</h2>
        <div style={{ position: 'relative', height: 200, borderRadius: 12, overflow: 'hidden', marginBottom: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://images.unsplash.com/photo-1540509040827-023e3e4a2eaf?w=800" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #131A26, transparent)' }} />
          <h3 style={{ position: 'relative', zIndex: 1, fontSize: 32, fontWeight: 900 }}>MATZON Finals</h3>
        </div>
        <p style={{ fontSize: 12, color: '#9AA4B6', lineHeight: 1.6, textAlign: 'left', marginBottom: 15 }}>As MATZON Finals são a nossa joia da coroa — o destino final para as equipas que competem em múltiplos títulos, celebrando o melhor do melhor.</p>
        <p style={{ fontSize: 12, color: '#9AA4B6', lineHeight: 1.6, textAlign: 'left', marginBottom: 25 }}>Com milhares de fãs presentes ao longo de múltiplos dias, as MATZON Finals <strong style={{ color: '#fff' }}>estabeleceram padrões na indústria</strong> do esports.</p>
        <button style={{ backgroundColor: '#0075FF', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Tudo sobre as MATZON Finals</button>
      </section>

      {/* COMUNIDADE SAUDÁVEL */}
      <section style={{ padding: '60px 25px', background: 'linear-gradient(to bottom, #0d1b2a, #0B111A)' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', marginBottom: 15 }}>Jogadores saudáveis, Comunidade saudável, Planeta saudável.</h2>
        <p style={{ fontSize: 13, color: '#9AA4B6', lineHeight: 1.6, textAlign: 'center', marginBottom: 30 }}>O compromisso da MATZON vai além do jogo. Através da <strong style={{ color: '#fff' }}>Good Game Promise</strong>, a MATZON está a construir um ecossistema mais saudável e inclusivo para todos.</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 40 }}>
          {healthList.map((h, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 12, color: '#9AA4B6', lineHeight: 1.5 }}>
              <span style={{ backgroundColor: '#0075FF', color: '#fff', width: 20, height: 20, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{h.n}</span>
              {h.text}
            </li>
          ))}
        </ul>
        <div style={{ position: 'relative', display: 'inline-block', width: '100%', textAlign: 'center' }}>
          <button style={{ backgroundColor: '#0075FF', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Descobrir todas as iniciativas</button>
          <span style={{ position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#1a1a1a', color: '#fff', fontSize: 9, fontWeight: 800, padding: '4px 10px', borderRadius: 4, whiteSpace: 'nowrap' }}>EM BREVE</span>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: '50px 20px', backgroundColor: '#131A26' }}>
        <MessageCircle style={{ width: 32, height: 32, color: '#0075FF', display: 'block', margin: '0 auto 15px' }} />
        <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', marginBottom: 20 }}>FAQs</h2>
        <div style={{ marginBottom: 50 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', fontSize: 13, fontWeight: 700, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left' }}>
                <span>{f.q}</span>
                {openFaq === i ? <ChevronUp style={{ width: 16, height: 16, flexShrink: 0 }} /> : <ChevronDown style={{ width: 16, height: 16, flexShrink: 0 }} />}
              </button>
              {openFaq === i && <p style={{ paddingBottom: 20, fontSize: 12, color: '#9AA4B6', lineHeight: 1.6 }}>{f.a}</p>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Contacta-nos</h2>
          <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>Suporte: <a href="mailto:support@matzon.gg" style={{ color: '#0075FF' }}>support@matzon.gg</a></p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>Media: <a href="mailto:media@matzon.gg" style={{ color: '#0075FF' }}>media@matzon.gg</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 20px 20px', backgroundColor: '#0B111A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -1, marginBottom: 30 }}>MATZ<span style={{ fontWeight: 400, fontFamily: 'serif', fontSize: 24 }}>ON</span></div>
        <div style={{ display: 'flex', gap: 40, marginBottom: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, marginBottom: 5 }}>MATZON</h4>
            {['Sobre a MATZON', 'FAMEHERGAME', 'Good Game Promise', 'Registo', 'Eventos'].map((l, i) => (
              <a key={i} href="#" style={{ color: '#9AA4B6', textDecoration: 'none', fontSize: 11, fontWeight: 500 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20, fontSize: 20, color: '#9AA4B6', marginBottom: 30, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 20 }}>
          <span style={{ cursor: 'pointer' }}>𝕏</span>
          <span style={{ cursor: 'pointer' }}>IG</span>
          <span style={{ cursor: 'pointer' }}>TTV</span>
        </div>
        <div style={{ fontSize: 9, color: '#9AA4B6', textAlign: 'center' }}>
          <p>Copyright © 2026 MATZON.GG. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginTop: 10 }}>
            {['Privacidade', 'Termos', 'Cookies'].map((l, i) => <a key={i} href="#" style={{ color: '#9AA4B6', textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </footer>

    </div>
  );
}
