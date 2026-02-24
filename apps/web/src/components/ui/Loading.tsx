'use client';
import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('A carregar...');

  useEffect(() => {
    const texts = ['A carregar...', 'A preparar arena...', 'Quase pronto...'];
    let i = 0;
    const t = setInterval(() => { i++; if (texts[i]) setText(texts[i]); }, 800);
    const p = setInterval(() => {
      setProgress(prev => { if (prev >= 100) { clearInterval(p); return 100; } return prev + Math.random() * 12; });
    }, 100);
    return () => { clearInterval(t); clearInterval(p); };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#0B111A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, marginBottom: 8 }}>
          MATZ<span style={{ fontWeight: 400, fontFamily: 'serif', fontSize: 40 }}>ON</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#0075FF', letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Home of Digital Football</p>
      </div>
      <div style={{ width: 200, height: 2, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ height: '100%', width: `${Math.min(progress, 100)}%`, backgroundColor: '#0075FF', borderRadius: 2, transition: 'width 0.1s ease' }} />
      </div>
      <p style={{ fontSize: 12, color: '#9AA4B6', fontWeight: 500 }}>{text}</p>
    </div>
  );
}

export function LoadingSpinner({ size = 20 }: { size?: number }) {
  return (
    <>
      <div style={{ width: size, height: size, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', borderTopColor: '#0075FF', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
