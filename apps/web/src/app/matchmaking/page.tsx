'use client';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { Navbar } from '@/components/layout/Navbar';
import { MatchmakingView } from '@/components/matchmaking/MatchmakingView';


export default function MatchmakingPage() {
  const isLoggedIn = useAuthGuard();
  if (!isLoggedIn) return null;

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <MatchmakingView />
    </main>
  );
}
