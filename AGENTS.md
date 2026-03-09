# Yuvabe Studios Direction

Core principle:

We are transitioning from a not-for-profit identity to a cutting-edge product design, development, and engineering studio focused on startups.
We are AI-first by DNA in everything we do across strategy, product, engineering, and growth execution.
In a world where building is no longer the main constraint, deciding what to build is the competitive edge. Our messaging must consistently position Yuvabe as the partner that helps founders discover what matters, prioritize correctly, and iterate fast toward traction.

Design system instruction:

Always build and update this website with a design-system-first approach. Define and use shared tokens and component variants for buttons, typography, spacing, colors, borders, and states before adding page-level styling. Avoid one-off inline styling that creates visual drift. Every CTA and interactive element must use the same standardized component variants so we never end up with multiple inconsistent button styles.
Componentization is mandatory: every discrete UI part (for example navbar, hero block, marquee, background layer, section headers, cards, CTA blocks) must be implemented as a reusable component instead of inline page markup. Build pages by composing these reusable components.
Use shadcn as the base for all UI components wherever possible. Prefer extending or composing shadcn primitives such as Dialog, Sheet, Card, Button, Accordion, and similar building blocks instead of creating custom component foundations from scratch. Custom wrappers are allowed, but their base should still come from shadcn primitives unless there is a documented reason not to.

