'use client';
import React from 'react';
import { Card, Button, RatingPill, Badge, Icon, Tabs, StatBlock, EmptyState, ConsensusTable } from '../../lib/ds';
import ACData from '../../lib/data';
import { Delta, AreaChart, Donut, PanelHead, TfChips, SegToggle, RuledTable, Ticker, Person, CallPill, Empty } from '../parts';
import { Post } from './Feed';
/* Profile surfaces and settings. */

function ProfileHeader({ person, onEdit, isSelf }) {
  const [following, setFollowing] = React.useState(false);
  return (
    <Card pad={false} className="ac-profilehead">
      <div style={{ position: "relative" }}>
        <img src="assets/cover-plant.jpg" alt="" style={{ width: "100%", height: 220, objectFit: "cover", display: "block", borderTopLeftRadius: 14, borderTopRightRadius: 14 }} />
        <div style={{ position: "absolute", right: 20, bottom: 16 }}>
          {isSelf ? <Button icon="copy">Edit cover photo</Button> : null}
        </div>
      </div>
      <div style={{ padding: "0 30px 24px", display: "flex", alignItems: "flex-end", gap: 20, flexWrap: "wrap", height: 183 }}>
        <img className="avatar" src={person.img} alt="" width={197} height={197} style={{ width: 197, height: 197, marginTop: -56, border: "4px solid var(--color-bg-surface)", zIndex: 14 }} />
        <div style={{ flex: "1 1 260px", minWidth: 0, paddingBottom: 4, height: 126 }}>
          <h2 className="display-lg" style={{ margin: 0, fontSize: 32 }}>{person.name}</h2>
          <p className="body-lg" style={{ margin: "2px 0 0", color: "var(--color-text-secondary)" }}>{person.role}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
            <RatingPill tone="neutral">{person.handle}</RatingPill>
            <RatingPill tone="brand">↗ +10.5% YTD</RatingPill>
            <RatingPill tone="neutral">Cement · Banks · E&P</RatingPill>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, paddingBottom: 4 }}>
          {isSelf
            ? <><Button variant="icon" icon="eye" /><Button icon="copy" onClick={onEdit}>Edit basic info</Button></>
            : <><Button icon="notes">Message</Button><Button variant={following ? "default" : "primary"} onClick={() => setFollowing(!following)}>{following ? "Following" : "Follow"}</Button></>}
        </div>
      </div>
    </Card>
  );
}

function ReturnsCard() {
  const [mode, setMode] = React.useState("Cumulative");
  const rows = [{ label: "Year to date", v: 10.5 }, { label: "1 year", v: 20.3 }, { label: "3 year", v: 55.6 }, { label: "5 year", v: 110.9 }];
  return (
    <Card className="card--pad-lg" style={{ display: "flex", flexDirection: "column" }}>
      <PanelHead icon="compare" title="Portfolio returns" eyebrow="Net of fees" />
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
        {rows.map((r, i) => (
          <div key={r.label} style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "10px 0", borderTop: i ? "1px solid var(--color-border-brand)" : "0" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-primary)", flex: "none" }}><Icon name="arrow-up-right" size={15} /></span>
              <span className="body-md" style={{ color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>{r.label}</span>
            </span>
            <strong className="heading-h2 tabular" style={{ color: "var(--color-text-positive-strong)" }}>{mode === "Cumulative" ? "+" + r.v + "%" : "+" + (r.v / 3).toFixed(1) + "%"}</strong>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
        <SegToggle options={["Annual", "Cumulative"]} value={mode} onChange={setMode} />

      </div>
    </Card>
  );
}

function HoldingStrip() {
  const D = ACData;
  return (
    <Card className="card--pad-lg">
      <PanelHead icon="book" title="Your portfolio" eyebrow="Six holdings" right={<a className="rail__all" href="#">Full book <Icon name="arrow-right" size={16} /></a>} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16 }}>
        {D.holdings.slice(0, 6).map((h) => (
          <div key={h.sym} className="card card--panel ac-hoverlift" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <Ticker sym={h.sym} size={26} />
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
              <span className="scope__statlabel">Allocation</span>
              <span className="body-16-bold-20_8 tabular">{h.alloc}%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <span className="heading-h4 tabular">{h.px}</span>
              <Delta value={h.gl} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* Portfolio performance — every stat is derived from the selected timeframe's
   series, so switching 1D…5Y recomputes the chart, the labels and all four
   figures rather than showing one fixed set. */
function PerformancePanel({ onShare }) {
  const D = ACData;
  const [tf, setTf] = React.useState("1Y");
  const set = D.perfBy[tf];

  const pct = (s) => ((s[s.length - 1] / s[0] - 1) * 100);
  const fmt = (v) => (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(2) + "%";

  const ret = pct(set.me);
  const bench = pct(set.bm);

  /* Best bucket: split the series into as many chunks as there are labels and
     take the chunk with the strongest gain. */
  const n = set.buckets.length;
  const size = set.me.length / n;
  let best = 0, bestGain = -Infinity;
  for (let i = 0; i < n; i++) {
    const a = set.me[Math.floor(i * size)];
    const b = set.me[Math.min(set.me.length - 1, Math.floor((i + 1) * size) - 1)];
    const g = b / a - 1;
    if (g > bestGain) { bestGain = g; best = i; }
  }

  let peak = set.me[0], dd = 0;
  for (const v of set.me) {
    if (v > peak) peak = v;
    dd = Math.min(dd, v / peak - 1);
  }

  const label = tf === "1D" ? "Best hour" : tf === "1W" ? "Best day" : tf === "1M" ? "Best week" : tf === "5Y" ? "Best year" : "Best month";

  return (
    <Card className="card--pad-lg ac-perf">
      <PanelHead icon="compare" title="Portfolio performance" eyebrow={"Indexed, KSE-100 rebased · " + tf}
        right={<><TfChips value={tf} onChange={setTf} /><button className="filterbar__icon" onClick={onShare} aria-label="Share performance" data-tip="Share"><Icon name="share" size={20} /></button></>} />
      <AreaChart data={set.me} height={252} fill labels={set.labels}
        format={(v) => fmt((v / set.me[0] - 1) * 100)} />
      <div style={{ display: "flex", gap: 30, marginTop: 18, flexWrap: "wrap" }}>
        <div className="scope__stat"><span className="scope__statlabel">Return</span><span className="scope__statvalue tabular" style={{ color: ret >= 0 ? "var(--color-text-positive-strong)" : "var(--color-text-negative)" }}>{fmt(ret)}</span></div>
        <div className="scope__stat"><span className="scope__statlabel">KSE-100</span><span className="scope__statvalue tabular">{fmt(bench)}</span></div>
        <div className="scope__stat"><span className="scope__statlabel">Vs benchmark</span><span className="scope__statvalue tabular" style={{ color: ret - bench >= 0 ? "var(--color-text-positive-strong)" : "var(--color-text-negative)" }}>{fmt(ret - bench)}</span></div>
        <div className="scope__stat"><span className="scope__statlabel">{label}</span><span className="scope__statvalue">{set.buckets[best]}</span></div>
        <div className="scope__stat"><span className="scope__statlabel">Max drawdown</span><span className="scope__statvalue tabular" style={{ color: "var(--color-text-negative)" }}>{fmt(dd * 100)}</span></div>
      </div>
    </Card>
  );
}

function AllocationPanel({ onShare }) {
  const D = ACData;
  const palette = ["var(--color-chart-series-1)", "var(--color-chart-series-2)", "var(--color-chart-series-3)", "var(--color-chart-series-6)", "var(--color-chart-series-8)", "var(--color-chart-series-7)"];
  const parts = D.holdings.map((h, i) => ({ sym: h.sym, pct: h.alloc, color: palette[i % palette.length] }));
  return (
    <Card className="card--pad-lg">
      <PanelHead icon="notes" title="Portfolio allocation" right={<button className="filterbar__icon" onClick={onShare} aria-label="Share allocation" data-tip="Share"><Icon name="share" size={20} /></button>} />
      <Donut parts={parts} centre={<><span className="scope__statlabel">YTD</span><strong className="heading-h2" style={{ color: "var(--color-text-positive-strong)" }}>+10.5%</strong></>} />
      <div style={{ marginTop: 20 }}>
        <RuledTable compact template="1fr 0.8fr" columns={[{ label: "Company" }, { label: "Allocation", align: "right" }]}
          rows={parts.map((p) => [<span className="body-xs">{p.sym}</span>, <span className="tabular body-xs">{p.pct}%</span>])} />
      </div>
    </Card>
  );
}

function MoversRail({ title, rows, tone }) {
  return (
    <Card className="card--pad-lg">
      <PanelHead icon={tone === "up" ? "arrow-up-right" : "arrow-right"} title={title} />
      <RuledTable compact template="1.4fr 0.9fr 0.8fr"
        columns={[{ label: "Company" }, { label: "Price", align: "right" }, { label: "Change", align: "right" }]}
        rows={rows.map((r) => [<span className="body-xs">{ACData.companies[r.sym].name}</span>, <span className="tabular body-xs">{r.px}</span>, <Delta value={r.chg} size={12} showArrow={false} />])} />
    </Card>
  );
}

function ProfileScreen({ person, tab, setTab, onShare, onEdit }) {
  const D = ACData;
  const isSelf = person.handle === D.self.handle;
  const tabs = [{ key: "overview", label: "Overview" }, { key: "posts", label: "Posts" }, { key: "trades", label: "Trades" }, { key: "portfolio", label: "Portfolio" }, { key: "watchlist", label: "Watchlist" }];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <ProfileHeader person={person} isSelf={isSelf} onEdit={onEdit} />
      <Tabs tabs={tabs} active={tab} onSelect={setTab} label="Profile views" />

      {tab === "overview" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 16 }}>
            <ReturnsCard />
            <HoldingStrip />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
            <PerformancePanel onShare={onShare} />
            <AllocationPanel onShare={onShare} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <MoversRail title="Top gainers" rows={D.gainers} tone="up" />
            <MoversRail title="Top losers" rows={D.losers} tone="down" />
          </div>
        </div>
      ) : null}

      {tab === "posts" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {D.posts.filter((p) => p.author.handle === person.handle).length === 0
            ? <Empty>No posts on file for this account.</Empty>
            : D.posts.filter((p) => p.author.handle === person.handle).map((p) => <Post key={"pp" + p.id} post={p} onShare={onShare} />)}
        </div>
      ) : null}

      {tab === "trades" ? (
        <Card className="card--pad-lg">
          <PanelHead icon="document" title="Last trades" eyebrow="25 Aug – 4 Sep 2026" right={<><Button icon="filter">Filter</Button><button className="filterbar__icon" onClick={onShare} aria-label="Share trades" data-tip="Share"><Icon name="share" size={20} /></button></>} />
          <RuledTable
            template="1.4fr 1.2fr 0.7fr 0.8fr 0.9fr 0.7fr"
            columns={[{ label: "Company" }, { label: "Date" }, { label: "Side" }, { label: "Status" }, { label: "Price", align: "right" }, { label: "Qty", align: "right" }]}
            rows={D.trades.map((t) => [
              <Ticker sym={t.sym} showName />,
              <span className="body-xs tabular">{t.date}</span>,
              <RatingPill tone={t.side === "Buy" ? "positive" : "negative"}>{(t.side === "Buy" ? "↗ " : "↘ ") + t.side}</RatingPill>,
              <Badge tone={t.status === "Filled" ? "positive" : t.status === "Pending" ? "warning" : "neutral"}>{t.status}</Badge>,
              <span className="tabular">{t.px}</span>,
              <span className="tabular">{t.qty}</span>
            ])} />
        </Card>
      ) : null}

      {tab === "portfolio" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
            <PerformancePanel onShare={onShare} />
            <AllocationPanel onShare={onShare} />
          </div>
          <Card className="card--pad-lg">
            <PanelHead icon="book" title="Portfolio details" eyebrow="Cost against last price" right={<Button icon="download">Export</Button>} />
            <RuledTable
              template="1.6fr 1fr 1fr 0.9fr 1fr"
              columns={[{ label: "Company" }, { label: "Average cost", align: "right" }, { label: "Last price", align: "right" }, { label: "Gain / loss", align: "right" }, { label: "Allocation", align: "right" }]}
              rows={D.holdings.map((h) => [
                <Ticker sym={h.sym} showName />,
                <span className="tabular">{h.cost}</span>,
                <span className="tabular">{h.px}</span>,
                <Delta value={h.gl} />,
                <span className="tabular">{h.alloc}%</span>
              ])} />
          </Card>
        </div>
      ) : null}

      {tab === "watchlist" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <WatchlistPanel onShare={onShare} />
        </div>
      ) : null}
    </div>
  );
}

/* Watchlist — Figma `Group 3` (node 6238:976): list switcher chips, an item
   count and last-updated stamp, a Share action, a Volume column and a paged
   footer. Rendered in the app's own table and pill language. */
const WATCHLISTS = ["My watchlist", "Top gainers", "Top losers"];

function WatchlistPanel({ onShare }) {
  const D = ACData;
  const [list, setList] = React.useState(WATCHLISTS[0]);
  const [page, setPage] = React.useState(1);
  const perPage = 6;
  const rows = list === "Top gainers"
    ? D.watchlist.filter((w) => w.chg > 0).sort((a, b) => b.chg - a.chg)
    : list === "Top losers"
      ? D.watchlist.filter((w) => w.chg < 0).sort((a, b) => a.chg - b.chg)
      : D.watchlist;
  const pages = Math.max(1, Math.ceil(rows.length / perPage));
  const shown = rows.slice((page - 1) * perPage, page * perPage);
  function pick(next) { setList(next); setPage(1); }

  return (
    <Card className="card--pad-lg">
      <PanelHead icon="eye" title={list}
        eyebrow={rows.length + " items · updated 3 Sep 2026 at 14:43 PKT"}
        right={<button className="filterbar__icon" onClick={onShare} aria-label="Share watchlist" data-tip="Share"><Icon name="share" size={20} /></button>} />
      <div className="ac-wlchips">
        {WATCHLISTS.map((w) => (
          <button key={w} className="tfchip" aria-pressed={list === w} onClick={() => pick(w)}>{w}</button>
        ))}
        <button className="ac-wlnew"><Icon name="plus" size={15} />Create new watchlist</button>
      </div>
      <RuledTable
        template="1.6fr 1fr 0.9fr 1fr 1fr 1fr 0.7fr"
        columns={[{ label: "Company" }, { label: "Last price", align: "right" }, { label: "1D", align: "right" }, { label: "Volume", align: "right" }, { label: "Consensus", align: "center" }, { label: "Target", align: "right" }, { label: "Houses", align: "right" }]}
        rows={shown.map((w) => [
          <Ticker sym={w.sym} showName />,
          <span className="tabular">{w.px}</span>,
          <Delta value={w.chg} />,
          <span className="tabular">{w.vol}</span>,
          <CallPill call={w.call} />,
          <span className="tabular">{w.target}</span>,
          <span className="tabular">{w.brokers}</span>
        ])} />
      {rows.length === 0 ? <Empty>Nothing on this list today.</Empty> : <Pager page={page} pages={pages} onGo={setPage} />}
    </Card>
  );
}

/* Prev · numbered pages with an ellipsis · Next. */
function Pager({ page, pages, onGo }) {
  const nums = [];
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(i - page) <= 1) nums.push(i);
    else if (nums[nums.length - 1] !== "…") nums.push("…");
  }
  return (
    <nav className="ac-pager" aria-label="Watchlist pages">
      <button className="ac-pager__ctl" onClick={() => onGo(page - 1)} disabled={page === 1}>
        <Icon name="chevron-right" size={16} />Prev
      </button>
      <span className="ac-pager__nums">
        {nums.map((n, i) => (n === "…"
          ? <span key={"e" + i} className="ac-pager__gap" aria-hidden="true">…</span>
          : <button key={n} className={"ac-pager__n" + (n === page ? " is-on" : "")} aria-current={n === page} onClick={() => onGo(n)}>{n}</button>))}
      </span>
      <button className="ac-pager__ctl" onClick={() => onGo(page + 1)} disabled={page === pages}>
        Next<Icon name="chevron-right" size={16} />
      </button>
    </nav>
  );
}

/* ---------- Settings ---------- */

function Field({ label, value, placeholder, wide, onChange, type }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: wide ? "1 / -1" : undefined }}>
      <span className="heading-h4">{label}</span>
      <input value={value} placeholder={placeholder} type={type || "text"} onChange={(e) => onChange && onChange(e.target.value)} className="ac-field"
        style={{ height: 44, padding: "0 14px", borderRadius: "var(--radius-md)", font: "inherit", fontSize: 15, color: "var(--color-text-primary)", background: "var(--color-bg-surface)" }} />
    </label>
  );
}

/* A settings group: the master switch on the left of its own description, then
   the individual checkboxes it governs. */
function ShareGroup({ title, note, on, onToggle, items, checks, setChecks, last }) {
  return (
    <div className="ac-sharegroup" style={last ? { borderBottom: 0 } : undefined}>
      <div className="ac-sharegroup__lead">
        <h4 className="heading-h4" style={{ margin: 0 }}>{title}</h4>
        <p className="body-xs-relaxed" style={{ margin: 0, color: "var(--color-text-muted)" }}>{note}</p>
      </div>
      <div className="ac-sharegroup__body">
        <div className="ac-switchrow">
          <SwitchToggle on={on} onChange={onToggle} label={title} />
          <span className="body-md">{on ? "On" : "Off"}</span>
        </div>
        <div className="ac-checkstack" aria-disabled={!on}>
          {items.map((it) => (
            <label key={it.key} className="ac-checkrow">
              <input className="ac-cbx__in" type="checkbox" checked={!!checks[it.key]} disabled={!on}
                onChange={(e) => setChecks(Object.assign({}, checks, { [it.key]: e.target.checked }))} />
              <span className="ac-cbx" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
              </span>
              <span>
                <span className="body-md">{it.label}</span>
                <span className="body-xs-relaxed" style={{ display: "block", color: "var(--color-text-muted)" }}>{it.note}</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function SwitchToggle({ on, onChange, label }) {
  return (
    <button className="ac-switch" role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)}>
      <span className="ac-switch__dot" />
    </button>
  );
}

function ToggleRow({ label, note, on, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "14px 0", borderTop: "1px solid var(--color-border-subtle)" }}>
      <div style={{ minWidth: 0 }}>
        <div className="heading-h4">{label}</div>
        {note ? <div className="body-sm" style={{ color: "var(--color-text-muted)" }}>{note}</div> : null}
      </div>
      <button onClick={() => onChange(!on)} aria-pressed={on} aria-label={label}
        style={{ flex: "none", width: 44, height: 24, borderRadius: 999, border: "1px solid " + (on ? "var(--color-brand-primary)" : "var(--color-border-strong)"), background: on ? "var(--color-brand-primary)" : "var(--color-bg-surface)", position: "relative", cursor: "pointer", padding: 0 }}>
        <span style={{ position: "absolute", top: 2, left: on ? 22 : 2, width: 18, height: 18, borderRadius: 999, background: on ? "#fff" : "var(--color-border-strong)", transition: "left 120ms cubic-bezier(0.2,0,0.2,1)" }} />
      </button>
    </div>
  );
}

function SettingsScreen({ tab, setTab }) {
  const D = ACData;
  const [name, setName] = React.useState(D.self.name);
  const [bio, setBio] = React.useState("Portfolio manager · cement and banks");
  const [pw, setPw] = React.useState({ now: "", next: "", again: "" });
  const pwReady = pw.now.length > 0 && pw.next.length >= 10 && pw.next === pw.again;
  const pwMsg = !pw.next
    ? { text: "Use at least 10 characters. You stay signed in on this device.", tone: "var(--color-text-muted)" }
    : pw.next.length < 10
      ? { text: "New password is too short — 10 characters minimum.", tone: "var(--color-text-negative)" }
      : pw.again && pw.next !== pw.again
        ? { text: "The two new passwords do not match.", tone: "var(--color-text-negative)" }
        : { text: "Ready to change.", tone: "var(--color-text-positive-strong)" };
  const [lang, setLang] = React.useState("English (UK)");
  const [toggles, setToggles] = React.useState({ portfolio: true, trades: false, watchlist: true, mentions: true, digest: true });
  const [share, setShare] = React.useState({
    email: true, news: true, offers: false,
    timeline: true, trades: true, portfolio: true, watchlists: true,
    social: true, facebook: false, x: true, linkedin: false, whatsapp: false
  });
  const [blocked, setBlocked] = React.useState([D.people[9], D.people[16]]);
  const items = [
    { key: "profile", label: "Edit profile", icon: "notes" },
    { key: "language", label: "Language", icon: "book" },
    { key: "blocked", label: "Blocked accounts", icon: "eye" },
    { key: "activity", label: "Activity log", icon: "document" },
    { key: "sharing", label: "Viewing & sharing", icon: "share" }
  ];
  const activity = [
    { what: "Followed AKD Securities", when: "Today · 09:12" },
    { what: "Posted three cement fills", when: "Today · 09:02" },
    { what: "Downloaded LUCK: 2QFY26 Results Review", when: "Yesterday · 16:41" },
    { what: "Shared portfolio with Fahad Raza Siddiqui", when: "Yesterday · 11:20" },
    { what: "Added FCCL to watchlist", when: "1 Sep 2026 · 14:08" },
    { what: "Changed portfolio visibility to Followers", when: "28 Aug 2026 · 10:55" }
  ];

  return (
    <Card pad={false}>
      <div style={{ display: "grid", gridTemplateColumns: "268px 1fr" }}>
        <nav style={{ borderRight: "1px solid var(--color-border-subtle)", padding: 20, display: "flex", flexDirection: "column" }}>
          {items.map((it, i) => (
            <button key={it.key} onClick={() => setTab(it.key)}
              className={"ac-settingsnav" + (tab === it.key ? " is-on" : "")} aria-current={tab === it.key}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 10px", width: "100%", border: 0, borderTop: i ? "1px solid var(--color-border-subtle)" : "0", cursor: "pointer", textAlign: "left" }}>
              <Icon name={it.icon} size={20} />{it.label}
              <span style={{ marginLeft: "auto", opacity: tab === it.key ? 1 : 0 }}><Icon name="arrow-right" size={16} /></span>
            </button>
          ))}
        </nav>
        <div style={{ padding: 30, display: "flex", flexDirection: "column", gap: 24 }}>
          {tab === "profile" ? (
            <>
              <PanelHead icon="notes" title="Edit profile" eyebrow="Account" />
              <img className="avatar" src={D.self.img} alt="" width={96} height={96} style={{ width: 96, height: 96 }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Field label="Full name" value={name} onChange={setName} />
                <Field label="Email" value={D.self.email} onChange={() => {}} />
                <Field label="Bio" value={bio} onChange={setBio} />
                <Field label="Location" value="Karachi, Pakistan" onChange={() => {}} />
                <Field label="SECP adviser number" value="" placeholder="Optional" onChange={() => {}} />
                <Field label="Firm" value="Alpha Capital" onChange={() => {}} />
              </div>
              <h4 className="bsection" style={{ marginTop: 6 }}>Password</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Field label="Current password" value={pw.now} type="password" placeholder="Enter current password" onChange={(v) => setPw(Object.assign({}, pw, { now: v }))} />
                <span />
                <Field label="New password" value={pw.next} type="password" placeholder="At least 10 characters" onChange={(v) => setPw(Object.assign({}, pw, { next: v }))} />
                <Field label="Confirm new password" value={pw.again} type="password" placeholder="Repeat new password" onChange={(v) => setPw(Object.assign({}, pw, { again: v }))} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <span className="body-xs" style={{ color: pwMsg.tone, flex: "1 1 auto" }}>{pwMsg.text}</span>
                <Button variant="primary" disabled={!pwReady}>Change password</Button>
              </div>
              <h4 className="bsection" style={{ marginTop: 6 }}>Links</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Field label="X" value="x.com/malikhan" onChange={() => {}} />
                <Field label="LinkedIn" value="linkedin.com/in/malikhan" onChange={() => {}} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                <Button>Cancel</Button><Button variant="primary">Save changes</Button>
              </div>
            </>
          ) : null}

          {tab === "language" ? (
            <>
              <PanelHead icon="book" title="Language" eyebrow="Display" />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420 }}>
                {["English (UK)", "English (US)", "اردو"].map((l) => (
                  <button key={l} onClick={() => setLang(l)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", border: "1px solid " + (lang === l ? "var(--color-brand-primary)" : "var(--color-border-subtle)"), borderRadius: "var(--radius-md)", background: lang === l ? "var(--color-bg-brand-subtle)" : "var(--color-bg-surface)", cursor: "pointer", font: "inherit", fontSize: 16 }}>
                    {l}{lang === l ? <span style={{ color: "var(--color-text-link)", fontWeight: 700 }}>✓</span> : null}
                  </button>
                ))}
              </div>
              <p className="body-sm-relaxed" style={{ margin: 0, color: "var(--color-text-muted)" }}>Research titles and broker names stay in the language they were published in.</p>
            </>
          ) : null}

          {tab === "blocked" ? (
            <>
              <PanelHead icon="eye" title="Blocked accounts" eyebrow="Privacy" />
              {blocked.length === 0
                ? <Empty>No accounts blocked.</Empty>
                : (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {blocked.map((p) => (
                      <div key={p.handle} style={{ display: "flex", alignItems: "center", minHeight: 68, borderTop: "1px solid var(--color-border-brand)" }}>
                        <Person p={p} sub={p.handle} bold right={<Button onClick={() => setBlocked(blocked.filter((x) => x.handle !== p.handle))}>Unblock</Button>} />
                      </div>
                    ))}
                  </div>
                )}
            </>
          ) : null}

          {tab === "activity" ? (
            <>
              <PanelHead icon="document" title="Activity log" eyebrow="Last 30 days" right={<Button icon="download">Export</Button>} />
              <RuledTable compact template="2fr 1fr" columns={[{ label: "Action" }, { label: "When", align: "right" }]}
                rows={activity.map((a) => [<span className="body-sm">{a.what}</span>, <span className="body-xs tabular" style={{ color: "var(--color-text-muted)" }}>{a.when}</span>])} />
            </>
          ) : null}

          {tab === "sharing" ? (
            <>
              <PanelHead icon="share" title="Viewing & sharing" eyebrow="Who sees what" />

              <ShareGroup title="Email notification" note="Receive email notification for news, promotional content and offers"
                on={share.email} onToggle={(v) => setShare(Object.assign({}, share, { email: v }))}
                items={[
                  { key: "news", label: "News and update settings", note: "The latest news about the latest features and software update settings" },
                  { key: "offers", label: "Offer and promotion", note: "Personalised emails for offers and promotions tailored for you" }
                ]}
                checks={share} setChecks={setShare} />

              <ShareGroup title="Sharing on timeline" note="Share your trades, portfolio, watchlist and stock transactions with your followers"
                on={share.timeline} onToggle={(v) => setShare(Object.assign({}, share, { timeline: v }))}
                items={[
                  { key: "trades", label: "Trades", note: "Post your fills to your wall as they execute" },
                  { key: "portfolio", label: "Portfolio", note: "Post your portfolio to your wall after every rebalancing" },
                  { key: "watchlists", label: "Watchlists", note: "Post your watchlists to your wall" }
                ]}
                checks={share} setChecks={setShare} />

              <ShareGroup title="Sharing on social media" note="Customise your privacy settings so your content reaches the right audience"
                on={share.social} onToggle={(v) => setShare(Object.assign({}, share, { social: v }))}
                items={[
                  { key: "facebook", label: "Share on Facebook", note: "Post to Facebook when you publish" },
                  { key: "x", label: "Share on X", note: "Post to X when you publish" },
                  { key: "linkedin", label: "Share on LinkedIn", note: "Post to LinkedIn when you publish" },
                  { key: "whatsapp", label: "Share on WhatsApp", note: "Send to your WhatsApp contacts" }
                ]}
                checks={share} setChecks={setShare} last />

              <p className="callout"><Icon name="flash" size={16} />Please consult your financial advisor before making investment decisions.</p>
            </>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export { ProfileScreen, SettingsScreen, ToggleRow, ShareGroup, SwitchToggle, Field };
