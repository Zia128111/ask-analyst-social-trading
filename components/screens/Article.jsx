'use client';
import React from 'react';
import { Card as ACard, Button as AButton, Icon as AIcon } from '../../lib/ds';
import ACData from '../../lib/data';
/* News article detail — hero, three-column read (tags / prose / related),
   share row, then the comment thread. */

/* Each network gets its own share intent. The page has no public URL in the
   prototype, so we hand the intent the article's own address and headline. */
const SHARE_NETS = [
  { icon: "brand-facebook", label: "Facebook", url: (u) => "https://www.facebook.com/sharer/sharer.php?u=" + u },
  { icon: "brand-x", label: "X", url: (u, t) => "https://twitter.com/intent/tweet?url=" + u + "&text=" + t },
  { icon: "brand-reddit", label: "Reddit", url: (u, t) => "https://www.reddit.com/submit?url=" + u + "&title=" + t },
  { icon: "brand-whatsapp", label: "WhatsApp", url: (u, t) => "https://api.whatsapp.com/send?text=" + t + "%20" + u }
];

function ShareRow({ on = "light", title = "" }) {
  /* No window during SSR — the intents fill in on the client. */
  const u = encodeURIComponent(typeof window === "undefined" ? "https://askanalyst.pk" : window.location.href);
  const t = encodeURIComponent(title);
  return (
    <div className="ac-sharerow">
      {SHARE_NETS.map((n) => (
        <a key={n.icon} className={"ac-shareb" + (on === "dark" ? " ac-shareb--dark" : "")}
          href={n.url(u, t)} target="_blank" rel="noopener noreferrer"
          aria-label={"Share on " + n.label} data-tip={"Share on " + n.label}
          onClick={(e) => e.stopPropagation()}>
          <AIcon name={n.icon} size={16} />
        </a>
      ))}
    </div>
  );
}

function ArticleHero({ item }) {
  const D = ACData;
  const c = D.companies[item.sym] || {};
  return (
    <div className="ac-arthero">
      <img className="ac-arthero__bg" src={item.img} alt="" />
      <div className="ac-arthero__body">
        <span className="ac-arthero__src">
          {c.mark ? <img src={c.mark} alt="" width={20} height={20} /> : null}
          <strong>{c.name || item.sym}</strong>
          <span aria-hidden="true">·</span>
          <span>{item.time}</span>
        </span>
        <h1 className="heading-h1" style={{ margin: "2px 0 0", fontSize: 22, lineHeight: 1.3 }}>{item.title}</h1>
        <p className="body-md" style={{ margin: 0, maxWidth: 700, lineHeight: 1.5 }}>{item.summary}</p>
        <div className="ac-arthero__foot">
          <span><span style={{ color: "#8CC3FF" }}>{item.topic}</span> · {item.read}</span>
          <ShareRow on="dark" title={item.title} />
        </div>
      </div>
    </div>
  );
}

function RelatedNews({ item }) {
  const D = ACData;
  const c = D.companies[item.sym] || {};
  return (
    <article className="ac-related">
      <img className="ac-related__img" src={item.img} alt="" />
      <span className="ac-related__src">
        {c.mark ? <img src={c.mark} alt="" width={16} height={16} /> : null}
        <span>{c.name || item.sym}</span>
        <span aria-hidden="true">·</span><span>{item.time}</span>
      </span>
      <h4 className="heading-card-title-lg" style={{ margin: 0, fontSize: 16, lineHeight: 1.35 }}>{item.title}</h4>
      <p className="body-sm-relaxed" style={{ margin: 0, color: "var(--color-text-secondary)" }}>{item.summary}</p>
      <span className="body-xs"><span style={{ color: "var(--color-text-link)" }}>{item.topic}</span> · {item.read}</span>
    </article>
  );
}

function ArticleComment({ c }) {
  const [vote, setVote] = React.useState(0);
  return (
    <div className="ac-comment">
      <img className="avatar" src={c.who.img} alt="" width={40} height={40} style={{ width: 40, height: 40 }} />
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <div className="ac-comment__top">
          <strong className="heading-card-title">{c.who.name}</strong>
          <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{c.time}</span>
        </div>
        <p className="body-md" style={{ margin: "4px 0 8px", color: "var(--color-text-secondary)" }}>{c.text}</p>
        <div className="ac-comment__acts">
          <button className="ac-act"><AIcon name="arrow-right" size={16} />Reply</button>
          <button className="ac-act"><AIcon name="share" size={16} />Share</button>
          <span style={{ flex: "1 1 auto" }} />
          <button className="ac-act" aria-pressed={vote === 1} onClick={() => setVote(vote === 1 ? 0 : 1)}>
            <AIcon name="thumb-up" size={16} />{c.up + (vote === 1 ? 1 : 0)}
          </button>
          <button className="ac-act" aria-pressed={vote === -1} onClick={() => setVote(vote === -1 ? 0 : -1)}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><AIcon name="thumb-up" size={16} /></span>
            {c.down + (vote === -1 ? 1 : 0)}
          </button>
        </div>
      </div>
    </div>
  );
}

function ArticleScreen({ item, onBack, onOpen }) {
  const D = ACData;
  const A = D.article;
  const story = item || D.news[0];
  const related = D.news.filter((n) => n.title !== story.title).slice(0, 2);
  const [draft, setDraft] = React.useState("");
  const [mine, setMine] = React.useState([]);
  const [sort, setSort] = React.useState("Best");
  function post() {
    const t = draft.trim();
    if (!t) return;
    setMine([{ who: D.self, time: "Just now", text: t, up: 0, down: 0 }].concat(mine));
    setDraft("");
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <button className="viewmore" onClick={onBack} style={{ alignSelf: "flex-start" }}>
        <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><AIcon name="arrow-right" size={16} /></span>
        Back to News &amp; blogs
      </button>

      <ACard pad={false} className="ac-artshell">
        <ArticleHero item={story} />

        <div className="ac-artgrid">
          <div className="ac-artside">
            <ACard className="card--panel" style={{ padding: 16 }}>
              <div className="ac-tagwrap">
                {A.tags.map((t, i) => <button key={t} className="tfchip" aria-pressed={i === 0}>{t}</button>)}
              </div>
            </ACard>
            <ACard className="card--panel" style={{ padding: 8 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {A.categories.map((c, i) => (
                  <button key={c.label} className="ac-artcat" aria-current={i === 2 ? "true" : undefined}>
                    <AIcon name={c.icon} size={20} />{c.label}
                  </button>
                ))}
              </div>
            </ACard>
          </div>

          <div className="ac-artbody">
            {A.body.map((p, i) => (
              <p key={i} className="body-paragraph" style={{ margin: 0, textWrap: "pretty" }}>{p}</p>
            ))}
            <ShareRow title={story.title} />
          </div>

          <div className="ac-artrelated">
            {related.map((n) => (
              <span key={n.title} role="link" tabIndex={0} onClick={() => onOpen && onOpen(n)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen && onOpen(n); } }}
                style={{ cursor: "pointer", borderRadius: "var(--radius-lg)" }}><RelatedNews item={n} /></span>
            ))}
          </div>
        </div>

        <div className="ac-artcomments">
          <div className="ac-artcomments__head">
            <div>
              <span className="scope__statlabel">Discussion</span>
              <h2 className="heading-h2" style={{ margin: "2px 0 0" }}>{mine.length + A.comments.length} comments</h2>
            </div>
            <label className="ac-sortwrap body-sm">
              <span style={{ color: "var(--color-text-muted)" }}>Sort by</span>
              <select className="ac-sortsel" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort comments">
                <option>Best</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </label>
          </div>

          <div className="ac-artpost">
            <img className="avatar" src={D.self.img} alt="" width={40} height={40} style={{ width: 40, height: 40 }} />
            <div className="ac-artpost__field">
              <textarea className="ac-artdraft" value={draft} onChange={(e) => setDraft(e.target.value)}
                aria-label="Add a comment" placeholder={"Comment as " + D.self.name + " — cite the number if you can"} rows={3} />
              <div className="ac-artpost__foot">
                <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>Posts to your followers. Research, not advice.</span>
                <AButton variant="primary" onClick={post} disabled={!draft.trim()}>Comment</AButton>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {mine.concat(A.comments).map((c, i) => <ArticleComment key={i} c={c} />)}
          </div>
        </div>
      </ACard>
    </div>
  );
}

export { ArticleScreen };
