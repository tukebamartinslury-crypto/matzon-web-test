'use client';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Plus, ArrowUpRight, ArrowDownLeft, Trophy, CreditCard, Clock } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const transactions = [
  { type: 'in', label: 'Vitória - Champions Cup', amount: '+€50.00', date: 'Hoje 14:32', icon: Trophy },
  { type: 'out', label: 'Inscrição Winter Clash', amount: '-€10.00', date: 'Hoje 10:15', icon: ArrowUpRight },
  { type: 'in', label: 'Depósito', amount: '+€100.00', date: 'Ontem 18:20', icon: ArrowDownLeft },
  { type: 'out', label: 'Subscrição Pro', amount: '-€9.99', date: '1 Mar', icon: CreditCard },
  { type: 'in', label: 'Vitória - Weekend Brawl', amount: '+€25.00', date: '28 Fev', icon: Trophy },
];

export default function WalletPage() {
  const { isLoggedIn, isLoading } = useAuthGuard();
  if (isLoading) return null;
  const [tab, setTab] = useState('all');

  if (!isLoggedIn) return null;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          {/* Balance Card */}
          <div style={{ padding: '32px', borderRadius: 'var(--radius-xl)', background: 'var(--gradient-premium)', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Saldo disponível</p>
            <h2 style={{ margin: '0 0 24px', fontSize: 48, fontWeight: 800, color: '#fff' }}>€155.01</h2>
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{ flex: 1, padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <Plus style={{ width: 16, height: 16 }} /> Depositar
              </button>
              <button style={{ flex: 1, padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <ArrowUpRight style={{ width: 16, height: 16 }} /> Levantar
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
            {[{ label: 'Ganhos', value: '€875', color: '#30D158' }, { label: 'Gastos', value: '€120', color: '#FF453A' }, { label: 'Torneios', value: '18', color: '#2563FF' }].map((s, i) => (
              <div key={i} style={{ padding: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <p style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</p>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Transactions */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-soft)' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Transações</span>
            </div>
            {transactions.map((tx, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < transactions.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: tx.type === 'in' ? 'rgba(48,209,88,0.1)' : 'rgba(255,69,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <tx.icon style={{ width: 18, height: 18, color: tx.type === 'in' ? '#30D158' : '#FF453A' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: 14 }}>{tx.label}</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock style={{ width: 11, height: 11 }} /> {tx.date}
                  </p>
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: tx.type === 'in' ? '#30D158' : '#FF453A' }}>{tx.amount}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
