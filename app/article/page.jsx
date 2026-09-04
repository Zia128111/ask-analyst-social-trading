'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArticleScreen } from '../../components/screens/Article';
import AppShell from '../../components/AppShell';

export default function ArticlePage() {
  const router = useRouter();
  const [story, setStory] = React.useState(null);
  React.useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem('ac-story');
      if (raw) setStory(JSON.parse(raw));
    } catch (e) {}
  }, []);
  return (
    <AppShell route="News" wide>
      <ArticleScreen item={story} onBack={() => router.push('/news')} onOpen={setStory} />
    </AppShell>
  );
}
