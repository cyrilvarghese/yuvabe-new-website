"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Maximize2, type LucideIcon } from "lucide-react";
import { CursorDotField } from "@/components/site/cursor-dot-field";
import { ModalShell } from "@/components/ui/modal-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type CaseStudySection = {
  title: string;
  body: string;
};

export type CaseStudyProofPoint = {
  title: string;
  description: string;
};

export type CaseStudyCardProps = {
  client?: string;
  title: string;
  summary: string;
  meta: string;
  icon: LucideIcon;
  visual?: "default" | "dots";
  modalIntro?: string;
  modalOutcomes?: string[];
  modalSections?: CaseStudySection[];
  modalProofPoints?: CaseStudyProofPoint[];
  className?: string;
};

export function CaseStudyCard({
  client,
  title,
  summary,
  meta,
  icon: Icon,
  visual = "default",
  modalIntro,
  modalOutcomes,
  modalSections,
  modalProofPoints,
  className,
}: CaseStudyCardProps) {
  const reduceMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });
  const [open, setOpen] = useState(false);

  const outcomes = modalOutcomes ?? [
    "Created a clearer story around the product, team, and strategic value.",
    `Focused the experience around ${meta.toLowerCase()} to reduce friction and improve comprehension.`,
    "Built a stronger foundation for future launches, iteration, and growth.",
  ];

  const sections = modalSections ?? [
    {
      title: "Context",
      body: `${title} needed a more coherent narrative across product, experience, and communication as the scope of the work expanded.`,
    },
    {
      title: "Challenge",
      body: "The opportunity was not just to ship assets, but to help the business communicate value faster and with more confidence.",
    },
    {
      title: "What we changed",
      body: "We aligned the experience, supporting systems, and communication touchpoints around what users and stakeholders needed to understand next.",
    },
    {
      title: "Outcome",
      body: "The result was a sharper story, a more usable experience, and a stronger platform for future growth decisions.",
    },
  ];

  const proofPoints = modalProofPoints ?? [
    {
      title: "Sharpened the narrative",
      description: "Brought the product story, interaction model, and supporting experience into one clearer point of view.",
    },
    {
      title: "Reduced decision friction",
      description: "Turned scattered workflows into a more understandable path for users, operators, or internal teams.",
    },
    {
      title: "Built for what comes next",
      description: "Created a stronger base for future iteration instead of treating the engagement like a one-off delivery.",
    },
  ];

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;

    setMouse({ x: px, y: py, active: true });
  };

  const onLeave = () => {
    setMouse({ x: 50, y: 50, active: false });
  };

  const onEnter = () => {
    if (reduceMotion) {
      return;
    }

    setMouse((prev) => ({ ...prev, active: true }));
  };

  return (
    <>
      <motion.button
        type="button"
        className={`block w-full cursor-pointer text-left ${className ?? ""}`}
        onMouseEnter={onEnter}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
        onClick={() => setOpen(true)}
      >
        <div className="relative rounded-xl">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-xl p-[1px]"
            style={{
              opacity: reduceMotion ? 0 : mouse.active ? 1 : 0,
              transition: "opacity 220ms ease-out",
              background: `radial-gradient(220px circle at ${mouse.x}% ${mouse.y}%, rgba(166,198,255,0.85), rgba(122,99,255,0.44) 36%, rgba(122,99,255,0) 66%)`,
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <motion.div
            animate={reduceMotion ? { scale: 1 } : { scale: mouse.active ? 1.012 : 1 }}
            transition={{ type: "tween", duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="relative flex h-full min-h-[31rem] flex-col overflow-hidden lg:min-h-[34rem]">
              {visual === "dots" && (
                <CursorDotField
                  x={mouse.x}
                  y={mouse.y}
                  active={mouse.active}
                  className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                />
              )}
              <div
                className={`pointer-events-none absolute right-5 top-5 z-30 rounded-md border p-2 transition-all duration-200 ${mouse.active ? "border-white/70 bg-white/70 text-[#0b1320]" : "border-white/20 bg-white/8 text-white/85"}`}
              >
                <Maximize2 className="size-4" strokeWidth={1.9} />
              </div>
              <CardHeader className="relative z-10">
                {client ? <p className="text-xs uppercase tracking-[0.16em] text-[#8ba3cf]">{client}</p> : null}
                <CardTitle>{title}</CardTitle>
                <CardDescription>{summary}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-1 flex-col justify-between gap-8">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{meta}</p>
                <div className="relative flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-gradient-to-br from-[#121f3a] via-[#16284b] to-[#0e1830]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(132,169,238,0.28),rgba(132,169,238,0)_52%)]" />
                  <Icon className="relative z-10 size-28 text-white/82 lg:size-36" strokeWidth={1.45} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.button>

      <ModalShell open={open} onOpenChange={setOpen} title={title}>
        <div className="px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:pb-10">
          <div className="border-b border-border/70 pb-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.8fr)] lg:items-start">
              <div>
                {client ? <p className="text-xs uppercase tracking-[0.18em] text-[#8ba3cf]">{client}</p> : null}
                <h2 className="max-w-2xl font-title text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] text-white">{title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#b3c0d7] sm:text-lg">{modalIntro ?? summary}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="primary" size="lg">
                    <a href="#process">
                      Book a Founder Call
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="#work">View more work</a>
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Outcomes</p>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-[#d8e4fa] sm:text-[0.95rem]">
                  {outcomes.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#8cb8ff]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-b border-border/70 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]">
            <div className="min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(34,52,97,0.96),rgba(96,111,171,0.86))] p-6 sm:min-h-[24rem]">
              <div className="relative flex h-full items-end justify-center rounded-[1.25rem] bg-[radial-gradient(circle_at_30%_75%,rgba(129,103,255,0.28),rgba(129,103,255,0)_34%),linear-gradient(160deg,rgba(17,28,52,0.22),rgba(17,28,52,0.02))]">
                <div className="absolute left-[16%] top-[16%] h-[62%] w-[40%] rounded-[1.45rem] bg-[#f7f9ff] shadow-[0_28px_80px_rgba(11,15,31,0.22)]" />
                <div className="absolute left-[49%] top-[38%] h-[22%] w-[26%] rounded-[1rem] bg-[#f7f9ff]/96 shadow-[0_18px_50px_rgba(11,15,31,0.18)]" />
                <div className="absolute left-[50%] top-[58%] h-[22%] w-[30%] rounded-[1rem] bg-[#f7f9ff]/96 shadow-[0_18px_50px_rgba(11,15,31,0.18)]" />
              </div>
            </div>

            <div className="min-h-[18rem] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,17,31,0.96),rgba(10,17,31,0.84))] p-6 sm:min-h-[24rem]">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Case Breakdown</p>
              <div className="mt-5 space-y-5">
                {sections.map((section, index) => (
                  <div key={section.title} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8ba3cf]">0{index + 1}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{section.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#b3c0d7]">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 pt-8 md:grid-cols-3">
            {proofPoints.map((point, index) => (
              <div key={point.title} className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">0{index + 1}</p>
                <p className="mt-3 text-lg font-semibold text-white">{point.title}</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#b3c0d7]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ModalShell>
    </>
  );
}

