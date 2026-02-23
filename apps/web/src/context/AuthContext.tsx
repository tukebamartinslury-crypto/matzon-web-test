'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  isLoggedIn: boolean; isLoading: boolean;
  login: () => void; logout: () => void;
  showAuthModal: boolean; authTab: 'login' | 'register';
  openAuthModal: (tab?: 'login' | 'register') => void;
  closeAuthModal: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false, isLoading: true,
  login: () => {}, logout: () => {},
  showAuthModal: false, authTab: 'login',
  openAuthModal: () => {}, closeAuthModal: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const s = localStorage.getItem('matzon_auth');
    if (s === 'true') setIsLoggedIn(true);
    setIsLoading(false);
  }, []);

  const login = () => {
    localStorage.setItem('matzon_auth', 'true');
    document.cookie = 'matzon_auth=true; path=/; max-age=604800';
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const logout = () => {
    localStorage.removeItem('matzon_auth');
    document.cookie = 'matzon_auth=; path=/; max-age=0';
    setIsLoggedIn(false);
  };

  const openAuthModal = (tab: 'login' | 'register' = 'login') => { setAuthTab(tab); setShowAuthModal(true); };
  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout, showAuthModal, authTab, openAuthModal, closeAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
