'use client';
import React from 'react';
import { PagesScreen } from '../../components/screens/Market';
import AppShell from '../../components/AppShell';

export default function PagesPage() {
  return (
    <AppShell route="Pages">
      <PagesScreen />
    </AppShell>
  );
}
