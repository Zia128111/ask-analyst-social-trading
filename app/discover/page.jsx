'use client';
import React from 'react';
import { DiscoverScreen } from '../../components/screens/Market';
import { SocialDialog } from '../../components/screens/Comms';
import AppShell from '../../components/AppShell';

export default function DiscoverPage() {
  const [dialog, setDialog] = React.useState(null);
  return (
    <AppShell route="Discover">
      <DiscoverScreen onShare={() => setDialog('share')} />
      {dialog ? <SocialDialog mode={dialog} setMode={setDialog} onClose={() => setDialog(null)} /> : null}
    </AppShell>
  );
}
