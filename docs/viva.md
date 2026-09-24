# Viva Voce Preparation Guide

> This document contains short, precise, and easy-to-explain answers for common Viva questions about the Home Services Marketplace web application project.

---

### 1. What is Angular?
**Answer:** Angular is a TypeScript-based open-source frontend framework developed by Google for building dynamic, single-page web applications using reusable components.

### 2. Why did you use Angular?
**Answer:** Angular provides an all-in-one platform with built-in routing, reactive form validation, component modularity, and TypeScript type safety, making it ideal for structured web application development.

### 3. What is a Single Page Application (SPA)?
**Answer:** An SPA is a web application that loads a single HTML page (`index.html`) and dynamically updates page content as the user navigates, without requiring full page reloads from a server.

### 4. Where is routing used in this project?
**Answer:** Angular Router is configured in `src/app/app.routes.ts` to navigate between views: Home (`/`), Services (`/services`), Service Detail (`/services/:id`), Booking (`/booking`), Payment (`/payment`), and Confirmation (`/confirmation`).

### 5. What is TypeScript used for?
**Answer:** TypeScript adds strongly-typed syntax to JavaScript, defining data interfaces (`ServiceItem`, `BookingData`), component classes, and compile-time error checking.

### 6. What is Bootstrap used for?
**Answer:** Bootstrap 5.3.8 provides a responsive 12-column grid system, utility classes, buttons, forms, and cards to build a clean mobile-friendly user interface.

### 7. Where is HTML used in this project?
**Answer:** HTML component templates (`.component.html`) define the structural layouts, DOM bindings (`*ngIf`, `@for`), and template expressions for each page component.

### 8. Where is CSS used in this project?
**Answer:** Vanilla CSS in `src/styles.css` defines global design tokens (`#2563EB` primary color, custom buttons, badges), while component CSS files handle page-specific styles.

### 9. How is service data stored?
**Answer:** Service catalog data is stored locally in `src/app/data/services.data.ts` as an array of `ServiceItem` TypeScript objects.

### 10. How does service filtering work?
**Answer:** In `ServicesComponent`, the `filteredServices` getter filters the `SERVICES_DATA` array based on the `selectedCategory` string match.

### 11. How does search work?
**Answer:** The search input is bound via `[(ngModel)]="searchQuery"`. The component filters services by converting the title, category, and description to lowercase and testing for substring matches.

### 12. How does Angular binding work in this project?
**Answer:** The project uses property binding (`[src]`, `[ngClass]`), event binding (`(click)`, `(ngSubmit)`), two-way binding (`[(ngModel)]`), and interpolation (`{{ variable }}`).

### 13. Where is form validation implemented?
**Answer:** Form validation is implemented in `BookingComponent` using Angular's `ReactiveFormsModule` and `FormBuilder` with validators for required fields, min-length, 10-digit Indian phone pattern, email format, and future date checks.

### 14. Why did you use Reactive Forms?
**Answer:** Reactive Forms provide synchronous access to form data models, explicit validation rules, predictable state handling, and clean field error feedback in templates.

### 15. How is booking data stored?
**Answer:** Booking details are stored in-memory using an Angular singleton service (`BookingService`) implementing the `BookingData` interface.

### 16. Why is `BookingService` used?
**Answer:** `BookingService` acts as a central state store that holds selected service selection and customer booking details across route navigation between `/booking`, `/payment`, and `/confirmation`.

### 17. How does data move from Booking → Payment → Confirmation?
**Answer:**
1. `BookingComponent` collects form input and calls `bookingService.saveBookingState(bookingData)`.
2. `PaymentComponent` reads the booking state from `BookingService` to display the summary.
3. Clicking "Confirm Payment" calls `bookingService.markPaymentAsPaid()`, generates a booking reference, and navigates to `ConfirmationComponent` which reads the updated booking state.

### 18. How is payment implemented?
**Answer:** Payment is implemented as a simulated frontend workflow. The payment page presents a visual QR code (`qr-code.svg`) and a "Confirm Payment" button that updates `paymentStatus` to `'paid'` in memory.

### 19. Is the QR payment real?
**Answer:** No. It is an academic demonstration step. No bank transactions, payment gateway APIs, or real currency transfers occur.

### 20. Why is there no database?
**Answer:** The project scope specifies a frontend-only single-page application. In-memory TypeScript data structures and Angular services satisfy all demonstration requirements without backend complexity.

### 21. Why is there no backend?
**Answer:** The objective of this project is to demonstrate client-side web technologies (HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular Router, Reactive Forms) within a self-contained web app.

### 22. Why is Node.js installed?
**Answer:** Node.js and `npm` are used strictly as local development tooling to compile TypeScript, bundle Angular assets, and run the Angular CLI development server (`ng serve` / `ng build`).

### 23. What happens when the user selects a service?
**Answer:** Clicking "Book This Service" sets the selected service ID in `BookingService` and navigates to `/booking?serviceId=xxx`, pre-selecting that service in the booking dropdown.

### 24. How is the booking reference generated?
**Answer:** In `BookingService.markPaymentAsPaid()`, a 6-digit random number is generated and formatted as `BK-XXXXXX` (e.g. `BK-482731`) when the user confirms simulated payment.

### 25. How does routing navigate between pages?
**Answer:** Navigation occurs declaratively using `routerLink="/path"` in HTML templates or programmatically using `this.router.navigate(['/path'])` in TypeScript components.

### 26. How is responsive design achieved?
**Answer:** Responsive design is built using Bootstrap 5's grid system (`col-12 col-md-6 col-lg-4`), flexbox utilities, and media queries in `src/styles.css` for desktop (1200px+), tablet (768px), and mobile (375px) screens.

### 27. What happens if the service ID is invalid?
**Answer:** If an invalid service ID is passed in the URL (e.g. `/services/invalid-id`), `ServiceDetailComponent` displays a "Service Not Found" card with a button to return to the catalog.

### 28. What happens if booking data is missing on Payment or Confirmation?
**Answer:** Both `PaymentComponent` and `ConfirmationComponent` check if `booking` is null. If missing, they display an "Information Unavailable" empty state card with a "Back to Services" button.

### 29. What are the four service categories?
**Answer:** The application features 4 core home-service categories:
1. **Cleaning** ($79 flat rate)
2. **Plumbing** ($49 flat rate)
3. **Electrical** ($59 flat rate)
4. **AC Repair** ($69 flat rate)

### 30. What is the difference between frontend and backend in web technology?
**Answer:** The frontend is the client-side user interface (HTML, CSS, TypeScript/Angular) executing inside the web browser. The backend is server-side infrastructure (databases, API servers like Node/Express) responsible for persistent storage, authentication, and external integration.
