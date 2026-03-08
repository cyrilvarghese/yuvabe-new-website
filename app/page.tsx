"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  Briefcase,
  Chrome,
  Coins,
  CreditCard,
  Rocket,
  Sparkles,
} from "lucide-react";
import { BackgroundFx } from "@/components/site/background-fx";
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
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "AI-first DNA", href: "#ai-dna" },
];

const services: Service[] = [
  {
    title: "Product Strategy",
    description: "Define the right product bets, roadmap, and release priorities before you burn sprint cycles.",
  },
  {
    title: "UX/UI Systems",
    description: "Design experiences that improve activation, retention, and customer confidence from day one.",
  },
  {
    title: "Product Engineering",
    description: "Ship production-ready products with scalable architecture built for speed, iteration, and growth.",
  },
  {
    title: "Digital Marketing",
    description: "Turn launches into traction with execution across channels tied to product and revenue outcomes.",
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "Founder Intelligence Dashboard",
    summary: "Built a unified decision cockpit so founders could align product and growth moves every week.",
    stack: "Next.js, Postgres, event pipelines",
  },
  {
    title: "Ops Copilot for Service Teams",
    summary: "Converted fragmented workflows into one AI-assisted workspace with faster handoffs and execution.",
    stack: "React, LLM orchestration, internal tools",
  },
  {
    title: "Vertical SaaS Replatform",
    summary: "Replatformed a legacy SaaS product into a scalable system that accelerated feature delivery.",
    stack: "Design system, API layer, CI/CD",
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
        className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center px-6 py-10 lg:px-10"
      >
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Badge className="mb-4 gap-2">
            <Sparkles className="size-3" />
            AI-first Product Studio for Startups
          </Badge>
          <h1 className="font-title text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[5.5rem]">
            Build fast.
            <br />
            Scale smarter.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-2xl">
            From product strategy and engineering to digital marketing, Yuvabe Studios helps founders turn ideas into
            shipped products, real traction, and measurable growth with AI-first DNA in everything we do.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-[14.5rem]"
            >
              <a href="#work">
                See Case Studies
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-[14.5rem]"
            >
              <a href="#process">Our Process</a>
            </Button>
          </div>

          <LogoMarquee brands={marqueeBrands} />
        </Reveal>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-10">
        <Separator />
      </section>

      <section id="services" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Services</p>
          <h2 className="section-heading">One team across product, engineering, and growth.</h2>
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

      <section id="ai-dna" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">AI-first DNA</p>
          <h2 className="section-heading">AI-first DNA in everything we do.</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We design, build, and scale with AI at the core so founders can move faster, automate smarter, and grow
            with stronger margins.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Reveal delay={reduceMotion ? 0 : 0.03}>
            <Card>
              <CardHeader>
                <CardTitle>AI-Native Product Strategy</CardTitle>
                <CardDescription>Prioritize roadmap bets around automation, defensibility, and growth loops.</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
          <Reveal delay={reduceMotion ? 0 : 0.06}>
            <Card>
              <CardHeader>
                <CardTitle>AI-Augmented Experience Design</CardTitle>
                <CardDescription>Design workflows where AI adds speed, clarity, and trust for end users.</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
          <Reveal delay={reduceMotion ? 0 : 0.09}>
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Growth Execution</CardTitle>
                <CardDescription>Connect product data and marketing systems to scale acquisition efficiently.</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Work</p>
          <h2 className="section-heading">Products shipped. Traction accelerated.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={reduceMotion ? 0 : 0.05 * index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.stack}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="section-kicker">Process</p>
          <h2 className="section-heading">Discover. Design. Develop. Deploy. Scale.</h2>
        </Reveal>
        <Reveal className="mt-10">
          <Card className="p-6 md:p-8">
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {["Discover", "Define", "Design", "Develop", "Deploy"].map((step, idx) => (
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
          <h2 className="section-heading">We hire builders who care about product quality and shipping velocity.</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We are building a studio culture where designers and engineers collaborate deeply, move fast, and obsess
            over user outcomes.
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
