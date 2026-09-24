# Development Rules & Implementation Restrictions

## 1. Core Development Rules

1. **Keep the Project Small:** Implement features using the simplest clean Angular code possible. Avoid complex abstractions or pattern bloat.
2. **Keep Code Readable:** Write clean TypeScript, semantic HTML, and well-structured CSS with intuitive naming.
3. **Prefer Simple Solutions:** Choose standard Angular and CSS techniques over complex third-party libraries.
4. **Phase-by-Phase Execution:** Develop strictly one phase at a time as defined in `phases.md`. Do not attempt to build future phases early.
5. **Test Each Phase:** Ensure the application builds cleanly and functions properly before moving to the next phase.
6. **Ask Before Complexity:** If a feature makes the application unnecessarily complicated, stop and request user approval before proceeding.

---

## 2. Hard Technology Restrictions (Prohibited without Explicit Approval)

| Technology / Feature | Status | Constraint |
|----------------------|--------|------------|
| **Backend Server** | ❌ Prohibited | Node.js is for dev tools only. No Express, Nest, PHP, or Python servers. |
| **Database** | ❌ Prohibited | No MySQL, PostgreSQL, MongoDB, Firebase, or local DB persistence. |
| **User Authentication** | ❌ Prohibited | No login, signup, passwords, JWTs, or user account sessions. |
| **Real Payment Gateway** | ❌ Prohibited | No Stripe, Razorpay, PayPal, or Google Pay APIs. Use simulated QR image step. |
| **External APIs** | ❌ Prohibited | No third-party API calls or external data fetching. |
| **AI / ML Features** | ❌ Prohibited | No chatbot, LLM, or AI integration. |
| **Multi-Service Cart System** | ❌ Prohibited | Single-service booking only. No cart, multi-item checkout, or quantity counters. |
| **Tiered Pricing Packages** | ❌ Prohibited | Flat price per service only. No Basic/Standard/Premium tiers or coupon engines. |
| **State Management Frameworks**| ❌ Prohibited | No NgRx, Akita, or complex store patterns. Use simple RxJS BehaviorSubject or TS state object. |

---

## 3. Brand & Visual Design Constraints

1. **Brand Identity:** Use `[BRAND NAME TO BE PROVIDED]` as the company brand name. Use primary color `#2563EB`.
2. **Original UI:** Do not clone any existing platform's visual design or trademarked assets.
3. **Visual Aesthetics:** Maintain a clean, white/light background with controlled blue accents, crisp typography (Inter), soft rounded corners (`8px`/`12px`), and subtle shadows.
4. **Strictly Avoid Visual Bloat:**
   - ❌ Harsh, multi-color or rainbow gradients
   - ❌ Neon colors or dark terminal-style themes
   - ❌ Glassmorphism / liquid glass effects
   - ❌ Glowing radial orbs or background halos
   - ❌ Overly complex Bento grid layouts
   - ❌ Excessive, distracting scroll or entrance animations

---

## 4. Angular Structure & File Management Rules

1. **Angular starter files are baseline:** Maintain `src/app/app.component.*`, `app.config.ts`, `app.routes.ts`.
2. **Minimal Components:** Only create a component when a phase explicitly calls for it.
3. **No Unnecessary Services:** Do not create dummy or speculative Angular services.
4. **No Placeholder Files:** Do not generate empty or unused files "just in case".
5. **Doc Location:** All 6 documentation Markdown files must reside exclusively in `docs/`. Root-level copies are forbidden.

---

## 5. Change Management & Documentation

- Every completed task or decision must be recorded in `docs/memory.md`.
- Never rewrite unrelated files when working on a specific feature.
- `package.json` dependencies must remain minimal. No npm packages may be installed without clear justification.
