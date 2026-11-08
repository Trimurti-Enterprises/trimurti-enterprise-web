# PRD: Trimurti Enterprises Heavy Equipment Rental Portal

## 1. Executive Summary & Vision
The **Trimurti Enterprises Web Portal** is the official digital storefront and lead capture engine for Trimurti Enterprises. The platform showcases a comprehensive heavy equipment and crane rental fleet—serving contractors, infrastructure builders, and industrial developers across Maharashtra and India.

### North Star & Primary Goal
> **North Star**: Contractors hire the cranes and heavy machinery their projects need.  
> **Key Metric**: Qualified equipment rental inquiries and quote requests submitted per month.

---

## 2. Tech Stack & Architecture
- **Framework**: React 18 + Vite + TypeScript
- **Styling & UI**: Tailwind CSS, Radix UI (shadcn/ui), Lucide React
- **Notifications & Feedback**: Sonner / Toast
- **Form Handling & Validation**: React Hook Form + Zod
- **Lead Integrations**: Email dispatch (`mailto` / backend webhook), Direct WhatsApp Business Click-to-Chat, Click-to-Call

---

## 3. Architecture & Functional Modules

```
Trimurti Enterprises Portal
   ├── Header & Mobile Navigation (Sticky, Quick-Call, WhatsApp)
   ├── Hero Section (Value proposition, quick CTA, trust metrics)
   ├── Fleet & Machinery Catalog (Categorized: Cranes, Earthmoving, Aerial Lifts)
   │     ├── Filter by Category & Capacity
   │     └── Equipment Detail Modal with Technical Specs & "Request Quote"
   ├── Interactive Quote Request Wizard (Multi-step inquiry flow)
   ├── Projects & Industrial Track Record (Metro, refinery, civil erection)
   ├── Clients & Testimonials (L&T, Tata, Shapoorji Pallonji, Afcons, etc.)
   ├── About Us & Safety Compliance (ISO, certified operators, 24/7 breakdown SLA)
   └── Contact & Location (Interactive Google Map, direct phone/email, GSTIN)
```

---

## 4. Tasks & Subtasks Breakdown

### Task 1: Fleet & Equipment Catalog Enhancement
- [ ] **1.1 Category Filtering & Search**:
  - [ ] Implement category filter pills: `All`, `Pick & Carry Cranes`, `Telescopic Cranes`, `Crawler Cranes`, `Earthmoving`, `Man Lifts / Boom Lifts`.
  - [ ] Add capacity/tonnage quick filter (e.g., `< 25T`, `50T - 100T`, `> 100T`).
- [ ] **1.2 Equipment Card & Technical Spec Sheet Modal**:
  - [ ] Add comprehensive specs per model: Maximum lifting capacity, max boom length, fly jib option, counterweight, engine rating, and outrigger spread.
  - [ ] Include high-res machinery gallery and downloadable specification PDF / brochure link.
  - [ ] "Request Quote for this Machine" button that pre-populates the inquiry form.

### Task 2: Interactive Equipment Rental Quote Wizard
- [ ] **2.1 Multi-Step Quote Request Modal/Section**:
  - [ ] **Step 1: Machine Selection**: Select machine type, tonnage, and quantity required.
  - [ ] **Step 2: Project Details**: Job site location (City / Pincode), duration (Daily, Monthly, Annual lease), operator required (Yes/No), start date.
  - [ ] **Step 3: Contact Details**: Contractor/Company name, Contact person, Mobile number (with OTP/10-digit validation), Email, GSTIN (optional).
- [ ] **2.2 Instant Feedback & WhatsApp Fast-Track**:
  - [ ] Pre-format WhatsApp inquiry message with machine and location details for 1-click submission.
  - [ ] Success state with expected turnaround SLA (e.g., "Our fleet manager will call you within 30 minutes").

### Task 3: Projects & Field Operations Showcase
- [ ] **3.1 Project Filter by Industry**:
  - [ ] Filter projects by sector: Metro Rail & Highway, Industrial Fabrication, Refinery & Petrochemical, High-Rise Construction.
- [ ] **3.2 Case Study Cards**:
  - [ ] Highlight machinery deployed, lift challenges overcome, project scale, and client testimony.

### Task 4: Trust, Safety & Operational Credentials
- [ ] **4.1 Safety & Compliance Section**:
  - [ ] Highlight third-party certified cranes (TPI certification), licensed rigging crew, comprehensive transit insurance.
  - [ ] 24/7 On-Site Maintenance SLA (Mobile service van, replacement guarantee).
- [ ] **4.2 Key Performance Highlights**:
  - [ ] Animated stats: 15+ Years in Service, 500+ Projects Completed, 50+ Heavy Machines in Fleet, 99.8% Safety Record.

### Task 5: Mobile Optimization, Quick CTAs & SEO
- [ ] **5.1 Sticky Floating Action Bar for Mobile**:
  - [ ] Persistent bottom bar on mobile with "Call Now" (`tel:+91...`) and "WhatsApp Inquiry" (`https://wa.me/...`).
- [ ] **5.2 Local Heavy Machinery SEO**:
  - [ ] Complete Open Graph metadata, schema.org `LocalBusiness` / `AutomotiveRental` JSON-LD structured data.
  - [ ] Target keywords: Crane hire Mumbai, heavy machinery rental Maharashtra, hydraulic telescopic crane rental, pick and carry crane leasing.

### Task 6: Inquiry Management & Form Dispatch
- [ ] **6.1 Form Submission Handling**:
  - [ ] Connect contact and quote forms to email notification (EmailJS / webhook / Formspree / backend API).
  - [ ] Local storage backup of submitted inquiries so no lead is lost if internet drops.
