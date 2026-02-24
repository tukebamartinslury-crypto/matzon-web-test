'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function LandingPage() {
  const router = useRouter();
  const { isLoggedIn, openAuthModal } = useAuth();
  const handleCTA = () => isLoggedIn ? router.push('/dashboard') : openAuthModal();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0c', color: '#fff', display: 'flex', flexDirection: 'column' }}>

      <section style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center bottom, #2563FF60 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, #0a0a0c 100%)' }} />
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 20px 48px' }}>
          <span style={{ fontSize: 10, color: '#808085', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Top Jogador do Mês</span>
          <h1 style={{ fontSize: 'clamp(36px, 10vw, 72px)', fontWeight: 800, lineHeight: 1.0, margin: '8px 0 4px', letterSpacing: '-0.02em' }}>Faker_EU</h1>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#2563FF', marginBottom: 8 }}>4850 ELO</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(s => <Star key={s} style={{ width: 12, height: 12, color: '#f5c518', fill: '#f5c518' }} />)}</div>
            <span style={{ color: '#808085', fontSize: 13 }}>342 vitórias</span>
          </div>
          <p style={{ fontSize: 14, color: '#808085', marginBottom: 28, lineHeight: 1.6 }}>Valorant — Especialista em clutch plays.</p>
          <button onClick={handleCTA}
            style={{ width: '100%', background: 'linear-gradient(135deg, #2563FF, #7C3AED)', color: '#fff', border: 'none', padding: '16px', borderRadius: 30, fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 30px rgba(37,99,255,0.4)' }}>
            {isLoggedIn ? 'Ir para Dashboard' : 'Ir para Dashboard'}
          </button>
        </div>
      </section>

    </div>
  );
}
