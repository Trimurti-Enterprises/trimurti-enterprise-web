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
- **Notifications & Feedback**: Toast
- **Form Handling & Validation**: Interactive multi-step wizard with client validation
- **Lead Integrations**: Local lead store backup, direct WhatsApp Business fast-track, direct phone click-to-call

---

## 3. Tasks & Subtasks Status

### Task 1: Fleet & Equipment Catalog Enhancement
- [x] **1.1 Category Filtering & Search**:
  - [x] Category filter pills: `All`, `Pick & Carry Cranes`, `Telescopic Cranes`, `Crawler Cranes`, `Excavators & Earthmoving`, `Man Lifts & Booms`.
  - [x] Capacity quick-filter pills: `≤ 30 Tonnes`, `30T – 100T`, `> 100 Tonnes`.
- [x] **1.2 Equipment Card & Technical Spec Sheet Modal**:
  - [x] Comprehensive specs per model: Maximum lifting capacity, max boom reach, working radius, engine rating, and common applications.
  - [x] TPI Certification and licensed operator badges on cards.
  - [x] "Request Quote" button that pre-selects the machine in the Quote Wizard.

### Task 2: Interactive Equipment Rental Quote Wizard
- [x] **2.1 Multi-Step Quote Request Wizard**:
  - [x] **Step 1: Machine Selection**: Select machine type, tonnage, and quantity required.
  - [x] **Step 2: Project Details**: Job site location (City / Pincode), duration (Daily, Monthly, Annual lease), operator required (Yes/No), start date.
  - [x] **Step 3: Contact Details**: Contractor/Company name, Contact person, Mobile number (with 10-digit validation), Email, GSTIN, special lift notes.
- [x] **2.2 Instant Feedback & WhatsApp Fast-Track**:
  - [x] Pre-formats WhatsApp inquiry message with machine and location details for 1-click submission.
  - [x] Success state with expected turnaround SLA (30-minute confirmation).

### Task 3: Projects & Field Operations Showcase
- [x] **3.1 Project Filter by Industry**:
  - [x] Filter projects by sector: `Metro & Infrastructure`, `Refinery & Petrochemicals`, `Industrial Fabrication`, `Highways & Earthmoving`.
- [x] **3.2 Case Study Cards**:
  - [x] Highlights machinery deployed, project scale, clients (L&T, BPCL, JSW, MSRDC), and milestones.

### Task 4: Trust, Safety & Operational Credentials
- [x] **4.1 Safety & Compliance Section**:
  - [x] Highlights third-party certified cranes (TPI certification), licensed rigging crew, comprehensive transit insurance.
  - [x] 24/7 On-Site Mobile Service Van SLA in Maharashtra.
- [x] **4.2 Key Performance Highlights**:
  - [x] Animated stats: 15+ Years in Service, 500+ Projects Completed, 50+ Heavy Machines in Fleet, 99.8% Incident-Free Safety Record.

### Task 5: Mobile Optimization, Quick CTAs & SEO
- [x] **5.1 Sticky Floating Action Bar for Mobile**:
  - [x] Persistent bottom bar on mobile with "Call Now" (`tel:+919876543210`), "WhatsApp" (`https://wa.me/...`), and "Get Quote".
- [x] **5.2 Local Heavy Machinery SEO**:
  - [x] Complete Open Graph metadata, schema.org `LocalBusiness` JSON-LD structured data.
  - [x] Target keywords for Mumbai & Maharashtra heavy crane and equipment hire.

### Task 6: Inquiry Management & Lead Persistence
- [x] **6.1 Form Submission Handling**:
  - [x] Local storage backup of submitted inquiries (`trimurti_leads_history`) so no contractor lead is lost.
  - [x] Fast-track WhatsApp bridge and email dispatch fallback.
