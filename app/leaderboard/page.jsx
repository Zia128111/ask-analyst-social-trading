'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { LeaderboardScreen } from '../../components/screens/Market';
import AppShell from '../../components/AppShell';

export default function LeaderboardPage() {
  const router = useRouter();
  return (
    <AppShell route="Leaderboard">
      <LeaderboardScreen onOpenPerson={() => router.push('/profile')} />
    </AppShell>
  );
}
