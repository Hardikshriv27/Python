export const products = [
  {
    id: "ims",
    slug: "ims",
    name: "IMS Web ERP",
    category: "Enterprise Business Management",
    status: "available",
    statusLabel: "Available",
    eyebrow: "01 — Enterprise",
    description:
      "An integrated enterprise platform for managing finance, CRM, sales, procurement, inventory, production, HR, eCommerce and more.",
    positioning:
      "Every part of the business, in one system of record — built for operations that can't afford to run on spreadsheets.",
    accent: "ims",
    accentHex: "#4fa3e8",
    accentSoft: "#1c3a52",
    features: [
      {
        label: "Finance & Budgeting",
        headline: "See the ledger the moment it moves.",
        body: "Real-time books, budget tracking, and financial statements that stay reconciled without end-of-month scrambling.",
      },
      {
        label: "CRM",
        headline: "Every customer relationship, in view.",
        body: "Track leads, follow-ups, and accounts in one pipeline your sales and support teams both trust.",
      },
      {
        label: "Sales / POS",
        headline: "From quote to invoice, in one flow.",
        body: "Point-of-sale and sales order management that stay in sync with inventory and finance automatically.",
      },
      {
        label: "Procurement",
        headline: "Purchasing with a paper trail.",
        body: "Requisitions, purchase orders, and vendor management with full approval history.",
      },
      {
        label: "Store & Inventory",
        headline: "Stock levels you can actually trust.",
        body: "Multi-warehouse inventory with live counts, transfers, and reorder thresholds.",
      },
      {
        label: "Production & Costing",
        headline: "Know what things really cost to make.",
        body: "Bill of materials, production orders, and job costing tied directly to inventory movement.",
      },
      {
        label: "Supply Chain",
        headline: "From supplier to shelf, tracked.",
        body: "Coordinate procurement, production, and distribution as one connected chain, not separate silos.",
      },
      {
        label: "HR & Payroll",
        headline: "People operations without the spreadsheets.",
        body: "Attendance, payroll runs, and employee records managed alongside the rest of the business.",
      },
      {
        label: "eCommerce",
        headline: "Sell online without a second system.",
        body: "Storefront orders flow straight into the same inventory and finance core as every other sale.",
      },
      {
        label: "Fixed Assets",
        headline: "Track what the business owns.",
        body: "Asset registers, depreciation schedules, and maintenance history in one place.",
      },
    ],
  },
  {
    id: "cafe",
    slug: "cafe",
    name: "Cafe Management System",
    category: "Hospitality Management",
    status: "available",
    statusLabel: "Available",
    eyebrow: "02 — Hospitality",
    description:
      "A complete management platform designed to simplify cafe and restaurant operations, orders, inventory, billing and day-to-day workflows.",
    positioning:
      "Built for the floor, not the back office — order in, kitchen fired, table turned, books balanced.",
    accent: "cafe",
    accentHex: "#e8934a",
    accentSoft: "#4a3320",
    features: [
      {
        label: "POS",
        headline: "Order to receipt, without the friction.",
        body: "A fast point-of-sale built for a moving floor — take orders, split bills, and close out in seconds.",
      },
      {
        label: "Order Management",
        headline: "The kitchen always knows what's next.",
        body: "Orders route straight to the kitchen display the moment they're placed, no paper tickets lost in the shuffle.",
      },
      {
        label: "Table Management",
        headline: "See the whole floor at a glance.",
        body: "Live table status — open, seated, billed — so hosts and servers are never guessing.",
      },
      {
        label: "Inventory",
        headline: "Know what's running low before service does.",
        body: "Ingredient-level stock tracking tied to your recipes and daily usage.",
      },
      {
        label: "Billing",
        headline: "Clean bills, every time.",
        body: "Itemized billing with tax, discounts, and split payments handled without manual math.",
      },
      {
        label: "Reports",
        headline: "Know what sold, and what didn't.",
        body: "Daily sales, best-sellers, and shift summaries ready the moment service ends.",
      },
      {
        label: "Staff Management",
        headline: "Shifts and roles, organized.",
        body: "Staff accounts, shift assignments, and permissions scoped to what each role needs.",
      },
    ],
  },
  {
    id: "mero-lagaani",
    slug: "mero-lagaani",
    name: "Mero Lagaani",
    category: "Digital Investing",
    status: "in-progress",
    statusLabel: "In Progress",
    eyebrow: "03 — Investing",
    description:
      "A modern investment platform designed to make investing simpler, smarter and more accessible.",
    positioning:
      "Where Nepal invests — real market data with the simplicity of one tap.",
    accent: "mero",
    accentHex: "#8b7cf6",
    accentSoft: "#2a2450",
    features: [
      {
        label: "Market Tracking",
        headline: "The market, live, without the noise.",
        body: "Real-time index movement, gainers, and losers laid out clearly enough to act on.",
      },
      {
        label: "Portfolio",
        headline: "Everything you hold, in one view.",
        body: "Holdings, gains, and losses tracked automatically as the market moves.",
      },
      {
        label: "Watchlist",
        headline: "Keep an eye on what matters to you.",
        body: "Build a watchlist of the counters you're tracking and follow them in real time.",
      },
      {
        label: "Investment Insights",
        headline: "Data, not guesswork.",
        body: "Clear market data presented so decisions are informed rather than instinctive.",
      },
      {
        label: "IPO Discovery",
        headline: "Never miss an opening.",
        body: "Upcoming and open IPOs surfaced in one place, with the details you need to apply.",
      },
      {
        label: "Analytics",
        headline: "Understand your own performance.",
        body: "Portfolio-level analytics that show how your investments are actually performing over time.",
      },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
