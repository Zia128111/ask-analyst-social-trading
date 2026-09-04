'use client';
import React from 'react';
import { Card, Button, RatingPill, Badge, Icon, Chip, Tabs, EmptyState } from '../../lib/ds';
import ACData from '../../lib/data';
import { Delta, Sparkline, Donut, PanelHead, TfChips, RuledTable, Ticker, Person, BrokerPill, CallPill, Eyebrow, Empty } from '../parts';
/* Feed surfaces: timeline, news & blogs, sectors, people, announcements. */

function Composer({ onPost }) {
  const [text, setText] = React.useState("");
  const D = ACData;
  return (
    <Card className="card--pad-lg">
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <img className="avatar" src={D.self.img} alt="" width={40} height={40} style={{ width: 40, height: 40 }} />
        <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
          <textarea
            value={text} onChange={(e) => setText(e.target.value)} rows={2}
            aria-label="Write a post"
            placeholder="Post a call, a fill, or a note on the tape"
            className="body-paragraph ac-field"
            style={{ width: "100%", resize: "vertical", borderRadius: "var(--radius-md)", padding: "10px 12px", font: "inherit", fontSize: 16, color: "var(--color-text-primary)", background: "var(--color-bg-surface)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <button className="iaction"><Icon name="document" size={20} />Attach report</button>
            <button className="iaction"><Icon name="hash" size={20} />Tag a ticker</button>
            <button className="iaction"><Icon name="chart-line" size={20} />Share portfolio</button>
            <span style={{ flex: "1 1 auto" }} />
            <span onClick={() => { if (text.trim()) { onPost(text.trim()); setText(""); } }}>
              <Button variant="primary">Post</Button>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

const ACT_ICONS = { like: "thumb-up", comment: "message-circle", share: "share" };

function ActBtn({ kind, count, on, onClick, label }) {
  return (
    <button className="ac-act" aria-pressed={on ? true : undefined} onClick={onClick} aria-label={label}>
      <Icon name={ACT_ICONS[kind]} size={22} />
      {count ? <span className="ac-act__n tabular">{count}</span> : null}
    </button>
  );
}

/* Who reacted: the split by reaction, then comments and shares, then the
   accounts behind the numbers. */
function ReactionPop({ post, likes, comments, onClose }) {
  const D = ACData;
  const insightful = Math.max(1, Math.round(likes * 0.35));
  const agree = Math.max(0, likes - insightful);
  const rows = [
    { icon: "thumb-up-filled", tone: "like", label: "Agree", n: agree },
    { icon: "heart-filled", tone: "heart", label: "Insightful", n: insightful },
    { icon: "message-circle", label: "Comments", n: comments },
    { icon: "share", label: "Shares", n: post.shares }
  ];
  const people = D.people.slice(0, 6);
  return (
    <>
      <button className="ac-popscrim" aria-label="Close" onClick={onClose} />
      <div className="fmenu__panel ac-reactpop" role="dialog" aria-label="Reactions on this post">
        <div className="ac-reactpop__head">
          <strong className="heading-h4">{likes} reactions</strong>
          <button className="ac-act" aria-label="Close" onClick={onClose}><Icon name="x" size={16} /></button>
        </div>
        <div className="ac-reactpop__rows">
          {rows.map((r) => (
            <div key={r.label} className="ac-reactpop__row">
              <span className={"ac-react" + (r.tone ? " ac-react--" + r.tone : " ac-react--plain")} aria-hidden="true"><Icon name={r.icon} size={14} /></span>
              <span className="body-md" style={{ flex: "1 1 auto" }}>{r.label}</span>
              <strong className="body-md tabular">{r.n}</strong>
            </div>
          ))}
        </div>
        <div className="ac-reactpop__people">
          {people.map((p) => (
            <div key={p.handle} className="ac-reactpop__person">
              <img className="avatar" src={p.img} alt="" width={28} height={28} style={{ width: 28, height: 28 }} />
              <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <span className="body-sm" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
                <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{p.role}</span>
              </span>
            </div>
          ))}
        </div>
        <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>and {Math.max(0, likes - people.length)} others</span>
      </div>
    </>
  );
}

function PostActions({ post, onShare }) {
  const [liked, setLiked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState("");
  const [mine, setMine] = React.useState([]);
  const [who, setWho] = React.useState(false);
  const D = ACData;
  function send() {
    const t = draft.trim();
    if (!t) return;
    setMine(mine.concat([t]));
    setDraft("");
  }
  return (
    <>
      <div className="ac-actionbar">
        <div className="ac-actionbar__left">
          <ActBtn kind="like" count={(post.likes || 0) + (liked ? 1 : 0)} on={liked} onClick={() => setLiked(!liked)} label="Agree" />
          <ActBtn kind="comment" count={post.comments + mine.length} on={open} onClick={() => setOpen(!open)} label="Comments" />
          <ActBtn kind="share" onClick={onShare} label="Share" />
        </div>
        <div style={{ position: "relative" }}>
          <button className="ac-reacts" aria-expanded={who} aria-label="See who reacted" onClick={() => setWho(!who)}>
            <span className="ac-react ac-react--heart" aria-hidden="true"><Icon name="heart-filled" size={14} /></span>
            <span className="ac-react ac-react--like" aria-hidden="true"><Icon name="thumb-up-filled" size={14} /></span>
          </button>
          {who ? <ReactionPop post={post} likes={(post.likes || 0) + (liked ? 1 : 0)} comments={post.comments + mine.length} onClose={() => setWho(false)} /> : null}
        </div>
      </div>
      {open ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <img className="avatar" src={D.people[2].img} alt="" width={32} height={32} style={{ width: 32, height: 32 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="heading-card-title">{D.people[2].name}</span>
              <p className="body-sm-relaxed" style={{ margin: 0, color: "var(--color-text-secondary)" }}>Retention is the whole call here. If north pricing slips below PKR 1,400/bag the upgrade goes with it.</p>
              <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>1 d · Reply</span>
            </div>
          </div>
          {mine.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10 }}>
              <img className="avatar" src={D.self.img} alt="" width={32} height={32} style={{ width: 32, height: 32 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="heading-card-title">{D.self.name}</span>
                <p className="body-sm-relaxed" style={{ margin: 0, color: "var(--color-text-secondary)" }}>{t}</p>
                <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>Just now · Reply</span>
              </div>
            </div>
          ))}
          <div className="ac-cbar">
            <span className="ac-cbar__me">
              <img className="avatar" src={D.self.img} alt="" width={36} height={36} style={{ width: 36, height: 36 }} />
              <span className="ac-cbar__chev" aria-hidden="true"><Icon name="chevron-down" size={11} /></span>
            </span>
            <div className="ac-cbar__field">
              <input className="ac-cbar__input" value={draft} onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") send(); }} aria-label="Add a comment" placeholder={"Comment as " + D.self.name} />
              <div className="ac-cbar__tools">
                {[["sparkle", "Draft with AI"], ["document", "Attach a report"], ["chart-line", "Attach a chart"], ["photo", "Add an image"], ["hash", "Tag a ticker"]].map((t) => (
                  <button key={t[0]} className="ac-cbar__tool" aria-label={t[1]} data-tip={t[1]}><Icon name={t[0]} size={18} /></button>
                ))}
                <button className={"ac-cbar__send" + (draft.trim() ? " is-on" : "")} type="button" aria-label="Post comment" data-tip={draft.trim() ? "Post comment" : "Write a comment first"} disabled={!draft.trim()} onClick={send}>
                  <Icon name="send" size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function TradeRows({ trades }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {trades.map((t, i) => (
        <div key={t.sym} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16, alignItems: "center", padding: "12px 0", borderTop: i ? "1px solid var(--color-border-brand)" : "0" }}>
          <Ticker sym={t.sym} size={28} showName />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span className="scope__statlabel">{t.side}</span>
            <strong className="body-16-bold-20_8">{t.qty}</strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12 }}>
            <span className="body-sm tabular" style={{ color: "var(--color-text-secondary)" }}>{t.px}</span>
            <Delta value={t.chg} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReportAttachment({ r }) {
  return (
    <div className="card card--panel" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, background: "var(--color-bg-brand-subtle)" }}>
      <div className="icard__pills">
        <BrokerPill broker={r.broker} />
        <CallPill call={r.call} />
        <RatingPill tone="neutral">{r.sym}</RatingPill>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <h4 className="heading-h1-tight" style={{ margin: 0 }}>{r.title}</h4>
        <div style={{ textAlign: "right" }}>
          <span className="scope__statlabel">Target</span>
          <div className="heading-h2" style={{ whiteSpace: "nowrap" }}>{r.target} <span style={{ color: "var(--color-text-positive)", fontSize: 14 }}>+{r.upside}%</span></div>
        </div>
      </div>
      <span className="body-sm" style={{ color: "var(--color-text-muted)" }}>{r.date} · 14 pages</span>
    </div>
  );
}

function Post({ post, onShare }) {
  const D = ACData;
  const [menu, setMenu] = React.useState(false);
  return (
    <Card className="card--pad-lg">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <Person p={post.author} bold sub={post.time + " · " + post.audience} />
          <div style={{ position: "relative" }}>
            <button className="filterbar__icon ac-moredots" aria-expanded={menu} onClick={() => setMenu(!menu)} aria-label="Post actions"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></button>
            {menu ? (
              <div className="fmenu__panel ac-postmenu" style={{ minWidth: 224 }}>
                <button className="fmenu__opt" onClick={() => setMenu(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 9h8" /><path d="M8 13h6" /><path d="M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>
                  Save report
                </button>
                <button className="fmenu__opt" onClick={() => setMenu(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19.5 12.572l-.5 .428m-6 6l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M22 22l-5 -5" /><path d="M17 22l5 -5" /></svg>
                  <span>Unfollow {post.author.name.split(" ")[0]}</span>
                </button>
                <button className="fmenu__opt" onClick={() => setMenu(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
                  Hide post
                </button>
                <button className="fmenu__opt" onClick={() => setMenu(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" /></svg>
                  Report
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {post.body ? <p className="body-paragraph" style={{ margin: 0, color: "var(--color-text-secondary)", textWrap: "pretty" }}>{post.body}</p> : null}
        {post.kind === "trades" ? <TradeRows trades={post.trades} /> : null}
        {post.kind === "report" ? <ReportAttachment r={post.report} /> : null}
        {post.kind === "poll" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {post.poll.map((o) => (
              <div key={o.label} style={{ position: "relative", border: "1px solid var(--color-border-brand)", borderRadius: "var(--radius-md)", padding: "10px 14px", overflow: "hidden" }}>
                <span style={{ position: "absolute", inset: "0 auto 0 0", width: o.pct + "%", background: "var(--color-bg-brand-subtle)" }} />
                <span style={{ position: "relative", display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <span className="body-md">{o.label}</span><strong className="body-16-bold-20_8 tabular">{o.pct}%</strong>
                </span>
              </div>
            ))}
            <span className="body-sm" style={{ color: "var(--color-text-muted)" }}>318 votes · closes in 2 days</span>
          </div>
        ) : null}
        {post.kind === "portfolio" ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="scope__statlabel">Investment return · YTD</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <strong className="display-lg" style={{ color: "var(--color-text-positive-strong)" }}>+{post.portfolioReturn}%</strong>
                <Sparkline data={D.series(7, 24, 0.6)} width={120} height={34} tone="up" />
              </div>
              <p className="body-sm-relaxed" style={{ margin: 0, color: "var(--color-text-secondary)" }}>Six holdings. Cement is 60% of the book.</p>
              <Button icon="eye">View portfolio</Button>
            </div>
            <Donut parts={post.allocation} size={160} centre={<><span className="scope__statlabel">Return</span><strong className="heading-h2" style={{ color: "var(--color-text-positive-strong)" }}>+{post.portfolioReturn}%</strong></>} />
          </div>
        ) : null}

        {post.tags ? <p className="rtags" style={{ margin: 0 }}>{post.tags.join(" ")}</p> : null}
        <PostActions post={post} onShare={onShare} />
      </div>
    </Card>
  );
}

function FeedTimeline({ onShare }) {
  const D = ACData;
  const [extra, setExtra] = React.useState([]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Composer onPost={(t) => setExtra([{ id: "new" + extra.length, author: D.self, time: "now", audience: "Public", kind: "text", body: t, tags: [], likes: 0, comments: 0, shares: 0 }].concat(extra))} />
      <Eyebrow>Today</Eyebrow>
      {extra.concat(D.posts).map((p) => <Post key={p.id} post={p} onShare={onShare} />)}
    </div>
  );
}

function NewsHero({ item, onOpen }) {
  return (
    <Card className="card--pad-lg ac-newscard" style={{ cursor: onOpen ? "pointer" : undefined }} onClick={onOpen}
      role={onOpen ? "link" : undefined} tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(e) => { if (onOpen && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onOpen(); } }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24, alignItems: "center" }}>
        <img src={item.img} alt="" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="icard__pills"><RatingPill tone="neutral">{item.sym}</RatingPill><span className="icard__source">{item.src} · {item.time}</span></div>
          <h3 className="display-lg" style={{ margin: 0, fontSize: 26, lineHeight: 1.25 }}>{item.title}</h3>
          <p className="body-paragraph" style={{ margin: 0, color: "var(--color-text-secondary)" }}>{item.summary}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="body-sm" style={{ color: "var(--color-text-link)" }}>{item.topic}</span>
            <span className="body-sm" style={{ color: "var(--color-text-muted)" }}>· {item.read}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function NewsCard({ item, tall, onOpen }) {
  return (
    <article className="card card--panel ac-newscard" onClick={onOpen} role={onOpen ? "link" : undefined} tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(e) => { if (onOpen && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onOpen(); } }}
      style={{ overflow: "hidden", display: "flex", flexDirection: "column", cursor: onOpen ? "pointer" : undefined }}>
      <img src={item.img} alt="" style={{ width: "100%", height: tall ? 168 : 120, objectFit: "cover" }} />
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{item.src} · {item.time}</span>
        <h4 className="heading-card-title-lg" style={{ margin: 0, fontSize: 15, lineHeight: 1.35 }}>{item.title}</h4>
        <p className="body-xs-relaxed" style={{ margin: 0, color: "var(--color-text-secondary)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.summary}</p>
        <span className="body-xs" style={{ color: "var(--color-text-link)" }}>{item.topic} · {item.read}</span>
      </div>
    </article>
  );
}

function FeedNews({ onOpen }) {
  const D = ACData;
  const [tab, setTab] = React.useState("all");
  const tabs = [
    { key: "all", label: "All" },
    { key: "psx", label: "PSX" },
    { key: "macro", label: "Macro" },
    { key: "commodities", label: "Commodities" },
    { key: "blogs", label: "Blogs" }
  ];
  const list = tab === "all" ? D.news : D.news.filter((n) => n.cat === tab);
  const hero = list[0];
  const rest = list.slice(1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <h1 className="display-lg" style={{ margin: 0 }}>News &amp; blogs</h1>
          <p className="body-md" style={{ margin: "4px 0 0", color: "var(--color-text-muted)" }}>The tape, the wires and analyst commentary — updated through the session.</p>
        </div>
        <Tabs tabs={tabs} active={tab} onSelect={setTab} label="News categories" />
      </div>

      {!hero ? <Empty>No stories filed under this category today.</Empty> : <NewsHero item={hero} onOpen={() => onOpen && onOpen(hero)} />}

      {rest.length ? (
        <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="rhead"><Eyebrow>{tab === "all" ? "Latest news" : tabs.find((t) => t.key === tab).label + " stories"}</Eyebrow><span className="body-sm" style={{ color: "var(--color-text-muted)" }}>{list.length} items</span></div>
          <div className="ac-newsrow" tabIndex={0} role="group" aria-label="Latest news, scroll for more">
            {rest.map((n) => <NewsCard key={n.title} item={n} onOpen={() => onOpen && onOpen(n)} />)}
          </div>
        </section>
      ) : null}

      {tab === "all" ? (
        <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="rhead"><Eyebrow>Must read</Eyebrow><a className="rail__all" href="#">See all <Icon name="arrow-right" size={16} /></a></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: 16 }}>
            <NewsCard item={D.news[5]} tall onOpen={() => onOpen && onOpen(D.news[5])} />
            <NewsCard item={D.news[6]} tall onOpen={() => onOpen && onOpen(D.news[6])} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {D.news.slice(2, 5).map((n) => (
                <div key={"m" + n.title} className="card card--panel ac-newscard" role="link" tabIndex={0} onClick={() => onOpen && onOpen(n)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen && onOpen(n); } }}
                  style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6, cursor: "pointer" }}>
                  <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{n.src} · {n.time}</span>
                  <h4 className="heading-card-title-lg" style={{ margin: 0, fontSize: 14 }}>{n.title}</h4>
                  <span className="body-xs" style={{ color: "var(--color-text-link)" }}>{n.topic} · {n.read}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {tab === "all" ? (
        <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Eyebrow>Editor's pick</Eyebrow>
          <div className="card ac-newscard" role="link" tabIndex={0} onClick={() => onOpen && onOpen(D.news[7])}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen && onOpen(D.news[7]); } }}
            style={{ position: "relative", overflow: "hidden", padding: 0, cursor: "pointer" }}>
            <img src={D.news[7].img} alt="" style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: "auto 0 0 0", padding: 24, background: "linear-gradient(transparent, rgb(12 57 113 / 0.82))", color: "var(--color-text-inverse)" }}>
              <span className="label-sm">{D.news[7].src} · {D.news[7].time}</span>
              <h3 className="heading-h1" style={{ margin: "6px 0 4px" }}>{D.news[7].title}</h3>
              <p className="body-sm-relaxed" style={{ margin: 0, maxWidth: 620, opacity: 0.92 }}>{D.news[7].summary}</p>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function FeedSectors() {
  const D = ACData;
  return (
    <Card className="card--pad-lg">
      <PanelHead icon="compare" title="Sectors" eyebrow="Coverage by sector" right={<TfChips options={["1D", "1W", "1M"]} value="1D" onChange={() => {}} />} />
      <RuledTable
        template="1.4fr 1fr 0.8fr 0.8fr 0.8fr"
        columns={[{ label: "Sector" }, { label: "Market cap", align: "right" }, { label: "1D", align: "right" }, { label: "Houses", align: "right" }, { label: "Reports", align: "right" }]}
        rows={D.sectors.map((s) => [
          <span className="heading-h4">{s.name}</span>,
          <span className="tabular">{s.mcap}</span>,
          <Delta value={s.chg} />,
          <span className="tabular">{s.brokers}</span>,
          <span className="tabular">{s.reports}</span>
        ])} />
    </Card>
  );
}

function FeedPeople({ onInvite }) {
  const D = ACData;
  const [followed, setFollowed] = React.useState({});
  const [hidden, setHidden] = React.useState({});
  const list = D.people.filter((p) => !hidden[p.handle]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Card className="card--pad-lg">
        <PanelHead icon="sparkle" title="People you may know" eyebrow="Suggested" right={<Button icon="share" onClick={onInvite}>Invite by link</Button>} />
        {list.length === 0
          ? <EmptyState onReset={() => setHidden({})} resetLabel="Show all again">No suggestions left on file.</EmptyState>
          : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16 }}>
              {list.map((p) => (
                <div key={p.handle} className="card card--panel" style={{ padding: 18, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center" }}>
                  <img className="avatar" src={p.img} alt="" width={64} height={64} style={{ width: 64, height: 64 }} />
                  <div>
                    <div className="heading-card-title">{p.name}</div>
                    <div className="body-xs" style={{ color: "var(--color-text-muted)" }}>{p.role}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Button onClick={() => setHidden(Object.assign({}, hidden, { [p.handle]: true }))}>Ignore</Button>
                    <span onClick={() => setFollowed(Object.assign({}, followed, { [p.handle]: !followed[p.handle] }))}>
                      <Button variant={followed[p.handle] ? "default" : "primary"}>{followed[p.handle] ? "Following" : "Follow"}</Button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
      </Card>
    </div>
  );
}

function FeedAnnouncements() {
  const rows = [
    { sym: "LUCK", type: "Analyst briefing", when: "Today · 16:00 PKT", note: "1HFY26 results discussion" },
    { sym: "DGKC", type: "Board meeting", when: "5 Sep 2026", note: "Approval of 1QFY26 accounts" },
    { sym: "FFC", type: "Payout", when: "8 Sep 2026", note: "Interim cash dividend PKR 8.00/share" },
    { sym: "OGDC", type: "Corporate briefing", when: "11 Sep 2026", note: "FY26 capex plan" },
    { sym: "MEBL", type: "Book closure", when: "14 Sep 2026", note: "Entitlement to interim dividend" },
    { sym: "ILP", type: "AGM", when: "19 Sep 2026", note: "FY26 annual accounts" }
  ];
  return (
    <Card className="card--pad-lg">
      <PanelHead icon="bell" title="Announcements" eyebrow="PSX notices for companies you follow" right={<Badge tone="brand">6 upcoming</Badge>} />
      <RuledTable
        template="0.9fr 1.1fr 1fr 1.6fr"
        columns={[{ label: "Company" }, { label: "Type" }, { label: "When" }, { label: "Note" }]}
        rows={rows.map((r) => [<Ticker sym={r.sym} showName />, <span className="body-sm">{r.type}</span>, <span className="body-sm tabular">{r.when}</span>, <span className="body-sm" style={{ color: "var(--color-text-secondary)" }}>{r.note}</span>])} />
    </Card>
  );
}

/* The source file puts these views in the rail as titled panel cards with a
   See all link, rather than a tab strip. */
function WidgetCard({ icon, title, onOpen, children }) {
  return (
    <Card panel className="card--pad">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, paddingBottom: 12, marginBottom: 14, borderBottom: "1px solid var(--color-border-brand)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <span style={{ color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Icon name={icon} size={16} /></span>
          <strong className="heading-h3" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</strong>
        </span>
        <a href="#" className="body-sm" onClick={(e) => { e.preventDefault(); onOpen(); }} style={{ color: "var(--color-text-link)", flex: "none" }}>See all</a>
      </div>
      {children}
    </Card>
  );
}

function FeedWidgets({ open, only }) {
  const D = ACData;
  const [i, setI] = React.useState(0);
  const [state, setState] = React.useState(null);
  const p = D.people[(i + 7) % D.people.length];
  const palette = ["var(--color-chart-series-1)", "var(--color-chart-series-2)", "var(--color-chart-series-3)", "var(--color-chart-series-6)", "var(--color-chart-series-8)", "var(--color-chart-series-7)"];
  const alloc = D.posts[4].allocation.map((a, n) => ({ sym: a.sym, pct: a.pct, color: palette[n % palette.length] }));
  const lead = only !== "tail", tail = only !== "lead";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {lead ? (
        <>
      <WidgetCard icon="sparkle" title="You may know" onOpen={() => open("people")}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center" }}>
          <img className="avatar" src={p.img} alt="" width={52} height={52} style={{ width: 52, height: 52 }} />
          <div>
            <div className="heading-card-title">{p.name}</div>
            <div className="body-xs" style={{ color: "var(--color-text-muted)" }}>{p.role}</div>
          </div>
          <div className="ac-widgetbtns" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
            <Button onClick={() => { setState(null); setI(i + 1); }}>Ignore</Button>
            <Button variant={state === p.handle ? "default" : "primary"} onClick={() => setState(state === p.handle ? null : p.handle)}>{state === p.handle ? "Following" : "Follow"}</Button>
          </div>
        </div>
      </WidgetCard>

      <WidgetCard icon="news" title="News & blogs" onOpen={() => open("news")}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {D.news.slice(0, 2).map((n, k) => (
            <div key={n.title} className="ac-newsitem" style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: k ? 14 : 0, borderTop: k ? "1px solid var(--color-border-brand)" : "0" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                {D.companies[n.sym] && D.companies[n.sym].mark
                  ? <img src={D.companies[n.sym].mark} alt="" width={22} height={22} style={{ objectFit: "contain", flex: "none" }} />
                  : <span aria-hidden="true" style={{ width: 22, height: 22, flex: "none" }} />}
                <span className="heading-card-title ac-newstitle">{n.title}</span>
              </div>
              <p className="body-xs-relaxed ac-newssum" style={{ margin: 0, color: "var(--color-text-secondary)" }}>{n.summary}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "nowrap" }}>
                <span className="body-xs" style={{ color: "var(--color-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>{n.src} · {n.time}</span>
                <a href="#" className="body-xs" onClick={(e) => { e.preventDefault(); open("news"); }} style={{ color: "var(--color-text-link)", flex: "none", whiteSpace: "nowrap" }}>View more</a>
              </div>
            </div>
          ))}
        </div>
      </WidgetCard>

      <WidgetCard icon="compare" title="Portfolio" onOpen={() => open("sectors")}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Person p={D.people[6]} size={40} sub="Shared their portfolio" bold />
          <div>
            <span className="scope__statlabel">Investment return</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <strong className="display-lg" style={{ fontSize: 26, color: "var(--color-text-positive-strong)" }}>+2.8% ↗</strong>
              <Sparkline data={D.series(7, 22, 0.6)} width={96} height={30} tone="up" />
            </div>
          </div>
          <Donut parts={alloc} size={150} centre={<><span className="scope__statlabel">Return</span><strong className="heading-h2" style={{ color: "var(--color-text-positive-strong)" }}>+2.8%</strong></>} />
        </div>
      </WidgetCard>
        </>
      ) : null}

      {tail ? (
      <WidgetCard icon="bell" title="Announcements" onOpen={() => open("announcements")}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[["LUCK", "Analyst briefing", "Today"], ["DGKC", "Board meeting", "5 Sep"], ["FFC", "Payout", "8 Sep"], ["OGDC", "Corporate briefing", "11 Sep"]].map((r, k) => (
            <div key={r[0]} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, padding: "10px 0", borderTop: k ? "1px solid var(--color-border-brand)" : "0" }}>
              <Ticker sym={r[0]} size={20} />
              <span className="body-xs" style={{ color: "var(--color-text-secondary)", flex: "1 1 auto", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r[1]}</span>
              <span className="body-xs tabular" style={{ color: "var(--color-text-muted)", flex: "none" }}>{r[2]}</span>
            </div>
          ))}
        </div>
      </WidgetCard>
      ) : null}
    </div>
  );
}

function FeedScreen({ tab, setTab, onShare, onInvite }) {
  const labels = { sectors: "Sectors", people: "People you may know", announcements: "Announcements" };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {tab !== "timeline" ? (
        <button className="viewmore" onClick={() => setTab("timeline")} style={{ alignSelf: "flex-start" }}>
          <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Icon name="arrow-right" size={16} /></span>
          Back to timeline · {labels[tab]}
        </button>
      ) : null}
      {tab === "timeline" ? <FeedTimeline onShare={onShare} /> : null}
      {tab === "sectors" ? <FeedSectors /> : null}
      {tab === "people" ? <FeedPeople onInvite={onInvite} /> : null}
      {tab === "announcements" ? <FeedAnnouncements /> : null}
    </div>
  );
}

export { FeedScreen, FeedWidgets, FeedNews as NewsScreen, Post, NewsCard };
