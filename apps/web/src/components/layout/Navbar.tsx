'use client';
import { useRouter, usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Torneios', href: '/torneios' },
  { label: 'Liga Elite', href: '/liga' },
  { label: 'Eventos', href: '/eventos' },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav style={{ backgroundColor: '#0D1625', borderBottom: '1px solid #1E2A3B', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => router.push('/')}>
        <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: -0.5, color: '#fff' }}>
          MATZ<span style={{ fontWeight: 400, fontFamily: 'serif', fontSize: 20 }}>ON</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, overflowX: 'auto' }}>
        {navLinks.map(link => {
          const active = pathname === link.href;
          return (
            <button key={link.href} onClick={() => router.push(link.href)} style={{ background: 'none', border: 'none', color: active ? '#fff' : '#9AA4B6', fontSize: 13, fontWeight: active ? 700 : 500, padding: '6px 12px', borderRadius: 8, cursor: 'pointer', backgroundColor: active ? 'rgba(0,94,250,0.15)' : 'transparent', whiteSpace: 'nowrap' }}>
              {link.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
