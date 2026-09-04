'use client';
import React from 'react';
import { Card, Button, RatingPill, Badge, Icon, Tabs, StatBlock, SplitBar } from '../../lib/ds';
import ACData from '../../lib/data';
import { Delta, Sparkline, PanelHead, TfChips, SegToggle, RuledTable, Ticker, Person, Eyebrow } from '../parts';
import { Post } from './Feed';
/* Market surfaces: Trending, Leaderboard, Discover, Subscribed pages. */

function TrendingScreen({ tab, setTab, view, setView }) {
  const D = ACData;
  const [tf, setTf] = React.useState("1D");
  const [mode, setMode] = React.useState("Value");
  const tabs = [{ key: "trades", label: "Trades" }, { key: "positions", label: "Positions" }, { key: "mentions", label: "Mentions" }];
  const views = [
    { key: "traded", label: "Most traded", caption: "Share of PSX turnover" },
    { key: "bought", label: "Most bought", caption: "Net buy share on Alpha Capital" },
    { key: "sold", label: "Most sold", caption: "Net sell share on Alpha Capital" }
  ];
  const rows = D.trending[view] || D.trending.traded;
  const active = views.find((v) => v.key === view) || views[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Tabs tabs={tabs} active={tab} onSelect={setTab} label="Trending views" />

      {tab === "trades" ? (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16 }}>
            {views.map((v) => {
              const on = v.key === view;
              return (
                <button key={v.key} onClick={() => setView(v.key)} className="ac-selectcard" aria-pressed={on}
                  style={{ textAlign: "left", cursor: "pointer", border: on ? "1px solid var(--color-border-brand)" : "1px solid var(--ac-cardline)", borderRadius: "var(--radius-2xl)", padding: "22px 24px", background: on ? "var(--color-bg-brand-subtle)" : "var(--color-bg-surface)", display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--color-brand-primary)", opacity: on ? 1 : 0.35 }} />
                    <span className="heading-h2" style={{ color: on ? "var(--color-text-link)" : "var(--color-text-primary)" }}>{v.label}</span>
                  </span>
                  <span className="body-sm" style={{ color: "var(--color-text-secondary)" }}>{v.caption}</span>
                  <span style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
                    <span className="tabular heading-h2">{D.trending[v.key][0].sym}</span>
                    <Sparkline data={D.series(v.key.length + 5, 22, v.key === "sold" ? -0.8 : 0.8)} width={96} height={28} tone={v.key === "sold" ? "down" : "up"} />
                  </span>
                </button>
              );
            })}
          </div>

          <Card className="card--pad-lg">
            <PanelHead icon="compare" title={active.label} eyebrow={active.caption}
              right={<><SegToggle options={["Value", "Volume"]} value={mode} onChange={setMode} /><TfChips value={tf} onChange={setTf} /></>} />
            <RuledTable
              template="0.5fr 1.8fr 1fr 1fr 1fr"
              columns={[{ label: "Rank" }, { label: "Company" }, { label: mode === "Value" ? "Price" : "Volume", align: "right" }, { label: tf + " change", align: "right" }, { label: "% traded", align: "right" }]}
              rows={rows.map((r, i) => [
                <span className="tabular label-md" style={{ color: "var(--color-text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>,
                <Ticker sym={r.sym} showName />,
                <span className="tabular">{mode === "Value" ? "PKR " + r.px : (parseFloat(r.px.replace(/,/g, "")) * 1240).toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>,
                <Delta value={r.chg} />,
                <span className="tabular">{r.share}</span>
              ])} />
          </Card>
        </>
      ) : null}

      {tab === "positions" ? (
        <Card className="card--pad-lg">
          <PanelHead icon="notes" title="Most held positions" eyebrow="Across Alpha Capital portfolios" right={<TfChips value={tf} onChange={setTf} />} />
          <RuledTable
            template="0.5fr 1.8fr 1fr 1.2fr 1fr"
            columns={[{ label: "Rank" }, { label: "Company" }, { label: "Holders", align: "right" }, { label: "Average cost", align: "right" }, { label: "Unrealised", align: "right" }]}
            rows={D.trending.positions.map((r, i) => [
              <span className="tabular label-md" style={{ color: "var(--color-text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>,
              <Ticker sym={r.sym} showName />,
              <span className="tabular">{r.holders}</span>,
              <span className="tabular">{r.avg}</span>,
              <Delta value={r.chg} />
            ])} />
        </Card>
      ) : null}

      {tab === "mentions" ? (
        <Card className="card--pad-lg">
          <PanelHead icon="notes" title="Most mentioned" eyebrow="Posts and comments in the last 24 hours" right={<TfChips options={["1D", "1W", "1M"]} value={tf} onChange={setTf} />} />
          <RuledTable
            template="0.5fr 1.8fr 1fr 1fr 1.1fr"
            columns={[{ label: "Rank" }, { label: "Company" }, { label: "Mentions", align: "right" }, { label: "Change", align: "right" }, { label: "Sentiment", align: "right" }]}
            rows={D.trending.mentions.map((r, i) => [
              <span className="tabular label-md" style={{ color: "var(--color-text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>,
              <Ticker sym={r.sym} showName />,
              <span className="tabular">{r.count}</span>,
              <Delta value={r.chg} />,
              <RatingPill tone={r.sentiment === "Positive" ? "positive" : r.sentiment === "Negative" ? "negative" : "neutral"}>
                {(r.sentiment === "Positive" ? "↗ " : r.sentiment === "Negative" ? "↘ " : "— ") + r.sentiment}
              </RatingPill>
            ])} />
        </Card>
      ) : null}
    </div>
  );
}

function LeaderboardScreen({ onOpenPerson }) {
  const D = ACData;
  const [tf, setTf] = React.useState("1D");
  const buy = 9, hold = 3, sell = 1;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="bstats">
        <StatBlock value={"+27.2%"} label="Top return" />
        <StatBlock value={"12"} label="Ranked investors" />
        <StatBlock value={"PKR 421mn"} label="Tracked AUM" />
        <StatBlock value={"08"} label="Beating the KSE-100" />
      </div>
      <Card className="card--pad-lg">
        <PanelHead icon="sparkle" title="Market winners" eyebrow="Ranked by return over the window" right={<TfChips value={tf} onChange={setTf} />} />
        <RuledTable
          template="0.5fr 2fr 1fr 1.1fr 1fr"
          columns={[{ label: "Rank" }, { label: "Investor" }, { label: "Tracked AUM", align: "right" }, { label: tf + " path", align: "center" }, { label: tf + " change", align: "right" }]}
          onRowClick={(i) => onOpenPerson(D.leaders[i].person)}
          rows={D.leaders.map((l, i) => [
            <span className="tabular label-md" style={{ color: "var(--color-text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>,
            <Person p={l.person} size={32} sub={l.person.handle} bold />,
            <span className="tabular">{l.aum}</span>,
            <Sparkline data={l.series} width={120} height={26} tone={l.chg >= 0 ? "up" : "down"} />,
            <Delta value={l.chg} />
          ])} />
      </Card>
      <Card className="card--pad-lg">
        <PanelHead icon="compare" title="How the board is positioned" eyebrow="Calls held by ranked investors" />
        <SplitBar parts={[{ kind: "buy", value: buy }, { kind: "hold", value: hold }, { kind: "sell", value: sell }]} label="Cement pack" caption={buy + " Buy · " + hold + " Hold · " + sell + " Sell across 13 tracked books"} height={8} />
      </Card>
    </div>
  );
}

function MoverStrip({ title, icon, rows, tone }) {
  return (
    <Card className="card--pad-lg">
      <PanelHead icon={icon} title={title} right={<a className="rail__all" href="#">See all <Icon name="arrow-right" size={16} /></a>} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16 }}>
        {rows.map((r) => (
          <div key={r.sym} className="card card--panel ac-hoverlift" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <Ticker sym={r.sym} size={22} />
              <Delta value={r.chg} />
            </div>
            <Sparkline data={ACData.series(r.sym.length + 2, 20, tone === "down" ? -0.9 : 0.9)} width={200} height={30} tone={tone} />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>Vol {r.vol}</span>
              <span className="body-xs tabular" style={{ color: "var(--color-text-muted)" }}>{r.val}</span>
            </div>
            <span className="body-xs" style={{ color: "var(--color-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ACData.companies[r.sym].name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function FollowGrid({ title, icon, items, subscribed }) {
  const [state, setState] = React.useState({});
  return (
    <Card className="card--pad-lg">
      <PanelHead icon={icon} title={title} right={<a className="rail__all" href="#">See all <Icon name="arrow-right" size={16} /></a>} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16 }}>
        {items.map((it) => {
          const on = state[it.title] === undefined ? !!subscribed : state[it.title];
          return (
            <div key={it.title} className="card card--panel" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                <span style={{ width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  {it.mark
                    ? <img src={it.mark} alt="" width={22} height={22} style={{ objectFit: "contain" }} />
                    : <span style={{ color: "var(--color-brand-primary)", display: "inline-flex" }}><Icon name={it.icon || "notes"} size={22} /></span>}
                </span>
                <span className="heading-card-title" style={{ color: "var(--color-text-link)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.title}</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span className="body-xs" style={{ color: "var(--color-text-muted)" }}>{it.kind}</span>
                <span className="body-xs" style={{ color: "var(--color-text-faint)" }}>· {it.followers} followers</span>
              </div>
              <span onClick={() => setState(Object.assign({}, state, { [it.title]: !on }))} style={{ display: "block" }}>
                <Button variant={on ? "default" : "primary"} style={{ width: "100%" }}>{on ? "Unfollow" : "Follow"}</Button>
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function DiscoverScreen({ onShare }) {
  const D = ACData;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <MoverStrip title="Today's market winners" icon="arrow-up-right" rows={D.marketWinners} tone="up" />
      <MoverStrip title="Today's market losers" icon="arrow-right" rows={D.marketLosers} tone="down" />
      <FollowGrid title="Houses to follow" icon="document" items={D.pages.investors} />
      <FollowGrid title="Companies to follow" icon="book" items={D.pages.companies} />
      <FollowGrid title="Sectors to follow" icon="compare" items={D.pages.sectors} />
      <FollowGrid title="Other topics" icon="notes" items={D.pages.topics} />
      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Eyebrow>Top posts</Eyebrow>
        {D.posts.slice(1, 3).map((p) => <Post key={"d" + p.id} post={p} onShare={onShare} />)}
      </section>
    </div>
  );
}

function PagesScreen() {
  const D = ACData;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="bstats">
        <StatBlock value={"14"} label="Houses" />
        <StatBlock value={"09"} label="Companies" />
        <StatBlock value={"04"} label="Sectors" />
        <StatBlock value={"06"} label="Topics" />
      </div>
      <FollowGrid title="Houses" icon="document" items={D.pages.investors} subscribed />
      <FollowGrid title="Companies" icon="book" items={D.pages.companies} subscribed />
      <FollowGrid title="Sectors" icon="compare" items={D.pages.sectors} subscribed />
      <FollowGrid title="Other topics" icon="notes" items={D.pages.topics} subscribed />
    </div>
  );
}

export { TrendingScreen, LeaderboardScreen, DiscoverScreen, PagesScreen, MoverStrip, FollowGrid };
