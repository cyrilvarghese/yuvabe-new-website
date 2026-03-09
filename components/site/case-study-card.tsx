"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ImageIcon,
  Maximize2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CursorDotField } from "@/components/site/cursor-dot-field";
import { ModalShell } from "@/components/ui/modal-shell";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type CaseStudySection = {
  title: string;
  body: string;
};

export type CaseStudyProofPoint = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type CaseStudyGalleryItem = {
  title: string;
  description: string;
};

export type CaseStudyGalleryRow = {
  title: string;
  items: CaseStudyGalleryItem[];
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
  modalGalleryRows?: CaseStudyGalleryRow[];
  className?: string;
};

export function CaseStudyCard({
  client,
  title,
  summary,
  meta,
  icon: Icon,
  visual = "dots",
  modalIntro,
  modalOutcomes,
  modalSections,
  modalProofPoints,
  modalGalleryRows,
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
      icon: Sparkles,
    },
    {
      title: "Reduced decision friction",
      description: "Turned scattered workflows into a more understandable path for users, operators, or internal teams.",
      icon: Sparkles,
    },
    {
      title: "Built for what comes next",
      description: "Created a stronger base for future iteration instead of treating the engagement like a one-off delivery.",
      icon: Sparkles,
    },
  ];

  const galleryRows = modalGalleryRows ?? [
    {
      title: "Selected Screens",
      items: [
        {
          title: "Hero view placeholder",
          description: "Reserved for the main case-study visual or landing screen.",
        },
        {
          title: "Workflow placeholder",
          description: "Reserved for a supporting product or process screenshot.",
        },
      ],
    },
    {
      title: "Product Views",
      items: [
        {
          title: "Dashboard placeholder",
          description: "Reserved for a key interface or data view.",
        },
        {
          title: "Detail placeholder",
          description: "Reserved for a secondary screen, flow, or artifact.",
        },
      ],
    },
  ];

  const getGalleryItemClasses = (rowIndex: number, itemIndex: number) => {
    const featuredFirst = rowIndex % 2 === 0;
    const isFeatured = featuredFirst ? itemIndex === 0 : itemIndex === 1;

    return {
      wrapper: isFeatured ? "md:col-span-7" : "md:col-span-5",
      frame: "h-[18rem] md:h-[24rem]",
      badge: "left-5 top-5",
      inset: isFeatured ? "inset-[5.5%]" : "inset-[6%]",
      bottomCard: isFeatured
        ? "inset-x-[14%] bottom-[14%] h-[18%] rounded-[0.85rem]"
        : "inset-x-[12%] bottom-[14%] h-[18%] rounded-[0.82rem]",
      leftCard: isFeatured
        ? "left-[14%] top-[18%] h-[38%] w-[30%] rounded-[0.85rem]"
        : "left-[12%] top-[18%] h-[38%] w-[32%] rounded-[0.82rem]",
      rightCard: isFeatured
        ? "right-[14%] top-[18%] h-[24%] w-[34%] rounded-[0.85rem]"
        : "right-[12%] top-[18%] h-[24%] w-[34%] rounded-[0.82rem]",
    };
  };

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
            className="pointer-events-none absolute inset-x-3 -bottom-5 z-0 h-24 rounded-[1.5rem] blur-2xl"
            animate={reduceMotion ? { opacity: 0 } : { opacity: mouse.active ? 0.7 : 0, scale: mouse.active ? 1 : 0.96 }}
            transition={{ type: "tween", duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.12) 42%, rgba(255,255,255,0) 100%)",
            }}
          />

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
                className={cn(
                  buttonVariants({ variant: "control", size: "icon" }),
                  "pointer-events-none absolute right-5 top-5 z-30",
                  mouse.active ? "border-white/20 bg-white/10 text-white" : "text-white/85",
                )}
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
            <div className="min-h-[18rem] overflow-hidden rounded-[1.1rem] bg-[linear-gradient(145deg,rgba(34,52,97,0.96),rgba(96,111,171,0.86))] p-5 sm:min-h-[24rem] sm:p-6">
              <div className="relative flex h-full items-end justify-center rounded-[0.9rem] bg-[radial-gradient(circle_at_30%_75%,rgba(129,103,255,0.28),rgba(129,103,255,0)_34%),linear-gradient(160deg,rgba(17,28,52,0.22),rgba(17,28,52,0.02))]">
                <div className="absolute left-[16%] top-[16%] h-[62%] w-[40%] rounded-[0.95rem] bg-[#f7f9ff] shadow-[0_28px_80px_rgba(11,15,31,0.22)]" />
                <div className="absolute left-[49%] top-[38%] h-[22%] w-[26%] rounded-[0.75rem] bg-[#f7f9ff]/96 shadow-[0_18px_50px_rgba(11,15,31,0.18)]" />
                <div className="absolute left-[50%] top-[58%] h-[22%] w-[30%] rounded-[0.75rem] bg-[#f7f9ff]/96 shadow-[0_18px_50px_rgba(11,15,31,0.18)]" />
              </div>
            </div>

            <div className="min-h-[18rem] rounded-[1.1rem] bg-[linear-gradient(180deg,rgba(10,17,31,0.92),rgba(10,17,31,0.78))] px-6 py-5 sm:min-h-[24rem] sm:p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Case Breakdown</p>
              <div className="mt-5 space-y-6">
                {sections.map((section, index) => (
                  <div key={section.title} className="pt-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8ba3cf]">0{index + 1}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{section.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#b3c0d7]">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 border-b border-border/70 py-8">
            {galleryRows.map((row, rowIndex) => (
              <div key={row.title} className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{row.title}</p>
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#8ba3cf]">Placeholder</p>
                </div>
                <div className="grid gap-5 md:grid-cols-12 md:items-start">
                  {row.items.map((item, itemIndex) => {
                    const layout = getGalleryItemClasses(rowIndex, itemIndex);

                    return (
                      <div key={item.title} className={cn("space-y-3", layout.wrapper)}>
                        <div
                          className={cn(
                            "relative w-full overflow-hidden rounded-[1.05rem] bg-[linear-gradient(145deg,rgba(18,31,61,0.96),rgba(56,81,140,0.82))]",
                            layout.frame,
                          )}
                        >
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(132,169,238,0.22),rgba(132,169,238,0)_44%)]" />
                          <div
                            className={cn(
                              "pointer-events-none absolute rounded-[0.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
                              layout.inset,
                            )}
                          />
                          <div
                            className={cn(
                              "pointer-events-none absolute inline-flex h-10 items-center gap-2 rounded-full border border-dashed border-white/14 bg-[#071221]/36 px-3 text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-sm",
                              layout.badge,
                            )}
                          >
                            <ImageIcon className="size-3.5" strokeWidth={1.9} />
                            Placeholder
                          </div>
                          <div
                            className={cn(
                              "pointer-events-none absolute bg-[#f7f9ff]/95 shadow-[0_20px_60px_rgba(11,15,31,0.22)]",
                              layout.bottomCard,
                            )}
                          />
                          <div
                            className={cn(
                              "pointer-events-none absolute bg-[#f7f9ff]/92 shadow-[0_20px_60px_rgba(11,15,31,0.18)]",
                              layout.leftCard,
                            )}
                          />
                          <div
                            className={cn(
                              "pointer-events-none absolute bg-[#f7f9ff]/88 shadow-[0_18px_50px_rgba(11,15,31,0.16)]",
                              layout.rightCard,
                            )}
                          />
                        </div>
                        <div className="space-y-1 px-1">
                          <p className="text-base font-semibold text-white">{item.title}</p>
                          <p className="max-w-xl text-sm leading-6 text-[#b3c0d7]">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-5 pt-8 md:grid-cols-3">
            {proofPoints.map((point) => {
              const ProofIcon = point.icon ?? Sparkles;

              return (
                <div key={point.title} className="space-y-4 pt-1">
                  <div
                    className={cn(
                      buttonVariants({ variant: "control", size: "icon" }),
                      "pointer-events-none h-11 w-11 rounded-[0.95rem] border-white/14 bg-white/8",
                    )}
                  >
                    <ProofIcon className="size-4" strokeWidth={1.9} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{point.title}</p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#b3c0d7]">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ModalShell>
    </>
  );
}









