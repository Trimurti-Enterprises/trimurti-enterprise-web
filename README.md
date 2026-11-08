# PRD: Trimurti Enterprises Site Builder Studio (FIELD / FORM)

## 1. Executive Summary & Vision
The **Trimurti Enterprises Site Builder Studio** is an in-browser, client-side business website builder. It enables users to customize branding, color palettes, layouts, and content sections with an instant live preview, and export a standalone, production-ready, lightweight single-file `index.html` (with embedded styles, scripts, and inlined image assets) completely independent of any server or editor runtime.

---

## 2. Tech Stack & Architectural Principles
- **Core Framework**: React 18 + TypeScript + Vite
- **UI Components & Styling**: Tailwind CSS, Radix UI (shadcn/ui), Lucide React
- **Architecture**: 100% Client-side state and export generation
- **Guiding Rule** ([AGENTS.md](AGENTS.md)): Generated output must be a self-contained HTML/CSS/JS bundle that works natively offline or on static hosts (GitHub Pages, Netlify, Cloudflare Pages, S3).

---

## 3. Product Roadmap & Epics

```
Epic 1: Workspace & UI Controls
   ├── Tabbed Navigation & Layout Overhaul
   └── Quick Presets & History/Reset
Epic 2: Section & Content Controls
   ├── Section Reordering & Toggles
   ├── Dynamic Machine/Fleet Item Management
   └── Custom Project Strip & Testimonial Items
Epic 3: Brand & Palette Customization
   ├── Color Scheme Contrast Validator
   ├── Typography & Style Themes (Field Notes, Workshop, Modern)
   └── Logo & Asset Management
Epic 4: Live Multi-Device Preview
   ├── Desktop, Tablet, and Mobile Viewports
   └── Synchronized Interactive Elements
Epic 5: Standalone Single-File Export Engine
   ├── Data-URI Image & Asset Inliner
   ├── Clean HTML/CSS/JS Serializer
   └── Lead Capture & Form Handler
Epic 6: Verification & QA
   ├── Preview-to-Export Parity Check
   └── Cross-Browser Export Testing
```

---

## 4. Tasks & Subtasks Breakdown

### Task 1: Complete Section & Dynamic Content Controls
- [ ] **1.1 Section Re-ordering & Visibility**:
  - [ ] Add drag-and-drop or up/down ordering for sections (`Hero`, `About`, `Fleet`, `Projects`, `Contact`).
  - [ ] Support toggling visibility without losing configured content.
- [ ] **1.2 Fleet / Equipment Item Manager**:
  - [ ] Allow adding, editing, and deleting individual machinery cards (Name, Tonnage/Capacity, Image upload or URL, Specifications).
  - [ ] Support custom machine categories (Cranes, Earthmovers, Aerial Work Platforms).
- [ ] **1.3 Projects & Case Studies Controls**:
  - [ ] Add dynamic project tags and featured project cards with title, client name, and completion year.
- [ ] **1.4 Contact & Company Information**:
  - [ ] Add fields for GSTIN, office address, Google Maps link, WhatsApp quick-chat number, and support email.

### Task 2: Advanced Brand, Palette & Typography Controls
- [ ] **2.1 Brand Palette Controls**:
  - [ ] Accent color picker with real-time hex input and WCAG color contrast indicator against light/dark backgrounds.
  - [ ] Support dual-accent / secondary brand tones with preset palettes (Industrial Steel, Safety Orange, High-Voltage Blue, Earth Tone).
- [ ] **2.2 Typography & Style Themes**:
  - [ ] Refine the 3 theme presets:
    - `Field Notes`: Editorial serif headers with clean tabular body.
    - `Workshop`: Bold industrial borders, high-contrast badges, technical accents.
    - `Modern`: Rounded geometry, dark header bar, sleek modern cards.
  - [ ] Allow custom font family pairings (Inter, Georgia, Roboto Slab, Space Grotesk).
- [ ] **2.3 Logo & Media Handling**:
  - [ ] Image uploader with client-side compression to prevent bloated export files.
  - [ ] Option to toggle between Logo image, Monogram, or Text wordmark.

### Task 3: Interactive Multi-Device Live Preview Frame
- [ ] **3.1 Device Viewport Switching**:
  - [ ] Add viewport toggle buttons: Desktop (100% / 1280px), Tablet (768px), Mobile (375px).
  - [ ] Smooth animated container resizing with realistic bezel/device frame.
- [ ] **3.2 Live Frame Synchronization**:
  - [ ] Ensure form submissions in preview demonstrate inquiry validation without navigating away.
  - [ ] Support interactive smooth scrolling to `#section-id` anchors within the preview iframe.

### Task 4: Standalone Lightweight Export Engine
- [ ] **4.1 Complete Asset Inlining**:
  - [ ] Fetch and convert all referenced images (logo, hero background, machine photos) into Base64 data-URIs.
  - [ ] Graceful fallback for offline / broken image URLs.
- [ ] **4.2 Production Single-File HTML Generation**:
  - [ ] Inline critical CSS with zero external stylesheet dependencies.
  - [ ] Include complete SEO `<meta>` tags (title, description, Open Graph, viewport, charset).
  - [ ] Embedded vanilla JavaScript inquiry form validator with `mailto:` link generation or webhook dispatch.
- [ ] **4.3 Download & Export Management**:
  - [ ] Auto-generate clean slugified filename (e.g., `trimurti-enterprises-site.html`).
  - [ ] Add copy-HTML-to-clipboard button and download status toast notifications.

### Task 5: Testing, Verification & Hardening
- [ ] **5.1 Export Fidelity Verification**:
  - [ ] Verify exported HTML files render identically across Chrome, Firefox, Safari, and Edge.
  - [ ] Validate zero external network dependencies for offline viewing.
- [ ] **5.2 State Persistence**:
  - [ ] Persist builder draft to `localStorage` so user progress is never lost on reload.
  - [ ] Add "Reset to Starter" and "Export/Import JSON Configuration" for backup.
