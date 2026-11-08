# Trimurti Enterprises — Site Builder Studio (FIELD / FORM)

> **In-Browser Business Website Studio & Standalone Single-File HTML Exporter**

The **Site Builder Studio** is a client-side website generator designed for heavy machinery, crane rental, and industrial contracting businesses. It lets you customize branding, fleet catalog, layout themes, and copy with an instant live preview, and export a 100% self-contained portable HTML file ready for immediate deployment anywhere.

---

## 🚀 Live Studio Routes

When running the development server (`npm run dev`), the project provides two synchronized routes:

| Route | Description |
| :--- | :--- |
| **`http://localhost:8080/`** | **Visual Studio Editor**: Live configuration sidebar, brand colors, dynamic fleet editor, multi-device viewports, and export triggers. |
| **`http://localhost:8080/site`** | **Dedicated Full Site View**: Opens the full-page generated website directly in the browser with a top navigation bar to return to the studio. |

---

## ⚡ Quickstart

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start the development server (runs on port 8080)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🛠️ Key Studio Capabilities

### 1. Brand & Identity Customization
- **Business Name, Headline, and Subtitles**: Tailor marketing copy in real-time.
- **Logo & Background Uploader**: Upload company logos and hero background images; automatically converted to Base64 data-URIs.
- **Contractor Registration Info**: Direct inputs for GSTIN, office/yard address, official email, dispatch phone, and WhatsApp hotline.

### 2. Dynamic Section & Machinery Fleet Manager
- **Section Re-ordering & Toggles**: Move sections up/down (`About`, `Fleet`, `Projects`, `Contact`) or toggle visibility without losing data.
- **Fleet Machine Manager**: Add, edit, or delete machinery cards (Name, Tonnage/Capacity, Specifications, and Machine Image).
- **Projects & Sector Chips**: Add or remove capability chips (*Metro Rail*, *Refinery Turnaround*, *Heavy Earthmoving*).

### 3. Layout Styles & Preset Palettes
- **3 Visual Styles**:
  - `Field Notes`: Editorial serif typography with warm craft paper styling.
  - `Workshop`: Technical heavy border styling, high-contrast badges, safety accents.
  - `Modern`: Sleek dark header bar, rounded cards, modern pill tags.
- **5 Industry Preset Color Palettes**:
  - *Safety Orange & Tech Blue* (`#f48516`, `#1992dc`)
  - *Industrial Amber & Slate* (`#d97706`, `#475569`)
  - *Emerald & Dark Teal* (`#16a34a`, `#0f766e`)
  - *Navy & Construction Gold* (`#eab308`, `#1e3a8a`)
  - *Heavy Graphite* (`#27272a`, `#52525b`)
- **Custom Color Pickers**: Real-time hex code inputs with dynamic preview swatch.

### 4. Multi-Device Viewport Preview
- **Desktop (100%)**: Full-width browser layout.
- **Tablet (768px)**: Centered tablet bezel frame.
- **Mobile (375px)**: Realistic smartphone bezel frame.
- **External Preview**: Direct link to `/site` or popout in a new window.

### 5. Standalone Single-File HTML Exporter
- **Zero External Runtime Dependencies**: All images (logo, hero photo, fleet machines) are bundled as inline Base64 data-URIs.
- **SEO & Schema.org**: Includes `<meta>` tags and `LocalBusiness` JSON-LD structured data.
- **Inquiry Form Handler**: Vanilla JavaScript validator with direct **WhatsApp Fast-Track** and `mailto:` email dispatch.
- **State Persistence**: Automatic `localStorage` draft saving + JSON configuration backup (`Export JSON` / `Import JSON`).

---

## 📁 Project Structure

```text
trimurti-enterprise-hub/
├── src/
│   ├── components/ui/       # Shadcn UI primitives (Button, Input, Checkbox, etc.)
│   ├── pages/
│   │   ├── Index.tsx        # Studio Editor & Site Generation Engine
│   │   ├── SiteView.tsx     # Full-Page Rendered Site Route (/site)
│   │   └── NotFound.tsx     # 404 handler
│   ├── App.tsx              # React router setup (/ and /site)
│   ├── index.css            # Studio layout & responsive frames
│   └── main.tsx             # React DOM root entry
├── public/
│   └── lovable-uploads/     # Preset heavy machinery & crane imagery
├── PRD.md                   # Full Product Requirement Document & Epics
├── roadmap.md               # Feature roadmap & completion milestones
├── package.json             # Dependencies and scripts
└── vite.config.ts           # Vite server configuration (0.0.0.0:8080)
```

---

## 📄 Documentation Links
- **Product Requirement Document**: [PRD.md](PRD.md)
- **Roadmap & Progress**: [roadmap.md](roadmap.md)
- **Agent Guidelines**: [AGENTS.md](AGENTS.md)
