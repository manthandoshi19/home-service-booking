# PRD — Product Requirements Document

## 1. Product Overview

**Project Name:** `[BRAND NAME TO BE PROVIDED]`  
**Type:** Home-services marketplace web application  
**Concept:** An original platform connecting customers with professionals who provide services at the customer's home. The company operates as its own authentic service brand — not a clone of any existing platform.

---

## 2. Target Users

| User Type | Description |
|-----------|-------------|
| **Customer** | A person seeking home services (cleaning, plumbing, electrical, AC repair) to book for their residence |
| **Visitor** | A person browsing the website to inspect services, pricing, and company information |

> [!NOTE]
> User authentication, customer accounts, service provider portals, and admin dashboards are explicitly **out of scope**.

---

## 3. Brand & Confirmed Core Decisions

- **Brand Name:** `[BRAND NAME TO BE PROVIDED]`
- **Primary Brand Color:** `#2563EB` (Professional Blue)
- **Service Categories:**
  1. Cleaning
  2. Plumbing
  3. Electrical
  4. AC Repair
- **Booking Model:** Single-service booking only. (No cart, no multi-service cart, no quantity system, no multi-service checkout).
- **Pricing Model:** Flat price per service. (No Basic/Standard/Premium tiered packages, no coupon/discount engine, no complex dynamic pricing).
- **Payment Method:** QR-code-based simulated payment step. (No real payment gateway integration like Razorpay, Stripe, PayPal, or Google Pay API).

---

## 4. User Journey & Core Workflow

```
Home Page → Browse Services → Select Service → View Service Info & Flat Pricing
→ Provide Booking Info (Name, Contact, Address, Date/Time) → Booking Summary
→ Proceed to QR Code Payment → Booking Confirmation (Reference ID & Summary)
```

---

## 5. Scope & Application Pages

### 5.1 Main / Home Page
- Hero section introducing the service company and core value proposition
- Direct access to service categories (Cleaning, Plumbing, Electrical, AC Repair)
- How-it-works overview (simple step-by-step guidance)
- Trust indicators and call-to-action buttons
- Shared Navbar and Footer navigation

### 5.2 Services Page
- Grid display of available home services across the 4 categories
- Category filtering and search capability
- Clean service cards showing category, flat price, description, and "Book Service" button

### 5.3 Service Details
- Full description of selected service
- Flat pricing display
- Duration/time estimate and scope of service included
- Direct CTA to proceed to booking for the selected service

### 5.4 Booking Page (Single-Service)
- Display selected service summary and flat price
- Customer information form:
  - Full Name
  - Phone Number
  - Email Address
  - Service Address
  - Preferred Date & Time
  - Special Instructions / Notes
- Strict client-side form validation preventing incomplete or invalid submissions

### 5.5 Payment Page (QR Payment Step)
- Display order summary with flat service cost
- Interactive QR-code display for payment simulation
- "Mark as Paid" / "Confirm Payment" button to proceed to confirmation
- Simulated payment status workflow without external payment infrastructure

### 5.6 Booking Confirmation Page
- Generated booking reference ID
- Detailed summary of booked service, date, time, customer details, and payment status
- Information on estimated provider arrival
- Return to home / browse services action

### 5.7 About / Contact Information
- Company story, service principles, and contact details
- Service area information
- Functional contact form (with client-side validation)

---

## 6. Functional Requirements

| ID | Requirement | Status |
|----|-------------|--------|
| FR-01 | Display service categories: Cleaning, Plumbing, Electrical, AC Repair | Confirmed |
| FR-02 | Allow category filtering and search on services listing | Confirmed |
| FR-03 | Show flat pricing and detailed service info | Confirmed |
| FR-04 | Single-service selection leading directly to booking workflow | Confirmed |
| FR-05 | Capture customer details (name, phone, email, address, date, time) in booking form | Confirmed |
| FR-06 | Client-side validation for required form fields and valid input formats | Confirmed |
| FR-07 | Display comprehensive booking summary prior to payment step | Confirmed |
| FR-08 | Present QR-code payment interface for simulated payment completion | Confirmed |
| FR-09 | Display confirmation page with booking reference ID and full details | Confirmed |
| FR-10 | Full client-side routing across all page views | Confirmed |
| FR-11 | Dynamic, interactive buttons, popups, and selection controls | Confirmed |
| FR-12 | Responsive layout for mobile, tablet, and desktop viewports | Confirmed |

---

## 7. Explicit Exclusions (Out of Scope)

- ❌ Database or backend server (Node.js/Express, MySQL, MongoDB, Firebase, PHP)
- ❌ User authentication, registration, or login
- ❌ Multi-service shopping cart or quantity controls
- ❌ Tiered package options (Basic / Standard / Premium)
- ❌ Real payment gateway integrations (Razorpay, Stripe, PayPal, Google Pay API)
- ❌ External third-party APIs
- ❌ AI features or chatbots
- ❌ Service provider or admin dashboards

---

## 8. Requirements Summary & Next Steps

All foundational decisions are locked into this PRD. Implementation must follow this spec precisely without adding unapproved abstractions or features.
