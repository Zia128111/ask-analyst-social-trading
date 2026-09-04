'use client';
/* The Ask Analyst design-system bundle, wrapped as an ES module.
   The bundle is compiled JS that assigns onto `window` and reads a global
   `React`; shadowing both in module scope lets it run under SSR too.
   The project copy re-points the bundle's internal icon resolver at the Tabler
   set, so DS components and app screens draw from one glyph family. */
import * as ReactNS from 'react';
import { TablerIcon } from './icons-tabler';
const window = globalThis;
const React = ReactNS;
window.React = ReactNS;
window.TablerIcon = TablerIcon;

/* @ds-bundle: {"format":4,"namespace":"AskAnalystDesignSystem_21c0d0","components":[{"name":"Callout","sourcePath":"components/cards/Callout.jsx"},{"name":"ConsensusCard","sourcePath":"components/cards/ConsensusCard.jsx"},{"name":"Hero","sourcePath":"components/cards/Hero.jsx"},{"name":"InsightCard","sourcePath":"components/cards/InsightCard.jsx"},{"name":"ReportCard","sourcePath":"components/cards/ReportCard.jsx"},{"name":"SectionHeader","sourcePath":"components/cards/SectionHeader.jsx"},{"name":"Sidenote","sourcePath":"components/cards/Sidenote.jsx"},{"name":"StockCard","sourcePath":"components/cards/StockCard.jsx"},{"name":"Price","sourcePath":"components/cards/StockCard.jsx"},{"name":"CommentaryBlock","sourcePath":"components/cards/StockCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Dropdown","sourcePath":"components/core/Dropdown.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"CALL_TONE","sourcePath":"components/core/RatingPill.jsx"},{"name":"CALL_GLYPH","sourcePath":"components/core/RatingPill.jsx"},{"name":"SENTIMENT_TONE","sourcePath":"components/core/RatingPill.jsx"},{"name":"SENTIMENT_GLYPH","sourcePath":"components/core/RatingPill.jsx"},{"name":"RatingPill","sourcePath":"components/core/RatingPill.jsx"},{"name":"ConsensusTable","sourcePath":"components/data/ConsensusTable.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KeyLevelsTable","sourcePath":"components/data/KeyLevelsTable.jsx"},{"name":"SplitBar","sourcePath":"components/data/SplitBar.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ShareDialog","sourcePath":"components/feedback/ShareDialog.jsx"},{"name":"FilterMenu","sourcePath":"components/filters/FilterMenu.jsx"},{"name":"FilterRow","sourcePath":"components/filters/FilterRow.jsx"},{"name":"SearchBox","sourcePath":"components/filters/SearchBox.jsx"},{"name":"Avatar","sourcePath":"components/navigation/Avatar.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"LOGO_ASPECT","sourcePath":"components/navigation/Logo.jsx"},{"name":"Logo","sourcePath":"components/navigation/Logo.jsx"},{"name":"PageShell","sourcePath":"components/navigation/PageShell.jsx"},{"name":"PRIMARY_NAV","sourcePath":"components/navigation/SiteNav.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CompanySidebarCard","sourcePath":"components/rail/CompanySidebarCard.jsx"},{"name":"DisclaimerCard","sourcePath":"components/rail/DisclaimerCard.jsx"},{"name":"ExploreCTA","sourcePath":"components/rail/ExploreCTA.jsx"},{"name":"RailPanel","sourcePath":"components/rail/RailPanel.jsx"},{"name":"RailMore","sourcePath":"components/rail/RailPanel.jsx"},{"name":"RelatedList","sourcePath":"components/rail/RelatedList.jsx"},{"name":"RelatedReports","sourcePath":"components/rail/RelatedReports.jsx"}],"sourceHashes":{"components/cards/Callout.jsx":"7919a5d0d909","components/cards/ConsensusCard.jsx":"a162b43bb7d4","components/cards/Hero.jsx":"3d7d93b1f463","components/cards/InsightCard.jsx":"08aab8d44e02","components/cards/ReportCard.jsx":"e1a1bcebb9c0","components/cards/SectionHeader.jsx":"27869fa51937","components/cards/Sidenote.jsx":"9f3522ea5d84","components/cards/StockCard.jsx":"a5b56b616fb3","components/core/Badge.jsx":"2e781f9993c9","components/core/Button.jsx":"05d86b69633b","components/core/Card.jsx":"23c211791b1a","components/core/Chip.jsx":"01913e9ab8a6","components/core/Dropdown.jsx":"be85d7e08a2d","components/core/Icon.jsx":"c80ad52ff199","components/core/RatingPill.jsx":"806948993af5","components/data/ConsensusTable.jsx":"6e6308bdb270","components/data/DataTable.jsx":"c578b51c2b5e","components/data/KeyLevelsTable.jsx":"7f152d21add9","components/data/SplitBar.jsx":"b5b83c4bc90a","components/data/StatBlock.jsx":"6c99798f3db7","components/feedback/EmptyState.jsx":"d900690e69b5","components/feedback/ShareDialog.jsx":"fa0494f7ad73","components/filters/FilterMenu.jsx":"4711c433e3b0","components/filters/FilterRow.jsx":"09c15b1c03a3","components/filters/SearchBox.jsx":"07d2b6a4f2eb","components/navigation/Avatar.jsx":"8b4e22833aee","components/navigation/Header.jsx":"3d0fab59e78f","components/navigation/Logo.jsx":"d31e8ac59277","components/navigation/PageShell.jsx":"20f6e515e8e4","components/navigation/SiteNav.jsx":"25a3dbafd728","components/navigation/Tabs.jsx":"eec7e9497477","components/rail/CompanySidebarCard.jsx":"13e476c8ed6a","components/rail/DisclaimerCard.jsx":"b635f477055e","components/rail/ExploreCTA.jsx":"ec25e03e75f9","components/rail/RailPanel.jsx":"2dee66de5424","components/rail/RelatedList.jsx":"74a3525f6be8","components/rail/RelatedReports.jsx":"30bf3f880a92","ui_kits/askanalyst-web/BrokerOverviewScreen.jsx":"d3f261f229c2","ui_kits/askanalyst-web/CompanyInsightsScreen.jsx":"6b5446482225","ui_kits/askanalyst-web/MarketReportScreen.jsx":"55c15c503320","ui_kits/askanalyst-web/ResearchLibraryScreen.jsx":"3d7b4716bbbb","ui_kits/askanalyst-web/data.js":"60d7a86d7cd3","ui_kits/askanalyst-web/shared.jsx":"a7cc3539dbbb"},"inlinedExternals":[],"unexposedExports":[{"name":"useDismissable","sourcePath":"components/filters/FilterMenu.jsx"}]} */

(() => {

const __ds_ns = (window.AskAnalystDesignSystem_21c0d0 = window.AskAnalystDesignSystem_21c0d0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Sidenote.jsx
try { (() => {
/* The glossary note that sits under a commentary paragraph: brand-subtle fill,
   brand outline, radius 10, an 18px info-blue disc carrying the marker digit.
   Give it an id and the numbered reference in the prose can jump to it. */
function Sidenote({
  index,
  term,
  children,
  id
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidenote",
    id: id || (index ? 'note-' + index : undefined)
  }, /*#__PURE__*/React.createElement("div", {
    className: "row center",
    style: {
      gap: 6
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    className: "sidenote__marker",
    "aria-hidden": true
  }, index) : null, /*#__PURE__*/React.createElement("span", {
    className: "sidenote__term"
  }, term)), /*#__PURE__*/React.createElement("p", {
    className: "sidenote__body",
    style: {
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Sidenote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Sidenote.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The 11px pill used on the research screens. Six tones, each a token trio. */
function Badge({
  tone = 'neutral',
  icon,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['badge', 'badge--' + tone, className].filter(Boolean).join(' ')
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Every panel in the product: 1px brand-blue outline, radius 15, white surface.
   The brand outline is a deliberate product decision over the Figma grey hairline. */
function Card({
  pad = true,
  raised = false,
  panel = false,
  as = 'section',
  style,
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['card', pad ? 'card--pad' : '', raised ? 'card--raised' : '', panel ? 'card--panel' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/StockCard.jsx
try { (() => {
/* Figma "StockCard" — instrument headline row (name left, price right), an
   optional state badge, then commentary blocks. Radius 14, raised shadow. */
function StockCard({
  name,
  price,
  badge,
  children
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    raised: true,
    pad: false,
    className: "card--pad-stock",
    style: {
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 19
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stock__head"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 21,
      fontWeight: 600,
      color: 'var(--color-text-near-black)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 20,
      color: 'var(--color-text-near-black)'
    }
  }, price)), badge && /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: 'flex-start',
      width: '100%'
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 15
    }
  }, children)));
}

/* PKR 822.37 — the mixed-size price node: 14px unit, 20px figure. */
function Price({
  amount,
  currency = 'PKR'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, currency), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, amount));
}

/* A labelled prose block: 11px bold info-blue caption over 16px/1.49 body. */
function CommentaryBlock({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      lineHeight: '16.5px',
      color: 'var(--color-accent-info)'
    }
  }, label), children);
}
Object.assign(__ds_scope, { StockCard, Price, CommentaryBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StockCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 13px bold grey chip — sector, market and broker tags. Given an href it becomes
   a link that turns brand blue on hover (the broker chips in the research rail). */
function Chip({
  icon,
  href,
  children,
  className = '',
  ...rest
}) {
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: ['chip', 'chip--link', className].filter(Boolean).join(' '),
    href: href
  }, rest), body);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['chip', className].filter(Boolean).join(' ')
  }, rest), body);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icon set lifted verbatim from askanalyst-web app/components/ui/Icon.tsx.
   Names mirror the Figma layer names (iconify ids) so design and code stay traceable. */
const STROKE = {
  'chevron-down': 'm6 9 6 6 6-6',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  download: 'M12 3v12m0 0 4-4m-4 4-4-4M4 19h16',
  share: 'M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M12 15V3m0 0L8 7m4-4 4 4',
  bell: 'M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 0 1-3.4 0',
  document: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z',
  filter: 'M3 5h18l-7 8v6l-4 2v-8Z',
  compare: 'M8 3v18M16 3v18M3 8h5M16 16h5',
  notes: 'M5 3h11l4 4v14H5zM9 9h7M9 13h7M9 17h4',
  book: 'M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z',
  copy: 'M15 5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15'
};
const FILL = {
  sparkle: ['M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16.5l-1.9-5.6L4.5 9l5.6-1.4z', 'M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z'],
  flash: ['M7 2h9l-3.2 6H18l-9 14 2-9H6.5z'],
  twitter: ['M23.6 4.9a9.6 9.6 0 0 1-2.7.8 4.7 4.7 0 0 0 2.1-2.6 9.4 9.4 0 0 1-3 1.1 4.7 4.7 0 0 0-8 4.3A13.3 13.3 0 0 1 2.3 3.6a4.7 4.7 0 0 0 1.4 6.3 4.6 4.6 0 0 1-2.1-.6v.1a4.7 4.7 0 0 0 3.7 4.6 4.7 4.7 0 0 1-2.1.1 4.7 4.7 0 0 0 4.4 3.2A9.4 9.4 0 0 1 .9 19.3a13.2 13.2 0 0 0 7.2 2.1c8.6 0 13.3-7.1 13.3-13.3v-.6a9.5 9.5 0 0 0 2.2-2.6z'],
  facebook: ['M15.1 8.4V6.6c0-.9.2-1.3 1.5-1.3h1.6V2.1C17.7 2 16.9 2 16 2c-2.8 0-4.6 1.7-4.6 4.8v1.6H8.6v3.4h2.8V22h3.7V11.8h2.8l.4-3.4h-3.2z'],
  reddit: ['M22 12.1a2.2 2.2 0 0 0-3.7-1.6 10.7 10.7 0 0 0-5.6-1.8l1-4.4 3 .7a1.6 1.6 0 1 0 .2-1.1l-3.5-.8a.6.6 0 0 0-.7.4l-1.1 5.2a10.7 10.7 0 0 0-5.7 1.8A2.2 2.2 0 1 0 3.4 14a3.9 3.9 0 0 0 0 .6c0 3.1 3.6 5.7 8.1 5.7s8.1-2.6 8.1-5.7a3.9 3.9 0 0 0 0-.6 2.2 2.2 0 0 0 2.4-1.9zM7.4 13.7a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0zm8.9 4.3c-1.1 1.1-3.2 1.2-3.8 1.2s-2.7-.1-3.8-1.2a.4.4 0 0 1 .6-.6c.7.7 2.2.9 3.2.9s2.5-.2 3.2-.9a.4.4 0 0 1 .6.6zm-.3-2.7a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z'],
  whatsapp: ['M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.3.2-.6 0a8.2 8.2 0 0 1-2.4-1.4 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.6.6 0 0 0 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.4 3.4 0 0 0-1.1 2.6 6 6 0 0 0 1.2 3.1 13.4 13.4 0 0 0 5.2 4.6 8 8 0 0 0 1.7.6 4.2 4.2 0 0 0 1.9.1 3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.5zM12 2a10 10 0 0 0-8.6 15.1l-1.3 4.6 4.8-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2z']
};
function Icon({
  name = 'document',
  size = 16,
  ...rest
}) {
  const fill = FILL[name];
  if (fill) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": true
    }, rest), fill.map((d, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d,
      opacity: i === 1 ? 0.7 : undefined
    })));
  }
  const d = STROKE[name];
  const extra = name === 'eye' ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }) : name === 'copy' ? /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "12",
    height: "12",
    rx: "2"
  }) : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  }, rest), extra, d ? /*#__PURE__*/React.createElement("path", {
    d: d
  }) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/Callout.jsx
try { (() => {
/* The amber note: warning-subtle fill, amber outline, mdi:flash glyph. Used for
   a contrarian broker view — never for anything the reader must act on. */
function Callout({
  icon = 'flash',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  }) : null, children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Callout.jsx", error: String((e && e.message) || e) }); }

// components/cards/Hero.jsx
try { (() => {
/* Figma "Insights Header Image" — 1259x120 brand-subtle banner with the market
   sparkline behind at 15% opacity. The landing screen of every surface uses it:
   sparkle + title on the insights and library screens, the house's own mark on a
   broker overview (pass mark instead of icon). */
function Hero({
  title,
  subtitle,
  pill,
  icon = 'sparkle',
  mark,
  art = 'assets/insights-hero-chart.png'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "ihero"
  }, art && /*#__PURE__*/React.createElement("img", {
    className: "ihero__art",
    src: art,
    alt: "",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    className: mark ? 'ihero__body bhero__body' : 'ihero__body'
  }, mark, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ihero__title"
  }, !mark && icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  }) : null, " ", title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "ihero__sub"
  }, subtitle))), pill && /*#__PURE__*/React.createElement("span", {
    className: "ihero__pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ihero__dot",
    "aria-hidden": true
  }), pill));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Hero.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The .btn primitive from globals.css: 10/14 padding, radius 8, 1px brand outline.
   Primary fills brand blue and darkens to navy on hover. */
function Button({
  variant = 'default',
  icon,
  href,
  children,
  className = '',
  ...rest
}) {
  const cls = ['btn', variant === 'primary' ? 'btn--primary' : '', variant === 'icon' ? 'btn--icon' : '', className].filter(Boolean).join(' ');
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : icon, children);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), body);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button"
  }, rest), body);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/SectionHeader.jsx
try { (() => {
/* Figma "Section Header" — 40px title, optional standfirst, an analyst / date /
   pages meta line with 5px brand dots between, then the report actions. */
function SectionHeader({
  title,
  subtitle,
  analyst,
  date,
  pages,
  broker = 'Alpha Capital Pvt. Ltd.',
  actions = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "page-standfirst"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "row center",
    style: {
      gap: 10,
      flexWrap: 'wrap',
      color: 'var(--color-text-muted)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, analyst), /*#__PURE__*/React.createElement(Dot, null), /*#__PURE__*/React.createElement("span", null, date), /*#__PURE__*/React.createElement(Dot, null), /*#__PURE__*/React.createElement("span", null, pages)), actions && /*#__PURE__*/React.createElement("div", {
    className: "row center",
    style: {
      gap: 5,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "eye"
  }, broker), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "document"
  }, "View Full Report (PDF)"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "download"
  }, "Download PDF"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "icon",
    icon: "share",
    "aria-label": "Share"
  })));
}
function Dot() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: 'var(--color-brand-primary)'
    }
  });
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The resting filter control: 31px (sm) or 36px (lg), 0.3px brand hairline.
   Presentational only — FilterMenu is the one that opens a panel. */
function Dropdown({
  label,
  size = 'sm',
  expanded,
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: ['dropdown', size === 'lg' ? 'dropdown--lg' : '', className].filter(Boolean).join(' '),
    type: "button",
    "aria-expanded": expanded,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dropdown__text"
  }, label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/core/RatingPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Figma "Insight Rating": 14px bold, 4px/7px, radius 6 — larger than Badge.
   Carries a call (Buy / Hold / Sell), a sentiment, a category or a broker name. */
const TONE = {
  brand: 'rating--brand',
  positive: 'rating--positive',
  negative: 'rating--negative',
  warning: 'rating--warning',
  neutral: 'rating--neutral'
};
const CALL_TONE = {
  Buy: 'positive',
  Hold: 'warning',
  Sell: 'negative'
};
const CALL_GLYPH = {
  Buy: '\u2197',
  Hold: '\u2014',
  Sell: '\u2198'
};
const SENTIMENT_TONE = {
  Positive: 'positive',
  Negative: 'negative',
  Neutral: 'neutral'
};
const SENTIMENT_GLYPH = {
  Positive: '\u2197',
  Negative: '\u2198',
  Neutral: '\u2014'
};
function RatingPill({
  tone = 'neutral',
  mark,
  href,
  onClick,
  pressed,
  children,
  className = '',
  ...rest
}) {
  const cls = ['rating', TONE[tone] || TONE.neutral, className].filter(Boolean).join(' ');
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, mark, children);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls + ' rating--link',
    href: href
  }, rest), body);
  if (onClick) return /*#__PURE__*/React.createElement("button", _extends({
    className: cls + ' rating--btn',
    type: "button",
    "aria-pressed": pressed,
    onClick: onClick
  }, rest), body);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), body);
}
Object.assign(__ds_scope, { CALL_TONE, CALL_GLYPH, SENTIMENT_TONE, SENTIMENT_GLYPH, RatingPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RatingPill.jsx", error: String((e && e.message) || e) }); }

// components/cards/InsightCard.jsx
try { (() => {
/* Figma "Summary Text" — the card shared by the Insights and Reports tabs.
   22px/30px padding, radius 15, brand hairline. Pills row, title, summary,
   then hashtag themes on the left and the actions on the right. */
function InsightCard({
  item,
  alert = true,
  brokerHref,
  brokerMark,
  sourceHref = '#'
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "icard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icard__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icard__pills"
  }, /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: "brand",
    mark: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "document",
      size: 12
    })
  }, item.category), /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: __ds_scope.SENTIMENT_TONE[item.sentiment]
  }, __ds_scope.SENTIMENT_GLYPH[item.sentiment], " ", item.sentiment), /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: "neutral",
    href: brokerHref ? brokerHref(item.broker) : undefined,
    mark: brokerMark ? brokerMark(item.broker) : null
  }, item.broker)), /*#__PURE__*/React.createElement("span", {
    className: "icard__source"
  }, item.source)), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "icard__title"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "icard__summary"
  }, item.summary)), /*#__PURE__*/React.createElement("div", {
    className: "icard__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icard__tags"
  }, (item.tags || []).join(' ')), /*#__PURE__*/React.createElement("div", {
    className: "icard__actions"
  }, alert && /*#__PURE__*/React.createElement("button", {
    className: "iaction",
    type: "button"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 20
  }), " Alert"), /*#__PURE__*/React.createElement("button", {
    className: "iaction",
    type: "button"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "share",
    size: 20
  }), " Share"), /*#__PURE__*/React.createElement("a", {
    className: "iaction",
    href: sourceHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "document",
    size: 20
  }), " Source"))));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ReportCard.jsx
try { (() => {
/* One row of the research library, built on the same .icard shell as InsightCard.
   Type pill, broker pill, optional rating; date and page count on the right;
   tickers, sector and analyst along the foot with the target price. */
function ReportCard({
  report,
  brokerHref,
  brokerMark
}) {
  const {
    rating,
    upside
  } = report;
  return /*#__PURE__*/React.createElement("article", {
    className: "icard rcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icard__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icard__pills"
  }, /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: "brand",
    mark: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "document",
      size: 12
    })
  }, report.type), /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: "neutral",
    href: brokerHref ? brokerHref(report.broker) : undefined,
    mark: brokerMark ? brokerMark(report.broker) : null
  }, report.broker), rating && /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: __ds_scope.CALL_TONE[rating]
  }, __ds_scope.CALL_GLYPH[rating], " ", rating)), /*#__PURE__*/React.createElement("span", {
    className: "icard__source"
  }, report.date, " \xB7 ", report.pages, " pages")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "icard__title"
  }, report.href ? /*#__PURE__*/React.createElement("a", {
    className: "rcard__link",
    href: report.href
  }, report.title) : report.title), /*#__PURE__*/React.createElement("p", {
    className: "icard__summary"
  }, report.summary)), /*#__PURE__*/React.createElement("div", {
    className: "icard__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rcard__meta"
  }, (report.companies || []).length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "rcard__tickers"
  }, report.companies.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "rcard__ticker"
  }, c))), /*#__PURE__*/React.createElement("span", {
    className: "rcard__by"
  }, report.sector, " \xB7 ", report.analyst), rating && report.target && /*#__PURE__*/React.createElement("span", {
    className: "rcard__target tabular"
  }, "TP ", report.target, typeof upside === 'number' && /*#__PURE__*/React.createElement("em", {
    className: upside >= 0 ? 'rcard__up' : 'rcard__down'
  }, upside >= 0 ? '+' : '', upside, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "icard__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "iaction",
    type: "button"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "download",
    size: 20
  }), " PDF"), /*#__PURE__*/React.createElement("button", {
    className: "iaction",
    type: "button"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "share",
    size: 20
  }), " Share"), report.href && /*#__PURE__*/React.createElement("a", {
    className: "iaction",
    href: report.href
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "document",
    size: 20
  }), " Open"))));
}
Object.assign(__ds_scope, { ReportCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ReportCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ConsensusTable.jsx
try { (() => {
/* Figma broker consensus table — five columns, ruled, broker cell carries the
   house pill and links to its overview screen. */
const COLUMNS = ['Broker', 'Consensus', 'Analyst', 'Target Price', 'Last Revision'];
const ALIGN = ['', 'ctable__cell--mid', 'ctable__cell--mid', 'ctable__cell--end', 'ctable__cell--end'];
function ConsensusTable({
  rows,
  brokerHref,
  brokerMark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ctable-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctable",
    role: "table",
    "aria-label": "Broker consensus"
  }, COLUMNS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    className: ['ctable__cell', 'ctable__cell--head', ALIGN[i]].filter(Boolean).join(' '),
    role: "columnheader"
  }, c)), rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "trow",
    key: r.broker + r.revised,
    role: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctable__cell",
    role: "cell"
  }, /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: "neutral",
    href: brokerHref ? brokerHref(r.broker) : undefined,
    mark: brokerMark ? brokerMark(r.broker) : null
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 16,
      color: 'var(--color-text-primary)'
    }
  }, r.broker))), /*#__PURE__*/React.createElement("div", {
    className: "ctable__cell ctable__cell--mid",
    role: "cell"
  }, /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    tone: __ds_scope.CALL_TONE[r.call]
  }, __ds_scope.CALL_GLYPH[r.call], " ", r.call)), /*#__PURE__*/React.createElement("div", {
    className: "ctable__cell ctable__cell--mid",
    role: "cell"
  }, r.analyst), /*#__PURE__*/React.createElement("div", {
    className: "ctable__cell ctable__cell--end tabular",
    role: "cell"
  }, r.target), /*#__PURE__*/React.createElement("div", {
    className: "ctable__cell ctable__cell--end tabular",
    role: "cell"
  }, r.revised)))));
}
Object.assign(__ds_scope, { ConsensusTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ConsensusTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/* The ruled grid table shared by Key Data and the quarterly results block
   (Figma "Frame 41090" / "Frame 41088"). columns drives the grid; strong rows
   are the summary lines (Gross Profit, PBT, Net Income, EPS). */
function DataTable({
  columns,
  rows,
  minWidth = 660
}) {
  const template = '1.5fr repeat(' + (columns.length - 1) + ', minmax(0, 1fr))';
  return /*#__PURE__*/React.createElement("div", {
    className: "ctable-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fintable",
    role: "table",
    style: {
      gridTemplateColumns: template,
      minWidth
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    className: ['ctable__cell', 'ctable__cell--head', 'ctable__cell--sm', i ? 'ctable__cell--end' : ''].filter(Boolean).join(' '),
    role: "columnheader"
  }, c)), rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "trow",
    key: r.label,
    role: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: ['ctable__cell', 'ctable__cell--sm', r.strong ? 'ctable__cell--strong' : ''].filter(Boolean).join(' '),
    role: "cell"
  }, r.label), r.cells.map((cell, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ['ctable__cell', 'ctable__cell--sm', 'ctable__cell--end', 'tabular', r.strong ? 'ctable__cell--strong' : ''].filter(Boolean).join(' '),
    role: "cell"
  }, cell))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyLevelsTable.jsx
try { (() => {
/* Figma "Frame 41088" — the key-levels grid: two 447px columns, ruled with
   horizontal hairlines only. No outer frame, no column rule. Header band is
   brand-subtle with an indigo bottom rule. */
function KeyLevelsTable({
  rows,
  headLabel = 'Level',
  headValue = 'Price'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "levels",
    role: "table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "levels__cell levels__cell--head",
    role: "columnheader"
  }, headLabel), /*#__PURE__*/React.createElement("div", {
    className: "levels__cell levels__cell--head levels__cell--num",
    role: "columnheader"
  }, headValue), rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "trow",
    key: r.label,
    role: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "levels__cell levels__cell--muted",
    role: "cell"
  }, r.label), /*#__PURE__*/React.createElement("div", {
    className: ['levels__cell', 'levels__cell--num', r.tone ? 'levels__cell--' + r.tone : ''].filter(Boolean).join(' '),
    role: "cell"
  }, r.value))));
}
Object.assign(__ds_scope, { KeyLevelsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyLevelsTable.jsx", error: String((e && e.message) || e) }); }

// components/data/SplitBar.jsx
try { (() => {
/* Buy / Hold / Sell (or sentiment) share of coverage, drawn from the counts so
   the bar always agrees with the pills above it. 6px tall, fully rounded. */
function SplitBar({
  parts,
  label,
  caption,
  height
}) {
  const total = parts.reduce((s, p) => s + p.value, 0) || 1;
  return /*#__PURE__*/React.createElement("div", {
    className: label || caption ? 'scope__splitwrap' : undefined
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "scope__statlabel"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cbar",
    role: "img",
    "aria-label": caption || label,
    style: height ? {
      height
    } : undefined
  }, parts.map(p => /*#__PURE__*/React.createElement("span", {
    key: p.kind,
    className: 'cbar__seg--' + p.kind,
    style: {
      width: p.value / total * 100 + '%'
    }
  }))), caption && /*#__PURE__*/React.createElement("span", {
    className: "scope__sub"
  }, caption));
}
Object.assign(__ds_scope, { SplitBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SplitBar.jsx", error: String((e && e.message) || e) }); }

// components/cards/ConsensusCard.jsx
try { (() => {
/* Figma "Product Summary Container" — 28/34 padding, radius 16. Company identity,
   the Buy/Hold/Sell pills (which filter the table), the coverage split bar, a
   contrarian callout when houses disagree, then the broker table. */
const CALLS = ['Buy', 'Hold', 'Sell'];
function ConsensusCard({
  entry,
  brokerHref,
  brokerMark
}) {
  const [only, setOnly] = React.useState(null);
  const rows = entry.rows || [];
  const counts = {
    Buy: 0,
    Hold: 0,
    Sell: 0
  };
  rows.forEach(r => {
    counts[r.call] += 1;
  });
  const verdict = CALLS.slice().sort((a, b) => counts[b] - counts[a])[0];
  const dissent = rows.filter(r => r.call !== verdict).map(r => r.broker);
  const shown = only ? rows.filter(r => r.call === only) : rows;
  return /*#__PURE__*/React.createElement("section", {
    className: "ccard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ccard__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, entry.logo && /*#__PURE__*/React.createElement("img", {
    className: "quote__art",
    src: entry.logo,
    alt: "",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 20,
      lineHeight: 1.49
    }
  }, entry.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1.49,
      color: 'var(--color-text-secondary)'
    }
  }, rows.length, " Brokers Covering"))), /*#__PURE__*/React.createElement("div", {
    className: "icard__pills"
  }, CALLS.map(c => /*#__PURE__*/React.createElement(__ds_scope.RatingPill, {
    key: c,
    tone: __ds_scope.CALL_TONE[c],
    pressed: only === c,
    onClick: () => setOnly(only === c ? null : c)
  }, __ds_scope.CALL_GLYPH[c], " ", c, ": ", counts[c])), only && /*#__PURE__*/React.createElement("button", {
    className: "resetlink",
    type: "button",
    onClick: () => setOnly(null)
  }, "Show all"))), /*#__PURE__*/React.createElement("div", {
    className: "ccard__verdict"
  }, /*#__PURE__*/React.createElement("small", null, "CONSENSUS"), /*#__PURE__*/React.createElement("strong", {
    className: 'ccard__verdict--' + verdict.toLowerCase()
  }, verdict))), /*#__PURE__*/React.createElement(__ds_scope.SplitBar, {
    parts: [{
      kind: 'buy',
      value: counts.Buy
    }, {
      kind: 'hold',
      value: counts.Hold
    }, {
      kind: 'sell',
      value: counts.Sell
    }],
    caption: counts.Buy + ' buy, ' + counts.Hold + ' hold, ' + counts.Sell + ' sell'
  }), dissent.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.Callout, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Contrarian View"), ": ", dissent.slice(0, 2).join(', '), dissent.length > 2 ? ' and ' + (dissent.length - 2) + ' more' : '', " rate", dissent.length === 1 ? 's' : '', " ", entry.symbol, " differently from consensus")), /*#__PURE__*/React.createElement(__ds_scope.ConsensusTable, {
    rows: shown,
    brokerHref: brokerHref,
    brokerMark: brokerMark
  }));
}
Object.assign(__ds_scope, { ConsensusCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ConsensusCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
/* Figma "Frame 41146" — the four brand-subtle blocks across a broker overview.
   142 tall, 32px value over a 20px label. Wrap four in a div.bstats grid. */
function StatBlock({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bstat"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "bstat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "bstat__label"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/* The dashed panel shown when filters narrow a list to nothing. 40/30 padding,
   16px muted text, radius 15 — the only dashed border in the system. */
function EmptyState({
  children = 'No results match these filters.',
  onReset,
  resetLabel = 'Clear filters'
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "emptystate"
  }, children, onReset ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("button", {
    className: "resetlink",
    type: "button",
    onClick: onReset
  }, resetLabel)) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ShareDialog.jsx
try { (() => {
/* Figma "Share_Popup" (6148:9076) — 464px dialog, 32px padding, radius 4, over a
   55% black scrim. Four 64px tinted discs; the network brand colours deliberately
   sit outside the token set. Clipboard falls back to execCommand on http origins. */
const TARGETS = [{
  key: 'twitter',
  label: 'Twitter',
  brand: '#1DA1F2',
  url: (u, t) => 'https://twitter.com/intent/tweet?url=' + u + '&text=' + t
}, {
  key: 'facebook',
  label: 'Facebook',
  brand: '#1877F2',
  url: u => 'https://www.facebook.com/sharer/sharer.php?u=' + u
}, {
  key: 'reddit',
  label: 'Reddit',
  brand: '#FF4500',
  url: (u, t) => 'https://www.reddit.com/submit?url=' + u + '&title=' + t
}, {
  key: 'whatsapp',
  label: 'WhatsApp',
  brand: '#25D366',
  url: (u, t) => 'https://wa.me/?text=' + t + '%20' + u
}];
function ShareDialog({
  title = '',
  url = '',
  onClose
}) {
  const [copied, setCopied] = React.useState('');
  const enc = encodeURIComponent(url || '');
  const encT = encodeURIComponent(title || '');
  const copy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => setCopied('Link copied'), () => setCopied('Press Ctrl+C to copy'));
    } else setCopied('Press Ctrl+C to copy');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sharescrim",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Share",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sharedlg",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sharedlg__x",
    type: "button",
    "aria-label": "Close",
    onClick: onClose
  }, '\u00d7'), /*#__PURE__*/React.createElement("div", {
    className: "sharedlg__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sharedlg__title"
  }, "Share this report"), /*#__PURE__*/React.createElement("p", {
    className: "sharedlg__sub"
  }, title)), /*#__PURE__*/React.createElement("ul", {
    className: "sharedlg__targets"
  }, TARGETS.map(t => /*#__PURE__*/React.createElement("li", {
    key: t.key
  }, /*#__PURE__*/React.createElement("a", {
    className: "sharedlg__target",
    href: t.url(enc, encT),
    target: "_blank",
    rel: "noreferrer",
    style: {
      '--brand': t.brand
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sharedlg__disc"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.key,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "sharedlg__label"
  }, t.label))))), /*#__PURE__*/React.createElement("div", {
    className: "sharedlg__url"
  }, /*#__PURE__*/React.createElement("input", {
    readOnly: true,
    value: url,
    "aria-label": "Report link",
    onFocus: e => e.target.select()
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Copy link",
    onClick: copy
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "copy",
    size: 16
  }))), /*#__PURE__*/React.createElement("p", {
    className: "sharedlg__copied"
  }, copied)));
}
Object.assign(__ds_scope, { ShareDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ShareDialog.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterMenu.jsx
try { (() => {
/* Closes a popover on outside pointer-down or Escape. */
function useDismissable(root, open, close) {
  React.useEffect(() => {
    if (!open) return;
    const onDown = e => {
      if (root.current && !root.current.contains(e.target)) close();
    };
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close, root]);
}

/* A filter block that opens: optional search box, scrollable options, tick marks
   in multiple mode. values is ALWAYS an array; the option with value '' clears. */
function FilterMenu({
  label,
  options,
  values = [],
  onChange,
  searchable = false,
  searchPlaceholder = 'Search\u2026',
  multiple = false
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const root = React.useRef(null);
  useDismissable(root, open, () => setOpen(false));
  const q = query.trim().toLowerCase();
  const shown = q ? options.filter(o => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)) : options;
  const pick = value => {
    if (value === '') {
      onChange([]);
      setOpen(false);
      return;
    }
    if (!multiple) {
      onChange([value]);
      setOpen(false);
      return;
    }
    onChange(values.includes(value) ? values.filter(v => v !== value) : values.concat([value]));
  };
  let buttonText = label;
  if (values.length) {
    const first = (options.find(o => o.value === values[0]) || {}).label || values[0];
    buttonText = values.length === 1 ? first : first + ' +' + (values.length - 1);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "fmenu",
    ref: root
  }, /*#__PURE__*/React.createElement("button", {
    className: "dropdown dropdown--lg",
    type: "button",
    "aria-expanded": open,
    "aria-haspopup": "listbox",
    onClick: () => {
      setOpen(!open);
      setQuery('');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dropdown__text"
  }, buttonText), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "fmenu__panel",
    role: "listbox",
    "aria-multiselectable": multiple || undefined,
    "aria-label": label
  }, searchable && /*#__PURE__*/React.createElement("input", {
    className: "fmenu__search",
    type: "search",
    autoFocus: true,
    value: query,
    placeholder: searchPlaceholder,
    onChange: e => setQuery(e.target.value)
  }), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "fmenu__empty"
  }, "No matches"), shown.map(o => {
    const on = o.value === '' ? values.length === 0 : values.includes(o.value);
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      className: "fmenu__opt",
      type: "button",
      role: "option",
      "aria-selected": on,
      onClick: () => pick(o.value)
    }, /*#__PURE__*/React.createElement("span", null, o.label), multiple && o.value !== '' && /*#__PURE__*/React.createElement("span", {
      className: "fmenu__tick",
      "aria-hidden": true
    }, on ? '\u2713' : ''));
  }), multiple && values.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fmenu__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "resetlink",
    type: "button",
    onClick: () => onChange([])
  }, "Clear ", values.length, " selected"))));
}
Object.assign(__ds_scope, { useDismissable, FilterMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterMenu.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterRow.jsx
try { (() => {
/* Figma "Frame 41152": a funnel that chooses which filter blocks are on show,
   followed by the blocks themselves. Hiding a block clears its value, so a list
   can never be narrowed from a control the reader cannot see. */
function FilterRow({
  fields,
  onHide
}) {
  const [hidden, setHidden] = React.useState(() => new Set());
  const [open, setOpen] = React.useState(false);
  const root = React.useRef(null);
  __ds_scope.useDismissable(root, open, () => setOpen(false));
  const toggle = key => setHidden(prev => {
    const next = new Set(prev);
    if (next.has(key)) next.delete(key);else {
      next.add(key);
      if (onHide) onHide(key);
    }
    return next;
  });
  const hiddenCount = fields.filter(f => hidden.has(f.key)).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "filterbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fmenu",
    ref: root
  }, /*#__PURE__*/React.createElement("button", {
    className: "filterbar__icon",
    type: "button",
    "aria-expanded": open,
    "aria-haspopup": "true",
    title: "Choose filters",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "filter",
    size: 18
  }), hiddenCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "filterbar__count"
  }, hiddenCount)), open && /*#__PURE__*/React.createElement("div", {
    className: "fmenu__panel fmenu__panel--left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fmenu__caption"
  }, "Show filters"), fields.map(f => /*#__PURE__*/React.createElement("label", {
    key: f.key,
    className: "fmenu__opt"
  }, /*#__PURE__*/React.createElement("span", null, f.label), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !hidden.has(f.key),
    onChange: () => toggle(f.key)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fmenu__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "resetlink",
    type: "button",
    onClick: () => setHidden(new Set())
  }, "Show all")))), fields.filter(f => !hidden.has(f.key)).map(f => /*#__PURE__*/React.createElement(React.Fragment, {
    key: f.key
  }, f.menu)));
}
Object.assign(__ds_scope, { FilterRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterRow.jsx", error: String((e && e.message) || e) }); }

// components/filters/SearchBox.jsx
try { (() => {
/* Free-text search above the filter row on the research library: 44px tall,
   brand outline, brand focus ring, clear button once there is a query. */
function SearchBox({
  value,
  onChange,
  placeholder = 'Search reports, companies, brokers\u2026'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rsearch"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rsearch__icon",
    "aria-hidden": true
  }, '\u2315'), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }), value ? /*#__PURE__*/React.createElement("button", {
    className: "rsearch__clear",
    type: "button",
    "aria-label": "Clear search",
    onClick: () => onChange('')
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { SearchBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/SearchBox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Avatar.jsx
try { (() => {
/* Figma "Ellipse 6" — the 33px account mark in the header. Falls back to the grey
   placeholder circle when the photo is missing, never a broken image. */
function Avatar({
  src,
  size = 33
}) {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) return /*#__PURE__*/React.createElement("span", {
    className: "avatar avatar--empty",
    style: {
      width: size,
      height: size
    },
    "aria-hidden": true
  });
  return /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    style: {
      width: size,
      height: size
    },
    src: src,
    alt: "",
    "aria-hidden": true,
    onError: () => setFailed(true)
  });
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Logo.jsx
try { (() => {
/* The Ask Analyst lockup (mark + wordmark) exported from Figma as one SVG, 93x36.
   Point src at wherever the asset sits in the consuming project. */
const LOGO_ASPECT = 93 / 36;
function Logo({
  height = 36,
  src = 'assets/logo.svg',
  alt = 'Ask Analyst'
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    height: height,
    width: Math.round(height * LOGO_ASPECT),
    style: {
      display: 'block'
    }
  });
}
Object.assign(__ds_scope, { LOGO_ASPECT, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
/* The pill nav from the Figma "Navigation" frame. Ten items; the active one
   fills brand blue. Items with no screen stay inert rather than 404ing. */
const PRIMARY_NAV = ['Market', 'Companies', 'Data Bank', 'Sector Fundamentals', 'Economy', 'Media', 'Features', 'Calculator', 'Research Report', 'AI Powered Insights'];
function SiteNav({
  active,
  items = PRIMARY_NAV,
  hrefs = {},
  onSelect
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, items.map(label => {
    const on = label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      className: on ? 'navitem navitem--on' : 'navitem',
      href: hrefs[label] || '#',
      "aria-current": on ? 'page' : undefined,
      onClick: onSelect ? e => {
        e.preventDefault();
        onSelect(label);
      } : undefined
    }, label);
  }));
}
Object.assign(__ds_scope, { PRIMARY_NAV, SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/* Figma component "Header" — 1440x60, sticky, 0.3px brand hairline underneath.
   Logo, then the nav at a 69px offset (x=196 on the 1440 frame), then the account. */
function Header({
  navActive,
  navItems,
  navHrefs,
  onNavSelect,
  logoSrc,
  avatarSrc
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "header__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__logo"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc
  })), /*#__PURE__*/React.createElement("div", {
    className: "header__nav"
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteNav, {
    active: navActive,
    items: navItems,
    hrefs: navHrefs,
    onSelect: onNavSelect
  })), /*#__PURE__*/React.createElement("div", {
    className: "header__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12
  }))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageShell.jsx
try { (() => {
/* The screen frame: header, 34px gap, a 1260 content column centred, 50px tail. */
function PageShell({
  navActive,
  navItems,
  navHrefs,
  onNavSelect,
  logoSrc,
  avatarSrc,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Header, {
    navActive: navActive,
    navItems: navItems,
    navHrefs: navHrefs,
    onNavSelect: onNavSelect,
    logoSrc: logoSrc,
    avatarSrc: avatarSrc
  }), /*#__PURE__*/React.createElement("main", {
    className: "shell"
  }, children));
}
Object.assign(__ds_scope, { PageShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageShell.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* Figma "Tabs Navigation" — 14px labels, 2px brand underline on the selected tab,
   scrolls horizontally rather than wrapping. */
function Tabs({
  tabs,
  active,
  onSelect,
  label = 'Views'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs",
    role: "tablist",
    "aria-label": label
  }, tabs.map(t => {
    const key = t.key || t.label;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      className: "tab",
      role: "tab",
      href: t.href || '#',
      "aria-selected": key === active,
      onClick: onSelect ? e => {
        e.preventDefault();
        onSelect(key);
      } : undefined
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/rail/CompanySidebarCard.jsx
try { (() => {
/* Figma "Company Card" (sidebar variant). stacked = artwork above centred text
   (the PSX promo); inline = artwork left, title and tags right. CTA spans the
   panel in both. */
function CompanySidebarCard({
  title,
  tags = [],
  cta,
  image,
  imageSize = 84,
  layout = 'stacked'
}) {
  const inline = layout === 'inline';
  const artwork = image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    "aria-hidden": true,
    style: {
      width: imageSize,
      height: 'auto',
      maxWidth: '100%',
      display: 'block',
      objectFit: 'contain',
      flexShrink: 0
    }
  }) : null;
  const text = /*#__PURE__*/React.createElement("div", {
    className: inline ? 'col' : 'col center',
    style: {
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      textAlign: inline ? 'left' : 'center'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 5,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: t
  }, t))));
  return /*#__PURE__*/React.createElement(__ds_scope.Card, null, /*#__PURE__*/React.createElement("div", {
    className: inline ? 'col' : 'col center',
    style: {
      gap: 16
    }
  }, inline ? /*#__PURE__*/React.createElement("div", {
    className: "row center",
    style: {
      gap: 12,
      justifyContent: 'center'
    }
  }, artwork, text) : /*#__PURE__*/React.createElement(React.Fragment, null, artwork, text), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: cta.icon,
    style: {
      width: '100%'
    }
  }, cta.label)));
}
Object.assign(__ds_scope, { CompanySidebarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rail/CompanySidebarCard.jsx", error: String((e && e.message) || e) }); }

// components/rail/DisclaimerCard.jsx
try { (() => {
/* Figma "Disclaimer Section" — the compliance note every research screen carries.
   Wording is fixed: Ask Analyst is a data platform, not an advisor. */
function DisclaimerCard({
  href = '#',
  linkLabel = 'Click here to read the full report'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "card card--pad-lg"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.49
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Disclaimer:"), " This page summarizes third-party research and does not constitute investment advice. AskAnalyst is a data platform and does not provide investment recommendations. Please consult your financial advisor before making investment decisions."), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-block',
      marginTop: 12,
      fontSize: 16,
      color: 'var(--color-text-link)'
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { DisclaimerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rail/DisclaimerCard.jsx", error: String((e && e.message) || e) }); }

// components/rail/ExploreCTA.jsx
try { (() => {
/* Figma "Explore Section" — the brand-subtle upsell panel: heading, four
   arrow rows, and the free-account line underneath. */
const EXPLORE = [{
  label: 'Financial Statement',
  icon: 'document'
}, {
  label: 'AI Insights',
  icon: 'sparkle'
}, {
  label: 'Peer Comparison',
  icon: 'compare'
}, {
  label: 'Notes & Disclosures',
  icon: 'notes'
}];
function ExploreCTA({
  heading,
  items = EXPLORE
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "card card--pad-lg",
    style: {
      background: 'var(--color-bg-brand-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.49
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 20
    }
  }, heading), /*#__PURE__*/React.createElement("br", null), "Access 20 years of financial data, AI insights from annual reports, and peer comparison tools."), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 9
    }
  }, items.map(e => /*#__PURE__*/React.createElement("a", {
    key: e.label,
    href: "#",
    className: "btn",
    style: {
      justifyContent: 'space-between',
      padding: '14px 13px',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row center",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: e.icon,
    size: 20
  }), e.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.49,
      color: 'var(--color-text-secondary)'
    }
  }, "Free account required to access full financial data.")));
}
Object.assign(__ds_scope, { ExploreCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rail/ExploreCTA.jsx", error: String((e && e.message) || e) }); }

// components/rail/RailPanel.jsx
try { (() => {
/* The generic right-rail panel: a Card with a 20px bold heading and a stack
   beneath it. Trending This Week, Top Brokers, Browse by Sector, Coverage,
   Companies Covered and Report Type are all this shell. */
function RailPanel({
  title,
  gap = 20,
  pad = 'default',
  footer,
  children
}) {
  const cls = ['card', pad === 'lg' ? 'card--pad-lg' : 'card--pad', footer ? 'brail' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "rail__title"
  }, title), children), footer);
}

/* Figma "View All Reports" — the ruled footer control that reveals the rest of
   a panel's rows in place rather than linking out. */
function RailMore({
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "brail__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brail__more",
    type: "button",
    onClick: onClick
  }, label, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, '\u2192')));
}
Object.assign(__ds_scope, { RailPanel, RailMore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rail/RailPanel.jsx", error: String((e && e.message) || e) }); }

// components/rail/RelatedList.jsx
try { (() => {
/* Figma "More From Cement Section" — peer tickers with their marks, hairline
   separated, each row an arrow link. */
function RelatedList({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.RailPanel, {
    title: title,
    gap: 25
  }, /*#__PURE__*/React.createElement("ul", {
    className: "col",
    style: {
      gap: 15
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: item.symbol,
    className: "col",
    style: {
      gap: 15
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    className: "row center",
    style: {
      gap: 5
    }
  }, item.logo && /*#__PURE__*/React.createElement("img", {
    src: item.logo,
    alt: "",
    "aria-hidden": true,
    width: 30,
    height: 30,
    style: {
      objectFit: 'contain',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      padding: 5
    }
  }, item.symbol), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  })), i < items.length - 1 && /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--color-border-subtle)',
      margin: 0
    }
  })))));
}
Object.assign(__ds_scope, { RelatedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rail/RelatedList.jsx", error: String((e && e.message) || e) }); }

// components/rail/RelatedReports.jsx
try { (() => {
/* Figma "Related Reports Section" — broker as a chip above the title, date as
   plain 12px muted text below, and a ruled View all footer link. */
function RelatedReports({
  items,
  viewAllLabel,
  title = 'Related Reports'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "card card--pad",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 25
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rail__title"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "col",
    style: {
      gap: 18
    }
  }, items.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: r.title,
    className: "col",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: r.href || '#',
    className: "col",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row center",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    icon: r.logo ? /*#__PURE__*/React.createElement("img", {
      src: r.logo,
      alt: "",
      "aria-hidden": true,
      width: 12,
      height: 12,
      style: {
        objectFit: 'contain'
      }
    }) : null
  }, r.source)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      lineHeight: '24px',
      padding: 5
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    className: "rail__date",
    style: {
      paddingLeft: 5
    }
  }, r.date)), i < items.length - 1 && /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--color-border-subtle)',
      margin: 0
    }
  })))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "row center",
    style: {
      gap: 9,
      justifyContent: 'center',
      padding: '18px 0',
      borderTop: '1px solid var(--color-border-subtle)',
      fontSize: 16,
      color: 'var(--color-text-near-black)'
    }
  }, viewAllLabel, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  }))));
}
Object.assign(__ds_scope, { RelatedReports });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rail/RelatedReports.jsx", error: String((e && e.message) || e) }); }

// ui_kits/askanalyst-web/BrokerOverviewScreen.jsx
try { (() => {
/* /broker/[slug] — one house's coverage, calls and published research. */
function BrokerOverviewScreen({
  onOpen
}) {
  const {
    Hero,
    StatBlock,
    RailPanel,
    RailMore,
    ReportCard,
    RatingPill,
    CALL_TONE,
    CALL_GLYPH,
    Icon
  } = DS;
  const B = D.broker;
  const [allCalls, setAllCalls] = React.useState(false);
  const calls = allCalls ? B.calls : B.calls.slice(0, 3);
  const total = B.types.reduce((s, t) => s + t.count, 0);
  let offset = 0;
  const CIRC = 2 * Math.PI * 56;
  return /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    title: B.name,
    subtitle: B.subtitle,
    pill: B.pill,
    mark: /*#__PURE__*/React.createElement(BrokerMark, {
      name: B.name,
      className: "bhero__mark"
    }),
    art: "../../assets/insights-hero-chart.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout__main col",
    style: {
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bstats"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: B.stats.totalReports,
    label: "Total Reports"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: B.stats.reportTypes,
    label: "Report Types"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: B.stats.companiesCovered,
    label: "Companies Covered"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: B.stats.recent,
    label: B.stats.recentLabel
  })), /*#__PURE__*/React.createElement("hr", {
    className: "brule"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "bsection"
  }, "Published Research"), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 20
    }
  }, D.reports.filter(r => r.broker === B.name).concat(D.reports.slice(0, 2)).slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement(ReportCard, {
    key: r.id + i,
    report: Object.assign({}, r, {
      broker: B.name,
      href: r.screen ? '#' + r.screen : undefined
    }),
    brokerMark: brokerMark,
    brokerHref: () => '#broker'
  })))), /*#__PURE__*/React.createElement("aside", {
    className: "layout__rail col",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "card card--pad-lg brail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row center",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(BrokerMark, {
    name: B.name,
    className: "brail__mark"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "brail__name"
  }, B.name)), /*#__PURE__*/React.createElement("div", {
    className: "brail__calls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rating rating--positive"
  }, '\u2197', " Buy: ", B.callCounts.Buy), /*#__PURE__*/React.createElement("span", {
    className: "rating rating--warning"
  }, '\u2014', " Hold: ", B.callCounts.Hold), /*#__PURE__*/React.createElement("span", {
    className: "rating rating--negative"
  }, '\u2198', " Sell: ", B.callCounts.Sell))), /*#__PURE__*/React.createElement("ul", {
    className: "brail__list"
  }, calls.map(row => /*#__PURE__*/React.createElement("li", {
    key: row.symbol,
    className: "brail__row"
  }, /*#__PURE__*/React.createElement("img", {
    className: "brail__logo",
    src: row.logo,
    alt: "",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("span", {
    className: "col brail__rowbody"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brail__rowtitle"
  }, row.company), /*#__PURE__*/React.createElement("span", {
    className: "brail__rowmeta tabular"
  }, row.symbol, " ", '\u00b7', " TP ", row.target, " ", '\u00b7', " ", row.revised)), /*#__PURE__*/React.createElement("span", {
    className: 'rating rating--' + (row.call === 'Buy' ? 'positive' : row.call === 'Hold' ? 'warning' : 'negative') + ' brail__call'
  }, CALL_GLYPH[row.call], " ", row.call))))), !allCalls && B.calls.length > 3 && /*#__PURE__*/React.createElement(RailMore, {
    label: 'View all ' + B.calls.length + ' Calls',
    onClick: () => setAllCalls(true)
  })), /*#__PURE__*/React.createElement("section", {
    className: "card card--pad-lg brail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "brail__title"
  }, "Companies Covered"), /*#__PURE__*/React.createElement("ul", {
    className: "brail__companies"
  }, B.companies.map(c => /*#__PURE__*/React.createElement("li", {
    key: c.ticker,
    className: "brail__company"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brail__companyname"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "rating rating--neutral"
  }, c.count, " Report", c.count === 1 ? '' : 's')))))), /*#__PURE__*/React.createElement("section", {
    className: "card card--pad-lg brail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "brail__title"
  }, "Report Type"), /*#__PURE__*/React.createElement("svg", {
    className: "donut",
    viewBox: "0 0 160 160",
    role: "img",
    "aria-label": "Reports by type"
  }, B.types.map(t => {
    const len = t.count / total * CIRC;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: t.label,
      cx: "80",
      cy: "80",
      r: "56",
      fill: "none",
      stroke: t.color,
      strokeWidth: "23.5",
      strokeDasharray: len + ' ' + (CIRC - len),
      strokeDashoffset: -offset,
      transform: "rotate(-90 80 80)"
    });
    offset += len;
    return el;
  })), /*#__PURE__*/React.createElement("ul", {
    className: "donut__legend"
  }, B.types.map(t => /*#__PURE__*/React.createElement("li", {
    key: t.label,
    className: "donut__key"
  }, /*#__PURE__*/React.createElement("span", {
    className: "donut__dot",
    style: {
      background: t.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "donut__count tabular"
  }, t.count), /*#__PURE__*/React.createElement("span", {
    className: "donut__label"
  }, t.label)))))))));
}
window.BrokerOverviewScreen = BrokerOverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/askanalyst-web/BrokerOverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/askanalyst-web/CompanyInsightsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* /company/insights and its sibling tabs — AI insights, reports and consensus. */
function CompanyInsightsScreen({
  onOpen
}) {
  const {
    Hero,
    Tabs,
    Card,
    Chip,
    InsightCard,
    ReportCard,
    ConsensusCard,
    FilterRow,
    FilterMenu,
    SplitBar,
    EmptyState
  } = DS;
  const TABS = [{
    key: 'insights',
    label: 'Insights'
  }, {
    key: 'reports',
    label: 'Reports'
  }, {
    key: 'consensus',
    label: 'Consensus View'
  }];
  const [tab, setTab] = React.useState('insights');
  const [sentiments, setSentiments] = React.useState([]);
  const [brokers, setBrokers] = React.useState([]);
  const C = D.consensus;
  const counts = {
    Buy: 0,
    Hold: 0,
    Sell: 0
  };
  C.rows.forEach(r => {
    counts[r.call] += 1;
  });
  const avgTarget = C.rows.reduce((s, r) => s + Number(r.target), 0) / C.rows.length;
  const upside = (avgTarget - Number(C.price)) / Number(C.price) * 100;
  const shownInsights = D.insights.filter(i => (!sentiments.length || sentiments.includes(i.sentiment)) && (!brokers.length || brokers.includes(i.broker)));
  const fields = [{
    key: 'sentiment',
    label: 'Sentiment',
    menu: /*#__PURE__*/React.createElement(FilterMenu, {
      label: "All Sentiment",
      values: sentiments,
      onChange: setSentiments,
      multiple: true,
      options: [{
        value: '',
        label: 'All Sentiment'
      }, {
        value: 'Positive',
        label: 'Positive'
      }, {
        value: 'Neutral',
        label: 'Neutral'
      }, {
        value: 'Negative',
        label: 'Negative'
      }]
    })
  }, {
    key: 'broker',
    label: 'Broker',
    menu: /*#__PURE__*/React.createElement(FilterMenu, {
      label: "All Brokers",
      values: brokers,
      onChange: setBrokers,
      multiple: true,
      searchable: true,
      options: [{
        value: '',
        label: 'All Brokers'
      }].concat(Array.from(new Set(D.insights.map(i => i.broker))).map(b => ({
        value: b,
        label: b
      })))
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Hero, _extends({}, D.insightsHero, {
    art: "../../assets/insights-hero-chart.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: TABS,
    active: tab,
    onSelect: setTab,
    label: "Company detail views"
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "scope"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scope__id"
  }, /*#__PURE__*/React.createElement("img", {
    src: C.logo,
    alt: "",
    "aria-hidden": true,
    style: {
      width: 56,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ccompany__name",
    style: {
      padding: 0
    }
  }, C.name), /*#__PURE__*/React.createElement("div", {
    className: "ccompany__tags"
  }, /*#__PURE__*/React.createElement(Chip, null, C.symbol), /*#__PURE__*/React.createElement(Chip, null, "Cement"), /*#__PURE__*/React.createElement(Chip, null, "Pakistan")))), /*#__PURE__*/React.createElement("div", {
    className: "scope__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scope__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scope__statlabel"
  }, "Price"), /*#__PURE__*/React.createElement("strong", {
    className: "scope__statvalue tabular"
  }, "PKR ", C.price)), /*#__PURE__*/React.createElement("div", {
    className: "scope__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scope__statlabel"
  }, "Consensus"), /*#__PURE__*/React.createElement("strong", {
    className: "scope__statvalue",
    style: {
      color: 'var(--color-text-positive-strong)'
    }
  }, "Buy")), /*#__PURE__*/React.createElement("div", {
    className: "scope__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scope__statlabel"
  }, "Brokers"), /*#__PURE__*/React.createElement("strong", {
    className: "scope__statvalue tabular"
  }, C.rows.length)), /*#__PURE__*/React.createElement("div", {
    className: "scope__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scope__statlabel"
  }, "Avg target"), /*#__PURE__*/React.createElement("strong", {
    className: "scope__statvalue tabular"
  }, avgTarget.toFixed(0))), /*#__PURE__*/React.createElement("div", {
    className: "scope__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scope__statlabel"
  }, "Implied upside"), /*#__PURE__*/React.createElement("strong", {
    className: "scope__statvalue tabular",
    style: {
      color: 'var(--color-text-positive)'
    }
  }, "+", upside.toFixed(1), "%")), /*#__PURE__*/React.createElement(SplitBar, {
    label: "Consensus split",
    parts: [{
      kind: 'buy',
      value: counts.Buy
    }, {
      kind: 'hold',
      value: counts.Hold
    }, {
      kind: 'sell',
      value: counts.Sell
    }],
    caption: counts.Buy + ' Buy \u00b7 ' + counts.Hold + ' Hold \u00b7 ' + counts.Sell + ' Sell'
  })))), tab === 'insights' && /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FilterRow, {
    fields: fields,
    onHide: k => k === 'broker' ? setBrokers([]) : setSentiments([])
  }), shownInsights.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    onReset: () => {
      setBrokers([]);
      setSentiments([]);
    }
  }, "No insights match these filters.") : shownInsights.map(i => /*#__PURE__*/React.createElement(InsightCard, {
    key: i.title,
    item: i,
    brokerMark: brokerMark,
    brokerHref: () => '#broker',
    sourceHref: "#market"
  }))), tab === 'reports' && /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 20
    }
  }, D.reports.slice(0, 4).map(r => /*#__PURE__*/React.createElement(ReportCard, {
    key: r.id,
    report: Object.assign({}, r, {
      href: r.screen ? '#' + r.screen : undefined
    }),
    brokerMark: brokerMark,
    brokerHref: () => '#broker'
  }))), tab === 'consensus' && /*#__PURE__*/React.createElement(ConsensusCard, {
    entry: C,
    brokerMark: brokerMark,
    brokerHref: () => '#broker'
  })));
}
window.CompanyInsightsScreen = CompanyInsightsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/askanalyst-web/CompanyInsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/askanalyst-web/MarketReportScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* /research/market — the weekly technical report detail screen. */
function MarketReportScreen({
  onOpen
}) {
  const {
    SectionHeader,
    Card,
    StockCard,
    Price,
    CommentaryBlock,
    Sidenote,
    KeyLevelsTable,
    Badge,
    CompanySidebarCard,
    RelatedList,
    RelatedReports,
    DisclaimerCard,
    ExploreCTA
  } = DS;
  const M = D.market;
  const kseNotes = M.sidenotes.concat([M.retracementNote]);
  return /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout__main col",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, _extends({}, M.meta, {
    broker: "Alpha Capital Pvt. Ltd."
  })), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 23,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: false,
    className: "card--pad-lg"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.49
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 28
    }
  }, "AI Insights"), /*#__PURE__*/React.createElement("br", null), M.aiInsight)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '20.8px'
    }
  }, "INDEX OVERVIEW"), /*#__PURE__*/React.createElement(StockCard, {
    name: "KSE-100 Index",
    price: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, "153,866"),
    badge: /*#__PURE__*/React.createElement("div", {
      className: "row between center",
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "negative"
    }, "Downward Cyclical Shift"), /*#__PURE__*/React.createElement(Badge, {
      tone: "negative"
    }, "-3,629"))
  }, /*#__PURE__*/React.createElement(CommentaryBlock, {
    label: "What Happened"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    notes: kseNotes
  }, M.kseWhatHappened), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 7,
      marginTop: 7
    }
  }, M.sidenotes.map(n => /*#__PURE__*/React.createElement(Sidenote, {
    key: n.index,
    index: n.index,
    term: n.term
  }, n.body)))), /*#__PURE__*/React.createElement(CommentaryBlock, {
    label: "Key levels"
  }, M.kseKeyLevels.map((p, i) => /*#__PURE__*/React.createElement(Paragraph, {
    key: i,
    notes: kseNotes
  }, p)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(Sidenote, {
    index: M.retracementNote.index,
    term: M.retracementNote.term
  }, M.retracementNote.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(KeyLevelsTable, {
    rows: M.levelRows
  })))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '20.8px'
    }
  }, "Individual Stocks"), M.stocks.map(s => /*#__PURE__*/React.createElement(StockCard, {
    key: s.name,
    name: s.name,
    price: /*#__PURE__*/React.createElement(Price, {
      amount: s.price
    }),
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: s.badge.tone
    }, s.badge.label)
  }, /*#__PURE__*/React.createElement(CommentaryBlock, {
    label: "Analyst view"
  }, s.view.map((p, i) => /*#__PURE__*/React.createElement(Paragraph, {
    key: i,
    notes: s.notes
  }, p)), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 7,
      marginTop: 7
    }
  }, s.notes.map(n => /*#__PURE__*/React.createElement(Sidenote, {
    key: n.index,
    index: n.index,
    term: n.term
  }, n.body))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(KeyLevelsTable, {
    rows: s.levels
  }))))))), /*#__PURE__*/React.createElement("aside", {
    className: "layout__rail col",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CompanySidebarCard, {
    title: "Market",
    tags: ['Pakistan'],
    cta: {
      label: 'View Market Profile',
      icon: 'eye'
    },
    image: "../../assets/icons/market.svg",
    imageSize: 84,
    layout: "inline"
  }), /*#__PURE__*/React.createElement(CompanySidebarCard, {
    title: "Trading in PSX made easy!",
    tags: ['Trading', 'PSX'],
    cta: {
      label: 'Download App',
      icon: 'download'
    },
    image: "../../assets/psx-app.svg",
    imageSize: 84,
    layout: "inline"
  }), /*#__PURE__*/React.createElement(RelatedList, {
    title: "More Technical Reports",
    items: M.relatedTechnical
  }), /*#__PURE__*/React.createElement(RelatedReports, {
    items: M.relatedReports,
    viewAllLabel: "View all LUCK Research"
  }), /*#__PURE__*/React.createElement(DisclaimerCard, null), /*#__PURE__*/React.createElement(ExploreCTA, {
    heading: "Explore detailed reports on AskAnalyst"
  })));
}
window.MarketReportScreen = MarketReportScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/askanalyst-web/MarketReportScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/askanalyst-web/ResearchLibraryScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* /research — the report library, the product's landing screen. */
function ResearchLibraryScreen({
  onOpen
}) {
  const {
    Hero,
    ReportCard,
    SearchBox,
    FilterRow,
    FilterMenu,
    RailPanel,
    RailMore,
    ExploreCTA,
    Chip,
    EmptyState
  } = DS;
  const [q, setQ] = React.useState('');
  const [brokers, setBrokers] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [sort, setSort] = React.useState(['newest']);
  const brokerOptions = [{
    value: '',
    label: 'All Brokers'
  }].concat(D.topBrokers.map(b => ({
    value: b.broker,
    label: b.broker
  })));
  const typeOptions = [{
    value: '',
    label: 'All Report Types'
  }].concat(Array.from(new Set(D.reports.map(r => r.type))).map(t => ({
    value: t,
    label: t
  })));
  let rows = D.reports.filter(r => {
    const hay = (r.title + ' ' + r.summary + ' ' + r.broker + ' ' + r.sector + ' ' + r.companies.join(' ')).toLowerCase();
    return (!q || hay.includes(q.toLowerCase())) && (!brokers.length || brokers.includes(r.broker)) && (!types.length || types.includes(r.type));
  });
  if (sort[0] === 'oldest') rows = rows.slice().reverse();
  const fields = [{
    key: 'broker',
    label: 'Broker',
    menu: /*#__PURE__*/React.createElement(FilterMenu, {
      label: "All Brokers",
      options: brokerOptions,
      values: brokers,
      onChange: setBrokers,
      multiple: true,
      searchable: true
    })
  }, {
    key: 'type',
    label: 'Report Type',
    menu: /*#__PURE__*/React.createElement(FilterMenu, {
      label: "All Report Types",
      options: typeOptions,
      values: types,
      onChange: setTypes,
      multiple: true
    })
  }, {
    key: 'sort',
    label: 'Sort',
    menu: /*#__PURE__*/React.createElement(FilterMenu, {
      label: "Newest first",
      options: [{
        value: 'newest',
        label: 'Newest first'
      }, {
        value: 'oldest',
        label: 'Oldest first'
      }],
      values: sort,
      onChange: v => setSort(v.length ? v : ['newest'])
    })
  }];
  const months = [];
  rows.forEach(r => {
    if (!months.length || months[months.length - 1].month !== r.month) months.push({
      month: r.month,
      items: [r]
    });else months[months.length - 1].items.push(r);
  });
  const reset = () => {
    setQ('');
    setBrokers([]);
    setTypes([]);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Hero, _extends({}, D.libraryHero, {
    art: "../../assets/insights-hero-chart.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout__main col",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SearchBox, {
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement(FilterRow, {
    fields: fields,
    onHide: k => k === 'broker' ? setBrokers([]) : k === 'type' ? setTypes([]) : null
  }), /*#__PURE__*/React.createElement("div", {
    className: "rhead"
  }, /*#__PURE__*/React.createElement("p", {
    className: "resultcount"
  }, rows.length, " report", rows.length === 1 ? '' : 's', q || brokers.length || types.length ? /*#__PURE__*/React.createElement("button", {
    className: "resetlink",
    type: "button",
    onClick: reset
  }, "Reset") : null)), rows.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    onReset: reset
  }, "No reports match these filters."), months.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.month
  }, /*#__PURE__*/React.createElement("p", {
    className: "rgroup"
  }, g.month), g.items.map(r => /*#__PURE__*/React.createElement(ReportCard, {
    key: r.id,
    brokerMark: brokerMark,
    report: Object.assign({}, r, {
      href: r.screen ? '#' + r.screen : undefined
    })
  }))))), /*#__PURE__*/React.createElement("aside", {
    className: "layout__rail col",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RailPanel, {
    title: "Trending This Week"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "col rail__list",
    style: {
      gap: 18
    }
  }, D.trending.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: r.title,
    className: "rail__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rail__rank",
    "aria-hidden": true
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "col",
    style: {
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row center rail__chips",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    href: "#broker",
    icon: /*#__PURE__*/React.createElement(BrokerMark, {
      name: r.broker
    })
  }, r.broker)), r.screen ? /*#__PURE__*/React.createElement("a", {
    className: "rail__link",
    href: '#' + r.screen,
    onClick: e => {
      e.preventDefault();
      onOpen(r.screen);
    }
  }, r.title) : /*#__PURE__*/React.createElement("span", {
    className: "rail__link"
  }, r.title), /*#__PURE__*/React.createElement("span", {
    className: "rail__date"
  }, r.date)))))), /*#__PURE__*/React.createElement(RailPanel, {
    title: "Top Brokers"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "col rail__list",
    style: {
      gap: 12
    }
  }, D.topBrokers.map(b => /*#__PURE__*/React.createElement("li", {
    key: b.broker,
    className: "rail__between"
  }, /*#__PURE__*/React.createElement("a", {
    className: "row center rail__brokerlink",
    href: "#broker",
    style: {
      gap: 9,
      minWidth: 0
    },
    onClick: e => {
      e.preventDefault();
      onOpen('broker');
    }
  }, /*#__PURE__*/React.createElement(BrokerMark, {
    name: b.broker,
    className: "rail__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rail__name"
  }, b.broker)), /*#__PURE__*/React.createElement(Chip, null, b.count))))), /*#__PURE__*/React.createElement(RailPanel, {
    title: "Browse by Sector"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail__sectors"
  }, D.sectorCounts.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.sector,
    className: "rail__sector"
  }, s.sector, " ", /*#__PURE__*/React.createElement("em", null, s.count)))), /*#__PURE__*/React.createElement("a", {
    className: "rail__all",
    href: "#"
  }, "All sectors ", /*#__PURE__*/React.createElement(DS.Icon, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement(ExploreCTA, {
    heading: "Explore detailed reports on AskAnalyst"
  }))));
}
window.ResearchLibraryScreen = ResearchLibraryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/askanalyst-web/ResearchLibraryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/askanalyst-web/data.js
try { (() => {
/* Content for the Ask Analyst UI kit.
   Everything marked (Figma) is verbatim from the source repo's data files —
   app/data/market.ts, company-report.ts, insights.ts. Rows added to fill a list
   are marked placeholder, exactly as the product does. */
window.AAData = {
  brokerLogo: {
    'AKD Securities': 'akd',
    'Alpha Capital': 'alpha-capital',
    'Alpha Capital Pvt. Ltd.': 'alpha-capital',
    'Arif Habib Limited': 'arif-habib',
    'Arif Habib Ltd': 'arif-habib',
    'BMA Capital': 'bma-capital',
    'Foundation Securities': 'foundation-securities',
    'Insight Securities': 'insight-securities',
    'Intermarket Securities': 'intermarket-securities',
    'JS Global': 'js-global',
    'Next Capital': 'next-capital',
    'Optimus Capital': 'optimus-capital',
    'Pearl Securities': 'pearl-securities',
    'Taurus Securities': 'taurus-securities',
    'Topline Securities': 'topline',
    'Vector Securities': 'vector-securities'
  },
  /* ── research library (Figma hero copy) ── */
  libraryHero: {
    title: 'Research Report Library',
    subtitle: 'Every sell-side report on Pakistan equities, indexed and searchable',
    pill: '24 reports \u00b7 14 brokers'
  },
  reports: [{
    id: 'weekly-technicals',
    type: 'Weekly Report',
    broker: 'Alpha Capital',
    rating: 'Buy',
    date: '15 Mar 2025',
    pages: 24,
    title: 'Weekly Report | Pakistan Technicals',
    summary: 'The index shifted below the 40-wema for the first time since July 2023. Support now sits at the 50% retracement of 101,599\u2013191,032 at 146,315.',
    companies: ['KSE100'],
    sector: 'Strategy',
    analyst: 'Ahmed Khan',
    target: '1,050',
    upside: 30,
    screen: 'market',
    month: 'MARCH 2025'
  }, {
    id: 'kohc-2qfy26',
    type: 'Result Review',
    broker: 'Alpha Capital',
    rating: 'Hold',
    date: '24 Oct 2025',
    pages: 24,
    title: 'KOHC: 2QFY26 Results Review',
    summary: 'EPS clocks in at PKR 2.82, down 21% YoY. Gross margins fell 10ppts on higher royalty and energy cost; Hold maintained on a Dec-26 PT of PKR 124.',
    companies: ['KOHC'],
    sector: 'Cement',
    analyst: 'Hassan Raza',
    target: '124',
    upside: 32,
    month: 'MARCH 2025'
  }, {
    id: 'luck-preview',
    type: 'Result Preview',
    broker: 'AKD Securities',
    rating: 'Buy',
    date: '12 Mar 2025',
    pages: 8,
    title: 'Lucky Cement: Result Preview 2QFY26',
    summary: 'Placeholder entry. PAT expected at PKR 8,624mn for the quarter, up 18.5% YoY.',
    companies: ['LUCK'],
    sector: 'Cement',
    analyst: 'Research Team',
    target: '1,050',
    upside: 30,
    month: 'MARCH 2025'
  }, {
    id: 'cement-demand',
    type: 'Sector Note',
    broker: 'Arif Habib Limited',
    rating: 'Buy',
    date: '01 Mar 2025',
    pages: 16,
    title: 'Cement Sector: Demand Recovery Ahead',
    summary: 'Placeholder entry. North-region retention prices firm as dispatches stabilise.',
    companies: ['LUCK', 'DGKC', 'MLCF'],
    sector: 'Cement',
    analyst: 'Research Team',
    target: '',
    upside: null,
    month: 'MARCH 2025'
  }, {
    id: 'ogdc-initiation',
    type: 'Initiation',
    broker: 'Topline Securities',
    rating: 'Buy',
    date: '24 Feb 2025',
    pages: 32,
    title: 'OGDC: Initiating Coverage with Buy',
    summary: 'Placeholder entry. Coverage opened on reserve replacement and circular-debt easing.',
    companies: ['OGDC'],
    sector: 'Oil & Gas',
    analyst: 'Research Team',
    target: '285',
    upside: 24,
    month: 'FEBRUARY 2025'
  }, {
    id: 'banks-margin',
    type: 'Sector Note',
    broker: 'JS Global',
    rating: 'Hold',
    date: '18 Feb 2025',
    pages: 20,
    title: 'Banks: Margin Outlook After the Cut',
    summary: 'Placeholder entry. Asset repricing lags deposits, compressing spreads into 2H.',
    companies: ['HBL', 'UBL', 'MCB'],
    sector: 'Banks',
    analyst: 'Research Team',
    target: '',
    upside: null,
    month: 'FEBRUARY 2025'
  }],
  trending: [{
    broker: 'Alpha Capital',
    title: 'Weekly Report | Pakistan Technicals',
    date: '15 Mar 2025',
    screen: 'market'
  }, {
    broker: 'AKD Securities',
    title: 'Lucky Cement: Result Preview 2QFY26',
    date: '12 Mar 2025'
  }, {
    broker: 'Arif Habib Limited',
    title: 'Cement Sector: Demand Recovery Ahead',
    date: '01 Mar 2025'
  }],
  topBrokers: [{
    broker: 'AKD Securities',
    count: 7
  }, {
    broker: 'Topline Securities',
    count: 6
  }, {
    broker: 'Arif Habib Limited',
    count: 5
  }, {
    broker: 'Alpha Capital',
    count: 4
  }, {
    broker: 'JS Global',
    count: 3
  }, {
    broker: 'Optimus Capital',
    count: 2
  }],
  sectorCounts: [{
    sector: 'Cement',
    count: 9
  }, {
    sector: 'Banks',
    count: 6
  }, {
    sector: 'Oil & Gas',
    count: 5
  }, {
    sector: 'Strategy',
    count: 4
  }, {
    sector: 'Fertilizer',
    count: 3
  }, {
    sector: 'Power',
    count: 2
  }, {
    sector: 'Technology',
    count: 2
  }, {
    sector: 'Economy',
    count: 2
  }],
  /* ── market technical report (Figma, verbatim) ── */
  market: {
    meta: {
      title: 'Weekly Report | Pakistan Technicals',
      analyst: 'Ahmed Khan',
      date: 'March 15, 2025',
      pages: '24 pages'
    },
    aiInsight: 'AKD Securities upgrades Lucky Cement from Hold to Buy with a revised target price of PKR 1,050, implying 30% upside. The upgrade is driven by the company\u2019s new Greenfield capacity coming online in the South region, which has already boosted market share to 34%. Export revenue surged 23% YoY on Central Asian expansion. Gross margins recovered to 28.5% through product mix optimization. The analyst values LUCK at 8.5x FY26E EV/EBITDA, a premium to the sector average of 6.2x, justified by superior ROE and capacity utilization. Key risks include the proposed carbon tax and PKR volatility impacting imported coal costs.',
    kseWhatHappened: 'Since gaining above the 40-wema in July 2023, the last two weeks have witnessed the first cyclical shift below this key average. The shift occurred after a downside gap from 161,476\u2013162,953 that sits above the 40-wema. This gap now stands as a key resistance \u2014 the index must close above it to re-establish support above the average. Immediate resistance is at the 40-wema itself (158,055).',
    kseKeyLevels: ['Two uptrends define the downside picture. The broader trend from the January 2023 low at 35,153, and the more recent move from 101,599 (May \u201925) to the peak at 191,032. The latter has undergone a 50% retracement to 146,315 \u2014 this defines the current support area.', 'A weekly close below 146,315 would deepen the correction towards 135,762 (61.8% retracement of 101,599\u2013191,032). This level also coincides with the 38.2% retracement of the broader 35,153\u2013191,032 trend at 132,626 \u2014 creating a cluster of support.', 'Short-term expected range: 146,315\u2013158,000. An expanding cyclical shift on the downside would look towards 132,626\u2013135,762.'],
    levelRows: [{
      label: 'Downside gap (resistance zone)',
      value: '161,476 \u2013 162,953',
      tone: 'down'
    }, {
      label: 'Immediate resistance (40-wema)',
      value: '158,055',
      tone: 'down'
    }, {
      label: 'Current support (50% of 101,599\u2013191,032)',
      value: '146,315',
      tone: 'up'
    }, {
      label: 'Next support (61.8% of 101,599\u2013191,032)',
      value: '135,762',
      tone: 'up'
    }, {
      label: 'Broader trend support (38.2% of 35,153\u2013191,032)',
      value: '132,626',
      tone: 'up'
    }, {
      label: 'Short-term range',
      value: '146,315 \u2013 158,000',
      tone: 'down'
    }],
    sidenotes: [{
      index: 1,
      term: '40-WEMA',
      body: 'The 40-week exponential moving average \u2014 a long-term average of closing prices that smooths out short-term noise. When price is above it, the broader trend is positive; when below, negative.'
    }, {
      index: 2,
      term: 'Resistance',
      body: 'A price level where selling pressure has historically been strong enough to prevent further advance.'
    }, {
      index: 3,
      term: 'Support',
      body: 'A price level where buying interest has historically been strong enough to prevent further decline.'
    }],
    retracementNote: {
      index: 4,
      term: 'Retracement',
      body: 'A partial reversal of a prior move, measured using Fibonacci ratios (38.2%, 50%, 61.8%). A 50% retracement means the price has given back half of the preceding move.'
    },
    stocks: [{
      name: 'Attock Refinery Ltd. (ATRL)',
      price: '822.37',
      badge: {
        label: 'Positive Divergence',
        tone: 'positive'
      },
      view: ['Strong positive divergence to broader market weakness \u2014 the stock firmly holds onto the 40-wema (707.00) and its rising trend-line over the last two weeks. LUCK has also marginally closed above the December high of 775.75, which is the resistance to hold above.', 'With short-term risk below 750.00, price would look to retest levels around 881.00\u2013886.00.'],
      notes: [{
        index: 5,
        term: 'Positive Divergence',
        body: 'When a stock holds firm or rises while the broader market is falling \u2014 a sign of relative strength and independent buying interest.'
      }, {
        index: 6,
        term: 'Trend-line',
        body: 'A straight line connecting successive lows (uptrend) or highs (downtrend) on a chart. It represents the direction and speed of the prevailing trend.'
      }],
      levels: [{
        label: '40-wema support',
        value: '707.00',
        tone: 'up'
      }, {
        label: 'Resistance to hold (Dec high)',
        value: '775.75',
        tone: 'down'
      }, {
        label: 'Short-term risk',
        value: 'Below 750.00',
        tone: 'down'
      }, {
        label: 'Upside retest target',
        value: '881.00 \u2013 886.00',
        tone: 'up'
      }]
    }, {
      name: 'Engro Holdings Ltd. (ENGROH)',
      price: '271.00',
      badge: {
        label: 'Breakout Pending',
        tone: 'warning'
      },
      view: ['Trending action remains steadfast as levels hold firmly onto the 40-wema (235.00) over the last two weeks. The challenge is to overcome and sustain above the January high of 287.88 for the trend to continue towards 336.00\u2013360.00 over the short term.', 'A prudent approach would be to buy into closings above 287.88, with two risk levels defined at 263.30 and 250.00 depending on the risk profile of the investor.'],
      notes: [{
        index: 7,
        term: 'double tops',
        body: 'A chart pattern where the price or indicator reaches the same peak twice without surpassing it \u2014 often signals that upward momentum is stalling.'
      }],
      levels: [{
        label: '40-wema support',
        value: '235.00',
        tone: 'up'
      }, {
        label: 'Key resistance (Jan high / breakout)',
        value: '287.88',
        tone: 'down'
      }, {
        label: 'Upside target on breakout',
        value: '336.00 \u2013 360.00',
        tone: 'up'
      }, {
        label: 'Risk level 1',
        value: '263.30',
        tone: 'down'
      }]
    }, {
      name: 'D.G. Khan Cement Co. Ltd. (DGKC)',
      price: '166.32',
      badge: {
        label: 'Approaching Key Support',
        tone: 'info'
      },
      view: ['Following a sharp fall below the 40-wema (202.74), price is approaching a key support area at the bullish trend-line around 152.00. The rising trend from 40.30 to 275.75 retraces 50% at 158.00, creating a cluster of supports in the 152.00\u2013158.00 zone.', 'The report suggests looking to buy into levels from 158.00\u2013152.00, with risk below 147.00. Short-term upside levels to target would be 181.00\u2013185.00.'],
      notes: [{
        index: 9,
        term: 'Support Cluster',
        body: 'When multiple independent support levels \u2014 such as a trend-line and a Fibonacci retracement \u2014 converge at the same price zone. This overlap tends to make the support more significant.'
      }],
      levels: [{
        label: '40-wema (broken)',
        value: '202.74',
        tone: 'muted'
      }, {
        label: 'Support cluster (trend-line + 50% of 40.30\u2013275.75)',
        value: '152.00 \u2013 158.00',
        tone: 'up'
      }, {
        label: 'Risk level',
        value: 'Below 147.00',
        tone: 'down'
      }, {
        label: 'Short-term upside target',
        value: '181.00 \u2013 185.00',
        tone: 'up'
      }]
    }],
    relatedTechnical: [{
      symbol: 'DGKC',
      logo: '../../assets/companies/dgkc.svg'
    }, {
      symbol: 'MLCF',
      logo: '../../assets/companies/mlcf.svg'
    }, {
      symbol: 'FCCL',
      logo: '../../assets/companies/fccl.svg'
    }, {
      symbol: 'CHCC',
      logo: '../../assets/companies/chcc.svg'
    }, {
      symbol: 'PIOC',
      logo: '../../assets/companies/pioc.svg'
    }],
    relatedReports: [{
      source: 'Topline Securities',
      logo: '../../assets/logos/topline.svg',
      date: 'Feb 12, 2025',
      title: 'Lucky Cement: Q2 Result Update'
    }, {
      source: 'Arif Habib Ltd',
      logo: '../../assets/logos/arif-habib.svg',
      date: 'Mar 01, 2025',
      title: 'Cement Sector: Demand Recovery Ahead'
    }, {
      source: 'Topline Securities',
      logo: '../../assets/logos/topline.svg',
      date: 'Feb 12, 2025',
      title: 'Lucky Cement: Pre-Result Expectations Q3'
    }]
  },
  /* ── AI insights (Figma hero + the three real insights) ── */
  insightsHero: {
    title: 'AI-Powered Insights',
    subtitle: 'Key findings extracted from broker research reports using AI analysis',
    pill: 'Sell Side Research'
  },
  insights: [{
    category: 'Rating & Valuation',
    sentiment: 'Positive',
    broker: 'AKD Securities',
    source: 'Investment Thesis - p.6 2025-03-08',
    title: 'LUCK: Upgrade to Buy with 30% Upside',
    summary: 'New Greenfield capacity in the South lifts market share to 34% and export revenue is up 23% YoY. The house values LUCK at 8.5x FY26E EV/EBITDA against a 6.2x sector average.',
    tags: ['#valuation', '#upgrade', '#buy', '#cement']
  }, {
    category: 'Risk',
    sentiment: 'Negative',
    broker: 'AKD Securities',
    source: 'Risk Section - p.12 2025-03-08',
    title: 'LUCK: Regulatory Risk from New Carbon Tax',
    summary: 'Proposed carbon tax of PKR 500/ton on cement could reduce EBITDA margins by 2.1pp if fully absorbed rather than passed through to retention prices.',
    tags: ['#carbon-tax', '#regulation', '#cement', '#margins']
  }, {
    category: 'Corporate Action',
    sentiment: 'Neutral',
    broker: 'Topline Securities',
    source: 'Company Note - p.3 2025-03-11',
    title: 'LUCK: Board Meeting on March 28 for Dividend',
    summary: 'Placeholder entry. Payout assumption unchanged ahead of the March board meeting.',
    tags: ['#dividend', '#board-meeting', '#cement']
  }],
  consensus: {
    symbol: 'LUCK',
    name: 'Lucky Cement',
    logo: '../../assets/companies/luck.svg',
    price: '346.49',
    rows: [{
      broker: 'AKD Securities',
      call: 'Hold',
      analyst: 'Hassan Raza',
      target: '465',
      revised: '04/06/2026'
    }, {
      broker: 'Topline Securities',
      call: 'Buy',
      analyst: 'Research Team',
      target: '520',
      revised: '28/05/2026'
    }, {
      broker: 'Arif Habib Limited',
      call: 'Buy',
      analyst: 'Research Team',
      target: '505',
      revised: '19/05/2026'
    }, {
      broker: 'JS Global',
      call: 'Buy',
      analyst: 'Research Team',
      target: '498',
      revised: '11/05/2026'
    }, {
      broker: 'Optimus Capital',
      call: 'Hold',
      analyst: 'Research Team',
      target: '455',
      revised: '02/05/2026'
    }, {
      broker: 'Insight Securities',
      call: 'Sell',
      analyst: 'Research Team',
      target: '390',
      revised: '24/04/2026'
    }]
  },
  /* ── broker overview ── */
  broker: {
    name: 'AKD Securities',
    subtitle: 'Coverage, calls and published research from this house',
    pill: 'Broker Profile',
    stats: {
      totalReports: '07',
      reportTypes: '04',
      companiesCovered: '05',
      recent: 'Last 30D',
      recentLabel: '2 New Reports'
    },
    callCounts: {
      Buy: 4,
      Hold: 2,
      Sell: 1
    },
    calls: [{
      company: 'Lucky Cement',
      symbol: 'LUCK',
      logo: '../../assets/companies/luck.svg',
      call: 'Hold',
      target: '465',
      revised: '04/06/2026'
    }, {
      company: 'D.G. Khan Cement',
      symbol: 'DGKC',
      logo: '../../assets/companies/dgkc.svg',
      call: 'Buy',
      target: '205',
      revised: '21/05/2026'
    }, {
      company: 'Maple Leaf Cement',
      symbol: 'MLCF',
      logo: '../../assets/companies/mlcf.svg',
      call: 'Buy',
      target: '92',
      revised: '14/05/2026'
    }],
    companies: [{
      name: 'Lucky Cement',
      ticker: 'LUCK',
      count: 3
    }, {
      name: 'D.G. Khan Cement',
      ticker: 'DGKC',
      count: 2
    }, {
      name: 'Maple Leaf Cement',
      ticker: 'MLCF',
      count: 1
    }, {
      name: 'Fauji Cement',
      ticker: 'FCCL',
      count: 1
    }],
    types: [{
      label: 'Result Review',
      count: 3,
      color: 'var(--color-chart-series-1)'
    }, {
      label: 'Result Preview',
      count: 2,
      color: 'var(--color-chart-series-2)'
    }, {
      label: 'Sector Note',
      count: 1,
      color: 'var(--color-chart-series-3)'
    }, {
      label: 'Analyst Briefing',
      count: 1,
      color: 'var(--color-chart-series-4)'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/askanalyst-web/data.js", error: String((e && e.message) || e) }); }

// ui_kits/askanalyst-web/shared.jsx
try { (() => {
/* Shared helpers for the Ask Analyst UI kit screens. */
const DS = window.AskAnalystDesignSystem_21c0d0;
const D = window.AAData;
const brokerLogoSrc = name => '../../assets/logos/' + (D.brokerLogo[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-')) + '.svg';
const BrokerMark = ({
  name,
  className = 'rating__mark'
}) => D.brokerLogo[name] ? /*#__PURE__*/React.createElement("img", {
  className: className,
  src: brokerLogoSrc(name),
  alt: "",
  "aria-hidden": true
}) : null;
const brokerMark = name => /*#__PURE__*/React.createElement(BrokerMark, {
  name: name
});

/* Turns a marker digit in prose into a link to its Sidenote, the way the
   product's NoteRef does: a single digit surrounded by whitespace only. */
function withNoteRefs(text, notes) {
  if (!notes || !notes.length) return text;
  const map = {};
  notes.forEach(n => {
    map[n.index] = n;
  });
  const parts = String(text).split(/(\s\d\s)/);
  return parts.map((p, i) => {
    const m = p.match(/^\s(\d)\s$/);
    if (m && map[m[1]]) return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, " ", /*#__PURE__*/React.createElement("a", {
      className: "noteref",
      href: '#note-' + m[1]
    }, /*#__PURE__*/React.createElement("span", {
      className: "noteref__num"
    }, m[1])), " ");
    return p;
  });
}
const Paragraph = ({
  children,
  notes
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.49
  }
}, typeof children === 'string' ? withNoteRefs(children, notes) : children);
Object.assign(window, {
  DS,
  D,
  brokerLogoSrc,
  BrokerMark,
  brokerMark,
  withNoteRefs,
  Paragraph
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/askanalyst-web/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ConsensusCard = __ds_scope.ConsensusCard;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.ReportCard = __ds_scope.ReportCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Sidenote = __ds_scope.Sidenote;

__ds_ns.StockCard = __ds_scope.StockCard;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.CommentaryBlock = __ds_scope.CommentaryBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CALL_TONE = __ds_scope.CALL_TONE;

__ds_ns.CALL_GLYPH = __ds_scope.CALL_GLYPH;

__ds_ns.SENTIMENT_TONE = __ds_scope.SENTIMENT_TONE;

__ds_ns.SENTIMENT_GLYPH = __ds_scope.SENTIMENT_GLYPH;

__ds_ns.RatingPill = __ds_scope.RatingPill;

__ds_ns.ConsensusTable = __ds_scope.ConsensusTable;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KeyLevelsTable = __ds_scope.KeyLevelsTable;

__ds_ns.SplitBar = __ds_scope.SplitBar;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ShareDialog = __ds_scope.ShareDialog;

__ds_ns.FilterMenu = __ds_scope.FilterMenu;

__ds_ns.FilterRow = __ds_scope.FilterRow;

__ds_ns.SearchBox = __ds_scope.SearchBox;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.LOGO_ASPECT = __ds_scope.LOGO_ASPECT;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PageShell = __ds_scope.PageShell;

__ds_ns.PRIMARY_NAV = __ds_scope.PRIMARY_NAV;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CompanySidebarCard = __ds_scope.CompanySidebarCard;

__ds_ns.DisclaimerCard = __ds_scope.DisclaimerCard;

__ds_ns.ExploreCTA = __ds_scope.ExploreCTA;

__ds_ns.RailPanel = __ds_scope.RailPanel;

__ds_ns.RailMore = __ds_scope.RailMore;

__ds_ns.RelatedList = __ds_scope.RelatedList;

__ds_ns.RelatedReports = __ds_scope.RelatedReports;

/* Project patch: the app swaps the icon set for Tabler Icons. The bundle's own
   components resolve `__ds_scope.Icon` at render time, so re-pointing it here
   makes Button/Dropdown/Avatar glyphs come from the same set as the app's.
   `window.__dsIconOriginal` keeps the DS glyphs (social brand marks) reachable. */
const __ds_icon_original = __ds_scope.Icon;
window.__dsIconOriginal = __ds_icon_original;
__ds_scope.Icon = function Icon(props) {
  const T = window.TablerIcon;
  return React.createElement(T || __ds_icon_original, props);
};
__ds_ns.Icon = __ds_scope.Icon;

})();

const DS = window.AskAnalystDesignSystem_21c0d0;
export default DS;
export const {
  Badge, Button, Card, Chip, Dropdown, Icon, RatingPill,
  Avatar, Header, Logo, PageShell, SiteNav, Tabs,
  FilterMenu, FilterRow, SearchBox,
  ConsensusTable, DataTable, KeyLevelsTable, SplitBar, StatBlock,
  Callout, ConsensusCard, Hero, InsightCard, ReportCard, SectionHeader, Sidenote, StockCard, Price, CommentaryBlock,
  CompanySidebarCard, DisclaimerCard, ExploreCTA, RailPanel, RailMore, RelatedList, RelatedReports,
  EmptyState, ShareDialog
} = DS;
