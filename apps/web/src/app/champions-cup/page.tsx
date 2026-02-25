'use client';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/ui/Loading';
import { ChampionsCupView } from '@/components/eventos/ChampionsCupView';

export default function ChampionsCupPage() {
  const { isLoggedIn, isLoading } = useAuthGuard();
  if (isLoading) return <LoadingScreen />;
  if (!isLoggedIn) return null;
  return (
    <main style={{ backgroundColor: '#0B121E', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}><Navbar /></div>
      <ChampionsCupView />
      <Footer />
    </main>
  );
}
