'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { NotificationsScreen } from '../../components/screens/Comms';
import AppShell from '../../components/AppShell';

export default function NotificationsPage() {
  const router = useRouter();
  return (
    <AppShell route="Notifications" wide>
      <NotificationsScreen onOpenPerson={() => router.push('/profile')} />
    </AppShell>
  );
}
