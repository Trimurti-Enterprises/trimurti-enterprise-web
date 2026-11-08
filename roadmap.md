# Product Roadmap: Site Builder Studio

- [x] Replace the public page with a focused business-site template editor.
- [x] Add brand, palette, layout, and section controls with a live preview.
- [x] Export selected content as a standalone lightweight HTML/CSS/JS file.
- [x] Verify the editor and export flow in the preview.

## Milestone 1 Implementation Highlights
- **Dynamic Fleet & Machinery Manager**: Add, edit, remove, and upload photos for individual crane and equipment items.
- **Section Re-ordering & Toggles**: Up/down ordering controls for Hero, About, Equipment Fleet, Projects, and Contact sections.
- **Brand & Theme Controls**:
  - 5 industry-specific preset color palettes (Safety Orange & Blue, Industrial Amber, Emerald, Navy & Gold, Graphite).
  - 3 layout styles (Field Notes, Workshop, Modern).
  - 3 typography pairings (Classic Editorial, Modern Sans, Industrial Technical).
- **Multi-Device Responsive Preview**: Real-time iframe preview with Desktop (100%), Tablet (768px), and Mobile (375px) device frames, plus "Open in New Tab" and refresh controls.
- **Self-Contained Exporter**:
  - Automatic inlining of logo, hero background, and equipment gallery as Base64 data-URIs.
  - Schema.org `LocalBusiness` JSON-LD structured data.
  - Interactive client-side inquiry form with direct WhatsApp fast-track integration and mailto fallback.
- **Backup & Persistence**: Draft saved to `localStorage` with JSON configuration export/import.
