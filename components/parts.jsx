'use client';
import React from 'react';
import { Icon, Badge, RatingPill, Card, Button, Chip } from '../lib/ds';
import ACData from '../lib/data';
/* Shared primitives built on the Ask Analyst class layer. */

function Delta({ value, suffix = "%", showArrow = true, size }) {
  const up = value >= 0;
  return (
    <span className="tabular" style={{ color: up ? "var(--color-text-positive)" : "var(--color-text-negative)", fontWeight: 700, fontSize: size || 14, whiteSpace: "nowrap" }}>
      {showArrow ? (up ? "↗ " : "↘ ") : ""}{up ? "+" : "−"}{Math.abs(value).toFixed(1)}{suffix}
    </span>
  );
}

function Sparkline({ data, width = 108, height = 30, tone }) {
  const min = Math.min.apply(null, data), max = Math.max.apply(null, data), span = max - min || 1;
  const pts = data.map((v, i) => [(i / (data.length - 1)) * width, height - ((v - min) / span) * (height - 4) - 2]);
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const stroke = tone === "down" ? "var(--color-text-negative)" : tone === "up" ? "var(--color-border-positive)" : "var(--color-chart-line-blue-1)";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" style={{ display: "block", flex: "none" }}>
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Area chart with a hover readout: the pointer snaps to the nearest point and
   the guide, dot and label all read off the same index. The fill fades to
   nothing at the baseline so the plot sits on the card rather than on a slab. */
function AreaChart({ data, height = 240, labels, fill, format }) {
  const w = 1000, min = Math.min.apply(null, data), max = Math.max.apply(null, data), span = max - min || 1;
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, height - ((v - min) / span) * (height - 24) - 12]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = line + " L " + w + " " + height + " L 0 " + height + " Z";
  const grid = [0.15, 0.4, 0.65, 0.9].map((f) => height * f);
  const gid = React.useRef("acg" + Math.random().toString(36).slice(2, 8)).current;
  const [hot, setHot] = React.useState(null);

  function track(e) {
    const box = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - box.left) / box.width));
    setHot(Math.round(ratio * (data.length - 1)));
  }

  const at = hot === null ? null : pts[hot];
  const xPct = hot === null ? 0 : (hot / (data.length - 1)) * 100;
  const yPct = at ? (at[1] / height) * 100 : 0;
  const tick = hot === null || !labels ? null : labels[Math.round((hot / (data.length - 1)) * (labels.length - 1))];
  const read = hot === null ? null : (format ? format(data[hot], hot) : data[hot].toFixed(1));

  return (
    <div style={fill ? { flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" } : undefined}>
      <div className="ac-chart" onMouseMove={track} onMouseLeave={() => setHot(null)}
        style={{ position: "relative", flex: fill ? "1 1 auto" : undefined, minHeight: fill ? 0 : undefined }}>
        <svg viewBox={"0 0 " + w + " " + height} preserveAspectRatio="none" style={{ display: "block", width: "100%", height: fill ? "100%" : height }} aria-hidden="true">
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0.22" />
              <stop offset="60%" stopColor="var(--color-brand-primary)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {grid.map((y, i) => <line key={i} x1="0" x2={w} y1={y} y2={y} stroke="var(--color-chart-grid)" strokeWidth="1" />)}
          <path d={area} fill={"url(#" + gid + ")"} />
          <path d={line} fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinejoin="round" />
          {at ? <line x1={at[0]} x2={at[0]} y1="0" y2={height} stroke="var(--color-border-brand)" strokeWidth="1" strokeDasharray="4 4" /> : null}
        </svg>
        {at ? <span className="ac-chart__dot" style={{ left: xPct + "%", top: yPct + "%" }} /> : null}
        {at ? (
          <span className="ac-chart__tip" style={{ left: xPct + "%", top: yPct + "%" }}>
            <strong className="tabular">{read}</strong>
            {tick ? <span>{tick}</span> : null}
          </span>
        ) : null}
      </div>
      {labels ? (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          {labels.map((l) => <span key={l} className="body-xs" style={{ color: "var(--color-text-muted)" }}>{l}</span>)}
        </div>
      ) : null}
    </div>
  );
}

/* Donut drawn from allocation weights; non-hovered arcs drop to 0.3 like the
   design system's coverage donut. */
function Donut({ parts, size = 172, hole = 0.66, centre }) {
  const [hot, setHot] = React.useState(null);
  const r = size / 2, ir = r * hole, total = parts.reduce((s, p) => s + p.pct, 0) || 1;
  let a = -Math.PI / 2;
  const arcs = parts.map((p, i) => {
    const sweep = (p.pct / total) * Math.PI * 2, a0 = a, a1 = a + sweep; a = a1;
    const x = (rad, ang) => (r + rad * Math.cos(ang)).toFixed(2), y = (rad, ang) => (r + rad * Math.sin(ang)).toFixed(2);
    const large = sweep > Math.PI ? 1 : 0;
    const d = `M ${x(r, a0)} ${y(r, a0)} A ${r} ${r} 0 ${large} 1 ${x(r, a1)} ${y(r, a1)} L ${x(ir, a1)} ${y(ir, a1)} A ${ir} ${ir} 0 ${large} 0 ${x(ir, a0)} ${y(ir, a0)} Z`;
    return <path key={p.sym || i} d={d} fill={p.color} opacity={hot === null || hot === i ? 1 : 0.3} onMouseEnter={() => setHot(i)} onMouseLeave={() => setHot(null)} style={{ transition: "opacity 120ms cubic-bezier(0.2,0,0.2,1)" }} />;
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{arcs}</svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          {hot === null
            ? centre
            : <><span className="label-sm" style={{ color: "var(--color-text-muted)" }}>{parts[hot].sym}</span><strong className="heading-h2">{parts[hot].pct}%</strong></>}
        </div>
      </div>
      <ul className="donut__legend" style={{ width: "100%" }}>
        {parts.map((p, i) => (
          <li key={p.sym || i} className="donut__key" onMouseEnter={() => setHot(i)} onMouseLeave={() => setHot(null)}>
            <span className="donut__dot" style={{ background: p.color }} />
            <span className="donut__count">{p.pct}%</span>
            <span className="donut__label">{p.sym}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelHead({ icon, title, right, eyebrow }) {
  return (
    <div className="stock__head" style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
        {icon ? <span style={{ display: "inline-flex", color: "var(--color-brand-primary)" }}><Icon name={icon} size={20} /></span> : null}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
          {eyebrow ? <span className="scope__statlabel">{eyebrow}</span> : null}
          <h3 className="heading-h2" style={{ margin: 0 }}>{title}</h3>
        </div>
      </div>
      {right ? <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>{right}</div> : null}
    </div>
  );
}

function TfChips({ options = ["1D", "1W", "1M", "6M", "1Y", "5Y"], value, onChange }) {
  return (
    <div className="tfchips">
      {options.map((o) => (
        <button key={o} className="tfchip" aria-pressed={value === o} onClick={() => onChange && onChange(o)}>{o}</button>
      ))}
    </div>
  );
}

function SegToggle({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span className="body-sm" style={{ color: value === options[0] ? "var(--color-text-link)" : "var(--color-text-muted)" }}>{options[0]}</span>
      <button
        onClick={() => onChange(value === options[0] ? options[1] : options[0])}
        aria-label={"Switch to " + (value === options[0] ? options[1] : options[0])}
        style={{ width: 38, height: 20, borderRadius: 999, border: "1px solid var(--color-border-brand)", background: "var(--color-bg-surface)", position: "relative", cursor: "pointer", padding: 0 }}>
        <span style={{ position: "absolute", top: 2, left: value === options[0] ? 2 : 19, width: 14, height: 14, borderRadius: 999, background: "var(--color-brand-primary)", transition: "left 120ms cubic-bezier(0.2,0,0.2,1)" }} />
      </button>
      <span className="body-sm" style={{ color: value === options[1] ? "var(--color-text-link)" : "var(--color-text-muted)" }}>{options[1]}</span>
    </div>
  );
}

/* The one ruled table treatment: brand-subtle header band with the indigo rule,
   brand hairlines between rows, numbers right-aligned and tabular. */
function RuledTable({ columns, rows, template, compact, minWidth, onRowClick }) {
  const sm = compact ? " ctable__cell--sm" : "";
  return (
    <div style={{ overflowX: "auto" }}>
      <div className="ctable" style={{ gridTemplateColumns: template, minWidth: minWidth || undefined }}>
        {columns.map((c, i) => (
          <div key={"h" + i} className={"ctable__cell ctable__cell--head" + sm + (c.align === "right" ? " ctable__cell--end" : c.align === "center" ? " ctable__cell--mid" : "")}>{c.label}</div>
        ))}
        {rows.map((r, ri) => (
          <div key={"r" + ri} style={{ display: "contents" }} className="ruled-row">
            {r.map((cell, ci) => (
              <div
                key={ci}
                onClick={onRowClick ? () => onRowClick(ri) : undefined}
                className={"ctable__cell" + sm + (columns[ci].align === "right" ? " ctable__cell--end" : columns[ci].align === "center" ? " ctable__cell--mid" : "") + (ci === 0 ? " ctable__cell--strong" : "")}
                style={onRowClick ? { cursor: "pointer" } : undefined}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Ticker({ sym, size = 24, showName }) {
  const c = ACData.companies[sym] || {};
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, minWidth: 0 }}>
      {c.mark
        ? <img src={c.mark} alt="" width={size} height={size} style={{ objectFit: "contain", flex: "none" }} />
        : <span aria-hidden="true" style={{ width: size, height: size, flex: "none" }} />}
      <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <strong className="heading-company-name" style={{ color: "var(--color-text-link)", fontSize: 14 }}>{sym}</strong>
        {showName ? <span className="body-xs" style={{ color: "var(--color-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</span> : null}
      </span>
    </span>
  );
}

function Person({ p, size = 40, sub, right, onClick, bold }) {
  return (
    <div className="ac-person" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, width: "100%", cursor: onClick ? "pointer" : "default" }}>
      <img className="avatar" src={p.img} alt="" width={size} height={size} style={{ width: size, height: size }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0, flex: "1 1 auto" }}>
        <span className={bold ? "heading-card-title" : "body-sm-20"} style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
        {sub ? <span className="body-xs" style={{ color: "var(--color-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sub}</span> : null}
      </div>
      {right}
    </div>
  );
}

function BrokerPill({ broker }) {
  const mark = ACData.brokers[broker];
  return <RatingPill tone="brand" mark={mark ? <img className="rating__mark" src={mark} alt="" /> : null}>{broker}</RatingPill>;
}

function CallPill({ call }) {
  const tone = call === "Buy" ? "positive" : call === "Sell" ? "negative" : "warning";
  const glyph = call === "Buy" ? "↗" : call === "Sell" ? "↘" : "—";
  return <RatingPill tone={tone}>{glyph + " " + call}</RatingPill>;
}

function Eyebrow({ children }) {
  return <p className="rgroup" style={{ margin: 0 }}>{children}</p>;
}

function Empty({ children }) {
  return <p className="emptystate">{children}</p>;
}

export { Delta, Sparkline, AreaChart, Donut, PanelHead, TfChips, SegToggle, RuledTable, Ticker, Person, BrokerPill, CallPill, Eyebrow, Empty };
