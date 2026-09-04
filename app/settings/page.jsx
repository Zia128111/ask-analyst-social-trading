'use client';
import React from 'react';
import { SettingsScreen } from '../../components/screens/Profile';
import AppShell from '../../components/AppShell';

export default function SettingsPage() {
  const [tab, setTab] = React.useState('profile');
  return (
    <AppShell route="Settings" wide>
      <SettingsScreen tab={tab} setTab={setTab} />
    </AppShell>
  );
}
