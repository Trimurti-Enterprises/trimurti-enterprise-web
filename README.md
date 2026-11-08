# Trimurti Enterprises — Heavy Equipment & Crane Rental Web Portal

> **Official digital storefront, machinery catalog, and quote dispatch platform for Trimurti Enterprises.**

M/s. **Trimurti Enterprises** is a premier heavy machinery rental and crane service provider operating throughout Maharashtra and western India. This platform serves construction contractors, infrastructure developers, and industrial manufacturing plants—offering an interactive fleet catalog, technical load specifications, and a multi-step equipment rental quote wizard.

---

## 🏗️ Equipment Fleet Highlights

Trimurti Enterprises maintains an extensive fleet of certified construction equipment:

| Equipment Category | Capacities / Models | Key Applications |
| :--- | :--- | :--- |
| **Pick & Carry Cranes** | 15T, 17T, 23T (ACE / Escorts) | Yard handling, steel structure placement, confined site lifting |
| **Tyre Mounted Telescopic Cranes** | 50T, 70T, 80T, 100T (Liebherr / Grove / Sany) | High-rise erection, metro girder placement, industrial installations |
| **Hydraulic Crawler Cranes** | 50T, 70T, 100T, 150T, 250T (Kobelco / Sany) | Heavy civil erection, refinery turnarounds, soft-soil pick & carry |
| **Heavy Excavators** | 20T (Tata 200) & 30T (Komatsu PC300) | Deep foundation excavation, rock trenching, highway grading |
| **Backhoe Loaders** | JCB 3DX & 4DX Extra | Utility trenching, site grading, material loading |
| **Aerial Boom / Man Lifts** | 80Ft, 120Ft, 135Ft, 150Ft (JLG Ultra Booms) | Elevated welding, facade glazing, refinery pipeline maintenance |

---

## ⚡ Quickstart

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start development server (runs on port 8080)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🛠️ Key Portal Features

### 1. Interactive Fleet Catalog ([Fleet.tsx](src/components/Fleet.tsx))
- **Category Filter Tabs**: Swiftly browse between Cranes, Earthmoving, and Man Lifts.
- **Tonnage Quick Filter**: Filter machines by capacity (`≤ 30T`, `30T–100T`, `> 100T`).
- **Technical Spec Sheet Modal**: Detailed breakdown of boom length, working radius, engine specifications, TPI inspection status, and common project use-cases.
- **1-Click Pre-Select**: Clicking "Request Quote" automatically pre-populates the machine selection in the quote wizard.

### 2. Multi-Step Equipment Rental Quote Wizard ([Contact.tsx](src/components/Contact.tsx))
- **Step 1 (Equipment Details)**: Choose machinery model, quantity required, and custom tonnage requirements.
- **Step 2 (Project & Duration)**: Job site location (City/Pincode), rental duration (Daily, Weekly, Monthly, Annual), and licensed operator requirement.
- **Step 3 (Contractor Details)**: Company name, contact person, mobile validation, email, and GSTIN.
- **Direct WhatsApp Fast-Track**: Pre-formats full inquiry details for 1-click WhatsApp dispatch to our fleet manager.
- **Offline Lead Storage**: Inquiries are mirrored to `localStorage` (`trimurti_leads_history`) to prevent lead loss in poor network conditions.

### 3. Field Operations & Project Showcase ([Projects.tsx](src/components/Projects.tsx))
- Real-world case studies categorized by industry:
  - *Metro & Infrastructure* (L&T Construction viaduct erection)
  - *Refinery & Petrochemicals* (BPCL distillation column turnaround)
  - *Industrial Fabrication* (JSW Steel plant erection)
  - *Highways & Earthmoving* (MSRDC expressway interchange)

### 4. Safety Credentials & Trust Proof ([About.tsx](src/components/About.tsx))
- Third-Party Inspection (TPI) certified cranes with Form 11 load chart testing.
- Licensed rigging crews and defensive-driving trained crane operators.
- 24/7 on-site mobile service van providing under-2-hour maintenance response in Maharashtra.
- Key metrics: 15+ Years in Service, 500+ Projects, 50+ Heavy Machines, 99.8% Safety Record.

### 5. Mobile Quick Action Bar ([MobileBar.tsx](src/components/MobileBar.tsx))
- Persistent floating bottom navigation on mobile devices with **Direct Call** (`tel:+919876543210`), **WhatsApp Chat**, and **Quick Quote**.

---

## 📁 Architecture & File Layout

```text
trimurti-enterprise-hub/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation & contact links
│   │   ├── Hero.tsx         # Hero banner with CTAs and trust badges
│   │   ├── About.tsx        # Company credentials & safety standards
│   │   ├── Clients.tsx      # Client marquee (L&T, JSW, Tata, Bauer, etc.)
│   │   ├── Fleet.tsx        # Categorized machinery catalog & spec modals
│   │   ├── Projects.tsx     # Filterable project case studies
│   │   ├── Contact.tsx      # 3-step quote wizard & yard contact info
│   │   ├── Footer.tsx       # Comprehensive footer & legal disclaimers
│   │   ├── MobileBar.tsx    # Mobile sticky floating action bar
│   │   └── ui/              # Shadcn UI primitives
│   ├── pages/
│   │   ├── Index.tsx        # Main Portal Page
│   │   └── NotFound.tsx     # 404 handler
│   ├── App.tsx              # Router setup
│   └── main.tsx             # React entry point
├── public/
│   └── lovable-uploads/     # Machinery photography assets
├── PRD.md                   # Product Requirement Document & Milestone Status
├── index.html               # SEO metadata & LocalBusiness JSON-LD
└── package.json             # NPM dependencies & scripts
```

---

## 📄 Documentation Links
- **Product Requirement Document**: [PRD.md](PRD.md)
- **Lovable North Star**: [.lovable/north-star/north-star.md](.lovable/north-star/north-star.md)
