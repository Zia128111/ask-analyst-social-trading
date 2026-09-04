'use client';
import React from 'react';
import { Card, Button, RatingPill, Badge, Icon, Tabs, EmptyState } from '../../lib/ds';
import ACData from '../../lib/data';
import { PanelHead, Person, Empty } from '../parts';
import { ToggleRow } from './Profile';
/* Messages, notifications and the social-trading dialogs. */

function MessagesScreen() {
  const D = ACData;
  const [active, setActive] = React.useState(2);
  const [q, setQ] = React.useState("");
  const [draft, setDraft] = React.useState("");
  const [msgs, setMsgs] = React.useState(D.conversation);
  const [starOnly, setStarOnly] = React.useState(false);
  const [details, setDetails] = React.useState(false);
  const list = D.threads.filter((t) => (!starOnly || t.starred) && t.person.name.toLowerCase().indexOf(q.toLowerCase()) > -1);
  const thread = D.threads[active];

  function send() {
    if (!draft.trim()) return;
    setMsgs(msgs.concat([{ me: true, text: draft.trim(), time: "now" }]));
    setDraft("");
  }

  return (
    <div className="ac-msgs">
      <Card className="card--pad-lg ac-msgcard">
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          <div className="rsearch" style={{ flex: "1 1 auto" }}>
            <span className="rsearch__icon">⌕</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search conversations" placeholder="Search conversations" />
          </div>
          <button className="filterbar__icon" aria-expanded={starOnly} onClick={() => setStarOnly(!starOnly)} aria-label="Starred only"><Icon name="sparkle" size={18} /></button>
        </div>
        <div className="ac-msgscroll" tabIndex={0} role="group" aria-label="Conversations" style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}>
          {list.length === 0 ? <Empty>No conversations match.</Empty> : list.map((t) => {
            const i = D.threads.indexOf(t), on = i === active;
            return (
              <button key={t.person.handle} onClick={() => setActive(i)}
                className={"ac-thread" + (on ? " is-on" : "")}
                style={{ display: "flex", gap: 10, alignItems: "center", padding: "12px 10px", border: 0, cursor: "pointer", textAlign: "left" }}>
                <img className="avatar" src={t.person.img} alt="" width={40} height={40} style={{ width: 40, height: 40 }} />
                <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0, flex: "1 1 auto" }}>
                  <span className="heading-card-title" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.person.name}</span>
                  <span className="body-xs" style={{ color: "var(--color-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.preview}</span>
                </span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flex: "none" }}>
                  <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{t.time}</span>
                  {t.unread ? <span className="filterbar__count" style={{ position: "static" }}>{t.unread}</span> : t.starred ? <span style={{ color: "var(--color-brand-primary)" }}><Icon name="sparkle" size={12} /></span> : null}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      <Card pad={false} className="ac-msgcard" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--color-border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <button className="ac-msghead__who" onClick={() => setDetails(true)} aria-label={"Open details for " + thread.person.name}>
            <Person p={thread.person} bold sub={thread.person.online ? "Active now" : "Last seen " + (thread.person.seen || "today")} />
          </button>
          <div style={{ display: "flex", gap: 4 }}>
            <button className="filterbar__icon" aria-label="Thread notes"><Icon name="notes" size={20} /></button>
            <button className="filterbar__icon" aria-label="Share thread"><Icon name="share" size={20} /></button>
          </div>
        </div>
        <div className="ac-msgscroll" tabIndex={0} role="log" aria-label="Message history" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16, overflowY: "auto" }}>
          <div style={{ textAlign: "center" }}><span className="body-xs" style={{ color: "var(--color-text-muted)" }}>15 August 2026</span></div>
          {msgs.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 10, justifyContent: m.me ? "flex-end" : "flex-start", alignItems: "flex-end" }}>
              {!m.me ? <img className="avatar" src={thread.person.img} alt="" width={32} height={32} style={{ width: 32, height: 32 }} /> : null}
              <div style={{ maxWidth: 520, display: "flex", flexDirection: "column", gap: 4, alignItems: m.me ? "flex-end" : "flex-start" }}>
                <div className="body-md" style={{ padding: "12px 16px", borderRadius: "var(--radius-lg)", background: m.me ? "var(--color-brand-primary)" : "var(--color-bg-brand-subtle)", color: m.me ? "var(--color-text-inverse)" : "var(--color-text-secondary)", border: m.me ? "1px solid var(--color-brand-primary)" : "1px solid var(--color-border-brand)" }}>{m.text}</div>
                <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{m.time}</span>
              </div>
              {m.me ? <img className="avatar" src={D.self.img} alt="" width={32} height={32} style={{ width: 32, height: 32 }} /> : null}
            </div>
          ))}
        </div>
        <div style={{ padding: 20, borderTop: "1px solid var(--color-border-subtle)", display: "flex", gap: 10, alignItems: "center" }}>
          <div className="rsearch" style={{ flex: "1 1 auto" }}>
            <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") send(); }} aria-label="Write a message" placeholder="Write a message" />
          </div>
          <Button variant="primary" icon="arrow-right" onClick={send}>Send</Button>
        </div>
      </Card>
      {details ? <ChatDetails person={thread.person} onClose={() => setDetails(false)} /> : null}
    </div>
  );
}

/* Conversation details — a right-hand drawer off the thread header. Figma
   `Social-Trading/Fahad Raza` (node 6219:11055): 358 wide, 25px radius on the
   left corners only, three stacked 10px panels at 21px padding. */
const CHAT_ACTIONS = [
  { icon: "mail-opened", label: "Mark as unread" },
  { icon: "bell-off", label: "Mute conversation" },
  { icon: "ban", label: "Block" },
  { icon: "trash", label: "Delete chat", tone: "bad" }
];

const CHAT_FILES = [
  { icon: "document", label: "Reports", meta: "85 files · 195 MB" },
  { icon: "chart-line", label: "Charts", meta: "78 files · 149 MB" },
  { icon: "table", label: "Models", meta: "67 files · 723 MB" },
  { icon: "folder", label: "Other", meta: "62 files · 136 MB" }
];

function ChatDetails({ person, onClose }) {
  React.useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="ac-drawer__scrim" onClick={onClose}>
      <aside className="ac-drawer" role="dialog" aria-modal="true" aria-label={"Details for " + person.name} onClick={(e) => e.stopPropagation()}>
        <button className="ac-drawer__x" onClick={onClose} aria-label="Close details"><Icon name="x" size={18} /></button>

        <div className="ac-drawer__panel ac-drawer__who">
          <img className="avatar" src={person.img} alt="" width={64} height={64} style={{ width: 64, height: 64 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
            <span className="heading-card-title" style={{ margin: 0, fontSize: 17 }}>{person.name}</span>
            <span className="body-sm" style={{ color: "var(--color-text-muted)" }}>{person.role || person.handle}</span>
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span className="label-md" style={{ color: "var(--color-text-link)" }}>{person.online ? "Active now" : "Last seen " + (person.seen || "today")}</span>
            {person.online ? <span className="ac-drawer__dot" /> : null}
          </span>
        </div>

        <div className="ac-drawer__panel">
          <h4 className="heading-card-title" style={{ margin: 0 }}>Privacy &amp; support</h4>
          <span className="ac-drawer__rule" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CHAT_ACTIONS.map((a) => (
              <button key={a.label} className={"ac-drawer__act" + (a.tone === "bad" ? " ac-drawer__act--bad" : "")}>
                <Icon name={a.icon} size={18} />
                <span className="body-sm">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="ac-drawer__panel">
          <h4 className="heading-card-title" style={{ margin: 0 }}>Shared files</h4>
          <span className="ac-drawer__rule" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CHAT_FILES.map((f) => (
              <button key={f.label} className="ac-drawer__file">
                <span className="ac-drawer__tile"><Icon name={f.icon} size={18} /></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-start", flex: "1 1 auto", minWidth: 0 }}>
                  <span className="body-sm-bold">{f.label}</span>
                  <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{f.meta}</span>
                </span>
                <Icon name="chevron-right" size={18} />
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function NotificationsScreen({ onOpenPerson }) {
  const D = ACData;
  const [filter, setFilter] = React.useState("all");
  const [state, setState] = React.useState({});
  const kindTone = { report: "brand", follow: "neutral", trade: "positive", mention: "info", comment: "neutral", consensus: "warning" };
  const kindIcon = { report: "document", follow: "sparkle", trade: "compare", mention: "notes", comment: "notes", consensus: "flash" };
  const tabs = [{ key: "all", label: "All" }, { key: "research", label: "Research" }, { key: "social", label: "Social" }];
  const rows = D.notifications.filter((n) =>
    filter === "all" ? true : filter === "research" ? ["report", "consensus", "trade"].indexOf(n.kind) > -1 : ["follow", "mention", "comment"].indexOf(n.kind) > -1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Tabs tabs={tabs} active={filter} onSelect={setFilter} label="Notification filters" />
      <Card className="card--pad-lg">
        <PanelHead icon="bell" title="Notifications" eyebrow={rows.length + " items"} right={<Button>Mark all read</Button>} />
        {rows.length === 0 ? <Empty>Nothing here yet.</Empty> : (
          <div>
            {rows.map((n, i) => (
              <div key={i} className="ac-notif" style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 8px", borderTop: i ? "1px solid var(--color-border-brand)" : "0" }}>
                <img className="avatar" src={n.who.img} alt="" width={58} height={58} style={{ width: 58, height: 58, cursor: "pointer" }} onClick={() => onOpenPerson(n.who)} />
                <div style={{ flex: "1 1 auto", minWidth: 0, display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-start" }}>
                  <p className="body-md" style={{ margin: 0 }}>
                    <strong style={{ cursor: "pointer" }} onClick={() => onOpenPerson(n.who)}>{n.who.name}</strong>{" "}
                    <span style={{ color: "var(--color-text-secondary)" }}>{n.text}</span>
                  </p>
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Badge tone={kindTone[n.kind]} style={{ borderRadius: 50 }}>{n.kind}</Badge>
                    <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{n.time}</span>
                  </span>
                </div>
                {n.action ? (
                  <span onClick={() => setState(Object.assign({}, state, { [i]: true }))}>
                    <Button variant={state[i] || n.action === "Following" ? "default" : "primary"}>{state[i] ? (n.action === "Follow back" ? "Following" : "Done") : n.action}</Button>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

/* ---------- social trading dialogs ---------- */

function SocialDialog({ mode, setMode, person, onClose }) {
  const D = ACData;
  const [picked, setPicked] = React.useState({});
  const [q, setQ] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [slots, setSlots] = React.useState({ portfolio: true, trades: false, watchlist: false });
  const n = Object.keys(picked).filter((k) => picked[k]).length;
  const targets = D.people.filter((p) => p.name.toLowerCase().indexOf(q.toLowerCase()) > -1).slice(0, 6);

  return (
    <div className="sharescrim" onClick={(e) => { if (e.target.classList.contains("sharescrim")) onClose(); }}>
      <div className="sharedlg" style={{ width: mode === "cancel" ? 420 : 586 }}>
        <button className="sharedlg__x" onClick={onClose} aria-label="Close">×</button>

        {mode === "share" ? (
          <>
            <div className="sharedlg__head">
              <h3 className="sharedlg__title">Share with</h3>
              <p className="sharedlg__sub">Send this post, or open a social-trading slot on your book.</p>
            </div>
            <div className="rsearch"><span className="rsearch__icon"><Icon name="search" size={17} /></span><input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search people" placeholder="Search people" /></div>
            <div className="ac-picklist" tabIndex={0} role="group" aria-label="People">
              {targets.length === 0 ? <Empty>No accounts match.</Empty> : targets.map((p) => (
                <label key={p.handle} className={"ac-pick" + (picked[p.handle] ? " is-on" : "")}>
                  <input className="ac-cbx__in" type="checkbox" checked={!!picked[p.handle]} onChange={() => setPicked(Object.assign({}, picked, { [p.handle]: !picked[p.handle] }))} />
                  <img className="avatar" src={p.img} alt="" width={36} height={36} style={{ width: 36, height: 36 }} />
                  <span className="ac-pick__who">
                    <span className="heading-card-title">{p.name}</span>
                    <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{p.role}</span>
                  </span>
                  <span className="ac-cbx" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                  </span>
                </label>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="scope__statlabel">Share links</span>
              <div className="sharedlg__url">
                <input readOnly aria-label="Post link" value="askanalyst.pk/alpha/post/luck-upgrade" />
                <button onClick={() => setCopied(true)} aria-label="Copy link"><Icon name="copy" size={18} /></button>
              </div>
              {copied ? <span className="sharedlg__copied">Link copied</span> : null}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span className="body-sm" style={{ color: "var(--color-text-muted)" }}>{n ? n + " selected" : "No one selected"}</span>
              <div style={{ display: "flex", gap: 10 }}>
                <Button onClick={() => setMode("invite")}>Create share link</Button>
                <Button variant="primary" onClick={() => setMode("sent")}>Send</Button>
              </div>
            </div>
          </>
        ) : null}

        {mode === "invite" ? (
          <>
            <div className="sharedlg__head">
              <h3 className="sharedlg__title">Social trading invite</h3>
              <p className="sharedlg__sub">Choose what an invited account may see. You can revoke a slot at any time.</p>
            </div>
            <div>
              <ToggleRow label="Portfolio weights" note="Allocation only — never amounts" on={slots.portfolio} onChange={(v) => setSlots(Object.assign({}, slots, { portfolio: v }))} />
              <ToggleRow label="Fills as they execute" on={slots.trades} onChange={(v) => setSlots(Object.assign({}, slots, { trades: v }))} />
              <ToggleRow label="Watchlist" on={slots.watchlist} onChange={(v) => setSlots(Object.assign({}, slots, { watchlist: v }))} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span className="scope__statlabel">Invited</span>
              {Object.keys(picked).filter((k) => picked[k]).length === 0
                ? <span className="body-sm" style={{ color: "var(--color-text-muted)" }}>No accounts selected yet.</span>
                : D.people.filter((p) => picked[p.handle]).map((p) => <Person key={p.handle} p={p} size={32} sub={p.handle} />)}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <Button onClick={() => setMode("share")}>Back</Button>
              <Button variant="primary" onClick={() => setMode("sent")}>Send invite</Button>
            </div>
          </>
        ) : null}

        {mode === "sent" ? (
          <>
            <div className="sharedlg__head">
              <h3 className="sharedlg__title">Invite sent</h3>
              <p className="sharedlg__sub">{n ? n + " account" + (n === 1 ? "" : "s") + " invited to your social-trading slots." : "Share link created."}</p>
            </div>
            <p className="callout"><Icon name="flash" size={16} />AskAnalyst is a data platform and does not provide investment recommendations.</p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <Button onClick={() => setMode("group")}>Manage slots</Button>
              <Button variant="primary" onClick={onClose}>Done</Button>
            </div>
          </>
        ) : null}

        {mode === "group" ? (
          <>
            <div className="sharedlg__head">
              <h3 className="sharedlg__title">Social trading slots</h3>
              <p className="sharedlg__sub">Six of sixty-four slots in use on this book.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", maxHeight: 280, overflowY: "auto" }}>
              {D.people.slice(0, 6).map((p, i) => (
                <div key={p.handle} style={{ padding: "12px 0", borderTop: i ? "1px solid var(--color-border-brand)" : "0" }}>
                  <Person p={p} size={36} sub={["Portfolio weights", "Weights + fills", "Watchlist", "Portfolio weights", "Weights + fills", "Watchlist"][i]}
                    right={<Button onClick={() => setMode("cancel")}>Revoke</Button>} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <Button onClick={() => setMode("share")}>Invite more</Button>
              <Button variant="primary" onClick={onClose}>Close</Button>
            </div>
          </>
        ) : null}

        {mode === "cancel" ? (
          <>
            <div className="sharedlg__head">
              <h3 className="sharedlg__title">Revoke this slot?</h3>
              <p className="sharedlg__sub">The account loses access to your weights immediately. Anything already downloaded stays with them.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <Button onClick={() => setMode("group")}>Keep slot</Button>
              <Button variant="primary" onClick={() => setMode("group")}>Revoke</Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export { MessagesScreen, NotificationsScreen, SocialDialog };
