"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border text-sm font-semibold transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "border-white/90 bg-white text-[#0b1320] hover:bg-white/92 hover:shadow-[0_10px_28px_rgba(255,255,255,0.16)] focus-visible:ring-ring",
        primary:
          "border-white/90 bg-white text-[#0b1320] hover:bg-white/92 hover:shadow-[0_10px_28px_rgba(255,255,255,0.16)] focus-visible:ring-ring",
        secondary:
          "border-white/12 bg-surface/70 text-white hover:bg-surface hover:border-white/20 hover:shadow-[0_10px_24px_rgba(7,17,34,0.55)] focus-visible:ring-ring",
        nav: "border-white/14 bg-white/6 text-white hover:bg-white/10 hover:border-white/22 focus-visible:ring-ring",
        outline:
          "border-white/12 bg-surface/70 text-white hover:bg-surface hover:border-white/20 hover:shadow-[0_10px_24px_rgba(7,17,34,0.55)] focus-visible:ring-ring",
        ghost: "border-transparent bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface/80 focus-visible:ring-ring",
      },
      size: {
        default: "h-12 px-6 text-base",
        sm: "h-11 px-5",
        lg: "h-14 px-8 text-[1.08rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
