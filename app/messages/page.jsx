'use client';
import React from 'react';
import { MessagesScreen } from '../../components/screens/Comms';
import AppShell from '../../components/AppShell';

export default function MessagesPage() {
  return (
    <AppShell route="Messages" wide>
      <MessagesScreen />
    </AppShell>
  );
}
