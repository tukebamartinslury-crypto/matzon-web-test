'use client';
import { ProfileOfficial } from '@/components/profile/ProfileOfficial';

export const metadata = {
  title: 'Perfil Awkiruun | MATZON',
  description: 'Pro Valorant Player for MATZON.',
};

export default function ProfilePage() {
  const isLoggedIn = useAuthGuard();
  if (!isLoggedIn) return null;

  return (
    <main className="min-h-screen bg-black">
      <ProfileOfficial />
    </main>
  );
}
