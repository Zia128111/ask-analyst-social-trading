'use client';
import React from 'react';
import { TrendingScreen } from '../../components/screens/Market';
import AppShell from '../../components/AppShell';

export default function TrendingPage() {
  const [tab, setTab] = React.useState('trades');
  const [view, setView] = React.useState('traded');
  return (
    <AppShell route="Trending">
      <TrendingScreen tab={tab} setTab={setTab} view={view} setView={setView} />
    </AppShell>
  );
}
