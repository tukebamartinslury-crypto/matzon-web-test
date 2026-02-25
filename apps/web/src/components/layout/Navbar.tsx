'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Search, Home, LayoutGrid, User } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const floatingMenuItems = [
    { icon: Home, label: 'Início' },
    { icon: LayoutGrid, label: 'Dashboard' },
    { icon: Trophy, label: 'Torneios' },
    { icon: User, label: 'Perfil' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        <div className="flex items-center justify-between h-full">

          {/* LOGO MATZ/N */}
          <div className="scale-[0.55] sm:scale-[0.65] origin-left">
            <div className="flex items-center gap-[16px] relative" style={{ perspective: '1000px' }}>
              <div
                className="w-[148px] h-[86px] border-[7px] rounded-full flex items-center p-[6px] relative z-10 pointer-events-none transition-colors duration-500"
                style={{ borderColor: isLightMode ? '#000' : '#FFF' }}
              >
                <motion.div
                  className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer z-20 pointer-events-auto shadow-lg"
                  style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                  animate={{ x: isLightMode ? 0 : 62 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  onClick={() => setIsLightMode(!isLightMode)}
                >
                  <span
                    className="text-[14px] font-black tracking-[0.5px] select-none pointer-events-none transition-colors"
                    style={{ color: isLightMode ? '#FFF' : '#000' }}
                  >
                    MATZ
                  </span>
                </motion.div>
              </div>
              <motion.div
                className="text-[95px] font-black leading-[0.8] -ml-1 select-none relative z-0 cursor-pointer hover:opacity-80 transition-colors"
                style={{ color: isLightMode ? '#000' : '#FFF', transformOrigin: 'center center' }}
                animate={{ x: isLightMode ? -100 : 0, scale: isLightMode ? 0.70 : 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                N
              </motion.div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 hover:border-white/20 transition-colors focus-within:border-white/40 w-full max-w-md">
              <Search className="w-4 h-4 text-white/50 mr-2" />
              <input type="text" placeholder="Buscar jogador ou torneio..." className="bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-white/30 w-full" />
            </div>
          </div>

          {/* HAMBURGER + MENU FLUTUANTE */}
          <div className="absolute top-[10px] right-4 sm:right-6 lg:right-8 z-[200] flex flex-col items-end">
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer shadow-xl transition-colors duration-500"
              style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-[24px] h-[24px] relative">
                <motion.span animate={{ top: isOpen ? 10.5 : 4, rotate: isOpen ? 45 : 0 }} className="block w-full h-[3px] absolute left-0 transition-colors duration-500" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                <motion.span animate={{ opacity: isOpen ? 0 : 1, top: 10.5 }} className="block w-full h-[3px] absolute left-0 transition-colors duration-500" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                <motion.span animate={{ top: isOpen ? 10.5 : 17, rotate: isOpen ? -45 : 0 }} className="block w-full h-[3px] absolute left-0 transition-colors duration-500" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
              </div>
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <motion.ul className="absolute top-[70px] right-0 flex flex-col gap-[10px] m-0 p-0 list-none">
                  {floatingMenuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: -20, scale: 0.5 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.5 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                      className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer shadow-xl transition-transform hover:scale-110"
                      style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                      title={item.label}
                    >
                      <item.icon className="w-6 h-6 transition-colors duration-500" style={{ color: isLightMode ? '#FFF' : '#000' }} />
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </nav>
  );
}
