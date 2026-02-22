'use client';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { ProfileOfficial } from '@/components/profile/ProfileOfficial';


export default function ProfilePage() {
  const isLoggedIn = useAuthGuard();
  if (!isLoggedIn) return null;

  return (
    <main className="min-h-screen bg-black">
      <ProfileOfficial />
    </main>
  );
}
