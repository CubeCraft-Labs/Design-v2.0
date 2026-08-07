# CubeCraftLabs Design System

> **Design. Prototype. Ship.**

**CubeCraftLabs** is the maker / R&D branch of [CubeCraft Creations](../). Where Creations is the storefront of finished handmade goods — warm, rounded, blue→purple gradient, Nunito — **Labs is the workshop bench where things get designed and built**: technical, dark, precise. The two brands share exactly two things — the **cube** motif and the **CubeCraft** name. Everything else deliberately diverges so Labs reads as its own identity.

This is a standalone design system so the two brands can evolve independently: edits here never touch Creations, and vice versa.

---

## Sources

- **CubeCraft Creations design system** — the parent brand this diverges from (cube DNA + name only). Its guide describes the warm/gradient storefront identity.
- **CubeCraftLabs logo exploration** — `CubeCraftLabs Logo.dc.html` (working lockups) and `CubeCraftLabs Brand Spec.dc.html` (spec sheet), authored in the originating project.
- **PNG exports** — `assets/logos/CubeCraftLabs_*.png`.

No external codebase or Figma file backs this system yet; it was authored from the logo exploration. If a Labs product codebase appears later, build UI kits from it.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
Labs speaks like an **engineer at the bench** — precise, dry, confident. It's the same maker as Creations, but in "build log" mode rather than "shop" mode.

- **First-person plural ("we")** for the team; **second-person ("you")** for the reader.
- **Sentence case** for prose; **lowercase** for tags/badges; **UPPERCASE** for buttons and eyebrow labels only.
- **Short, declarative sentences.** Command-line cadence. "Printed fresh. Hand-finished. Versioned."
- **Build/maker vocabulary** — build, ship, prototype, iterate, spec, tolerance, revision. Terminal metaphors (`$ make …`, `✓ build complete`) are on-brand for headers and hero moments.
- **Restrained.** Fewer exclamation points than Creations. Precision over enthusiasm.
- **No emoji** in UI. Status is shown with the green/red tokens or a `✓`/`✗` glyph, not emoji.

**Tagline:** *Design. Prototype. Ship.*

### Casing
- Headlines: Sentence case
- Nav items: Title Case
- Buttons: UPPERCASE, 0.08em tracking
- Eyebrows / section labels: UPPERCASE, 0.14em tracking
- Tags/badges: lowercase
- Body: sentence case

---

## VISUAL FOUNDATIONS

### Color
A dark "workshop bench" palette. **Charcoal ground, gold as the single brand accent**, terminal green/red for status. There is no gradient — the Creations blue→purple is explicitly absent.

| Token | Hex | Role |
|---|---|---|
| `--ccl-charcoal` | `#1a1a1a` | Page background |
| `--ccl-charcoal-2` | `#202020` | Raised surface |
| `--ccl-charcoal-3` | `#262626` | Input / code block |
| `--ccl-gold` | `#e5c07b` | Brand accent + logo mark |
| `--ccl-gold-dim` | `#caa869` | Gold hover / pressed |
| `--ccl-text` | `#d4d4d4` | Primary text |
| `--ccl-text-muted` | `#6b6b6b` | Secondary text |
| `--ccl-border` | `#2a2a2a` | Hairline borders |
| `--ccl-border-2` | `#333333` | Stronger border / grid lines |
| `--ccl-green` | `#98c379` | Success |
| `--ccl-red` | `#e06c75` | Error |

Gold is precious — reserve it for the mark, "Labs", links, active states, and the single primary action per view. Never flood a surface with gold; never fill a large area with it.

### Typography
**JetBrains Mono** is the sole typeface (loaded from Google Fonts), at weights 400 / 500 / 700 / 800. The monospace grid is the point — it signals code, precision, and the bench.

- **Display / Wordmark:** 800, mixed case, 0.02em tracking. Wordmark = `CubeCraft` in text color + `Labs` in gold, optional gold cursor block.
- **Headings:** 700
- **Body:** 400, line-height 1.7
- **Buttons:** 700, UPPERCASE, 0.08em
- **Eyebrows:** 700, UPPERCASE, 0.14em

No second family. No serif. Mono does everything.

### Spacing
4px base unit. Generous breathing room around the mark. Section padding 40–64px vertical.

### Corners & Borders
- **Square everywhere — `border-radius: 0`.** This is a hard rule and the sharpest tell against Creations' rounded system.
- Borders do the work shadows would: `1px solid #2a2a2a` hairlines, `#333` for stronger rules and grid lines.
- Accent/outline elements: `1.5px solid #e5c07b`.

### Backgrounds & Surfaces
- **Page:** flat charcoal `#1a1a1a`. No gradients, no photographic hero washes.
- **Surfaces:** raised by a hair (`#202020`) or bounded by a border, not by shadow.
- **Graph-paper grid** (`#333` at ~32px) is a legitimate background texture for badge/blueprint contexts.
- **Terminal window** chrome (dot header + `~/path`) is a recurring motif for headers and hero blocks.

### Shadows
Effectively flat. At most a 1px seam (`--shadow-raised`). No soft drop shadows — they read "consumer app", which is the wrong brand.

### Motion
- Easing `cubic-bezier(0.2, 0, 0, 1)`; 100ms micro, 160ms base.
- Interactions are crisp, not bouncy. Buttons nudge 1px down on press. A blinking cursor block is the one signature animation (use sparingly).

### Hover & Interaction States
- **Primary button:** gold → gold-dim.
- **Secondary/ghost:** faint gold wash / text turns gold.
- **Links:** underline or color to gold; never a gradient.
- **Scrollbar:** 6px slim, thumb `#333` → gold on hover.

---

## ICONOGRAPHY

- **Lucide Icons** (stroke-based, 2px, from CDN `https://unpkg.com/lucide@latest`) — inherited from the Creations toolchain, recolored to `--ccl-text` / `--ccl-gold`. Same clean line style suits the mono aesthetic.
- **Terminal glyphs** — `$`, `✓`, `✗`, `>` — are used as functional icons in headers and status lines.
- **No emoji.** No hand-drawn UI SVGs.
- **The cube mark is not an icon** — it's the logo. Use the `CubeMark` component or the SVGs in `assets/logos/`, never redraw it.

### Logo assets (`assets/logos/`)
- `cube-wireframe.svg` — assembled gold wireframe cube (inline/compact)
- `cube-exploded.svg` — exploded cube, the **primary** mark
- `cube-grid-stamp.svg` — cube on graph paper (badge)
- `cubecraftlabs-lockup.svg` — horizontal cube + wordmark lockup
- `CubeCraftLabs_*.png` — rendered PNG lockups (primary, inline, terminal, grid stamp)

The cube geometry is fixed: viewBox `0 0 200 200`, top vertex `(100,44)`, shoulders `(146,70)`/`(54,70)`, waist `(100,96)`, base `(100,150)`. Never recolor the faces or add faces beyond the three visible.

---

## FILE INDEX

```
/
├── styles.css                    ← root stylesheet (link this)
├── readme.md                     ← this file
├── SKILL.md                      ← Agent Skill definition
│
├── tokens/
│   ├── fonts.css                 ← JetBrains Mono @import
│   ├── colors.css                ← color custom properties
│   ├── typography.css            ← type scale + weights + tracking
│   └── spacing.css               ← spacing, radius(0), border, motion
│
├── assets/logos/                 ← cube SVGs + PNG lockups
│
├── components/
│   ├── core/     Button · Badge · Tag · CubeMark + core.card.html
│   ├── icons/    Icon (lucide + terminal) · IconButton
│   ├── forms/    Input · Textarea · Select · Checkbox · Radio · Switch · Field + forms.card.html
│   └── surfaces/ Card · Terminal + surfaces.card.html
│      (each component: .jsx / .d.ts / .prompt.md)
│
└── guidelines/
    ├── colors/     accent · neutrals · status
    ├── typography/ wordmark · scale
    ├── spacing/    spacing & corners
    ├── brand/      cube marks · lockup · app-logo
    ├── workflows/  label-library
    └── ui-kits/    build-console
```

### Components
| Component | Group | Description |
|---|---|---|
| `Button` | core | Square, uppercase, mono action — primary / secondary / ghost |
| `Badge` | core | Square outlined lowercase status chip — default / success / error / muted |
| `Tag` | core | Lowercase content tag — optional `#`, removable `×` |
| `CubeMark` | core | The cube logo as inline SVG — wireframe / exploded / grid |
| `Icon` | icons | Two sets in one API: `lucide` (UI chrome) + `terminal` (CLI glyphs, brand-signature) |
| `IconButton` | icons | Square icon-only action, same variants as `Button` |
| `Input` | forms | Square mono text field, gold focus, optional `$` prompt |
| `Textarea` | forms | Multi-line field, same well, vertical resize |
| `Select` | forms | Native select, square well, gold chevron |
| `Checkbox` | forms | Square box, gold check |
| `Radio` | forms | Square with inner gold square (never a circle) |
| `Switch` | forms | Square track + square knob, gold when on |
| `Field` | forms | Label + control + hint/error row wrapper |
| `Card` | surfaces | Flat bordered panel — eyebrow/title/actions/footer, optional gold rail |
| `Terminal` | surfaces | Console / code block — title bar + toned mono lines (brand-signature surface) |

### Intentional additions
No source component library existed — everything was authored from the brand guidelines. `CubeMark` exists because the cube is the core brand asset and needs a first-class API. The `terminal` icon set and the `Terminal` surface encode the build-log / CLI motif that defines Labs. All form controls are deliberately **square** (checkbox, radio, switch) to hold the hard no-radius rule. The **Build Console** UI kit (`guidelines/ui-kits/`) shows the whole system composed into a print-farm dashboard.

---

## Relationship to CubeCraft Creations

| | Creations | Labs |
|---|---|---|
| Purpose | Storefront, finished goods | Workshop, prototyping, R&D |
| Ground | White / lavender-gray | Charcoal `#1a1a1a` |
| Accent | Blue→purple gradient | Gold `#e5c07b` |
| Type | Nunito (rounded) | JetBrains Mono |
| Corners | 8–20px rounded | Square (0) |
| Shared | **Cube motif · "CubeCraft" name** | ← same |

Keep them apart. Do not import Creations gradient/Nunito/rounded tokens into a Labs design, or vice versa.
