---
name: Visual Design (VD)
description: Use when designing or refining the visual direction of Yuvabe pages to look premium, high-tech, and founder-focused. Apply for layout, typography, spacing, color, component polish, and motion decisions. Do not use for backend-only or data-only tasks.
---

# Visual Design (VD): Premium Visual Direction

## Objective
Create interfaces that feel premium, calm, high-trust, and technically sophisticated for startup founders.

## Non-Negotiables
1. Start with system first: define or reuse tokens before styling sections.
2. Enforce consistency: no ad-hoc one-off button, card, or text styles.
3. Prioritize clarity: every visual choice must improve scanability, trust, or conversion.
4. Respect hierarchy: one dominant message per viewport.

## Visual Principles

### 1) Whitespace and Rhythm
- Use generous spacing; avoid cramped layouts.
- Keep a clear vertical rhythm with repeatable section spacing.
- Prefer fewer elements with stronger spacing over dense UI blocks.
- Keep hero above the fold on desktop when possible.

### 2) Typography
- Use a clear two-tier type system:
  - Display font for hero/headlines.
  - Neutral sans font for body/UI text.
- Keep headline copy short and impactful.
- Limit line length for body text (easy scan).
- Maintain strict text contrast and hierarchy across headings, subheads, and body.

### 3) Color and Surface
- Use deep, controlled base tones with subtle gradients.
- Use restrained accent colors; avoid rainbow palettes.
- Surfaces should be minimal, with low-opacity borders and soft depth.
- Prefer contrast and restraint over decorative effects.

### 4) Components and States
- All CTAs must come from standardized button variants.
- Define and reuse variants for: primary, secondary, nav/ghost.
- Keep corner radius, border thickness, and hover/focus behavior consistent.
- Focus states must be visible and accessible across components.

### 5) Motion
- Use subtle, purposeful motion only (fade, slight rise, gentle stagger).
- Animation must support hierarchy, not distract.
- Respect `prefers-reduced-motion`.

## Conversion Rules (Founder Audience)
- Speak outcomes, not internal process.
- Make the primary CTA obvious and singular per section.
- Support every claim with structure (work samples, process clarity, proof blocks).
- Remove copy or UI that feels generic, verbose, or low-signal.

## Page Composition Checklist
Before finalizing any page:
1. Is there exactly one dominant hero message?
2. Does the hero fit above the fold on desktop?
3. Are button styles fully consistent across nav, hero, and sections?
4. Is spacing consistent by tokenized steps?
5. Are headline, subcopy, and CTA clearly scannable in 5 seconds?
6. Do visuals feel premium through restraint, not clutter?

## Implementation Guidance for This Repo
- Prefer editing shared primitives first:
  - `components/ui/button.tsx`
  - `app/globals.css`
- Then apply variants in page sections (`app/page.tsx`) without custom drift.
- If a new style is needed, add a reusable variant/token instead of inline overrides.

## Anti-Patterns to Avoid
- Multiple button styles with different radius/height/border logic.
- Overlong hero paragraphs.
- Decorative noise that reduces contrast or readability.
- Inconsistent paddings between sections.
- Excessive motion or flashy transitions.
