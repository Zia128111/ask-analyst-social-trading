'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo, Avatar, RailPanel, Card, Button, Icon } from '../lib/ds';
import ACData from '../lib/data';
import { Person } from './parts';
import { FeedWidgets } from './screens/Feed';
import { SocialDialog } from './screens/Comms';

/* One route per screen; the label doubles as the active-nav key. */
export const NAV = [
  { label: 'Feed', href: '/feed', icon: 'home' },
  { label: 'Trending', href: '/trending', icon: 'trending-up' },
  { label: 'News', href: '/news', icon: 'news' },
  { label: 'Discover', href: '/discover', icon: 'compass' },
  { label: 'Leaderboard', href: '/leaderboard', icon: 'trophy' },
  { label: 'Profile', href: '/profile', icon: 'user' },
  { label: 'Pages', href: '/pages', icon: 'store' },
  { label: 'Messages', href: '/messages', icon: 'mail', count: 2 },
  { label: 'Notifications', href: '/notifications', icon: 'bell', count: 4 },
  { label: 'Settings', href: '/settings', icon: 'settings' }
];

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="ac-scheme">
      <span className="ac-scheme__rule" />
      <span className="ac-scheme__label">
        <Icon name="settings" size={17} />Colour Scheme
      </span>
      <div className="ac-scheme__switch">
        <button className="ac-scheme__toggle" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
          <Icon name="sun" size={17} /><span>Light</span>
        </button>
        <button className="ac-scheme__toggle" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
          <Icon name="moon" size={17} /><span>Dark</span>
        </button>
      </div>
    </div>
  );
}

function AppHeader({ unread }) {
  const [q, setQ] = React.useState("");
  return (
    <header className="header__bar">
      <div className="header__inner" style={{ gap: 20 }}>
        <Link className="header__logo" href="/feed" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <Logo src="/assets/ds/logo.svg" height={30} />
        </Link>
        <div className="ac-headsearchwrap">
          <div className="rsearch ac-headsearch" style={{ height: 36 }}>
            <span className="rsearch__icon"><Icon name="search" size={17} /></span>
            <input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search PSX, houses, people" placeholder="Search PSX, houses, people" style={{ fontSize: 13 }} />
          </div>
        </div>
        <div className="header__actions" style={{ gap: 12 }}>
          <Link className="filterbar__icon" href="/notifications" aria-label="Notifications" style={{ position: "relative", border: 0, background: "none" }}>
            <Icon name="bell" size={18} />
            {unread ? <span className="filterbar__count">{unread}</span> : null}
          </Link>
          <Link href="/profile" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Avatar src={ACData.self.img} size={33} />
            <span className="body-sm ac-username" style={{ maxWidth: 96, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ACData.self.name}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function SideNav({ route, theme, setTheme }) {
  return (
    <nav className="ac-side">
      <div className="ac-side__list">
        {NAV.map((item) => {
          const on = item.label === route;
          return (
            <Link key={item.label} href={item.href} aria-current={on ? "page" : undefined}
              className={on ? "ac-sideitem ac-sideitem--on" : "ac-sideitem"}>
              <Icon name={item.icon} size={20} />
              <span className="ac-sideitem__label">{item.label}</span>
              {item.count ? <span className="ac-sidecount">{item.count}</span> : null}
            </Link>
          );
        })}
      </div>
      <ThemeSwitch theme={theme} setTheme={setTheme} />
      <div className="ac-side__foot">
        <Link className="ac-sideuser" href="/profile">
          <img className="avatar" src={ACData.self.img} alt="" width={36} height={36} style={{ width: 36, height: 36 }} />
          <span style={{ display: "flex", flexDirection: "column", minWidth: 0, textAlign: "left" }}>
            <span className="heading-card-title" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ACData.self.name}</span>
            <span className="body-xs" style={{ color: "var(--color-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ACData.self.email}</span>
          </span>
        </Link>
        <a href="#" className="ac-sideitem" onClick={(e) => e.preventDefault()}>
          <Icon name="logout" size={20} /><span className="ac-sideitem__label">Log out</span>
        </a>
      </div>
    </nav>
  );
}

function NetworkRail({ onOpenPerson, onChat, onInvite, top, bottom }) {
  const [q, setQ] = React.useState("");
  const list = ACData.people.filter((p) => p.name.toLowerCase().indexOf(q.toLowerCase()) > -1);
  /* The three story crops from Figma, then the rest of the network as stories. */
  const stories = [
    { name: "You", img: ACData.self.img, add: true },
    { name: "Fahad", img: "/assets/people/story-fahad.png" },
    { name: "Danish", img: "/assets/people/story-danish.png" },
    { name: "Bilal", img: "/assets/people/story-bilal.png" }
  ].concat(ACData.people.slice(0, 8).map((p) => ({ name: p.name.split(" ")[0], img: p.img })));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {top}
      <RailPanel title="Your network" gap={18} footer={<button className="brail__more" onClick={onInvite}>Invite to a slot <Icon name="arrow-right" size={16} /></button>}>        <div className="rsearch" style={{ height: 55, justifyContent: "flex-start", alignItems: "center" }}>
          <span className="rsearch__icon"><Icon name="search" size={17} /></span>
          <input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search people" placeholder="Search people" style={{ fontSize: 14 }} />
        </div>
        <div className="ac-storyrow" tabIndex={0} role="group" aria-label="Stories, scroll for more">
          {stories.map((s, i) => (
            <div key={s.name + i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 52, flex: "0 0 52px" }}>
              <span style={{ position: "relative", display: "inline-block" }}>
                <img className="avatar" src={s.img} alt="" width={44} height={44} style={{ width: 44, height: 44, borderColor: "var(--color-brand-primary)", borderWidth: 1.5 }} />
                {s.add ? <span style={{ position: "absolute", right: -2, bottom: -2, width: 16, height: 16, borderRadius: 999, background: "var(--color-brand-primary)", color: "#fff", fontSize: 11, lineHeight: "15px", textAlign: "center", border: "1.5px solid var(--color-bg-surface)" }}>+</span> : null}
              </span>
              <span className="body-xs" style={{ flex: "none", display: "block", lineHeight: "16px", color: "var(--color-text-secondary)", width: "100%", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</span>
            </div>
          ))}
        </div>
        <div className="ac-netlist" tabIndex={0} role="group" aria-label="Accounts you follow" style={{ display: "flex", flexDirection: "column", overflowY: "auto", marginRight: -6, paddingRight: 6 }}>
          {list.length === 0 ? <span className="brail__empty">No accounts match.</span> : list.map((p, i) => (
            <div key={p.handle} style={{ padding: "9px 0", borderTop: i ? "1px solid var(--color-border-brand)" : "0" }}>
              <Person p={p} size={34} onClick={() => onOpenPerson(p)}
                right={p.online
                  ? <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--color-border-positive)", flex: "none" }} />
                  : <span className="body-xs" style={{ color: "var(--color-text-muted)", flex: "none" }}>{p.seen}</span>} />
            </div>
          ))}
        </div>
      </RailPanel>
      {bottom}
    </div>
  );
}

/* Floating chat popup — a compact version of the Messages thread, so the
   docked chat reads as the same product: white card, grey outline, the thread's
   own bubble and composer treatment. */
function ChatDock({ person, onClose }) {
  const [draft, setDraft] = React.useState("");
  const [msgs, setMsgs] = React.useState([
    { me: false, text: "Have you been watching the cement dispatches this week?", time: "9h ago" },
    { me: true, text: "Yes — north retention held at PKR 1,476/bag, so the margin line survives the volume miss.", time: "9h ago" }
  ]);
  function send() {
    if (!draft.trim()) return;
    setMsgs(msgs.concat([{ me: true, text: draft.trim(), time: "now" }]));
    setDraft("");
  }
  return (
    <aside className="card ac-dock" role="dialog" aria-label={"Chat with " + person.name}>
      <div className="ac-dock__head">
        <Person p={person} size={36} bold sub={person.online ? "Active now" : "Away"} />
        <span className="ac-dock__acts">
          <button className="filterbar__icon" aria-label="Call"><Icon name="phone" size={18} /></button>
          <button className="filterbar__icon" aria-label="Video call"><Icon name="video" size={18} /></button>
          <button className="filterbar__icon" onClick={onClose} aria-label="Close chat"><Icon name="x" size={18} /></button>
        </span>
      </div>
      <div className="ac-dock__body" tabIndex={0} role="log" aria-label="Message history">
        {msgs.map((m, i) => (
          <div key={i} className={"ac-dock__row" + (m.me ? " is-me" : "")}>
            <img className="avatar" src={m.me ? ACData.self.img : person.img} alt="" width={28} height={28} style={{ width: 28, height: 28 }} />
            <span className="ac-dock__stack">
              <span className={"ac-dock__bubble body-sm" + (m.me ? " is-me" : "")}>{m.text}</span>
              <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{m.time}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="ac-dock__foot">
        <div className="ac-dock__inputrow">
          <input className="ac-field ac-dock__input" value={draft} onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
            aria-label={"Message " + person.name} placeholder="Write a message" />
          <button className={"ac-dock__send" + (draft.trim() ? " is-on" : "")} onClick={send} aria-label="Send message" disabled={!draft.trim()}>
            <Icon name="send" size={17} />
          </button>
        </div>
        <div className="ac-dock__tools">
          <button className="ac-dock__tool" aria-label="Attach a report" data-tip="Attach a report"><Icon name="document" size={18} /></button>
          <button className="ac-dock__tool" aria-label="Attach a chart" data-tip="Attach a chart"><Icon name="chart-line" size={18} /></button>
          <button className="ac-dock__tool" aria-label="Tag a ticker" data-tip="Tag a ticker"><Icon name="hash" size={18} /></button>
        </div>
      </div>
    </aside>
  );
}

/* The screen frame: header, left nav, content and one or two rail columns.
   Navigation is real routing (next/link); only the theme, the share dialog and
   the docked chat live in shell state. */
export default function AppShell({ route, rail, wide, children }) {
  const router = useRouter();
  const [theme, setTheme] = React.useState('light');
  const [dialog, setDialog] = React.useState(null);
  const [chat, setChat] = React.useState(null);

  React.useEffect(() => {
    let stored = null;
    try { stored = window.localStorage.getItem('ac-theme'); } catch (e) {}
    if (stored) setTheme(stored);
  }, []);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { window.localStorage.setItem('ac-theme', theme); } catch (e) {}
  }, [theme]);

  const withRail = !wide;
  return (
    <>
      <AppHeader unread={4} />
      <main className="page">
        <div className="ac-shell" style={{ backgroundColor: 'var(--color-bg-surface-alt)' }}>
          <aside className="ac-sidecol"><SideNav route={route} theme={theme} setTheme={setTheme} /></aside>
          <div className="ac-content">
            {withRail ? (
              <div className="layout">
                <div className="layout__main">{children}</div>
                {rail ? <aside className="layout__rail">{rail}</aside> : null}
                <aside className="layout__rail">
                  <NetworkRail onOpenPerson={() => router.push('/profile')} onChat={setChat} onInvite={() => setDialog('invite')} />
                </aside>
              </div>
            ) : children}
          </div>
        </div>
      </main>
      {dialog ? <SocialDialog mode={dialog} setMode={setDialog} onClose={() => setDialog(null)} /> : null}
      {chat ? <ChatDock person={chat} onClose={() => setChat(null)} /> : null}
      {!chat && route === 'Feed' ? (
        <button onClick={() => setChat(ACData.people[2])} className="btn btn--primary ac-chatfab" aria-label={'Message ' + ACData.people[2].name}>
          <Icon name="notes" size={18} />
        </button>
      ) : null}
    </>
  );
}

export { NetworkRail, ChatDock, ThemeSwitch, AppHeader, SideNav };
