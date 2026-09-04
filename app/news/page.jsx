'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { NewsScreen } from '../../components/screens/Feed';
import AppShell from '../../components/AppShell';

export default function NewsPage() {
  const router = useRouter();
  /* The chosen story is handed to /article through sessionStorage so the route
     stays shareable without a per-story slug in the prototype. */
  function open(n) {
    try { window.sessionStorage.setItem('ac-story', JSON.stringify(n)); } catch (e) {}
    router.push('/article');
  }
  return (
    <AppShell route="News" wide>
      <NewsScreen onOpen={open} />
    </AppShell>
  );
}
