# Architecture Document

## 1. Architectural Philosophy

The application architecture is intentionally **small, simple, readable, and maintainable**. It is built as a dynamic client-side Single Page Application (SPA) using Angular 19 and Bootstrap 5.

It avoids enterprise patterns, over-engineering, unnecessary abstractions, state-management frameworks (like NgRx), custom backend servers, and database persistence.

---

## 2. Directory & File Structure

### Project Root Directory Layout

```
wt project/
├── docs/                        # Project documentation
│   ├── PRD.md                   # Product requirements & scope
│   ├── architecture.md          # Technical architecture & stack boundaries
│   ├── rules.md                 # Implementation rules & constraints
│   ├── phases.md                # Development phases & criteria
│   ├── palette.md               # Visual design system & styling rules
│   └── memory.md                # Development history & state tracking
├── src/                         # Application source code
│   ├── app/                     # Minimal Angular structure
│   │   ├── app.component.ts     # Root component
│   │   ├── app.component.html   # Root template (Navbar + Outlet + Footer)
│   │   ├── app.component.css    # Root component styles
│   │   ├── app.config.ts        # Application configuration & providers
│   │   └── app.routes.ts        # Client-side route definitions
│   ├── index.html               # Main HTML entry file
│   ├── main.ts                  # Angular bootstrap entry point
│   └── styles.css               # Global CSS stylesheet & design tokens
├── public/                      # Static assets (images, icons, QR code image)
├── angular.json                 # Angular workspace configuration
├── package.json                 # Project dependencies & scripts
├── package-lock.json            # Locked dependency versions
├── tsconfig.json                # TypeScript root config
├── tsconfig.app.json            # Application TS compilation config
└── tsconfig.spec.json           # Testing TS compilation config
```

> [!IMPORTANT]
> The generated directories `node_modules/`, `.angular/`, and `dist/` exist for build/dependency management and are **never** manually edited.

---

## 3. Technology Stack & Responsibilities

| Technology | Role & Responsibility |
|-----------|----------------------|
| **HTML** | Semantic page structure (`header`, `nav`, `main`, `section`, `footer`, `form`), accessible form elements, and Angular templates. |
| **CSS** | Custom styling in `styles.css` and component CSS files: brand colors (`#2563EB`), typography, subtle shadows, moderate rounded corners (`8px`/`12px`), borders, and custom hover states. |
| **Bootstrap 5.3.8** | Responsive layout grid (`container`, `row`, `col-*`), cards, buttons, form layout, and predefined utility classes. Configured globally in `angular.json`. |
| **TypeScript / JavaScript** | Type definitions, client-side logic, event handlers, validation logic, and DOM interaction. Plain JS is used only when Angular is not suited (e.g. native browser print/clipboard calls). |
| **Angular 19** | Core SPA framework: standalone components, dynamic data binding, routing, form management (Reactive/Template-driven), and local service data flow. |

---

## 4. Angular Component & Routing Strategy

- **Small Structure First:** The app starts with a minimal set of files (`app.component.*`, `app.routes.ts`). Additional standalone components (e.g., page views or shared navbar/footer) are introduced strictly when feature phases require them.
- **Routing Plan (`app.routes.ts`):**
  - `/` → Home Page
  - `/services` → Services Listing & Category Filter
  - `/services/:id` → Service Details (flat price, details)
  - `/booking` → Booking Form (single-service selection)
  - `/payment` → Simulated QR Payment View
  - `/confirmation` → Booking Confirmation View
  - `/about` → About & Contact View

---

## 5. Data Flow & State Management

```
Static Data File (services.data.ts)
         ↓
  Angular Service / Route Parameter
         ↓
  Active View Component (Services / Details / Booking)
         ↓
  In-Memory Booking State Object (Single Service + Customer Info)
         ↓
  QR Payment Step → Booking Confirmation View
```

- **Local Data:** Service categories (Cleaning, Plumbing, Electrical, AC Repair) and flat prices are defined in a simple TypeScript data file (`services.data.ts`).
- **Single-Service Booking State:** Booking state holds details for **one** selected service at a time (no cart, no quantity controls). State is maintained in memory via a lightweight Angular service during the user session.
- **QR Payment Flow:** The payment step displays a QR code image asset with a payment confirmation button. Completing the step transitions state to the confirmation page with a generated booking reference ID.

---

## 6. Technical Boundaries & Constraints

1. **No Backend Server:** Node.js is strictly dev tooling (`npm start`, `ng serve`). No Express, Nest, PHP, or Python backend.
2. **No Database:** No SQL or NoSQL database. All data is static or held transiently in memory.
3. **No Payment SDKs:** No Razorpay, Stripe, PayPal, or GPay integration. QR payment is visual/simulated.
4. **No External APIs:** No HTTP requests to third-party endpoints.
5. **No Authentication:** No login, registration, or session guards.
6. **Dependencies:** Kept strictly to core `@angular/*` packages and `bootstrap`. No unnecessary npm dependencies.
