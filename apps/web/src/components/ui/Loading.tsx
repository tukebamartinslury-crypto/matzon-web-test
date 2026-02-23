'use client';
import React from 'react';

export function LoadingScreen() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <span style={{ fontWeight: 900, fontSize: 16, color: '#fff' }}>MZ</span>
        </div>
        <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', borderTopColor: '#2563FF', animation: 'spin 0.7s linear infinite', margin: '0 auto' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}

export function LoadingSpinner({ size = 20 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', borderTopColor: '#2563FF', animation: 'spin 0.7s linear infinite' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
