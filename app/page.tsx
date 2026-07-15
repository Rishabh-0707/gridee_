"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Building2,
  Camera,
  Car,
  Check,
  ChevronDown,
  CircleParking,
  Clock3,
  CreditCard,
  Cross,
  GraduationCap,
  HeartPulse,
  History,
  LockKeyhole,
  MapPin,
  Menu,
  QrCode,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrainFront,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ComponentType,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";

type IconType = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

const navItems = [
  ["Product", "#product"],
  ["Solutions", "#solutions"],
  ["Technology", "#technology"],
  ["Vision", "#vision"],
  ["Company", "#footer"],
];

const stats = [
  { value: 3400, suffix: "+", label: "students in early communities" },
  { value: 10000, suffix: "+", label: "arrivals handled" },
  { value: 98, suffix: "%", label: "sessions completed smoothly" },
  { value: 1000, suffix: "+", label: "spaces mapped" },
];

const storySteps: { title: string; copy: string; icon: IconType }[] = [
  {
    title: "Searching for parking",
    copy: "Gridee reads real-time availability before you reach the gate.",
    icon: MapPin,
  },
  {
    title: "Finding a slot",
    copy: "The nearest space is surfaced instantly, with clear directions.",
    icon: CircleParking,
  },
  {
    title: "Booking",
    copy: "Reserve in a tap. Your space waits while you arrive.",
    icon: Check,
  },
  {
    title: "Vehicle scanning",
    copy: "AI identifies your number plate and pairs it with your booking.",
    icon: ScanLine,
  },
  {
    title: "Vehicle entry",
    copy: "The gate opens automatically—no ticket, queue or interruption.",
    icon: Zap,
  },
  {
    title: "Vehicle parked",
    copy: "You are guided home. Time, payment and access stay in sync.",
    icon: Car,
  },
];

const screens = [
  { key: "parking", title: "Parking", kicker: "Live spaces from the real Gridee app." },
  { key: "bookings", title: "Bookings", kicker: "Your booking and check-in QR, ready to go." },
  { key: "wallet", title: "Wallet", kicker: "Balance and parking activity in one place." },
  { key: "profile", title: "Profile", kicker: "Vehicles, settings and support, kept together." },
  { key: "history", title: "History", kicker: "Every past parking session, clearly organized." },
];

const screenImages: Record<string, string> = {
  parking: "/app-screens/parking.png",
  bookings: "/app-screens/bookings.png",
  wallet: "/app-screens/wallet.png",
  profile: "/app-screens/profile.png",
  history: "/app-screens/history.png",
};

const features: { title: string; copy: string; icon: IconType }[] = [
  {
    title: "Smart Parking Management",
    copy: "Real-time availability and a seamless digital parking experience.",
    icon: Car,
  },
  {
    title: "Mobile First Experience",
    copy: "Book, park and manage everything directly from the mobile application.",
    icon: Smartphone,
  },
  {
    title: "Live Parking Analytics",
    copy: "Occupancy, usage insights and operational intelligence for parking operators.",
    icon: BarChart3,
  },
  {
    title: "AI-Powered Vehicle Scanning",
    copy: "ANPR identifies vehicles instantly, automates entry and exit, and improves security.",
    icon: Camera,
  },
  {
    title: "QR Based Entry & Exit",
    copy: "Fast, contactless parking using secure QR verification.",
    icon: QrCode,
  },
  {
    title: "Secure Digital Payments",
    copy: "UPI, cards and wallets, protected end to end.",
    icon: CreditCard,
  },
  {
    title: "Enterprise Parking Platform",
    copy: "One system for universities, apartments, hospitals, offices, malls and cities.",
    icon: Building2,
  },
  {
    title: "Smart Notifications",
    copy: "Real-time alerts, booking reminders and relevant entry or exit updates.",
    icon: Bell,
  },
];

const industries: { name: string; icon: IconType; copy: string; metric: string }[] = [
  { name: "Universities", icon: GraduationCap, copy: "Frictionless campus movement for students and staff.", metric: "01" },
  { name: "Apartments", icon: Building2, copy: "Resident, guest and visitor parking in one place.", metric: "02" },
  { name: "Corporate Offices", icon: BarChart3, copy: "Smarter commutes and efficient space allocation.", metric: "03" },
  { name: "Hospitals", icon: HeartPulse, copy: "Fast arrival when every minute matters.", metric: "04" },
  { name: "Shopping Malls", icon: ShoppingBag, copy: "A better arrival and a calmer departure.", metric: "05" },
  { name: "Metro Stations", icon: TrainFront, copy: "Connected first- and last-mile parking.", metric: "06" },
  { name: "Smart Cities", icon: Sparkles, copy: "A living parking network built for urban scale.", metric: "07" },
];

const ecosystem: { label: string; detail: string; icon: IconType }[] = [
  { label: "Consumer App", detail: "One-tap parking", icon: Smartphone },
  { label: "Cloud Platform", detail: "Always in sync", icon: Sparkles },
  { label: "Management Software", detail: "Control at scale", icon: BarChart3 },
  { label: "AI Engine", detail: "Continuous intelligence", icon: ScanLine },
  { label: "ANPR Cameras", detail: "Instant recognition", icon: Camera },
  { label: "Real-Time Analytics", detail: "Live decisions", icon: Zap },
  { label: "Smart Infrastructure", detail: "A connected city", icon: Building2 },
];

const testimonials = [
  {
    quote: "I used to leave early just to account for parking. Now I check before I leave and head straight to the right gate.",
    name: "A student rider",
    role: "Campus pilot · Bengaluru",
    initials: "SR",
  },
  {
    quote: "The best sign is that the security desk gets fewer calls. People know where to go, and we can finally see what is happening.",
    name: "An operations lead",
    role: "University parking team",
    initials: "OL",
  },
  {
    quote: "The number plate check saves us from maintaining another paper register. That sounds small until you do it every day.",
    name: "A facility manager",
    role: "Residential community",
    initials: "FM",
  },
];

const faqs = [
  ["How does Gridee work?", "Open the app to discover nearby parking, view live availability, reserve a space and enter using QR or number-plate recognition. Gridee keeps access, time and payment connected from arrival to exit."],
  ["How does QR parking work?", "Every booking creates a secure, time-bound QR credential. Scan it at the entry or exit point for fast, contactless verification—no paper ticket required."],
  ["What is ANPR?", "Automatic Number Plate Recognition uses computer vision to identify a registered vehicle at an enabled location. It can validate access and automate gates while maintaining a clear security record."],
  ["How secure are payments?", "Payments are processed through trusted providers using encrypted connections. Gridee never exposes your full payment credentials to a parking operator."],
  ["Can organizations use Gridee?", "Yes. Universities, apartments, offices, hospitals, malls, transit networks and cities can use Gridee to manage spaces, access, pricing, analytics and communication."],
];

const footerGroups = [
  { title: "Company", links: ["About", "Careers", "Contact", "Blog", "Investor Relations"] },
  { title: "Product", links: ["Features", "Security", "Pricing", "Updates"] },
  { title: "Solutions", links: ["Universities", "Apartments", "Corporate", "Hospitals", "Smart Cities"] },
  { title: "Resources", links: ["Support", "Privacy Policy", "Terms of Service", "Cookies"] },
  { title: "Social", links: ["LinkedIn", "Instagram", "X", "YouTube"] },
];

function Logo() {
  return (
    <span className="logo" aria-label="Gridee home">
      <span>Gridee</span>
    </span>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      {children}
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({ children, className = "", href = "#download", ariaLabel }: { children: ReactNode; className?: string; href?: string; ariaLabel?: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  function move(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.14}px, ${y * 0.14}px)`;
  }

  function leave() {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  }

  return (
    <a ref={ref} href={href} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={leave} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function AppBadge({ store, light = false }: { store: "apple" | "google"; light?: boolean }) {
  const isApple = store === "apple";
  return (
    <MagneticLink className={`store-badge ${light ? "light" : ""}`} ariaLabel={`Download Gridee on ${isApple ? "the App Store" : "Google Play"}`}>
      <span className="store-symbol" aria-hidden="true">{isApple ? "●" : "▶"}</span>
      <span>
        <small>{isApple ? "Download on the" : "GET IT ON"}</small>
        <strong>{isApple ? "App Store" : "Google Play"}</strong>
      </span>
    </MagneticLink>
  );
}

function PhoneScreen({ screen = "parking" }: { screen?: string }) {
  return (
    <img
      className="phone-app-screenshot"
      src={screenImages[screen] ?? screenImages.parking}
      alt={`${screens.find((item) => item.key === screen)?.title ?? "Gridee"} screen from the Gridee app`}
    />
  );
}

function PhoneMockup({ screen = "parking", className = "" }: { screen?: string; className?: string }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-button phone-button-a" /><div className="phone-button phone-button-b" />
      <div className="phone-screen"><PhoneScreen screen={screen} /></div>
    </div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const started = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - started) / 1700, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <strong ref={ref}>{display.toLocaleString("en-IN")}{suffix}</strong>;
}

function StoryStage({ step, index }: { step: typeof storySteps[number]; index: number }) {
  const Icon = step.icon;
  return (
    <motion.article className="story-step" initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-35% 0px -35% 0px" }} transition={{ duration: 0.5 }}>
      <div className="story-number">0{index + 1}</div>
      <div className="story-icon"><Icon size={22} /></div>
      <div><h3>{step.title}</h3><p>{step.copy}</p></div>
    </motion.article>
  );
}

function QRPattern() {
  const cells = Array.from({ length: 169 }, (_, i) => {
    const row = Math.floor(i / 13);
    const col = i % 13;
    const finder = (row < 4 && col < 4) || (row < 4 && col > 8) || (row > 8 && col < 4);
    return finder || ((row * 3 + col * 5 + row * col) % 7 < 3);
  });
  return <div className="qr-pattern" aria-hidden="true">{cells.map((on, i) => <i key={i} className={on ? "on" : ""} />)}</div>;
}

export default function Home() {
  const reduced = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [visionStage, setVisionStage] = useState(0);
  const [activeScreen, setActiveScreen] = useState("parking");
  const [carousel, setCarousel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const rootRef = useRef<HTMLElement>(null);
  const openingVisionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduced ? 100 : 1450);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  useEffect(() => {
    const updateNavigation = () => {
      const visionRect = openingVisionRef.current?.getBoundingClientRect();
      const visionBottom = visionRect?.bottom ?? Number.POSITIVE_INFINITY;
      setNavVisible(visionBottom <= 80);
      if (visionRect) {
        const scrollDistance = Math.max(visionRect.height - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, -visionRect.top / scrollDistance));
        const thresholds = [0.04, 0.16, 0.28, 0.4, 0.55, 0.7, 0.84];
        setVisionStage(thresholds.filter((threshold) => progress >= threshold).length);
      }
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".hero-phone-primary", { yPercent: 12, rotate: -2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
      gsap.to(".hero-phone-secondary", { yPercent: -8, rotate: 7, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
      gsap.to(".grid-car-a", { x: "48vw", repeat: -1, duration: 11, ease: "none" });
      gsap.to(".grid-car-b", { y: "-32vh", repeat: -1, duration: 14, ease: "none" });
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  function pointerMove(event: ReactMouseEvent<HTMLElement>) {
    if (!rootRef.current || reduced) return;
    rootRef.current.style.setProperty("--mouse-x", `${event.clientX}px`);
    rootRef.current.style.setProperty("--mouse-y", `${event.clientY}px`);
  }

  return (
    <main ref={rootRef} onMouseMove={pointerMove}>
      <AnimatePresence>{loading && <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.55 }}><motion.div className="loader-mark" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}><Logo /></motion.div><div className="loader-line"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease: [0.6, 0, 0.2, 1] }} /></div></motion.div>}</AnimatePresence>
      <div className="mouse-glow" aria-hidden="true" />

      <header className={`navbar ${navVisible ? "navbar-visible" : "navbar-hidden"}`}>
        <a href="#top" className="nav-logo"><Logo /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a href="#footer" className="nav-contact">Talk to us</a>
          <MagneticLink className="nav-download">Get the app <ArrowUpRight size={15} /></MagneticLink>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={16} /></a>)}<a href="#download" onClick={() => setMenuOpen(false)}>Get the app<ArrowUpRight size={16} /></a></motion.nav>}</AnimatePresence>
      </header>

      <section className="vision opening-vision" id="vision" ref={openingVisionRef}>
        <div className="vision-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="vision-copy section-shell">
          <p className={`vision-step ${visionStage >= 1 ? "vision-step-visible" : ""}`}>We believe parking should<br />disappear into the background.</p>
          {["No searching.", "No waiting.", "No paper tickets."].map((line, i) => <h3 className={`vision-step ${visionStage >= i + 2 ? "vision-step-visible" : ""}`} key={line}>{line}</h3>)}
          <div className="vision-finale">{["Just arrive.", "Park.", "Go."].map((line, i) => <strong className={`vision-step ${visionStage >= i + 5 ? "vision-step-visible" : ""}`} key={line}>{line}</strong>)}</div>
        </div>
      </section>

      <section className="hero" id="top">
        <div className="parking-grid" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => <i key={i} className={i === 10 || i === 18 ? "slot-live" : ""} />)}
          <div className="grid-car grid-car-a"><span /><span /></div>
          <div className="grid-car grid-car-b"><span /><span /></div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 aria-label="Parking. Simplified">
              <span className="hero-line"><motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}>Parking.</motion.span></span>
              <span className="hero-line green"><motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.32, ease: [0.16, 1, 0.3, 1] }}>Simplified</motion.span><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2, duration: 0.8 }} /></span>
            </h1>
            <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.8 }}>See a free space before you arrive. Reserve it, enter without the paper-ticket shuffle, and get on with your day.</motion.p>
            <motion.div className="human-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}><p>Made for the five minutes before class, a meeting, or visiting hours.</p></motion.div>
          </div>
          <motion.div className="hero-devices" initial={{ opacity: 0, scale: 0.88, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 1.4, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-orbit orbit-one" /><div className="phone-orbit orbit-two" />
            <PhoneMockup screen="parking" className="hero-phone-primary" />
            <PhoneMockup screen="bookings" className="hero-phone-secondary" />
            <div className="floating-status status-b"><ShieldCheck size={17} /><div><small>ENTRY VERIFIED</small><strong>0.8 seconds</strong></div></div>
          </motion.div>
        </div>
      </section>

      <section className="trusted section-shell" id="trusted">
        <Reveal className="trusted-heading"><p>Parking is rarely the destination.<br />It should not take over the journey.</p></Reveal>
        <div className="stats-grid">
          {stats.map((stat, i) => <Reveal className="stat-card" key={stat.label} delay={i * 0.08}><Counter value={stat.value} suffix={stat.suffix} /><span>{stat.label}</span><i /></Reveal>)}
        </div>
      </section>

      <section className="story section-shell">
        <div className="horizontal-heading story-intro">
          <Reveal><h2>From “where do I park?”<br />to <em>right this way.</em></h2><p>Gridee connects availability, entry and payment so drivers do less guessing—and gate teams answer fewer calls.</p></Reveal>
        </div>
        <div className="story-steps horizontal-track" tabIndex={0} aria-label="Parking journey steps">{storySteps.map((step, i) => <StoryStage step={step} index={i} key={step.title} />)}</div>
      </section>

      <section className="product" id="product">
        <div className="product-bg-copy" aria-hidden="true">GRIDEE</div>
        <div className="section-shell product-shell product-horizontal">
          <div className="product-device-sticky">
            <div className="device-halo" />
            <AnimatePresence mode="wait"><motion.div key={activeScreen} initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }} transition={{ duration: 0.42 }}><PhoneMockup screen={activeScreen} /></motion.div></AnimatePresence>
            <span className="device-caption">The Gridee App <i /></span>
          </div>
          <div className="product-copy">
            <div className="product-heading"><h2>Your parking life,<br /><em>beautifully simple.</em></h2></div>
            <div className="product-screen-picker" role="tablist" aria-label="Explore Gridee app screens">
              {screens.map((screen, i) => <button type="button" role="tab" aria-selected={activeScreen === screen.key} className={activeScreen === screen.key ? "active" : ""} onClick={() => setActiveScreen(screen.key)} key={screen.key}><span>0{i + 1}</span><strong>{screen.title}</strong><small>{screen.kicker}</small><ArrowRight size={16} /></button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="features section-shell" id="features">
        <Reveal className="section-heading-row"><div><h2>The practical bits<br />that make it work.</h2></div></Reveal>
        <div className="feature-grid horizontal-track" tabIndex={0} aria-label="Gridee features">
          {features.map((feature, i) => { const Icon = feature.icon; return <Reveal key={feature.title} delay={(i % 4) * 0.05}><article className={`feature-card ${i === 0 || i === 3 ? "feature-wide" : ""}`}><div className="feature-top"><span className="feature-icon"><Icon size={22} /></span></div><h3>{feature.title}</h3><p>{feature.copy}</p><div className="feature-arrow"><ArrowUpRight size={18} /></div>{i === 0 && <div className="feature-mini-map"><i /><i /><i /><i /></div>}{i === 3 && <div className="feature-scan"><span>KA 01 MH 2048</span><i /></div>}</article></Reveal>; })}
        </div>
      </section>

      <section className="industries" id="solutions">
        <div className="section-shell">
          <Reveal className="industries-head"><div><h2>One platform.<br /><em>Every kind of place.</em></h2></div></Reveal>
          <div className="industry-list horizontal-track" tabIndex={0} aria-label="Places Gridee serves">
            {industries.map((industry) => { const Icon = industry.icon; return <motion.article className="industry-card" key={industry.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="industry-number">{industry.metric}</span><span className="industry-icon"><Icon size={24} /></span><div><h3>{industry.name}</h3><p>{industry.copy}</p></div><span className="industry-open"><ArrowUpRight /></span></motion.article>; })}
          </div>
        </div>
      </section>

      <section className="technology section-shell" id="technology">
        <Reveal className="technology-head"><h2>From a single tap<br />to a smarter city.</h2></Reveal>
        <div className="ecosystem">
          <div className="ecosystem-spine" />
          {ecosystem.map((item, i) => { const Icon = item.icon; return <Reveal className="eco-wrap" key={item.label} delay={i * 0.04}><article className="eco-card"><span className="eco-index">0{i + 1}</span><div className="eco-icon"><Icon size={20} /></div><div><h3>{item.label}</h3><p>{item.detail}</p></div><span className="eco-state">CONNECTED</span></article>{i < ecosystem.length - 1 && <ChevronDown className="eco-arrow" size={18} />}</Reveal>; })}
        </div>
      </section>

      <section className="screenshots section-shell">
        <Reveal className="screenshots-head"><div><h2>Everything you need.<br />Nothing you don&apos;t.</h2></div></Reveal>
        <div className="screenshot-stage">
          <div className="screenshot-label"><h3>{screens[carousel].title}</h3><p>{screens[carousel].kicker}</p></div>
          <motion.div className="carousel-phone" key={carousel} initial={{ opacity: 0, x: 40, rotate: 5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.55 }}><PhoneMockup screen={screens[carousel].key} /></motion.div>
          <div className="carousel-list">{screens.map((s, i) => <button key={s.key} className={i === carousel ? "active" : ""} onClick={() => setCarousel(i)} aria-label={`Show ${s.title} screen`}><span>0{i + 1}</span>{s.title}</button>)}</div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-shell">
          <Reveal className="testimonials-head"><h2>Small changes.<br />Better mornings.</h2></Reveal>
          <div className="testimonial-grid">{testimonials.map((item, i) => <Reveal key={item.name} delay={i * 0.08}><article className="testimonial-card"><div className="quote-mark">“</div><blockquote>{item.quote}</blockquote><div className="person"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.role}</small></div><i><Check size={11} /></i></div></article></Reveal>)}</div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <Reveal className="faq-intro"><SectionEyebrow>Questions, answered</SectionEyebrow><h2>The simple<br />details.</h2><p>Still curious? Our team would love to talk.</p><a href="mailto:hello@gridee.app">hello@gridee.app <ArrowUpRight size={15} /></a></Reveal>
        <div className="faq-list">{faqs.map(([q, a], i) => <Reveal key={q}><article className={`faq-item ${openFaq === i ? "open" : ""}`}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>0{i + 1}</span><strong>{q}</strong><ChevronDown size={20} /></button><AnimatePresence initial={false}>{openFaq === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{a}</p></motion.div>}</AnimatePresence></article></Reveal>)}</div>
      </section>

      <section className="download" id="download">
        <div className="download-grid" aria-hidden="true" />
        <div className="download-glow" aria-hidden="true" />
        <div className="section-shell download-shell">
          <Reveal className="download-copy"><h2>Experience Smarter<br />Parking <em>Today.</em></h2><p>Join the movement toward effortless arrivals.<br />Your next space is already waiting.</p><div className="download-actions"><AppBadge store="apple" light /><AppBadge store="google" light /><div className="download-qr"><QRPattern /><span><small>SCAN TO</small><strong>DOWNLOAD</strong></span></div></div></Reveal>
          <Reveal className="download-device"><div className="download-rings"><i /><i /><i /></div><PhoneMockup screen="parking" /><div className="download-float"><span><Check size={14} /></span><div><small>READY WHEN YOU ARE</small><strong>193 spaces available</strong></div></div></Reveal>
        </div>
      </section>

      <footer id="footer">
        <div className="section-shell footer-shell">
          <div className="footer-top"><div className="footer-brand"><a href="#top"><Logo /></a><p>The operating system<br />for smart parking.</p><span><i /> Building for India · 2026</span></div><div className="footer-columns">{footerGroups.map((group) => <div key={group.title}><h3>{group.title}</h3>{group.links.map((link) => <a href={link === "Features" ? "#features" : link === "Support" ? "mailto:hello@gridee.app" : "#top"} key={link}>{link}</a>)}</div>)}</div></div>
          <div className="footer-download"><div><strong>Gridee in your pocket.</strong><span>Available for iOS and Android.</span></div><div><AppBadge store="apple" /><AppBadge store="google" /></div></div>
          <div className="footer-bottom"><span>© 2026 Gridee Technologies Pvt. Ltd.</span><span>Made for better arrivals.</span><a href="#top">Back to top <ArrowUpRight size={13} /></a></div>
          <div className="footer-wordmark" aria-hidden="true">Gridee</div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Gridee", applicationCategory: "TravelApplication", operatingSystem: "iOS, Android", description: "The operating system for smart parking.", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } }) }} />
    </main>
  );
}
