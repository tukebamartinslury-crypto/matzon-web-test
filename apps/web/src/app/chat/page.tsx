'use client';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { Navbar } from '@/components/layout/Navbar';
import { LoadingScreen } from '@/components/ui/Loading';
import { ChatView } from '@/components/chat/ChatView';
export default function ChatPage() {
  const { isLoggedIn, isLoading } = useAuthGuard();
  if (isLoading) return <LoadingScreen />;
  if (!isLoggedIn) return null;
  return (
    <main style={{ backgroundColor: '#0B121E', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}><Navbar /></div>
      <ChatView />
    </main>
  );
}
