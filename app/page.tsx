"use client";

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
  LucideIcon,
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

type CaseStudy = {
  title: string;
  summary: string;
  stack: string;
  span: string;
  icon: LucideIcon;
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
    title: "Founder Intelligence Dashboard",
    summary: "Built a unified decision cockpit so founders could align product and growth moves every week.",
    stack: "Next.js, Postgres, event pipelines",
    span: "lg:col-span-4",
    icon: LayoutDashboard,
  },
  {
    title: "Ops Copilot for Service Teams",
    summary: "Converted fragmented workflows into one AI-assisted workspace with faster handoffs and execution.",
    stack: "React, LLM orchestration, internal tools",
    span: "lg:col-span-2",
    icon: Bot,
  },
  {
    title: "Vertical SaaS Replatform",
    summary: "Replatformed a legacy SaaS product into a scalable system that accelerated feature delivery.",
    stack: "Design system, API layer, CI/CD",
    span: "lg:col-span-2",
    icon: Network,
  },
  {
    title: "Growth Command Center",
    summary: "Unified paid, lifecycle, and product analytics into one system to improve CAC payback decisions.",
    stack: "Attribution model, warehouse sync, campaign ops",
    span: "lg:col-span-2",
    icon: BarChart3,
  },
  {
    title: "AI Onboarding Flow",
    summary: "Redesigned activation journeys with AI-guided setup and reduced first-value time for new users.",
    stack: "UX research, onboarding UX, event instrumentation",
    span: "lg:col-span-2",
    icon: WandSparkles,
  },
  {
    title: "Platform Migration Program",
    summary: "Delivered a phased migration across product and data layers without disrupting live customer traffic.",
    stack: "Platform architecture, migration playbooks, reliability",
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
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-[14.5rem]"
            >
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
            <p className="text-white">
              Launch faster. Reach revenue sooner.
            </p>{" "}
            Turn roadmap bets into shipped releases, adoption, and compounding traction with one execution partner.
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-6">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} className={item.span} delay={reduceMotion ? 0 : 0.05 * index}>
              <CaseStudyCard title={item.title} summary={item.summary} stack={item.stack} icon={item.icon} />
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
