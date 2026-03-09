"use client";

import type { ComponentProps } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Chrome,
  Coins,
  CreditCard,
  LayoutDashboard,
  Network,
  Rocket,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { BackgroundFx } from "@/components/site/background-fx";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { SiteHeader } from "@/components/site/site-header";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  label: string;
  href: string;
};

type Service = {
  title: string;
  description: string;
};

type CaseStudy = ComponentProps<typeof CaseStudyCard> & {
  span: string;
};

type InsightPost = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "AI-first DNA", href: "#ai-dna" },
];

const services: Service[] = [
  {
    title: "Product Strategy",
    description: "Prioritize high-leverage roadmap bets so each sprint moves activation, retention, or revenue.",
  },
  {
    title: "UX/UI Systems",
    description: "Design onboarding and conversion journeys that reduce drop-off and increase user trust.",
  },
  {
    title: "Product Engineering",
    description: "Ship production-ready releases fast with architecture built for reliability and iteration.",
  },
  {
    title: "Digital Marketing",
    description: "Turn launches into pipeline with channel execution tied to product signals and CAC efficiency.",
  },
];

const caseStudies: CaseStudy[] = [
  {
    client: "Aviation technology",
    title: "General Aeronautics",
    summary: "Turned a complex drone portfolio into a clearer digital story buyers, partners, and operators could trust faster.",
    meta: "Positioning, UX/UI, Brand System",
    span: "lg:col-span-4",
    icon: LayoutDashboard,
    visual: "dots",
    modalIntro:
      "General Aeronautics builds drone systems across agriculture, defense, humanitarian response, and warehouse automation. As the business expanded, its digital presence needed to explain that breadth with more clarity, confidence, and usability.",
    modalOutcomes: [
      "Reframed a broad product portfolio into a sharper market story.",
      "Made technical capabilities easier for non-technical audiences to understand.",
      "Improved credibility across web, applications, and communication assets.",
      "Created a stronger base for future product and growth decisions.",
    ],
    modalSections: [
      {
        title: "Context",
        body: "General Aeronautics had real depth across multiple drone use cases, but that range was hard to communicate cleanly in one digital experience. The company needed a presence that could reflect both engineering sophistication and real-world relevance.",
      },
      {
        title: "Challenge",
        body: "Without a clearer narrative, technical breadth risked reading as fragmentation. Buyers, stakeholders, and broader audiences had to work too hard to understand where the company led and why its solutions mattered.",
      },
      {
        title: "What we changed",
        body: "We restructured the website around solutions and use cases, clarified the content hierarchy, refreshed brand expression, and designed more intuitive UX patterns for web applications so the experience felt capable, credible, and easier to navigate.",
      },
      {
        title: "Outcome",
        body: "The new experience positioned General Aeronautics more clearly as an innovation leader. Its story became easier to understand, its product ecosystem felt more coherent, and its digital presence became a stronger platform for trust, adoption, and future growth.",
      },
    ],
    modalProofPoints: [
      {
        title: "Clarified the story",
        description: "Shifted the brand from a collection of capabilities to a focused narrative around real-world drone impact.",
      },
      {
        title: "Made complexity usable",
        description: "Simplified navigation, content hierarchy, and application UX so technical depth felt navigable instead of overwhelming.",
      },
      {
        title: "Built credibility across touchpoints",
        description: "Aligned website, brand visuals, and communication assets into one system that reinforced trust at every interaction.",
      },
    ],
  },
  {
    client: "ESG intelligence",
    title: "Bevolve.ai",
    summary: "Turned fragmented sustainability reporting into an AI-guided system teams could trust for faster, evidence-based decisions.",
    meta: "AI Integration, ML, ESG Reporting",
    span: "lg:col-span-2",
    icon: Bot,
    modalIntro:
      "Bevolve.ai was built to help organizations manage ESG data with more speed, traceability, and intelligence. Instead of treating sustainability reporting as a manual compliance burden, the platform reframed it as a decision system powered by AI, machine learning, and automation.",
    modalOutcomes: [
      "Unified ESG data from multiple sources into one more reliable reporting workflow.",
      "Reduced manual review effort with AI-assisted validation and natural language querying.",
      "Improved confidence in reporting quality, traceability, and compliance readiness.",
      "Turned sustainability reporting into a more actionable operating layer for decision-makers.",
    ],
    modalSections: [
      {
        title: "Context",
        body: "Organizations were under growing pressure to track environmental, social, and governance performance more rigorously, but the underlying data was scattered across systems, formats, and teams. Bevolve.ai set out to make that process far more intelligent and usable.",
      },
      {
        title: "Challenge",
        body: "ESG reporting is not difficult only because of regulation. It is difficult because accuracy, consistency, and transparency break down when data collection, validation, and interpretation happen across disconnected workflows.",
      },
      {
        title: "What we changed",
        body: "We shaped the platform story around intelligent automation, data confidence, and measurable sustainability action. The experience highlighted AI-based integrations, machine learning for quality assurance, NLP-powered querying, and benchmarking tools that made complex ESG workflows feel operational instead of overwhelming.",
      },
      {
        title: "Outcome",
        body: "The result was a product narrative that moved Bevolve.ai beyond a reporting tool label. It became a clearer AI sustainability platform story: one that promised better visibility, faster review cycles, and stronger confidence for teams making high-stakes ESG decisions.",
      },
    ],
    modalProofPoints: [
      {
        title: "Made ESG data usable",
        description: "Connected structured and unstructured data into a workflow teams could actually navigate, review, and act on.",
      },
      {
        title: "Applied AI where it mattered",
        description: "Framed machine learning, NLP, and GPT-assisted review as practical leverage for accuracy, not novelty features.",
      },
      {
        title: "Built trust into reporting",
        description: "Positioned traceability, compliance readiness, and benchmarking as core reasons the platform could support better decisions.",
      },
    ],
  },
  {
    title: "Vertical SaaS Replatform",
    summary: "Replatformed a legacy SaaS product into a scalable system that accelerated feature delivery.",
    meta: "Design systems, APIs, release velocity",
    span: "lg:col-span-2",
    icon: Network,
  },
  {
    title: "Growth Command Center",
    summary: "Unified paid, lifecycle, and product analytics into one system to improve CAC payback decisions.",
    meta: "Analytics, attribution, campaign ops",
    span: "lg:col-span-2",
    icon: BarChart3,
  },
  {
    title: "AI Onboarding Flow",
    summary: "Redesigned activation journeys with AI-guided setup and reduced first-value time for new users.",
    meta: "Activation UX, AI guidance, instrumentation",
    span: "lg:col-span-2",
    icon: WandSparkles,
    visual: "dots",
  },
  {
    title: "Platform Migration Program",
    summary: "Delivered a phased migration across product and data layers without disrupting live customer traffic.",
    meta: "Architecture, migration planning, reliability",
    span: "lg:col-span-6",
    icon: Rocket,
  },
];

const insightPosts: InsightPost[] = [
  {
    title: "Choose the right roadmap before you build",
    excerpt:
      "How founders prioritize high-leverage bets, cut rework, and accelerate time to traction with AI-assisted discovery.",
    tag: "Roadmap strategy",
    href: "#",
  },
  {
    title: "Ship AI features users trust in production",
    excerpt:
      "A practical guide to reliability, UX safeguards, and measurement so AI features improve retention instead of adding risk.",
    tag: "Product + engineering",
    href: "#",
  },
  {
    title: "Design growth loops that compound weekly",
    excerpt:
      "Use product signals and marketing systems together to shorten CAC payback and scale predictable demand.",
    tag: "Growth execution",
    href: "#",
  },
];

const marqueeBrands = [
  { name: "Google", icon: Chrome },
  { name: "Apple", icon: Apple },
  { name: "Stripe", icon: CreditCard },
  { name: "Airbnb", icon: Briefcase },
  { name: "Coinbase", icon: Coins },
  { name: "Brex", icon: Rocket },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main id="home" className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundFx />
      <SiteHeader navItems={navItems} />

      <section
        id="about"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-start px-4 py-6 sm:min-h-[calc(100vh-6rem)] sm:px-6 sm:py-10 lg:items-center lg:px-10"
      >
        <Reveal className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <Badge className="mb-4 gap-2 text-[0.66rem] sm:text-xs">
            <Sparkles className="size-3" />
            AI-first Product Studio for Startups
          </Badge>
          <h1 className="font-title text-[clamp(2.55rem,12.8vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.01em] text-balance sm:font-normal sm:leading-[1.02] sm:tracking-tight">
            Build the right
            <br />
            product faster.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-2xl">
            We help founders decide what to build, ship faster, and grow with measurable outcomes. Strategy, design,
            engineering, and growth run in one AI-first execution loop.
          </p>
          <div className="mt-7 flex w-full max-w-sm items-stretch sm:max-w-none sm:items-center sm:justify-center">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-[14.5rem]">
              <a href="#process">
                Start Your Build
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <LogoMarquee brands={marqueeBrands} />
        </Reveal>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-10">
        <Separator />
      </section>

      <section id="work" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Work</p>
          <div className="mt-3 max-w-5xl text-balance text-[2rem] font-medium leading-[1.15] tracking-[-0.015em] text-[#a5b3cca1]">
            <p className="text-white">Launch faster. Reach revenue sooner.</p>{" "}
            Turn roadmap bets into shipped releases, adoption, and compounding traction with one execution partner.
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-6">
          {caseStudies.map(({ span, ...item }, index) => (
            <Reveal key={item.title} className={span} delay={reduceMotion ? 0 : 0.05 * index}>
              <CaseStudyCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="ai-dna" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">AI-first DNA</p>
          <h2 className="section-heading">AI-first playbooks for founders.</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Practical insights on deciding what to build, automating execution, and improving growth economics.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {insightPosts.map((post, index) => (
            <Reveal key={post.title} delay={reduceMotion ? 0 : 0.05 * index}>
              <Card className="flex h-full flex-col">
                <CardHeader className="flex-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{post.tag}</p>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="secondary" size="sm">
                    <a href={post.href}>
                      Read more
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Services</p>
          <h2 className="section-heading">One team from product bets to growth outcomes.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={reduceMotion ? 0 : 0.05 * index}>
              <Card>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Process</p>
          <h2 className="section-heading">From idea to traction in five loops.</h2>
        </Reveal>
        <Reveal className="mt-10">
          <Card className="p-6 md:p-8">
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {["Prioritize", "Prototype", "Build", "Launch", "Scale"].map((step, idx) => (
                <li key={step} className="rounded-lg border border-border bg-muted/25 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">0{idx + 1}</p>
                  <p className="mt-2 text-lg font-semibold">{step}</p>
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>
      </section>

      <section id="career" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Career</p>
          <h2 className="section-heading">Join the team building outcomes for startups.</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Work with product thinkers, designers, and engineers who ship fast and stay accountable to measurable
            founder outcomes.
          </p>
          <Button asChild variant="secondary" size="default" className="mt-8">
            <a href="#career">View Open Roles</a>
          </Button>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-border/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground lg:px-10 md:flex-row md:items-center md:justify-between">
          <p>Yuvabe Studios</p>
          <p>Product design, development, and engineering studio for startups.</p>
        </div>
      </footer>

      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed -right-20 top-1/3 z-0 size-72 rounded-full bg-[radial-gradient(circle,rgba(47,111,194,0.3)_0%,rgba(47,111,194,0)_70%)] blur-2xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      )}
    </main>
  );
}

