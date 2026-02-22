'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Play, Plus, Star, Search } from 'lucide-react';

export function LandingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Torneios');
  const [activePlayer, setActivePlayer] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const players = [
    { name: 'Faker_EU', game: 'Valorant', elo: 4850, wins: 342, img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop', color: '#2563FF' },
    { name: 'S1mple', game: 'CS2', elo: 4720, wins: 298, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop', color: '#7C3AED' },
    { name: 'NiKo', game: 'CS2', elo: 4680, wins: 276, img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop', color: '#06B6D4' },
  ];

  const player = players[activePlayer];

  const tournaments = [
    { name: 'Champions Cup', game: 'Valorant', prize: '€5,000', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop', rating: 4.8, year: 2026, sub: true },
    { name: 'Pro League S3', game: 'LoL', prize: '€10,000', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&auto=format&fit=crop', rating: 4.7, year: 2026, sub: false },
    { name: 'Winter Clash', game: 'CS2', prize: '€2,500', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop', rating: 4.6, year: 2026, sub: false },
    { name: 'Elite Invitational', game: 'Dota 2', prize: '€25,000', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop', rating: 4.9, year: 2026, sub: true },
    { name: 'Weekend Brawl', game: 'Fortnite', prize: '€500', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&auto=format&fit=crop', rating: 4.4, year: 2026, sub: false },
  ];
