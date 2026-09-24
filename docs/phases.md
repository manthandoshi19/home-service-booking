# Project Development Phases

> [!IMPORTANT]
> The project must be developed strictly phase by phase in sequential order. Do NOT attempt to build multiple phases at once or implement future features early.

---

## Phase 0 — Initialization & Documentation

- **Objective:** Establish the clean baseline Angular 19 application, configure Bootstrap 5, define tech boundaries, lock product requirements, and organize project documentation.
- **Expected Files:**
  - `docs/PRD.md`
  - `docs/architecture.md`
  - `docs/rules.md`
  - `docs/phases.md`
  - `docs/palette.md`
  - `docs/memory.md`
  - `angular.json` (configured with Bootstrap CSS)
  - `package.json`
  - Baseline Angular files in `src/app/`
- **Features:**
  - Clean project scaffolding without extra packages
  - Verified Bootstrap 5.3.8 integration in `angular.json`
  - Complete, accurate project documentation in `docs/`
- **Testing:**
  - Verify `npm start` / `ng serve` builds without errors.
  - Verify project folder structure and absence of root-level duplicate doc files.
- **Completion Criteria:**
  - All 6 Markdown documentation files reside in `docs/` with locked decisions (brand name placeholder `[BRAND NAME TO BE PROVIDED]`, primary color `#2563EB`, single-service booking, flat pricing, 4 categories: Cleaning, Plumbing, Electrical, AC Repair).
  - Phase 0 documented as complete in `docs/memory.md`.

---

## Phase 1 — Basic Website Structure

- **Objective:** Create the application's foundational layout shell, responsive header/navbar, footer, and setup client-side routing across all planned page views.
- **Expected Files:**
  - `src/app/components/navbar/navbar.component.ts|html|css` (or standalone header component)
  - `src/app/components/footer/footer.component.ts|html|css` (or standalone footer component)
  - `src/app/pages/home/home.component.ts|html|css`
  - `src/app/pages/services/services.component.ts|html|css`
  - `src/app/pages/service-detail/service-detail.component.ts|html|css`
  - `src/app/pages/booking/booking.component.ts|html|css`
  - `src/app/pages/payment/payment.component.ts|html|css`
  - `src/app/pages/confirmation/confirmation.component.ts|html|css`
  - `src/app/pages/about/about.component.ts|html|css`
  - `src/app/app.routes.ts` (updated route mapping)
  - `src/app/app.component.html` (navbar + router-outlet + footer layout)
- **Features:**
  - Responsive navigation header with brand title (`[BRAND NAME TO BE PROVIDED]`) and page links
  - Structured footer with company links and contact info
  - Angular routing configured for all 7 application routes
- **Testing:**
  - Click navigation links in browser to verify route transitions without full page reloads.
  - Test responsive collapsible navbar on mobile screen sizes.
- **Completion Criteria:**
  - Seamless navigation between page views with visible navbar and footer on all pages.

---

## Phase 2 — Main UI & Responsive Design

- **Objective:** Build out the visual layout and rich landing experience for the Home Page and About/Contact Page using Bootstrap grid and custom CSS styling.
- **Expected Files:**
  - `src/app/pages/home/home.component.html|css`
  - `src/app/pages/about/about.component.html|css`
  - `src/styles.css` (enhanced global design tokens from `palette.md`)
- **Features:**
  - Hero section with clear headline, subtext, primary CTA button, and professional layout
  - Visual category showcase cards for Cleaning, Plumbing, Electrical, and AC Repair
  - "How It Works" step-by-step feature section
  - Trust indicators, feature highlights, and customer testimonials
  - About company vision, service area list, and functional contact form UI
- **Testing:**
  - Inspect UI across desktop (1200px+), tablet (768px), and mobile (375px) viewports for clean grid alignment and spacing.
- **Completion Criteria:**
  - Visually engaging home and about pages adhering strictly to `palette.md` styling guidelines.

---

## Phase 3 — Dynamic Service Browsing & Selection

- **Objective:** Implement static service data models and dynamic service browsing, category filtering, search, and service detail views.
- **Expected Files:**
  - `src/app/data/services.data.ts` (Static dataset for 4 categories: Cleaning, Plumbing, Electrical, AC Repair with flat pricing)
  - `src/app/models/service.model.ts` (TypeScript interfaces)
  - `src/app/pages/services/services.component.ts|html|css`
  - `src/app/pages/service-detail/service-detail.component.ts|html|css`
- **Features:**
  - Services listing page displaying clean service cards with flat prices
  - Real-time category filtering (All, Cleaning, Plumbing, Electrical, AC Repair)
  - Text search filter for service names and descriptions
  - Service Detail page (`/services/:id`) showing full scope, inclusions, duration, flat rate, and direct "Book Now" CTA
- **Testing:**
  - Test category buttons and search input to verify cards filter dynamically.
  - Click a service card to open its detail page and verify route parameters (`:id`).
- **Completion Criteria:**
  - Users can browse, filter, search, and view flat pricing details for any service.

---

## Phase 4 — Booking Workflow & Validation

- **Objective:** Create the single-service booking form with field validation and in-memory booking state tracking.
- **Expected Files:**
  - `src/app/services/booking.service.ts` (In-memory single-service booking state service)
  - `src/app/pages/booking/booking.component.ts|html|css`
- **Features:**
  - Display selected service summary with flat price
  - Reactive form for customer information: Name, Phone, Email, Address, Preferred Date, Preferred Time, Special Notes
  - Validation rules: required field checks, email format validation, phone number validation, date selection constraint
  - Inline user feedback for invalid or empty fields
  - "Proceed to Payment" button enabled only on valid form submission
- **Testing:**
  - Attempt submission with empty/invalid inputs to verify error messages display.
  - Submit valid form data and verify state passes to the booking state service.
- **Completion Criteria:**
  - Flawless form validation and smooth transition of single-service booking data to the payment step.

---

## Phase 5 — Booking Summary & QR Payment Flow

- **Objective:** Implement the order summary review and simulated QR-code payment interface.
- **Expected Files:**
  - `src/app/pages/payment/payment.component.ts|html|css`
  - `public/assets/qr-code.svg` (or generated QR image asset)
- **Features:**
  - Order summary card displaying customer details, selected service, scheduled date/time, and final flat price
  - Simulated payment card showing QR code graphic and payment instructions
  - "Mark as Paid / Confirm Payment" button with active visual feedback
- **Testing:**
  - Verify all booking details rendered on payment screen match data entered in Phase 4.
  - Click payment button to confirm state transition to confirmation page.
- **Completion Criteria:**
  - Working simulated QR payment interface that validates completion of payment step.

---

## Phase 6 — Confirmation & Interactions

- **Objective:** Render the final booking confirmation page with a generated reference ID, detail summary, and reset workflow.
- **Expected Files:**
  - `src/app/pages/confirmation/confirmation.component.ts|html|css`
- **Features:**
  - Unique booking reference code generation (e.g. `BK-89421`)
  - Full display of confirmed booking summary (service, price, address, arrival time window)
  - Success banner with clear feedback
  - "Print Summary" / "Book Another Service" CTA buttons that properly clear or reset booking state
- **Testing:**
  - Confirm booking reference ID generates uniquely per booking session.
  - Verify clicking "Book Another Service" resets state and navigates back to services page.
- **Completion Criteria:**
  - End-to-end booking flow operates seamlessly from service selection through confirmation.

---

## Phase 7 — Testing, Cleanup & Responsiveness

- **Objective:** Perform end-to-end user testing, cross-browser check, mobile responsiveness validation, and final code cleanup.
- **Expected Files:**
  - Overall project cleanup across `src/app/` and `src/styles.css`
  - Updated `docs/memory.md` with final project completion report
- **Features:**
  - 100% functional user interactions (no broken links, non-working buttons, or unvalidated inputs)
  - Responsive audit on mobile, tablet, and desktop
  - Dead code and unused style removal
- **Testing:**
  - Execute full user flow end-to-end multiple times.
  - Run build command (`npm run build`) to ensure zero build errors or warnings.
- **Completion Criteria:**
  - Fully working, responsive, high-quality home-services marketplace application ready for presentation.
