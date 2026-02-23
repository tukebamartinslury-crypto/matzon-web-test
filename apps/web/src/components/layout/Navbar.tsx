'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Home, LayoutGrid, User, MessageCircle, Zap, Swords, Users, CalendarDays, Settings, Shield, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) setVisible(true);
      else if (currentY > lastY + 5) { setVisible(false); setIsOpen(false); }
      else if (currentY < lastY - 5) setVisible(true);
      setLastY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const floatingMenuItems = [
    { icon: Home, label: 'Início', href: '/' },
    { icon: LayoutGrid, label: 'Dashboard', href: '/dashboard' },
    { icon: Zap, label: 'Match', href: '/matchmaking' },
    { icon: Swords, label: 'Duelo', href: '/duelo' },
    { icon: Trophy, label: 'Torneios', href: '/torneios' },
    { icon: CalendarDays, label: 'Eventos', href: '/eventos' },
    { icon: Users, label: 'Comunidade', href: '/comunidade' },
    { icon: MessageCircle, label: 'Chat', href: '/chat' },
    { icon: User, label: 'Perfil', href: '/perfil' },
    { icon: Wallet, label: 'Wallet', href: '/wallet' },
    { icon: Settings, label: 'Definições', href: '/configuracoes' },
    { icon: Shield, label: 'Admin', href: '/admin' },
  ];

  const navigate = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <motion.div
      className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
      animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between h-20">

        {/* LOGO */}
        <div className="scale-[0.55] sm:scale-[0.65] origin-left cursor-pointer"
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          onClick={() => navigate('/')}
        >
          <div className="flex items-center gap-[16px]">
            <div className="w-[148px] h-[86px] rounded-full flex items-center p-[6px] pointer-events-none"
              style={{ border: '7px solid #FFFFFF' }}>
              <motion.div
                className="w-[60px] h-[60px] rounded-full flex justify-center items-center"
                style={{ backgroundColor: '#FFFFFF' }}
                animate={{ x: logoHover ? 0 : 62 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              >
                <span className="text-[14px] font-black tracking-[0.5px] select-none" style={{ color: '#000000' }}>MATZ</span>
              </motion.div>
            </div>
            <motion.div
              className="text-[95px] font-black leading-[0.8] -ml-1 select-none"
              style={{ color: '#FFFFFF', transformOrigin: 'center center' }}
              animate={{ x: logoHover ? -100 : 0, scale: logoHover ? 0.70 : 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              N
            </motion.div>
          </div>
        </div>

        {/* LOGIN / LOGOUT */}
        {!isLoggedIn ? (
          <motion.button
            onClick={() => navigate('/')}
            className="px-5 py-2 rounded-full text-sm font-bold text-black bg-white mr-3"
            whileTap={{ scale: 0.95 }}
          >
            Entrar
          </motion.button>
        ) : null}

        {/* HAMBURGUER - so logado */}
        {isLoggedIn && (
        <div className="flex flex-col items-end z-[999]">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer shadow-xl"
            style={{ backgroundColor: '#FFFFFF' }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-[20px] h-[20px] relative">
              <motion.span animate={{ top: isOpen ? 8.5 : 3, rotate: isOpen ? 45 : 0 }} className="block w-full h-[2.5px] absolute left-0" style={{ backgroundColor: '#000000' }} />
              <motion.span animate={{ opacity: isOpen ? 0 : 1, top: 8.5 }} className="block w-full h-[2.5px] absolute left-0" style={{ backgroundColor: '#000000' }} />
              <motion.span animate={{ top: isOpen ? 8.5 : 14, rotate: isOpen ? -45 : 0 }} className="block w-full h-[2.5px] absolute left-0" style={{ backgroundColor: '#000000' }} />
            </div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.ul className="absolute top-[60px] right-0 flex flex-col gap-[10px] m-0 p-0 list-none">
                {floatingMenuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ delay: index * 0.06, type: "spring", stiffness: 260, damping: 20 }}
                    onClick={() => navigate(item.href)}
                    className="flex items-center gap-3 px-4 h-[46px] rounded-full cursor-pointer shadow-xl hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#FFFFFF', minWidth: 140 }}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" style={{ color: '#000000' }} />
                    <span className="text-sm font-semibold" style={{ color: '#000000' }}>{item.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>}

      </div>
    </motion.div>
  );
}
