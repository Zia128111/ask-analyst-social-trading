/* Alpha Capital on Ask Analyst — content model.
   Copy rewritten in Ask Analyst research voice; PSX companies and Pakistani
   brokerage houses throughout. Avatars are the photographs from the Figma. */
/* Built as a factory and frozen into one module-level object, so every screen
   reads the same content model without touching `window`. */
function build() {
  const A = "/assets/people/";
  const people = [
    { name: "Ahmed Hassan Shah", handle: "@ahmedhassan", img: A + "p01.png", role: "Fund manager, Karachi", online: false, seen: "2 min" },
    { name: "Bilal Ahmed Malik", handle: "@bilalmalik", img: A + "p02.png", role: "Cement analyst", online: true },
    { name: "Fahad Raza Siddiqui", handle: "@fahadraza", img: A + "p03.png", role: "Head of research", online: false, seen: "8 min" },
    { name: "Imran Khan Chaudhry", handle: "@imranch", img: A + "p04.png", role: "Banks analyst", online: true },
    { name: "Jamal Khan Abbasi", handle: "@jamalabbasi", img: A + "p05.png", role: "E&P analyst", online: true },
    { name: "Khalid Mahmood Rana", handle: "@khalidrana", img: A + "p06.png", role: "Dealer", online: false, seen: "16 min" },
    { name: "Nadeem Ahmed Qureshi", handle: "@nadeemq", img: A + "p07.png", role: "Portfolio manager", online: true },
    { name: "Omar Farooq Ahmed", handle: "@omarfarooq", img: A + "p08.png", role: "Strategist", online: true },
    { name: "Qasim Hussain Rizvi", handle: "@qasimrizvi", img: A + "p09.png", role: "Fertiliser analyst", online: true },
    { name: "Raza Ali Bhatti", handle: "@razabhatti", img: A + "p10.png", role: "Retail investor", online: false, seen: "43 min" },
    { name: "Saad Ahmed Sheikh", handle: "@saadsheikh", img: A + "p11.png", role: "Technical analyst", online: true },
    { name: "Tahir Mehmood Khan", handle: "@tahirkhan", img: A + "p12.png", role: "Economist", online: false, seen: "2 min" },
    { name: "Usman Khan Awan", handle: "@usmanawan", img: A + "p13.png", role: "Advisor", online: false, seen: "24 min" },
    { name: "Waqar Ahmed Khan", handle: "@waqarkhan", img: A + "p14.png", role: "Textiles analyst", online: false, seen: "2 min" },
    { name: "Zain ul Abidin Khan", handle: "@zainkhan", img: A + "p15.png", role: "Sales trader", online: true },
    { name: "Farhan Ali Shahzad", handle: "@farhanshahzad", img: A + "p16.png", role: "Power analyst", online: false, seen: "54 min" },
    { name: "Rizwan Abbas Mirza", handle: "@rizwanmirza", img: A + "p17.png", role: "Retail investor", online: true }
  ];
  const self = { name: "Muhammad Ali Khan", handle: "@malikhan", img: A + "self.png", role: "Portfolio manager · Alpha Capital", email: "ali.khan@alphacapital.com.pk" };

  const C = "/assets/ds/companies/";
  const companies = {
    LUCK: { name: "Lucky Cement Ltd.", mark: C + "luck.svg", sector: "Cement" },
    DGKC: { name: "D.G. Khan Cement Co. Ltd.", mark: C + "dgkc.svg", sector: "Cement" },
    KOHC: { name: "Kohat Cement Co. Ltd.", mark: C + "kohc.svg", sector: "Cement" },
    MLCF: { name: "Maple Leaf Cement Factory Ltd.", mark: C + "mlcf.svg", sector: "Cement" },
    FCCL: { name: "Fauji Cement Co. Ltd.", mark: C + "fccl.svg", sector: "Cement" },
    PIOC: { name: "Pioneer Cement Ltd.", mark: C + "pioc.svg", sector: "Cement" },
    CHCC: { name: "Cherat Cement Co. Ltd.", mark: C + "chcc.svg", sector: "Cement" },
    OGDC: { name: "Oil & Gas Development Co. Ltd.", mark: C + "ogdc.svg", sector: "E&P" },
    PPL: { name: "Pakistan Petroleum Ltd.", mark: C + "ppl.svg", sector: "E&P" },
    PSO: { name: "Pakistan State Oil Co. Ltd.", mark: C + "pso.svg", sector: "OMC" },
    BAFL: { name: "Bank Alfalah Ltd.", mark: C + "bafl.svg", sector: "Banks" },
    MCB: { name: "MCB Bank Ltd.", mark: C + "mcb.svg", sector: "Banks" },
    HBL: { name: "Habib Bank Ltd.", mark: C + "hbl.svg", sector: "Banks" },
    UBL: { name: "United Bank Ltd.", mark: C + "ubl.svg", sector: "Banks" },
    MEBL: { name: "Meezan Bank Ltd.", mark: C + "mebl.svg", sector: "Banks" },
    ENGRO: { name: "Engro Corporation Ltd.", mark: C + "engro.svg", sector: "Conglomerate" },
    FFC: { name: "Fauji Fertilizer Co. Ltd.", mark: C + "ffc.svg", sector: "Fertiliser" },
    EFERT: { name: "Engro Fertilizers Ltd.", mark: C + "efert.svg", sector: "Fertiliser" },
    SNGP: { name: "Sui Northern Gas Pipelines Ltd.", mark: C + "sngp.svg", sector: "Gas utility" },
    HUBC: { name: "Hub Power Co. Ltd.", mark: C + "hubc.svg", sector: "Power" },
    ILP: { name: "Interloop Ltd.", mark: C + "ilp.svg", sector: "Textiles" },
    NESTLE: { name: "Nestlé Pakistan Ltd.", mark: C + "nestle.svg", sector: "Consumer staples" },
    COLG: { name: "Colgate-Palmolive (Pakistan) Ltd.", mark: C + "colg.svg", sector: "Consumer staples" },
    UNITY: { name: "Unity Foods Ltd.", mark: C + "unity.svg", sector: "Consumer staples" },
    FABL: { name: "Faysal Bank Ltd.", mark: C + "fabl.svg", sector: "Banks" },
    ATRL: { name: "Attock Refinery Ltd.", mark: C + "atrl.svg", sector: "Refinery" }
  };
  const L = "/assets/ds/logos/";
  const brokers = {
    "AKD Securities": L + "akd.svg",
    "Topline Securities": L + "topline.svg",
    "Arif Habib Ltd.": L + "arif-habib.svg",
    "JS Global": L + "js-global.svg",
    "Optimus Capital": L + "optimus-capital.svg",
    "Intermarket Securities": L + "intermarket-securities.svg",
    "Insight Securities": L + "insight-securities.svg",
    "Next Capital": L + "next-capital.svg",
    "Pearl Securities": L + "pearl-securities.svg",
    "Taurus Securities": L + "taurus-securities.svg",
    "Vector Securities": L + "vector-securities.svg",
    "BMA Capital": L + "bma-capital.svg",
    "Foundation Securities": L + "foundation-securities.svg",
    "Alpha Capital": L + "alpha-capital.svg"
  };

  /* deterministic pseudo-series so every sparkline is stable across renders */
  function series(seed, n, drift) {
    const out = []; let v = 50, s = seed;
    for (let i = 0; i < n; i++) {
      s = (s * 1103515245 + 12345) % 2147483648;
      v += ((s / 2147483648) - 0.45) * 9 + (drift || 0);
      out.push(Math.max(6, Math.min(96, v)));
    }
    return out;
  }

  const posts = [
    {
      id: "p1", author: self, time: "15h", audience: "Public", kind: "trades",
      body: "Rebalanced into cement on the retention-price move. Three fills this morning.",
      trades: [
        { sym: "LUCK", side: "Bought", qty: "45 shares", px: "PKR 1,004.50", chg: 2.4 },
        { sym: "DGKC", side: "Bought", qty: "350 shares", px: "PKR 122.80", chg: -1.1 },
        { sym: "KOHC", side: "Bought", qty: "127 shares", px: "PKR 289.10", chg: 3.6 }
      ],
      tags: ["#cement", "#retention-price", "#rebalance"], likes: 24, comments: 3, shares: 17
    },
    {
      id: "p2", author: people[0], time: "15h", audience: "Public", kind: "report",
      body: "AKD Securities upgrades Lucky Cement from Hold to Buy with a revised target price of PKR 1,050, implying 30% upside on 8.5x FY26E EV/EBITDA.",
      report: { broker: "AKD Securities", sym: "LUCK", title: "LUCK: Upgrade to Buy with 30% Upside", date: "28 Aug 2026", call: "Buy", target: "PKR 1,050", upside: 30 },
      tags: ["#valuation", "#upgrade", "#buy", "#cement"], likes: 61, comments: 3, shares: 17
    },
    {
      id: "p3", author: people[1], time: "15h", audience: "Public", kind: "text",
      body: "Cement dispatches printed 4.42mn tons for the month, down by 21% YoY, but retention held at PKR 1,476/bag in the north. Volume weakness is priced; the margin line is not. Watching MLCF and FCCL into 2QFY26 results.",
      tags: ["#cement", "#dispatches", "#margins"], likes: 38, comments: 3, shares: 9
    },
    {
      id: "p4", author: people[3], time: "1d", audience: "Public", kind: "poll",
      body: "After the 100bp cut, where does sector NIM settle by 4QFY26?",
      poll: [{ label: "Below 5.5%", pct: 18 }, { label: "5.5% – 6.0%", pct: 47 }, { label: "Above 6.0%", pct: 35 }],
      tags: ["#banks", "#nim", "#policy-rate"], likes: 52, comments: 12, shares: 4
    },
    {
      id: "p5", author: people[6], time: "1d", audience: "Followers", kind: "portfolio",
      body: "Shared their portfolio — cement-heavy, one E&P hedge.",
      portfolioReturn: 2.8,
      allocation: [
        { sym: "LUCK", pct: 25, color: "var(--color-chart-series-1)" },
        { sym: "DGKC", pct: 20, color: "var(--color-chart-series-2)" },
        { sym: "KOHC", pct: 15, color: "var(--color-chart-series-3)" },
        { sym: "OGDC", pct: 15, color: "var(--color-chart-series-6)" },
        { sym: "MEBL", pct: 15, color: "var(--color-chart-series-8)" },
        { sym: "FFC", pct: 10, color: "var(--color-chart-series-7)" }
      ],
      tags: ["#portfolio", "#cement"], likes: 71, comments: 6, shares: 22
    }
  ];

  const news = [
    { img: "/assets/news/n01.jpg", sym: "LUCK", src: "Business Recorder", time: "12 mins ago", title: "LUCK: Analyst briefing held to discuss 1HFY26 results", cat: "psx", summary: "Management guided to flat north dispatches and PKR 1,476/bag retention for the remainder of FY26; the export book stays loss-making at current freight.", topic: "Cement", read: "4 min read" },
    { img: "/assets/news/n02.jpg", sym: "OGDC", src: "Dawn", time: "26 mins ago", title: "SBP holds the policy rate at 11%", cat: "macro", summary: "The committee cited a narrowing current-account deficit and core inflation at 7.4% as grounds to pause after 100bp of cuts.", topic: "Economy", read: "3 min read" },
    { img: "/assets/news/n03.jpg", sym: "PSO", src: "The News", time: "1 hr ago", title: "OMC volumes up 9% YoY in August", cat: "psx", summary: "HSD offtake led the recovery; PSO retained 51% market share on motor gasoline.", topic: "OMC", read: "2 min read" },
    { img: "/assets/news/n04.jpg", sym: "ILP", src: "Express Tribune", time: "2 hrs ago", title: "Textile exports cross USD 1.6bn for the month", cat: "macro", summary: "Value-added segments carried the print; yarn remains down 12% QoQ.", topic: "Textiles", read: "3 min read" },
    { img: "/assets/news/n05.jpg", sym: "HUBC", src: "Business Recorder", time: "3 hrs ago", title: "Circular debt plan sends PKR 10.5bn to IPPs", cat: "macro", summary: "First tranche clears part of the overdue receivable stack; HUBC is among the named recipients.", topic: "Power", read: "5 min read" },
    { img: "/assets/news/n06.jpg", sym: "FFC", src: "Dawn", time: "5 hrs ago", title: "Urea offtake falls 8% YoY as gas costs bite", cat: "commodities", summary: "Feedstock revision pushes north-plant cost up PKR 350/ton against the south.", topic: "Fertiliser", read: "3 min read" },
    { img: "/assets/news/n07.jpg", sym: "MCB", src: "The News", time: "7 hrs ago", title: "Banks: Margin outlook after the cut", cat: "blogs", summary: "Deposit repricing lags asset yields by a quarter, so 3QFY26 NIM compression is the base case.", topic: "Banks", read: "6 min read" },
    { img: "/assets/news/n08.jpg", sym: "SNGP", src: "Business Recorder", time: "9 hrs ago", title: "UFG losses narrow to 8.1% for SNGP", cat: "psx", summary: "The regulator's benchmark stays at 6.5%, leaving a disallowance in the FY26 tariff filing.", topic: "Gas utility", read: "4 min read" },
    { img: "/assets/news/n09.jpg", sym: "ENGRO", src: "Dawn", time: "10 hrs ago", title: "ENGRO board approves PKR 26/share interim payout", cat: "psx", summary: "The declaration lands with 2QFY26 accounts; the holding company keeps its buyback authorisation open.", topic: "Conglomerate", read: "2 min read" },
    { img: "/assets/news/n10.jpg", sym: "OGDC", src: "The News", time: "11 hrs ago", title: "Brent settles at USD 71/bbl on OPEC+ supply signal", cat: "commodities", summary: "A softer crude deck trims E&P revenue assumptions but eases the import bill by roughly USD 180mn a month.", topic: "Oil", read: "3 min read" },
    { img: "/assets/news/n11.jpg", sym: "DGKC", src: "Express Tribune", time: "13 hrs ago", title: "Coal lands at USD 96/ton as freight softens", cat: "commodities", summary: "South plants gain the most; DGKC's Afghan coal mix now covers about 40% of the fuel stack.", topic: "Cement", read: "3 min read" },
    { img: "/assets/news/n12.jpg", sym: "MEBL", src: "Business Recorder", time: "15 hrs ago", title: "Islamic banking deposits reach PKR 9.8trn", cat: "psx", summary: "Share of system deposits climbs 210bp YoY, with MEBL and the conversion candidates taking most of the flow.", topic: "Banks", read: "4 min read" },
    { img: "/assets/news/n13.jpg", sym: "PSO", src: "Dawn", time: "17 hrs ago", title: "Cabinet clears the petroleum levy revision", cat: "macro", summary: "The levy moves to PKR 78/litre on motor gasoline, holding the FY26 revenue target without a GST change.", topic: "Economy", read: "5 min read" },
    { img: "/assets/news/n14.jpg", sym: "LUCK", src: "The News", time: "19 hrs ago", title: "Cement: what a 10% dispatch miss does to FY26 EPS", cat: "blogs", summary: "Running the sector at 78% utilisation instead of 86% takes about PKR 34 off the aggregate EPS pool.", topic: "Cement", read: "7 min read" },
    { img: "/assets/news/n15.jpg", sym: "MCB", src: "Business Recorder", time: "21 hrs ago", title: "T-bill cut-offs ease 34bp across the curve", cat: "macro", summary: "The 12-month paper clears at 10.68%; participation was heaviest in the three-month tenor.", topic: "Fixed income", read: "2 min read" }
  ];

  const sectors = [
    { name: "Cement", mcap: "PKR 1.42tn", chg: 2.4, brokers: 11, reports: 34 },
    { name: "Banks", mcap: "PKR 3.86tn", chg: -0.8, brokers: 14, reports: 61 },
    { name: "E&P", mcap: "PKR 2.91tn", chg: 1.2, brokers: 12, reports: 28 },
    { name: "Fertiliser", mcap: "PKR 1.08tn", chg: 0.4, brokers: 9, reports: 19 },
    { name: "Power", mcap: "PKR 640bn", chg: -1.6, brokers: 7, reports: 12 },
    { name: "Textiles", mcap: "PKR 512bn", chg: 3.1, brokers: 6, reports: 9 },
    { name: "OMC", mcap: "PKR 470bn", chg: 0.9, brokers: 8, reports: 14 },
    { name: "Consumer staples", mcap: "PKR 1.31tn", chg: -0.2, brokers: 5, reports: 7 }
  ];

  const trending = {
    traded: [
      { sym: "FABL", px: "21.50", chg: -11.8, share: "4.2%" },
      { sym: "UNITY", px: "38.40", chg: 27.2, share: "2.8%" },
      { sym: "PPL", px: "184.70", chg: -0.6, share: "1.7%" },
      { sym: "OGDC", px: "231.10", chg: 7.8, share: "1.6%" },
      { sym: "SNGP", px: "96.20", chg: -0.5, share: "1.5%" },
      { sym: "PSO", px: "352.60", chg: 1.8, share: "1.4%" },
      { sym: "LUCK", px: "1,004.50", chg: 2.4, share: "1.2%" },
      { sym: "HUBC", px: "142.30", chg: -2.1, share: "1.1%" }
    ],
    bought: [
      { sym: "LUCK", px: "1,004.50", chg: 2.4, share: "6.1%" },
      { sym: "MEBL", px: "281.90", chg: 1.4, share: "4.8%" },
      { sym: "DGKC", px: "122.80", chg: -1.1, share: "3.9%" },
      { sym: "FFC", px: "412.20", chg: 0.4, share: "3.2%" },
      { sym: "ENGRO", px: "298.40", chg: 2.9, share: "2.6%" },
      { sym: "KOHC", px: "289.10", chg: 3.6, share: "2.1%" },
      { sym: "ILP", px: "88.70", chg: 5.1, share: "1.8%" },
      { sym: "MLCF", px: "64.30", chg: 1.2, share: "1.5%" }
    ],
    sold: [
      { sym: "HBL", px: "148.60", chg: -3.4, share: "5.2%" },
      { sym: "UBL", px: "372.10", chg: -2.8, share: "4.1%" },
      { sym: "HUBC", px: "142.30", chg: -2.1, share: "3.6%" },
      { sym: "FABL", px: "21.50", chg: -11.8, share: "3.1%" },
      { sym: "NESTLE", px: "7,140.00", chg: -0.7, share: "2.4%" },
      { sym: "COLG", px: "1,182.40", chg: -1.9, share: "2.0%" },
      { sym: "SNGP", px: "96.20", chg: -0.5, share: "1.7%" },
      { sym: "ATRL", px: "486.90", chg: -1.2, share: "1.4%" }
    ],
    positions: [
      { sym: "LUCK", holders: "12,480", avg: "PKR 946.20", chg: 6.2 },
      { sym: "MEBL", holders: "10,912", avg: "PKR 268.40", chg: 5.0 },
      { sym: "OGDC", holders: "9,644", avg: "PKR 214.90", chg: 7.5 },
      { sym: "FFC", holders: "8,201", avg: "PKR 399.10", chg: 3.3 },
      { sym: "DGKC", holders: "7,118", avg: "PKR 118.60", chg: 3.5 },
      { sym: "ENGRO", holders: "6,502", avg: "PKR 281.70", chg: 5.9 }
    ],
    mentions: [
      { sym: "LUCK", count: 412, chg: 18.4, sentiment: "Positive" },
      { sym: "OGDC", count: 306, chg: 9.1, sentiment: "Positive" },
      { sym: "HBL", count: 288, chg: -6.2, sentiment: "Negative" },
      { sym: "FFC", count: 214, chg: 2.0, sentiment: "Neutral" },
      { sym: "UNITY", count: 190, chg: 41.7, sentiment: "Positive" },
      { sym: "SNGP", count: 141, chg: -3.8, sentiment: "Negative" }
    ]
  };

  const leaders = people.slice(0, 12).map(function (p, i) {
    return { person: p, chg: [27.2, 21.4, 18.9, 14.6, 12.1, 9.8, 8.4, 7.8, 6.1, 4.9, 3.2, 1.8][i], aum: ["PKR 84.2mn", "PKR 61.0mn", "PKR 52.4mn", "PKR 44.8mn", "PKR 38.1mn", "PKR 31.6mn", "PKR 27.4mn", "PKR 24.0mn", "PKR 19.8mn", "PKR 16.2mn", "PKR 12.4mn", "PKR 9.1mn"][i], series: series(i + 3, 30, 0.5) };
  });

  const holdings = [
    { sym: "LUCK", cost: "PKR 946.20", px: "PKR 1,004.50", gl: 6.2, alloc: 25 },
    { sym: "DGKC", cost: "PKR 132.40", px: "PKR 122.80", gl: -7.2, alloc: 20 },
    { sym: "KOHC", cost: "PKR 278.50", px: "PKR 289.10", gl: 3.8, alloc: 15 },
    { sym: "OGDC", cost: "PKR 264.30", px: "PKR 231.10", gl: -12.6, alloc: 15 },
    { sym: "MEBL", cost: "PKR 266.10", px: "PKR 281.90", gl: 5.9, alloc: 15 },
    { sym: "FFC", cost: "PKR 401.60", px: "PKR 412.20", gl: 2.6, alloc: 10 }
  ];

  const trades = [
    { sym: "KOHC", side: "Buy", date: "4 Sep 2026 · 09:42", status: "Filled", px: "PKR 289.10", qty: 127 },
    { sym: "ENGRO", side: "Sell", date: "3 Sep 2026 · 14:18", status: "Filled", px: "PKR 298.40", qty: 60 },
    { sym: "PPL", side: "Buy", date: "3 Sep 2026 · 11:05", status: "Filled", px: "PKR 184.70", qty: 300 },
    { sym: "OGDC", side: "Buy", date: "2 Sep 2026 · 10:31", status: "Filled", px: "PKR 231.10", qty: 220 },
    { sym: "HBL", side: "Sell", date: "2 Sep 2026 · 09:58", status: "Filled", px: "PKR 148.60", qty: 140 },
    { sym: "UBL", side: "Buy", date: "1 Sep 2026 · 13:22", status: "Cancelled", px: "PKR 372.10", qty: 80 },
    { sym: "LUCK", side: "Sell", date: "1 Sep 2026 · 10:04", status: "Filled", px: "PKR 1,004.50", qty: 45 },
    { sym: "FFC", side: "Buy", date: "29 Aug 2026 · 15:11", status: "Filled", px: "PKR 412.20", qty: 95 },
    { sym: "MCB", side: "Sell", date: "29 Aug 2026 · 12:47", status: "Filled", px: "PKR 268.00", qty: 110 },
    { sym: "MLCF", side: "Buy", date: "28 Aug 2026 · 09:36", status: "Pending", px: "PKR 64.30", qty: 500 }
  ];

  const watchlist = [
    { sym: "CHCC", px: "PKR 246.70", chg: 1.9, vol: "38,293", call: "Buy", target: "PKR 300", brokers: 6 },
    { sym: "PIOC", px: "PKR 168.40", chg: -0.6, vol: "26,743", call: "Hold", target: "PKR 175", brokers: 4 },
    { sym: "FCCL", px: "PKR 42.10", chg: 2.8, vol: "48,285", call: "Buy", target: "PKR 52", brokers: 7 },
    { sym: "MLCF", px: "PKR 64.30", chg: 1.2, vol: "61,904", call: "Buy", target: "PKR 78", brokers: 8 },
    { sym: "EFERT", px: "PKR 214.90", chg: -1.4, vol: "17,560", call: "Hold", target: "PKR 220", brokers: 5 },
    { sym: "ATRL", px: "PKR 486.90", chg: -1.2, vol: "9,418", call: "Hold", target: "PKR 124", brokers: 3 },
    { sym: "HBL", px: "PKR 148.60", chg: -3.4, vol: "84,120", call: "Buy", target: "PKR 190", brokers: 9 },
    { sym: "FABL", px: "PKR 21.50", chg: -11.8, vol: "52,806", call: "Hold", target: "PKR 24", brokers: 4 },
    { sym: "BAFL", px: "PKR 96.20", chg: 0.8, vol: "43,077", call: "Buy", target: "PKR 118", brokers: 7 },
    { sym: "ILP", px: "PKR 88.70", chg: 5.1, vol: "31,562", call: "Buy", target: "PKR 105", brokers: 5 },
    { sym: "UNITY", px: "PKR 38.40", chg: 27.2, vol: "128,940", call: "Hold", target: "PKR 35", brokers: 2 },
    { sym: "HUBC", px: "PKR 142.30", chg: -2.1, vol: "22,415", call: "Buy", target: "PKR 178", brokers: 6 }
  ];

  const gainers = [{ sym: "UNITY", px: "38.40", chg: 27.2 }, { sym: "ILP", px: "88.70", chg: 5.1 }, { sym: "KOHC", px: "289.10", chg: 3.6 }, { sym: "MLCF", px: "64.30", chg: 1.2 }];
  const losers = [{ sym: "FABL", px: "21.50", chg: -11.8 }, { sym: "HBL", px: "148.60", chg: -3.4 }, { sym: "UBL", px: "372.10", chg: -2.8 }, { sym: "HUBC", px: "142.30", chg: -2.1 }];

  const notifications = [
    { who: people[0], kind: "report", text: "published a note on LUCK — 2QFY26 Results Review", time: "4 minutes ago", action: "Read" },
    { who: people[3], kind: "follow", text: "started following you", time: "12 minutes ago", action: "Follow back" },
    { who: people[6], kind: "trade", text: "bought DGKC at PKR 122.80", time: "38 minutes ago", action: null },
    { who: people[2], kind: "mention", text: "mentioned you in a thread on cement retention prices", time: "1 hr ago", action: "Reply" },
    { who: people[8], kind: "follow", text: "started following you", time: "2 hrs ago", action: "Following" },
    { who: people[10], kind: "comment", text: "commented on your LUCK trade post", time: "3 hrs ago", action: "Reply" },
    { who: people[5], kind: "consensus", text: "Consensus on OGDC moved to Buy — 9 of 12 houses", time: "5 hrs ago", action: "View" },
    { who: people[12], kind: "follow", text: "started following you", time: "6 hrs ago", action: "Follow back" },
    { who: people[14], kind: "trade", text: "closed a position in HBL at PKR 148.60", time: "8 hrs ago", action: null },
    { who: people[1], kind: "comment", text: "replied to your comment on FCCL dispatches", time: "1 d ago", action: "Reply" }
  ];

  const threads = people.slice(0, 12).map(function (p, i) {
    return { person: p, time: "11:26 am", unread: i % 4 === 0 ? 2 : 0, starred: i % 3 === 1, preview: ["Sending the retention table now.", "Did you see the AKD upgrade?", "Filled at 289.10.", "Consensus is 9 Buy / 3 Hold."][i % 4] };
  });

  const conversation = [
    { me: false, text: "Have you looked at the cement pack since the retention move?", time: "9h ago" },
    { me: true, text: "Yes — north retention held at PKR 1,476/bag, so the margin line survives the volume miss. I added LUCK and KOHC this morning.", time: "9h ago" },
    { me: false, text: "AKD has it at PKR 1,050 on 8.5x FY26E EV/EBITDA. Topline is still at Hold with PKR 940.", time: "9h ago" },
    { me: true, text: "The spread is the export book. Freight at current levels keeps that segment loss-making, which is where the two houses disagree.", time: "8h ago" },
    { me: false, text: "Fair. Send me your allocation table when you have it.", time: "8h ago" }
  ];

  const followSuggestions = [
    { title: "AKD Securities", kind: "Broker", followers: "1.2M", mark: brokers["AKD Securities"] },
    { title: "Topline Securities", kind: "Broker", followers: "980k", mark: brokers["Topline Securities"] },
    { title: "Arif Habib Ltd.", kind: "Broker", followers: "864k", mark: brokers["Arif Habib Ltd."] },
    { title: "Optimus Capital", kind: "Broker", followers: "412k", mark: brokers["Optimus Capital"] }
  ];
  const companyPages = ["LUCK", "DGKC", "KOHC", "FFC"].map(function (s) { return { title: companies[s].name, kind: s, followers: "1.2M", mark: companies[s].mark }; });
  const sectorIcon = { Cement: "factory", Banks: "bank", "E&P": "droplet", Fertiliser: "plant" };
  const topicIcon = { Economy: "chart-line", "Market strategy": "target", "Policy rate": "percentage", "Circular debt": "plug" };
  const sectorPages = ["Cement", "Banks", "E&P", "Fertiliser"].map(function (n) { return { title: n, kind: "Sector", followers: "1.2M", icon: sectorIcon[n] }; });
  const topicPages = ["Economy", "Market strategy", "Policy rate", "Circular debt"].map(function (n) { return { title: n, kind: "Topic", followers: "1.2M", icon: topicIcon[n] }; });

  const consensus = [
    { broker: "AKD Securities", call: "Buy", analyst: "A. Hassan", target: "PKR 1,050", revised: "28 Aug 2026" },
    { broker: "Topline Securities", call: "Hold", analyst: "F. Raza", target: "PKR 940", revised: "22 Aug 2026" },
    { broker: "Arif Habib Ltd.", call: "Buy", analyst: "N. Qureshi", target: "PKR 1,020", revised: "19 Aug 2026" },
    { broker: "Optimus Capital", call: "Buy", analyst: "I. Chaudhry", target: "PKR 1,085", revised: "14 Aug 2026" },
    { broker: "Intermarket Securities", call: "Hold", analyst: "S. Sheikh", target: "PKR 965", revised: "11 Aug 2026" }
  ];

  const article = {
    tags: ["Cement", "2QFY26", "Retention", "PSX"],
    categories: [
      { label: "Explore", icon: "compass" },
      { label: "Companies", icon: "store" },
      { label: "Macro", icon: "chart-line" },
      { label: "Sectors", icon: "notes" }
    ],
    body: [
      "Lucky Cement held its analyst briefing this morning to walk the street through 1HFY26 accounts. Management guided to flat north dispatches for the remainder of the year and put retention at PKR 1,476/bag, a number the sell side had modelled between PKR 1,430 and PKR 1,500.",
      "The briefing's tone was steadier than the last two quarters. Coal delivered at USD 96/ton against USD 121/ton a year earlier, and the Afghan mix now covers roughly 40% of the fuel stack — the single largest reason gross margin expanded 240bp YoY to 34.1%.",
      "On volumes, the company reported 1.42mn tons of local dispatches, flat YoY, with utilisation at 86%. Management repeated that it would defend price over volume if demand softens, which is the assumption most Buy cases in the market currently rest on.",
      "Exports remain the weak leg. Realisation of USD 42/ton FOB sits below a cash cost of USD 47/ton, and the company was explicit that the segment is a capacity-absorption exercise rather than a margin one. No recovery is built into FY26 guidance; management put the bar at a roughly 15% fall in sea freight before the book clears cash cost.",
      "Questions from the floor focused on the Dec-26 target and the pace of the expansion. On capex, management confirmed the PKR 27bn line-3 spend stays on schedule for commissioning in 4QFY27, funded from internal cash flows and an undrawn facility. On the holding-company structure, no change was signalled.",
      "Houses on the call: AKD Securities, Topline Securities, Arif Habib Ltd., Optimus Capital and Insight Securities. Two of the five have Buy calls on file with targets between PKR 1,020 and PKR 1,105; one carries a Hold at PKR 860. The consensus target after the briefing implies about 27% upside from the last close of PKR 808.45."
    ],
    comments: [
      { who: people[0], time: "12 hours ago", text: "Retention at PKR 1,476/bag is the whole call. If north pricing slips below PKR 1,400 the upgrade goes with it.", up: 12, down: 0 },
      { who: people[4], time: "11 hours ago", text: "Coal at USD 96/ton is doing a lot of work in these numbers. Worth stress-testing the FY27 deck at USD 115.", up: 8, down: 1 },
      { who: people[6], time: "9 hours ago", text: "Nobody asked about the export book on the call until the very end. That segment is still burning cash at current freight.", up: 5, down: 0 }
    ]
  };

  return {
    self: self, people: people, companies: companies, brokers: brokers, posts: posts, news: news,
    article: article,
    sectors: sectors, trending: trending, leaders: leaders, holdings: holdings, trades: trades,
    watchlist: watchlist, gainers: gainers, losers: losers, notifications: notifications,
    threads: threads, conversation: conversation, consensus: consensus,
    pages: { investors: followSuggestions, companies: companyPages, sectors: sectorPages, topics: topicPages },
    series: series,
    perf: series(11, 60, 0.7),
    /* One portfolio series and one KSE-100 series per timeframe, with the x
       labels that go with it, so the performance panel recomputes on switch. */
    perfBy: {
      "1D": { me: series(3, 26, 0.05), bm: series(31, 26, 0.02), labels: ["09:30", "10:30", "11:30", "12:30", "13:30", "15:30"], buckets: ["09:30", "10:30", "11:30", "12:30", "13:30", "15:30"] },
      "1W": { me: series(7, 30, 0.25), bm: series(41, 30, 0.14), labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], buckets: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
      "1M": { me: series(13, 42, 0.4), bm: series(53, 42, 0.22), labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"], buckets: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"] },
      "6M": { me: series(17, 52, 0.55), bm: series(59, 52, 0.3), labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], buckets: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"] },
      "1Y": { me: series(11, 60, 0.7), bm: series(67, 60, 0.4), labels: ["Sep 25", "Nov 25", "Jan 26", "Mar 26", "Jun 26", "Sep 26"], buckets: ["Sep 25", "Nov 25", "Jan 26", "Mar 26", "Jun 26", "Sep 26"] },
      "5Y": { me: series(23, 72, 0.9), bm: series(71, 72, 0.5), labels: ["2021", "2022", "2023", "2024", "2025", "2026"], buckets: ["2021", "2022", "2023", "2024", "2025", "2026"] }
    },
    marketWinners: [
      { sym: "UNITY", chg: 27.2, vol: "456,000", val: "PKR 324mn" },
      { sym: "ILP", chg: 5.1, vol: "312,400", val: "PKR 210mn" },
      { sym: "KOHC", chg: 3.6, vol: "188,900", val: "PKR 168mn" },
      { sym: "LUCK", chg: 2.4, vol: "96,200", val: "PKR 412mn" }
    ],
    marketLosers: [
      { sym: "FABL", chg: -11.8, vol: "1,204,000", val: "PKR 91mn" },
      { sym: "HBL", chg: -3.4, vol: "684,100", val: "PKR 142mn" },
      { sym: "UBL", chg: -2.8, vol: "402,600", val: "PKR 188mn" },
      { sym: "HUBC", chg: -2.1, vol: "512,300", val: "PKR 76mn" }
    ]
  };
}

const ACData = build();
export default ACData;
