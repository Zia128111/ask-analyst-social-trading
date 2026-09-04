'use client';
import React from 'react';
import { FeedScreen, FeedWidgets } from '../../components/screens/Feed';
import { SocialDialog } from '../../components/screens/Comms';
import AppShell from '../../components/AppShell';

export default function FeedPage() {
  const [section, setSection] = React.useState('timeline');
  const [dialog, setDialog] = React.useState(null);
  return (
    <AppShell route="Feed" rail={<FeedWidgets open={setSection} />}>
      <FeedScreen tab={section} setTab={setSection} onShare={() => setDialog('share')} onInvite={() => setDialog('invite')} />
      {dialog ? <SocialDialog mode={dialog} setMode={setDialog} onClose={() => setDialog(null)} /> : null}
    </AppShell>
  );
}
