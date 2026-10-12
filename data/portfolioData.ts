import { ProjectItem, ServiceItem, CodeSnippet } from "../types";
import myPic from "@/public/images/myPic.altered.png";

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    filename: "~/devzee/core/engine.ts",
    language: "typescript",
    envBadge: "LIVE_PROD",
    notes:
      "Zero-overhead client-runtime initialization with strict e2e validation.",
    code: `01  export async function mountArchitecture(client: ClientConfig) {
02    // Rigorous design meeting performant code
03    const runtime = await Devzee.init({
04      mode: 'high-availability',
05      telemetry: true,
06      typeSafety: 'strict-e2e'
07    });
08    return runtime.deploy({ latency: '< 100ms' });
09  }`,
  },
  {
    filename: "~/devzee/geo/route-optimizer.ts",
    language: "typescript",
    envBadge: "ORS_API_V2",
    notes: "Fast polyline route snapping and spatial calculation engine.",
    code: `01  export async function calculateRoute(pickup: Coords, dropoff: Coords) {
02    const matrix = await geoClient.snapToRoads([pickup, dropoff]);
03    const polyline = polylineDecode(matrix.geometry);
04    const etaSeconds = computeDynamicEta(matrix.distance, trafficIndex);
05    return {
06      distanceKm: (matrix.distance / 1000).toFixed(1),
07      durationMin: Math.round(etaSeconds / 60),
08      waypoints: polyline
09    };
10  }`,
  },
  {
    filename: "~/devzee/fintech/atomic-ledger.ts",
    language: "typescript",
    envBadge: "POSTGRES_ACID",
    notes: "Double-entry cryptographic ledger transaction execution.",
    code: `01  export async function recordLedgerEntry(tx: TransactionPayload) {
02    return await db.transaction(async (trx) => {
03      const debit = await trx.entries.insert({ accountId: tx.senderId, amount: -tx.amount });
04      const credit = await trx.entries.insert({ accountId: tx.receiverId, amount: tx.amount });
05      const signature = hmacSha256(tx.id, process.env.LEDGER_SECRET);
06      return trx.auditLog.insert({ txId: tx.id, hash: signature, timestamp: Date.now() });
07    });
08  }`,
  },
  {
    filename: "~/devzee/tests/playwright.spec.ts",
    language: "typescript",
    envBadge: "CI_HEADLESS",
    notes: "End-to-end regression validation across multi-tier user flows.",
    code: `01  test('booking lifecycle completes without UI regression', async ({ page }) => {
02    await page.goto('/dispatch');
03    await page.getByTestId('pickup-input').fill('Victoria Island');
04    await page.getByTestId('route-calc-btn').click();
05    await expect(page.getByTestId('route-hud')).toContainText('Optimal Path');
06    await page.getByTestId('confirm-ride-btn').click();
07    await expect(page.getByTestId('driver-card')).toBeVisible({ timeout: 500 });
08  });`,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "gr-tech",
    title: "GR Tech",
    category: "Commercial Web Application",
    mainImage: "/images/gr-tech/gr-tech-hazel.vercel.app_.png",
    images: [
      "/images/gr-tech/gr-tech-hazel.vercel.app_.png",
      "/images/gr-tech/gr-tech-hazel.vercel.app_ (1).png",
      "/images/gr-tech/gr-tech-hazel.vercel.app_ (2).png",
      "/images/gr-tech/gr-tech-hazel.vercel.app_ (3).png",
      "/images/gr-tech/gr-tech-hazel.vercel.app_ (4).png",
    ],
    siteUrl: "https://gr-tech-hazel.vercel.app",
    badge: "Business Product",
    tagline: "Solar Commerce & Operational Intelligence",
    description:
      "A business-facing web app with storefront commerce, product catalog management, order workflows, and an admin dashboard for tracking sales and operational metrics.",
    highlights: [
      { icon: "store", text: "E-commerce storefront" },
      { icon: "analytics", text: "Sales analytics dashboard" },
      { icon: "inventory_2", text: "Order & inventory management" },
      { icon: "shield", text: "JWT-authenticated admin flows" },
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Playwright",
    ],
    architectureDetails: {
      problem:
        "A company brand and product catalog needed a clean storefront while also providing internal operational controls for inventory, orders, and metrics without splitting the experience across disconnected tools.",
      solution:
        "Built a single product ecosystem with a public-facing storefront and a protected admin dashboard, shared data contracts, and workflow-driven order management across the app.",
      keyDecisions: [
        "Unified storefront and admin flows around one shared data model.",
        "Protected operational endpoints with robust role-aware auth boundaries.",
        "Prioritized dashboard clarity for business decisions and product management.",
      ],
      metrics: [
        { label: "Core Modules", value: "12+" },
        { label: "Admin Coverage", value: "100%" },
        { label: "Launch Readiness", value: "Production" },
      ],
    },
  },
  {
    id: "uber-clone",
    title: "Uber Clone Architecture",
    category: "Full-Stack Application",
    mainImage: "/images/uberClone/uber0.png",
    images: [
      "/images/uberClone/uber0.png",
      "/images/uberClone/uber1.png",
      "/images/uberClone//uber2.png",
      "/images/uberClone/uber3.png",
      "/images/uberClone/uber4.png",
    ],
    siteUrl: "https://uber07.netlify.app",
    badge: "Active Showcase",
    tagline: "Geolocation & Ride Dispatch Engineering",
    description:
      "A location-driven application exploring secure authentication, address autocomplete, route visualization, geolocation, and modular application architecture.",
    highlights: [
      { icon: "pin_drop", text: "Geolocation & Map snapping" },
      { icon: "route", text: "Route calculation & Polyline APIs" },
      { icon: "lock", text: "NextAuth & JWT Route Guards" },
      { icon: "dns", text: "Modular Next.js App Router" },
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "OpenStreetMap",
      "Leaflet",
      "OpenRouteService API",
      "Tailwind CSS",
    ],
    architectureDetails: {
      problem:
        "Handling high-frequency geographic coordinates, client-side route caching, and low-latency waypoint calculations without incurring excessive mapping API billings.",
      solution:
        "Architected a client-side polyline decoder paired with debounce caching layer and OpenRouteService routing engine. State synchronization handles instantaneous driver-to-rider matching simulation.",
      keyDecisions: [
        "Decoupled GIS services behind an abstract geo-adapter interface.",
        "Client-side bounding-box interpolation to reduce map redraw cycle times.",
        "Strict TypeScript schemas for driver location vectors and route telemetry payloads.",
        "Zero-dependency fallback vector map renderer for instant cold loads.",
      ],
      schemaSample: `// Ride Dispatch Domain Entity
interface RideDispatchSession {
  id: string; // UUIDv4
  passengerId: string;
  driverId: string | null;
  status: 'PENDING' | 'ACCEPTED' | 'IN_TRANSIT' | 'COMPLETED';
  pickup: { lat: number; lng: number; address: string };
  dropoff: { lat: number; lng: number; address: string };
  telemetry: {
    distanceKm: number;
    durationMinutes: number;
    polyline: string;
    trafficDensity: 'LOW' | 'MODERATE' | 'HEAVY';
  };
  fare: { baseAmount: number; surgeMultiplier: number; currency: 'NGN' | 'USD' };
  createdAt: string;
}`,
      endpointsSample: [
        "POST /api/v1/rides/estimate -> Calculate distance, fare & polyline",
        "POST /api/v1/rides/dispatch -> Reserve driver & broadcast location stream",
        "GET /api/v1/telemetry/driver-location?driverId=:id -> SSE real-time stream",
      ],
      metrics: [
        { label: "API Resp Latency", value: "42ms" },
        { label: "Waypoint Resolution", value: "100% vector" },
        { label: "Lighthouse Score", value: "100/100" },
      ],
    },
  },
  {
    id: "g-r-tech-invoicing-app",
    title: "G-R Tech Invoicing App",
    category: "Operational Dashboard",
    mainImage: "/images/invoicingApp/dashboard.png",
    images: [
      "/images/invoicingApp/dashboard.png",
      "/images/invoicingApp/invoices_page.png",
      "/images/invoicingApp/create_invoice_page.png",
      "/images/invoicingApp/client_page.png",
    ],
    siteUrl: "https://invoicing-app-ftyk.vercel.app",
    badge: "Business Workflow System",
    tagline: "Invoice Operations & Client Management",
    description:
      "A full-stack invoicing application focused on client tracking, invoice generation, and business operations built with a custom server, PostgreSQL, and Prisma.",
    highlights: [
      { icon: "receipt_long", text: "Invoice lifecycle management" },
      { icon: "groups", text: "Client records and relationships" },
      { icon: "bar_chart", text: "Operational dashboard" },
      { icon: "api", text: "Custom backend architecture" },
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    architectureDetails: {
      problem:
        "Manual business invoicing usually creates churn and operational mistakes. The app needed to centralize invoice generation and client records while keeping the data reliable and trackable.",
      solution:
        "Built a structured invoicing system with explicit client and invoice relationships, organized backend logic, and practical UI workflows for day-to-day business operations.",
      keyDecisions: [
        "Schema design focused on traceable payments, clients, and invoice generation.",
        "Dashboard screens were organized for speed and business clarity.",
        "Server logic was kept modular to support future expansion without breaking flows.",
      ],
      metrics: [
        { label: "Workflow Depth", value: "End-to-end" },
        { label: "Data Layer", value: "Prisma + PG" },
        { label: "Use Case", value: "Ops Ready" },
      ],
    },
  },
  {
    id: "teazy-tech",
    title: "Teazy Tech Platform",
    category: "Education & Media Platform",
    mainImage: "/images/teazyTech/teazy-tech.vercel.app_.png",
    images: [
      "/images/teazyTech/teazy-tech.vercel.app_.png",
      "/images/teazyTech/teazy-tech.vercel.app_ (1).png",
      "/images/teazyTech/teazy-tech.vercel.app_ (2).png",
    ],
    siteUrl: "https://teazy-tech-test.vercel.app",
    badge: "Co-Developed Project",
    tagline: "Modern Technical Literacy & Publishing Engine",
    description:
      "A collaborative learning and media platform engineered to empower educators and students with modern technical literacy, featuring a custom publishing workflow and rapid content consumption engine.",
    role: "Co-Developer",
    highlights: [
      { icon: "edit_note", text: "CMS & Structured Publishing" },
      { icon: "grid_view", text: "Dynamic Media Asset Galleries" },
      { icon: "devices", text: "Fluid Mobile & Desktop Reader" },
      { icon: "group", text: "Collaborative Multi-Author Flow" },
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Custom CMS API",
    ],
    architectureDetails: {
      problem:
        "Educators and students required structured multimedia learning packs that could load reliably across low-bandwidth environments without layout shift or media latency.",
      solution:
        "Engineered an Express & React powered editorial publishing suite with automatic image compression, markdown abstraction, and role-based publishing authorization.",
      keyDecisions: [
        "Custom modular block editor capable of rich code embeds and media carousels.",
        "Incremental caching of published articles with edge CDN invalidation hooks.",
        "Granular author permissions (Editor, Contributor, Reviewer, Admin).",
      ],
      schemaSample: `// Article & Curriculum Module Entity
interface CurriculumArticle {
  slug: string;
  title: string;
  deck: string;
  category: 'AI_CURRICULUM' | 'STEM_WORKFLOWS' | 'PROGRAMMING';
  enrolledStudentsCount: number;
  author: { name: string; avatarUrl: string; role: string };
  contentBlocks: Array<{
    type: 'markdown' | 'code' | 'callout' | 'asset_gallery';
    payload: Record<string, unknown>;
  }>;
  publishedAt: string;
  status: 'DRAFT' | 'REVIEW' | 'PUBLISHED';
}`,
      endpointsSample: [
        "GET /api/v1/curriculum/feed?page=1&limit=20 -> Paginated reader stream",
        "POST /api/v1/editor/publish -> Validate markdown tokens & build cache",
        "POST /api/v1/assets/upload -> Cloud asset optimizer & CDN distribution",
      ],
      metrics: [
        { label: "Enrolled Educators", value: "1,240+" },
        { label: "Active Readers", value: "3,890+" },
        { label: "Build Regressions", value: "0 sec" },
      ],
    },
  },
  {
    id: "moniepoint-clone",
    title: "Moniepoint Financial Ecosystem Clone",
    category: "Fintech Interface & Data Modeling",
    mainImage: "/images/moniepoint/main.png",
    images: [
      "/images/moniepoint/main.png",
      "/images/moniepoint/side1.png",
      "/images/moniepoint/side2.png",
      "/images/moniepoint/side3.png",
    ],
    siteUrl: "https://moniepoint-clone04.netlify.app",
    badge: "Educational Clone & Architecture Experiment",
    disclaimer:
      "*Independent architectural study & learning experiment. Not affiliated with or endorsed by Moniepoint Inc.",
    tagline: "Dual-Portal Treasury & Atomic Ledger System",
    description:
      "A comprehensive project exploring a dual-portal fintech experience (Merchant Business & Personal Banking), relational database integration, atomic ledger modeling, and end-to-end interface consistency under high transaction velocity.",
    highlights: [
      { icon: "account_balance", text: "Dual Portal (Biz / Personal)" },
      { icon: "database", text: "Relational Ledger Modeling" },
      { icon: "key", text: "Account Provisioning Workflows" },
      { icon: "security", text: "Client-Side Encryption Logic" },
    ],
    techStack: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Crypto Web API",
    ],
    architectureDetails: {
      problem:
        "Financial applications demand zero-loss state changes, strict double-entry ledger semantics, and instant feedback without stale balance reads.",
      solution:
        "Implemented strict PostgreSQL transactions with row-level locks, coupled with client-side optimistic balance updates and HMAC payload verification.",
      keyDecisions: [
        "Dual-portal architecture sharing a synchronized authentication context.",
        "Immutable append-only ledger entries preventing balance manipulation.",
        "Auditable transaction logging with idempotency keys on every payout request.",
      ],
      schemaSample: `// PostgreSQL Immutable Double-Entry Ledger Schema
CREATE TABLE ledger_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  portal_type VARCHAR(16) NOT NULL CHECK (portal_type IN ('BUSINESS', 'PERSONAL')),
  currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE ledger_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID NOT NULL REFERENCES ledger_accounts(id),
  amount NUMERIC(14, 2) NOT NULL,
  entry_type VARCHAR(16) NOT NULL CHECK (entry_type IN ('CREDIT', 'DEBIT')),
  reference_code VARCHAR(64) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`,
      endpointsSample: [
        "POST /api/v1/ledger/transfer -> Execute atomic double-entry debit/credit",
        "GET /api/v1/accounts/balance?portal=biz -> Query computed balance with cache",
        "POST /api/v1/cards/provision -> Issue cryptographic virtual debit instrument",
      ],
      metrics: [
        { label: "Ledger Consistency", value: "100% ACID" },
        { label: "Monthly Volume Simulated", value: "$42,890+" },
        { label: "Transaction Latency", value: "< 65ms" },
      ],
    },
  },
  {
    id: "dareprints",
    title: "Dare e-commerce App",
    category: "E-commerce Platform",
    mainImage: "/images/dareprints/localhost_3000_ (1).png",
    images: [
      "/images/dareprints/localhost_3000_ (1).png",
      "/images/dareprints/dareprints.vercel.app_.png",
      "/images/dareprints/dareprints.vercel.app_ (1).png",
      "/images/dareprints/dareprints.vercel.app_ (2).png",
      "/images/dareprints/dareprints.vercel.app_ (3).png",
    ],
    siteUrl: "https://dareprints.vercel.app",
    badge: "Live Storefront",
    tagline: "Minimal Commerce With Admin Control",
    description:
      "A simple e-commerce experience with a minimal interface, cart flow that works before login, and an admin dashboard for order and product management.",
    highlights: [
      { icon: "shopping_cart", text: "Guest cart flow" },
      { icon: "local_mall", text: "Catalog-driven storefront" },
      { icon: "admin_panel_settings", text: "Order management dashboard" },
      { icon: "vpn_key", text: "Auth and user sessions" },
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    architectureDetails: {
      problem:
        "An e-commerce product required frictionless shopping while keeping admin operations easy to manage and the state dependable across cart and order flows.",
      solution:
        "Designed a lightweight commerce architecture with an accessible cart flow, clear admin controls, and secure API endpoints for order processing and auth.",
      keyDecisions: [
        "Guest checkout path improved conversion while still supporting account-based flows.",
        "Cart and order state separated cleanly for easier maintenance and predictability.",
        "Dashboard tooling focused on essentials: product updates, status tracking, and order visibility.",
      ],
      metrics: [
        { label: "Commerce Flow", value: "Guest + Auth" },
        { label: "Admin Tools", value: "Order Ops" },
        { label: "Storefront Style", value: "Minimal" },
      ],
    },
  },

  {
    id: "countries-of-the-world",
    title: "Countries of the World",
    category: "Information Dashboard",
    mainImage: "/images/restCountriesProject/desktop-design-home-light.jpg",
    images: [
      "/images/restCountriesProject/desktop-design-home-light.jpg",
      "/images/restCountriesProject/desktop-design-home-dark.jpg",
      "/images/restCountriesProject/desktop-design-detail-light.jpg",
      "/images/restCountriesProject/desktop-design-detail-dark.jpg",
    ],
    siteUrl: "https://countries-of-the-world03.netlify.app",
    badge: "Learning Project",
    tagline: "Global Reference App With Rich Detail Views",
    description:
      "A geo-information app built with the REST Countries API, giving users searchable detail views for countries around the world and a standout dual-theme UI.",
    highlights: [
      { icon: "travel_explore", text: "Country search and discovery" },
      { icon: "dark_mode", text: "Light & dark theme UI" },
      { icon: "language", text: "Global data exploration" },
      { icon: "insights", text: "Detail-rich dashboard views" },
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "HTML"],
    architectureDetails: {
      problem:
        "Country data can be overwhelming without a clear interface. The app needed a clean browsing experience and a better way to compare and understand global details.",
      solution:
        "Built an interactive data browser with search, filtering, and detail screens that make charting and comparing country information much easier.",
      keyDecisions: [
        "Theme-aware interface improved usability and visual polish.",
        "The data model was simplified into concise, readable country details.",
        "A strong card-and-detail pattern reduced cognitive load for browsing.",
      ],
      metrics: [
        { label: "Data Source", value: "REST API" },
        { label: "UX Patterns", value: "Search + Detail" },
        { label: "Project Era", value: "React Learn" },
      ],
    },
  },
  {
    id: "plan-cinema",
    title: "Plan Cinema",
    category: "Media Discovery Experience",
    mainImage: "/images/planCinema/homepage.jpg",
    images: [
      "/images/planCinema/homepage.jpg",
      "/images/planCinema/searchBar.jpg",
    ],
    siteUrl: "https://plan-cinema.netlify.app",
    badge: "Media App",
    tagline: "Movie Discovery With Search & Browse",
    description:
      "A movie-focused application that helps users browse titles, discover content, and quickly search for films from popular genres and collections.",
    highlights: [
      { icon: "movie", text: "Film discovery" },
      { icon: "search", text: "Quick search interface" },
      { icon: "slideshow", text: "Homepage content browsing" },
      { icon: "favorite", text: "Entertainment-first experience" },
    ],
    techStack: ["React", "Tailwind CSS", "Vite"],
    architectureDetails: {
      problem:
        "A media app needs a simple, familiar browsing flow that keeps people engaged without feeling visually noisy or cluttered.",
      solution:
        "Created a clean entertainment UI with a homepage-first presentation and lightweight interaction patterns built for content discovery.",
      keyDecisions: [
        "Focused on a strong browse-and-search mental model.",
        "Kept UI simple and goal-oriented to avoid feature overload.",
        "Designed for fast iteration and a straightforward data flow.",
      ],
      metrics: [
        { label: "Core UX", value: "Browse + Search" },
        { label: "Interface Style", value: "Minimal" },
        { label: "Project Type", value: "Media" },
      ],
    },
  },
  {
    id: "stephanie-portfolio",
    title: "Stephanie's Portfolio",
    category: "Personal Brand Website",
    mainImage: "/images/stephaniePortfolio/main.png",
    images: [
      "/images/stephaniePortfolio/main.png",
      "/images/stephaniePortfolio/side1.png",
      "/images/stephaniePortfolio/side2.png",
    ],
    siteUrl: "https://stephaniee.netlify.app",
    badge: "Collaborative Build",
    tagline: "Personal Brand & Portfolio Experience",
    description:
      "A collaborative portfolio website created for a client, focusing on a strong personal brand presence and polished presentation of work and identity.",
    highlights: [
      { icon: "person", text: "Portfolio storytelling" },
      { icon: "palette", text: "Brand-led design system" },
      { icon: "design_services", text: "Presentation polish" },
      { icon: "build_circle", text: "Collaborative delivery" },
    ],
    techStack: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    architectureDetails: {
      problem:
        "A personal brand project needed to express professionalism and individuality without sacrificing performance or clarity across a simple portfolio structure.",
      solution:
        "Focused on polished visual hierarchy and a calm presentation system that allows the work to carry the narrative while preserving responsiveness.",
      keyDecisions: [
        "Brand identity drove layout and tone decisions.",
        "A minimalist content model helped the portfolio feel premium and focused.",
        "Responsive design ensured the presentation remained strong across screen sizes.",
      ],
      metrics: [
        { label: "Brand Style", value: "Premium" },
        { label: "Format", value: "Portfolio" },
        { label: "Delivery", value: "Client Ready" },
      ],
    },
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    category: "Game Experience",
    mainImage: "/images/rockPaperScissors/desktop-step-1.jpg",
    images: [
      "/images/rockPaperScissors/desktop-step-1.jpg",
      "/images/rockPaperScissors/desktop-step-4-lose.jpg",
      "/images/rockPaperScissors/desktop-step-1-bonus.jpg",
      "/images/rockPaperScissors/desktop-step-3-bonus.jpg",
    ],
    siteUrl: "https://rock-paper-scissors-and-bonuss.netlify.app",
    badge: "Game UI Experiment",
    tagline: "Classic Game Reimagined With Score Logic",
    description:
      "A polished game interface built around rock-paper-scissors mechanics, score tracking, and a bonus-mode variation to expand the challenge.",
    highlights: [
      { icon: "sports_esports", text: "Interactive game logic" },
      { icon: "leaderboard", text: "Score progression" },
      { icon: "tune", text: "Bonus game mode" },
      { icon: "smart_toy", text: "UI-driven gameplay" },
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "HTML"],
    architectureDetails: {
      problem:
        "Game UI needs to feel instant and legible. The difficulty was translating the rules and score tracking into a polished, responsive interface without overengineering.",
      solution:
        "Built a lightweight interactive gameplay flow around state transitions, result evaluation, and responsive score updates across the game board.",
      keyDecisions: [
        "Maintained a very readable state model to avoid confusion during gameplay.",
        "The bonus mode introduced an optional challenge without cluttering the base experience.",
        "UI polish was prioritized to make a simple concept feel premium.",
      ],
      metrics: [
        { label: "Gameplay", value: "Real-time" },
        { label: "Modes", value: "2" },
        { label: "Style", value: "Arcade" },
      ],
    },
  },
  {
    id: "travel-to-space",
    title: "Travel to Space",
    category: "Landing Page Experience",
    mainImage: "/images/travelToSpace/home.png",
    images: ["/images/travelToSpace/home.png"],
    siteUrl: "https://travel-to-space04.netlify.app",
    badge: "UI concept",
    tagline: "Immersive Space Travel Storytelling",
    description:
      "A fantasy-inspired landing page built around the thrill of space travel, with atmospheric visuals and an imaginative brand-first interface.",
    highlights: [
      { icon: "rocket_launch", text: "Themed landing experience" },
      { icon: "auto_awesome", text: "Atmospheric visual storytelling" },
      { icon: "travel_explore", text: "Narrative-driven layout" },
      { icon: "design_services", text: "Fine-tuned UI composition" },
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    architectureDetails: {
      problem:
        "Creative landing pages need atmosphere and a clear sense of story while staying lightweight and easy to navigate.",
      solution:
        "Created a visually rich, single-page experience that feels immersive while keeping the layout and interactions intentionally simple.",
      keyDecisions: [
        "Strong visual narrative was prioritized over heavy complexity.",
        "The page focused on editorial composition and delight rather than extensive functionality.",
        "Minimal scripting preserved speed and clarity.",
      ],
      metrics: [
        { label: "Theme", value: "Space" },
        { label: "Format", value: "Landing Page" },
        { label: "Stack", value: "Vanilla + Tailwind" },
      ],
    },
  },
  {
    id: "bookmark-landing-page",
    title: "Bookmark Landing Page",
    category: "Marketing Website",
    mainImage: "/images/bookmarkPage/desktop-preview.jpg",
    images: [
      "/images/bookmarkPage/desktop-preview.jpg",
      "/images/bookmarkPage/tab-2-design.jpg",
      "/bookmarkPage/tab-3-design.jpg",
    ],
    siteUrl: "https://bookmark04.netlify.app",
    badge: "Frontend Mentor",
    tagline: "Conversion-Focused Landing Page UI",
    description:
      "A polished landing page concept focused on browser extension marketing, feature explanation, and a streamlined conversion path.",
    highlights: [
      { icon: "bookmark", text: "Feature-driven marketing page" },
      { icon: "grid_view", text: "Structured content blocks" },
      { icon: "trending_up", text: "Strong CTA hierarchy" },
      { icon: "design_services", text: "UI refinement practice" },
    ],
    techStack: ["HTML", "JavaScript", "CSS"],
    architectureDetails: {
      problem:
        "Marketing pages need a clear selling story and UX clarity, especially when communicating benefits and calls to action with limited space.",
      solution:
        "Designed a highly structured landing page with clear feature groupings, a prominent CTA, and clean component styling for readability and conversion.",
      keyDecisions: [
        "Content hierarchy was built to guide attention into the conversion path.",
        "Visual rhythm was intentionally kept simple and premium.",
        "Responsive layout preserved clarity across mobile and desktop views.",
      ],
      metrics: [
        { label: "Design Goal", value: "Conversion" },
        { label: "Category", value: "Marketing" },
        { label: "Type", value: "Static UI" },
      ],
    },
  },
  {
    id: "todo-app",
    title: "Todo App",
    category: "Productivity Utility",
    mainImage: "/images/todo/desktop-preview.jpg",
    images: [
      "/images/todo/desktop-preview.jpg",
      "/images/todo/desktop-design-light.jpg",
      "/images/todo/desktop-design-dark.jpg",
    ],
    siteUrl: "https://dullarzee.github.io",
    badge: "UI Pattern Practice",
    tagline: "Classic Task Tracking With Theme Switching",
    description:
      "A lightweight productivity app with classic todo functionality, task completion state, and a theme toggle for light and dark modes.",
    highlights: [
      { icon: "checklist", text: "Todo flow" },
      { icon: "contrast", text: "Light/dark mode" },
      { icon: "task_alt", text: "Task state handling" },
      { icon: "speed", text: "Fast, focused user interaction" },
    ],
    techStack: ["HTML", "JavaScript", "CSS"],
    architectureDetails: {
      problem:
        "Even simple productivity tools need a clear interaction model. The challenge was creating a clean task experience with a reliable state flow and comfortable visual contrast.",
      solution:
        "Built a straightforward task manager with a clean interaction loop and theme support, focusing on clarity and low-friction use.",
      keyDecisions: [
        "State transitions were intentionally kept simple and explicit.",
        "Theme switching improved usability in all-day work contexts.",
        "UI styling favored readability and fast task completion.",
      ],
      metrics: [
        { label: "Feature Set", value: "Core tasks" },
        { label: "UX", value: "Low friction" },
        { label: "Theme", value: "Toggle" },
      ],
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    icon: "web",
    title: "Business Websites & Landing Pages",
    description:
      "High-converting, brand-aligned marketing sites built with Next.js, fluid typography, and sub-second loading speeds that make an unforgettable impression.",
    tags: "SSR · SEO · ANIMATIONS",
    typeValue: "website",
  },
  {
    id: "s2",
    icon: "dashboard_customize",
    title: "Web Apps & Admin Dashboards",
    description:
      "Custom internal tools, SaaS client portals, live metric boards, and operational dashboards with complex state management and responsive data grids.",
    tags: "REACT · TYPESCRIPT · RBAC",
    typeValue: "fullstack",
  },
  {
    id: "s3",
    icon: "shopping_cart_checkout",
    title: "E-commerce Development",
    description:
      "Custom storefronts, frictionless checkout flows, cart logic, payment gateway integrations (Stripe, Paystack, Flutterwave), and catalog management.",
    tags: "CHECKOUT · WEBHOOKS · INVENTORY",
    typeValue: "ecom",
  },
  {
    id: "s4",
    icon: "database",
    title: "Backend & API Development",
    description:
      "Secure Node.js & Express architectures, clean RESTful endpoints, relational PostgreSQL databases, Prisma ORM, and resilient cloud storage hooks.",
    tags: "NODE · POSTGRES · SUPABASE",
    typeValue: "fullstack",
  },
  {
    id: "s5",
    icon: "smartphone",
    title: "Cross-Platform Mobile Apps",
    description:
      "Native-feeling iOS and Android applications developed using React Native and Expo, with shared business logic and offline-first persistence.",
    tags: "REACT NATIVE · EXPO · IOS & ANDROID",
    typeValue: "mobile",
  },
  {
    id: "s6",
    icon: "speed",
    title: "Technical Quality & E2E Testing",
    description:
      "Frontend code refactoring, accessibility compliance (WCAG), performance audits, and Playwright end-to-end automation suites to prevent regressions.",
    tags: "PLAYWRIGHT · AUDITS · CI/CD",
    typeValue: "testing",
  },
];

export const ENGINEERING_STACK = [
  {
    id: "frontend",
    category: "01 / FRONTEND",
    title: "Web Client Layer",
    icon: "brush",
    description:
      "Component architecture, typed interfaces, and rendering optimizations.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    deepDive:
      "Mastery in modern React concurrency, Server Components, client-side caching strategies (SWR/TanStack Query), fluid token-based styling with Tailwind, and micro-animations with 60fps frame rates.",
  },
  {
    id: "mobile",
    category: "02 / MOBILE",
    title: "Native Client Systems",
    icon: "phone_iphone",
    description:
      "Multi-platform build flows, touch gesture engines, and device permissions.",
    skills: ["React Native", "Expo", "iOS / Android"],
    deepDive:
      "Designing touch-first responsive interfaces using Expo EAS, handling offline storage with MMKV/WatermelonDB, push notification architectures, and native device capabilities.",
  },
  {
    id: "backend",
    category: "03 / BACKEND",
    title: "Services & APIs",
    icon: "dns",
    description:
      "Stateless RESTful controllers, middleware pipelines, and auth tokens.",
    skills: ["Node.js", "Express.js", "Next.js API Routes"],
    deepDive:
      "Authoring clean modular backend controllers, JWT/OAuth2 session flows, rate-limiting middlewares, webhook ingestion endpoints, and distributed background jobs.",
  },
  {
    id: "data",
    category: "04 / DATA",
    title: "Persistence & Storage",
    icon: "storage",
    description:
      "Normalized schema design, index tuning, migrations, and queries.",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Prisma"],
    deepDive:
      "Modeling third-normal-form relational databases, writing performant JOIN queries, configuring row-level security (RLS) on Supabase, and managing Prisma schema migrations safely.",
  },
  {
    id: "workflow",
    category: "05 / WORKFLOW",
    title: "Design & Tooling",
    icon: "handyman",
    description:
      "Vector token translation, branch management, and endpoint inspection.",
    skills: ["Figma", "Git & GitHub", "Postman"],
    deepDive:
      "Translating Figma auto-layout designs directly into pixel-matched code, managing git branch hygiene and release tagging, and mocking API contracts with Postman collections.",
  },
  {
    id: "verification",
    category: "06 / VERIFICATION",
    title: "Testing & QA",
    icon: "fact_check",
    description:
      "Deterministic user flows, headless browsers, and regression guardrails.",
    skills: ["Playwright", "E2E Automation", "Automated CI"],
    deepDive:
      "Authoring multi-device Playwright end-to-end suites, visual regression testing, cross-browser compatibility checks, and automated continuous integration pipelines.",
  },
];

export const PROFILE_IMAGE = myPic;
