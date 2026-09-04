'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ProfileScreen } from '../../components/screens/Profile';
import { SocialDialog } from '../../components/screens/Comms';
import ACData from '../../lib/data';
import AppShell from '../../components/AppShell';

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = React.useState('overview');
  const [dialog, setDialog] = React.useState(null);
  return (
    <AppShell route="Profile" wide>
      <ProfileScreen person={ACData.self} tab={tab} setTab={setTab}
        onShare={() => setDialog('share')} onEdit={() => router.push('/settings')} />
      {dialog ? <SocialDialog mode={dialog} setMode={setDialog} onClose={() => setDialog(null)} /> : null}
    </AppShell>
  );
}
