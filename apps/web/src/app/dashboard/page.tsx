'use client';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardOfficial } from '@/components/dashboard/DashboardOfficial';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/ui/Loading';

export default function DashboardPage() {
  const { isLoggedIn, isLoading } = useAuthGuard();
  if (isLoading) return <LoadingScreen />;
  if (!isLoggedIn) return null;
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <DashboardOfficial />
      <Footer />
    </main>
  );
}
