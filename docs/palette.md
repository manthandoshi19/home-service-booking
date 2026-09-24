# Visual Design System (Palette & Styling Guidelines)

## 1. Core Color Palette

The visual design system uses a predominantly clean, white background paired with a single, controlled brand color (`#2563EB`) and neutral supporting tones for maximum readability and authentic service branding.

### Primary Brand Colors

| Token | Color Name | Hex | Usage |
|-------|------------|-----|-------|
| `--color-primary` | Brand Blue | `#2563EB` | Primary buttons, active navigation links, icons, key accents |
| `--color-primary-dark` | Hover Blue | `#1D4ED8` | Primary button hover states, active states |
| `--color-primary-light` | Soft Tint | `#DBEAFE` | Subtle badge backgrounds, highlight panels, selected card outlines |

### Neutral Palette

| Token | Color Name | Hex | Usage |
|-------|------------|-----|-------|
| `--color-bg-main` | Pure White | `#FFFFFF` | Core page background, main card backgrounds |
| `--color-bg-alt` | Off White | `#F9FAFB` | Section background tinting, alternating content bands |
| `--color-surface` | Light Surface | `#F3F4F6` | Input background fill, subtle divider bars |
| `--color-border` | Border Gray | `#E5E7EB` | Clean card borders, table dividers, input outlines |
| `--color-text-subtle` | Subtle Gray | `#9CA3AF` | Form field placeholder text, muted captions |
| `--color-text-muted` | Body Muted | `#4B5563` | Body copy, secondary descriptions, footer text |
| `--color-text-main` | Dark Charcoal | `#1F2937` | Main headings (`h1`-`h4`), strong typography |
| `--color-nav-bg` | Deep Header | `#111827` | Navigation header / footer contrast background |

### Status & Feedback Colors

| Token | Color Name | Hex | Usage |
|-------|------------|-----|-------|
| `--color-success` | Emerald Green | `#16A34A` | Success alerts, completed booking status, payment verified |
| `--color-warning` | Warm Amber | `#F59E0B` | Pending status notice, date warnings |
| `--color-error` | Soft Red | `#DC2626` | Form validation error text, field error borders |

---

## 2. Typography

- **Primary Font Family:** `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Heading Styles:**
  - `h1`: 36px (2.25rem), Weight: 700, Line Height: 1.25, Color: `var(--color-text-main)`
  - `h2`: 28px (1.75rem), Weight: 600, Line Height: 1.3, Color: `var(--color-text-main)`
  - `h3`: 22px (1.375rem), Weight: 600, Line Height: 1.35, Color: `var(--color-text-main)`
  - `h4`: 18px (1.125rem), Weight: 600, Line Height: 1.4, Color: `var(--color-text-main)`
- **Body Text:** 16px (1rem), Weight: 400, Line Height: 1.5, Color: `var(--color-text-muted)`
- **Small / Caption:** 14px (0.875rem), Weight: 400, Color: `var(--color-text-subtle)`

---

## 3. Component Styling Guidelines

### Cards
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E5E7EB`
- **Border Radius:** `12px` (soft corner radius)
- **Shadow:** `0 2px 4px rgba(0, 0, 0, 0.04)`
- **Hover Effect:** Smooth `translateY(-2px)` with shadow transition `0 6px 16px rgba(0, 0, 0, 0.08)` over `0.2s ease`

### Buttons
- **Primary Button:**
  - Background: `#2563EB`
  - Text Color: `#FFFFFF`
  - Border Radius: `8px`
  - Padding: `10px 20px`
  - Font Weight: `500`
  - Hover: Background `#1D4ED8`
- **Secondary Button (Outline):**
  - Background: `transparent`
  - Border: `1px solid #2563EB`
  - Text Color: `#2563EB`
  - Border Radius: `8px`
  - Hover: Background `#DBEAFE`

### Form Controls
- **Input Fill:** `#FFFFFF`
- **Border:** `1px solid #E5E7EB`
- **Border Radius:** `8px`
- **Padding:** `10px 14px`
- **Focus State:** Border `#2563EB` with `0 0 0 3px #DBEAFE` box-shadow halo

---

## 4. Layout & Responsive Breakpoints

Utilizes standard Bootstrap 5 container grid:
- **Mobile (`< 576px`):** Single column full-width cards, stacked inputs.
- **Tablet (`576px – 991px`):** 2-column service grid, side-by-side summary layout.
- **Desktop (`≥ 992px`):** 3-4 column grid cards, structured multi-section rows.

---

## 5. Prohibited Visual Effects (Design Red Lines)

To ensure the website feels like an authentic service company rather than a bloated demo, the following design trends are **strictly forbidden**:
- ❌ Harsh multi-color gradients or neon glowing elements
- ❌ Glassmorphism / frosted liquid glass panels
- ❌ Floating radial orbs or background light halos
- ❌ Excessive, distracting scroll animations or entrance transitions
- ❌ Overly complex Bento grid boxes
- ❌ Dark terminal-style UI code boxes or decorative tech gimmicks
