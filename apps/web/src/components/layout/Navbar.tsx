'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Trophy, CalendarDays, BarChart2, Users, User } from 'lucide-react';

const menuItems = [
  { icon: Home,         label: 'Dashboard',  href: '/dashboard' },
  { icon: Trophy,       label: 'Torneios',   href: '/torneios' },
  { icon: CalendarDays, label: 'Eventos',    href: '/eventos' },
  { icon: BarChart2,    label: 'Ranking',    href: '/ranking' },
  { icon: Users,        label: 'Comunidade', href: '/comunidade' },
  { icon: User,         label: 'Perfil',     href: '/profile' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router   = useRouter();
  const pathname = usePathname();

  const navigate = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 64,
      backgroundColor: 'rgba(10,10,14,0.92)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      zIndex: 200, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 20px',
    }}>

      {/* ── LOGO ── */}
      <div
        onClick={() => navigate('/dashboard')}
        style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', userSelect: 'none' }}
      >
        {/* Oval MATZ */}
        <div style={{
          width: 72, height: 42, border: '3px solid #fff', borderRadius: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          padding: '3px 3px 3px 3px', position: 'relative',
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%', backgroundColor: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 9, fontWeight: 900, color: '#000', letterSpacing: 0.3 }}>MATZ</span>
          </div>
        </div>
        {/* N */}
        <span style={{ fontSize: 46, fontWeight: 900, color: '#fff', lineHeight: 1, marginLeft: -4, marginTop: -2 }}>N</span>
      </div>

      {/* ── HAMBURGER + MENU FLUTUANTE ── */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

        {/* Botão hamburger */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          style={{
            width: 44, height: 44, borderRadius: '50%', border: 'none',
            backgroundColor: '#fff', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 5, padding: 0, flexShrink: 0,
          }}
        >
          <motion.span animate={{ y: isOpen ? 7 : 0, rotate: isOpen ? 45 : 0 }}
            style={{ display: 'block', width: 18, height: 2.5, backgroundColor: '#000', borderRadius: 2, transformOrigin: 'center' }} />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }}
            style={{ display: 'block', width: 18, height: 2.5, backgroundColor: '#000', borderRadius: 2 }} />
          <motion.span animate={{ y: isOpen ? -7 : 0, rotate: isOpen ? -45 : 0 }}
            style={{ display: 'block', width: 13, height: 2.5, backgroundColor: '#000', borderRadius: 2, transformOrigin: 'center' }} />
        </motion.button>

        {/* Esferas flutuantes */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              style={{
                position: 'absolute', top: 54, right: 0,
                display: 'flex', flexDirection: 'column', gap: 10,
                zIndex: 300,
              }}
            >
              {menuItems.map((item, i) => {
                const active = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: -15, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.5 }}
                    transition={{ delay: i * 0.07, type: 'spring', stiffness: 300, damping: 22 }}
                    onClick={() => navigate(item.href)}
                    title={item.label}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      width: 44, height: 44, borderRadius: '50%', border: 'none',
                      backgroundColor: active ? '#2563FF' : '#fff',
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                      padding: 0,
                    }}
                  >
                    <item.icon size={18} color={active ? '#fff' : '#000'} />
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
