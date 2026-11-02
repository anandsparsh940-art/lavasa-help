---
name: Mountain Civic Utility
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#bb0112'
  on-tertiary: '#ffffff'
  tertiary-container: '#e02928'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  official-dark: '#047857'
  community-dark: '#b45309'
  sos-dark: '#b91c1c'
  surface-canvas: '#f8fafc'
  surface-subtle: '#f1f5f9'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system delivers a resilient, high-contrast civic utility interface built for mountainous township environments subject to monsoon emergencies, infrastructural fragility, and low-connectivity edge networks. 

The aesthetic is functional, crisp, and authoritative: balancing urgent administrative telemetry with dependable daily local services. Visual noise, decorative flourishes, and heavy bitmap assets are eliminated to keep payload sizes ultra-lean. Visual cues rely on sharp categorical contrast, disciplined status badging, robust typography, and immediate information chunking.

The emotional goal is immediate operational clarity and calm assurance during distress. Whether a resident encounters a Ghat road blockage during dense fog or searches for a potable water tanker, the interface behaves like an essential, trusted field terminal.

## Colors

The color architecture enforces a strict tripartite semantic hierarchy to distinguish source credibility and alert severity at a single glance:

- **Official Authority & Verification (`#059669` / `#047857`)**: The primary brand and validation anchor. Dedicated exclusively to municipal notices, verified road passes, validated emergency contacts, and administrative advisory shields.
- **Community & Crowdsourced Feeds (`#d97706` / `#b45309`)**: Secondary amber tier. Designates unverified resident reports, community observations, and early warnings awaiting administrative confirmation.
- **SOS & Critical Hazards (`#dc2626` / `#b91c1c`)**: Tertiary crimson tier. Exclusively reserved for active hazards, route closures, landslide alerts, and direct life-safety triggers.
- **Neutrals & Surfaces (`#0f172a`, `#f8fafc`, `#f1f5f9`)**: Deep slate ink for uncompromising text contrast against crisp alpine stone surfaces. Tinted neutrals establish background surfaces without muddying alert borders.

## Typography

Typography pairs **Plus Jakarta Sans** for commanding, structural titles with **Inter** for dense, rapid-parsing data lists, form labels, and situational feeds.

- Numerical telemetry, road statuses, and SOS contact records use tabular numerals with heightened weights to prevent optical shifting.
- Form inputs enforce explicit typographic tracking with strict limits: title fields remain within short scan ranges, while descriptive bodies prioritize rhythm and high legibility across low-grade smartphone screens in direct sunlight.
- Badges and verification chips employ condensed, uppercase-styled label tokens with slight letter spacing (`0.05em`) to maximize distinction from neighboring prose.

## Layout & Spacing

The layout is built mobile-first on a 4-column fluid mobile grid scaling to a 12-column fixed grid on desktop breakpoints (1024px+). 

- **Touch Ergonomics**: All interactive elements (SOS buttons, telephone tap triggers, badge selectors, filter chips) maintain an uncompromised minimum target boundary of `44px x 44px`.
- **Pinned Topography**: Essential situational indicators (the Hill & Ghat Pass status bar) remain pinned directly under the master header, providing immediate ground conditions without scroll dependency.
- **Section Rhythm**: Dense card groupings utilize `space-md` gaps on mobile devices, preventing thumb confusion while preserving screen real estate. Section splits leverage `space-xl` margins.

## Elevation & Depth

This system avoids heavy, blurred drop shadows to conserve render execution speed and maintain outdoor screen clarity. Depth is communicated structurally:

1. **Surface Base (`#f8fafc`)**: The structural bedrock.
2. **Container Level 1 (`#ffffff` with `#e2e8f0` 1px border)**: Used for cards, incident rows, and directory entries.
3. **Container Level 2 (`#f1f5f9`)**: Inner wells, metadata tag wrappers, and contextual timestamp indicators.
4. **Pinned Alerts & Top Tiers**: Elevated slightly via a crisp `0 1px 3px rgba(15, 23, 42, 0.08)` drop shadow combined with high-contrast colored perimeter borders.
5. **Modal System (SOS Action Screen)**: A solid dark backdrop shield (`rgba(15, 23, 42, 0.7)`) layered beneath centered action cards, isolating focus on immediate emergency triggers.

## Shapes

The system uses a compact, disciplined corner radius language (`roundedness: 1`). Containers, alert banners, and input controls employ `0.25rem` (4px) radii, stepping up to `0.5rem` (8px) for major modal shells and top-level cards. 

Badges and micro-status tags adopt subtle capsule shapes or rounded corners to reinforce categorical grouping without appearing playful or casual. The geometry remains technical, structured, and emergency-ready.

## Components

### Buttons
- **Critical SOS Button**: Solid crimson (`#dc2626`) fill, pure white label, `48px` minimum height, bold typography. Includes an active pulsing outline during live critical incidents.
- **Primary Action (Report / Call)**: Solid emerald (`#059669`) with white text and active dark state (`#047857`). Provides native `tel:` triggers on tap.
- **Secondary / Filter Action**: Slate border (`1px solid #cbd5e1`), transparent fill, text `#0f172a`.

### Status Badges & Pill Indicators
- **Official Advisory Badge**: Shield marker (`🛡️`), emerald background tint (`#ecfdf5`), border `#047857`, label `#065f46`.
- **Community Report Badge**: Amber background tint (`#fffbeb`), border `#b45309`, label `#92400e`.
- **Verified Directory Tag**: Integrated green checkmark indicator attached to technician and emergency vendor names.

### Modular Incident Cards
- **Structural Border Accent**: All cards have an outer `1px` border. Cards with official advisories feature a reinforced `4px` top border in `#059669`. Critical reports feature a `4px` left hazard border in `#dc2626`.
- **Content Hierarchy**: Categorical emoji prefix (`🚧`, `⚡`, `💧`, `🐍`), relative timestamp, status tag, title (max 120 chars), and direct WhatsApp share/action triggers.

### Form Inputs & Selectors
- **Fields**: Background `#ffffff`, border `1px solid #cbd5e1`, inner padding `0.75rem 1rem`. Focus state rings `#059669` at 2px. Character counter explicitly anchored at bottom-right for strict character bounds.
- **Selection Chips**: Radio tiles with `44px` target bounds, highlighting active states with bold borders and emerald wash surfaces.