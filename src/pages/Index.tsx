import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileJson,
  ImagePlus,
  Layers3,
  Monitor,
  Palette,
  Plus,
  RefreshCw,
  RotateCcw,
  Settings2,
  Smartphone,
  Sparkles,
  Tablet,
  Trash2,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export type SectionId = "about" | "equipment" | "projects" | "contact";

export type MachineItem = {
  id: string;
  name: string;
  capacity: string;
  image: string;
};

export type TypographyPreset = "classic-editorial" | "modern-sans" | "industrial-mono";

export type SiteConfig = {
  business: string;
  headline: string;
  description: string;
  heroCtaText: string;
  heroSecondaryCtaText: string;
  heroImage: string;
  logo: string;
  accent: string;
  secondary: string;
  typography: TypographyPreset;
  style: "Field notes" | "Workshop" | "Modern";
  sections: SectionId[];
  aboutTitle: string;
  aboutText: string;
  projectsTitle: string;
  projectsText: string;
  projectTags: string[];
  equipmentTitle: string;
  equipmentText: string;
  machines: MachineItem[];
  contactTitle: string;
  contactText: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  gstin: string;
  hours: string;
};

const defaultMachines: MachineItem[] = [
  {
    id: "m1",
    name: "Pick and carry crane",
    capacity: "15–23 tonnes",
    image: "/lovable-uploads/582481b6-7488-47d8-ba5c-0d01d2bd2eaf.png",
  },
  {
    id: "m2",
    name: "Tyre mounted telescopic crane",
    capacity: "50–100 tonnes",
    image: "/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png",
  },
  {
    id: "m3",
    name: "Hydraulic crawler crane",
    capacity: "50–250 tonnes",
    image: "/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png",
  },
  {
    id: "m4",
    name: "Heavy Excavator (Tata / Komatsu)",
    capacity: "20T & 30T",
    image: "/lovable-uploads/36d1f002-692c-4286-80eb-add1f0b3b1bc.png",
  },
  {
    id: "m5",
    name: "Back Hoe Loader (JCB 3DX/4DX)",
    capacity: "General excavation & loading",
    image: "/lovable-uploads/59f35e5b-3680-4091-a3f3-0f088e85526a.png",
  },
];

const starter: SiteConfig = {
  business: "Trimurti Enterprises",
  headline: "Heavy Equipment that keeps projects moving.",
  description:
    "Industrial cranes, earthmoving machinery, and expert site support ready for your next infrastructure or construction project.",
  heroCtaText: "Get an equipment quote ↗",
  heroSecondaryCtaText: "Explore our fleet",
  heroImage: "/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png",
  logo: "/lovable-uploads/128b9340-0c29-4df1-80d0-dadb4dc2b0b9.png",
  accent: "#f48516",
  secondary: "#1992dc",
  typography: "classic-editorial",
  style: "Field notes",
  sections: ["about", "equipment", "projects", "contact"],
  aboutTitle: "People, certified machinery, and a job done right.",
  aboutText:
    "With over 15 years of industry experience across Maharashtra and western India, Trimurti Enterprises delivers reliable heavy equipment rentals, certified crane operators, and 24/7 on-site technical support for infrastructure, metro rail, and refinery projects.",
  projectsTitle: "Work that moves the world forward.",
  projectsText:
    "From structural steel erection to deep excavation and metro viaduct placement, we match the right machinery to the most demanding site challenges.",
  projectTags: [
    "Metro Rail & Highways",
    "Refinery Turnarounds",
    "Industrial Fabrication",
    "Precast Concrete Erection",
    "Heavy Earthmoving",
  ],
  equipmentTitle: "The Fleet: Built for heavy lifting.",
  equipmentText:
    "Explore our meticulously maintained crane and heavy machinery fleet, certified and ready for deployment.",
  machines: defaultMachines,
  contactTitle: "Start a conversation. Get your project moving.",
  contactText:
    "Tell us your site requirements, tonnage, or project location. Our equipment dispatch team will respond with a tailored quote within 30 minutes.",
  email: "info@trimurtienterprises.com",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  address: "Plot 42, Industrial Area, Navi Mumbai, Maharashtra 400705",
  gstin: "27AABCT1234F1Z8",
  hours: "Mon - Sat: 8:00 AM - 8:00 PM (Emergency Dispatch 24/7)",
};

const sectionLabels: Record<SectionId, string> = {
  about: "About us",
  equipment: "Equipment Fleet",
  projects: "Projects",
  contact: "Contact & Quotes",
};

const colorPresets = [
  { name: "Safety Orange & Blue", accent: "#f48516", secondary: "#1992dc" },
  { name: "Industrial Amber & Slate", accent: "#d97706", secondary: "#475569" },
  { name: "Emerald & Dark Teal", accent: "#16a34a", secondary: "#0f766e" },
  { name: "Navy & Construction Gold", accent: "#eab308", secondary: "#1e3a8a" },
  { name: "Heavy Graphite", accent: "#27272a", secondary: "#52525b" },
];

const typographyOptions: { id: TypographyPreset; label: string; fontStack: string }[] = [
  {
    id: "classic-editorial",
    label: "Classic Editorial",
    fontStack: "Georgia, 'Times New Roman', serif",
  },
  {
    id: "modern-sans",
    label: "Modern Sans",
    fontStack: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  {
    id: "industrial-mono",
    label: "Industrial Technical",
    fontStack: "'Trebuchet MS', 'Segoe UI', sans-serif",
  },
];

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[char] ?? char)
  );

const safeColor = (value: string, fallback: string) =>
  /^#[\da-f]{6}$/i.test(value) ? value : fallback;

function createSite(config: SiteConfig): string {
  const accent = safeColor(config.accent, "#f48516");
  const secondary = safeColor(config.secondary, "#1992dc");
  const fontPairing =
    typographyOptions.find((t) => t.id === config.typography)?.fontStack ||
    "Georgia, 'Times New Roman', serif";

  const nav = config.sections
    .map((id) => `<a href="#${id}">${sectionLabels[id]}</a>`)
    .join("");

  const sectionsHtml = config.sections
    .map((id) => {
      if (id === "about") {
        return `
        <section id="about" class="story">
          <p class="eyebrow">A little about us</p>
          <h2>${escapeHtml(config.aboutTitle)}</h2>
          <p class="section-lead">${escapeHtml(config.aboutText)}</p>
          <div class="stats-grid">
            <div class="stat-card"><strong>15+</strong><span>Years Experience</span></div>
            <div class="stat-card"><strong>500+</strong><span>Completed Projects</span></div>
            <div class="stat-card"><strong>100%</strong><span>TPI Certified Fleet</span></div>
            <div class="stat-card"><strong>24/7</strong><span>Emergency Support</span></div>
          </div>
        </section>`;
      }
      if (id === "equipment") {
        const machineCards = config.machines
          .map(
            (machine) => `
          <article class="machine-card">
            <div class="machine-image-wrap">
              <img src="${machine.image}" alt="${escapeHtml(machine.name)}" loading="lazy">
              <span class="machine-badge">${escapeHtml(machine.capacity)}</span>
            </div>
            <div class="machine-info">
              <h3>${escapeHtml(machine.name)}</h3>
              <p>Capacity: <strong>${escapeHtml(machine.capacity)}</strong></p>
              <a href="#contact" class="machine-inquire-btn" data-machine="${escapeHtml(machine.name)}">Request Quote ↗</a>
            </div>
          </article>`
          )
          .join("");

        return `
        <section id="equipment" class="equipment">
          <div class="section-header">
            <p class="eyebrow">The fleet</p>
            <h2>${escapeHtml(config.equipmentTitle)}</h2>
            <p class="section-lead">${escapeHtml(config.equipmentText)}</p>
          </div>
          <div class="machine-grid">
            ${machineCards}
          </div>
        </section>`;
      }
      if (id === "projects") {
        const tagSpans = config.projectTags
          .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
          .join("");

        return `
        <section id="projects" class="projects">
          <p class="eyebrow">On site & Track Record</p>
          <h2>${escapeHtml(config.projectsTitle)}</h2>
          <p class="section-lead">${escapeHtml(config.projectsText)}</p>
          <div class="project-strip">
            ${tagSpans}
          </div>
        </section>`;
      }
      if (id === "contact") {
        const machineOptions = config.machines
          .map((m) => `<option value="${escapeHtml(m.name)}">${escapeHtml(m.name)} (${escapeHtml(m.capacity)})</option>`)
          .join("");

        return `
        <section id="contact" class="contact">
          <div class="contact-details">
            <p class="eyebrow">Start a conversation</p>
            <h2>${escapeHtml(config.contactTitle)}</h2>
            <p class="section-lead">${escapeHtml(config.contactText)}</p>
            
            <div class="info-blocks">
              <div class="info-item">
                <strong>Direct Phone</strong>
                <a href="tel:${escapeHtml(config.phone.replace(/[^+\d]/g, ""))}" class="contact-link">${escapeHtml(config.phone)}</a>
              </div>
              ${config.whatsapp ? `
              <div class="info-item">
                <strong>WhatsApp Fast-Track</strong>
                <a href="https://wa.me/${escapeHtml(config.whatsapp.replace(/\D/g, ""))}?text=${encodeURIComponent("Hello Trimurti Enterprises, I would like to inquire about machinery rental.")}" target="_blank" rel="noopener" class="contact-link whatsapp-link">Chat on WhatsApp ↗</a>
              </div>` : ""}
              <div class="info-item">
                <strong>Email Address</strong>
                <a href="mailto:${escapeHtml(config.email)}" class="contact-link">${escapeHtml(config.email)}</a>
              </div>
              <div class="info-item">
                <strong>Yard & Office Address</strong>
                <span>${escapeHtml(config.address)}</span>
              </div>
              ${config.gstin ? `
              <div class="info-item">
                <strong>GSTIN Registration</strong>
                <span>${escapeHtml(config.gstin)}</span>
              </div>` : ""}
              ${config.hours ? `
              <div class="info-item">
                <strong>Operating Hours</strong>
                <span>${escapeHtml(config.hours)}</span>
              </div>` : ""}
            </div>
          </div>

          <div class="form-container">
            <form id="inquiry-form" class="inquiry-box">
              <h3>Equipment Quote Request</h3>
              <p class="form-subtitle">Fill in your requirements for a prompt official quote.</p>
              
              <label>
                Your Full Name or Contractor Company *
                <input name="name" type="text" required placeholder="e.g. Ramesh Patil / ABC Infra">
              </label>

              <div class="form-row">
                <label>
                  Mobile Number *
                  <input name="mobile" type="tel" required placeholder="e.g. 9876543210">
                </label>
                <label>
                  Email Address
                  <input name="email" type="email" placeholder="e.g. info@company.com">
                </label>
              </div>

              <div class="form-row">
                <label>
                  Machine Required
                  <select name="machine">
                    <option value="Any / Consultation">Select equipment (or general inquiry)</option>
                    ${machineOptions}
                  </select>
                </label>
                <label>
                  Job Site Location / City
                  <input name="location" type="text" placeholder="e.g. Navi Mumbai / Pune">
                </label>
              </div>

              <label>
                Lifting / Project Scope Requirements
                <textarea name="message" rows="3" placeholder="Provide details such as tonnage required, lift height, rental duration (days/months)..."></textarea>
              </label>

              <div class="form-actions">
                <button type="submit" class="submit-button">Submit Quote Request ↗</button>
              </div>
              <div id="form-feedback" class="form-feedback hidden"></div>
            </form>
          </div>
        </section>`;
      }
      return "";
    })
    .join("");

  const logoMarkup = config.logo
    ? `<img class="logo" src="${config.logo}" alt="${escapeHtml(config.business)}">`
    : `<span class="wordmark">${escapeHtml(config.business)}</span>`;

  const heroStyle = config.heroImage
    ? `background: linear-gradient(90deg, rgba(18,28,27,0.92), rgba(18,28,27,0.35)), url('${config.heroImage}') center 45%/cover;`
    : `background: #1e2823;`;

  const layoutClass =
    config.style === "Workshop"
      ? "workshop"
      : config.style === "Modern"
      ? "modern"
      : "field-notes";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(config.business)} | Heavy Equipment & Crane Rental</title>
  <meta name="description" content="${escapeHtml(config.description)}">
  <meta property="og:title" content="${escapeHtml(config.business)}">
  <meta property="og:description" content="${escapeHtml(config.description)}">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "${escapeHtml(config.business)}",
    "description": "${escapeHtml(config.description)}",
    "telephone": "${escapeHtml(config.phone)}",
    "email": "${escapeHtml(config.email)}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "${escapeHtml(config.address)}"
    }
  }
  </script>
  <style>
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: #f7f7f3;
      color: #202823;
      font-family: ${fontPairing};
      font-size: 16px;
      line-height: 1.6;
    }
    a { color: inherit; text-decoration: none; }
    
    .site {
      --accent: ${accent};
      --secondary: ${secondary};
      --paper: #f7f7f3;
      --ink: #202823;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 50;
      height: 72px;
      padding: 0 6%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      border-bottom: 1px solid #e5e9e5;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      color: #121c1b;
    }
    .logo {
      max-width: 150px;
      height: 44px;
      object-fit: contain;
    }
    .wordmark {
      font-size: 19px;
      font-weight: 800;
      letter-spacing: -0.01em;
    }
    .nav {
      display: flex;
      gap: 24px;
      font-size: 14px;
      font-weight: 600;
    }
    .nav a {
      transition: color 0.15s ease;
    }
    .nav a:hover {
      color: var(--secondary);
    }

    .hero {
      min-height: 440px;
      padding: 72px 7%;
      display: flex;
      align-items: center;
      color: #ffffff;
      ${heroStyle}
    }
    .hero-copy {
      max-width: 660px;
    }
    .eyebrow {
      display: inline-block;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #cbe3f5;
      margin-bottom: 8px;
    }
    .hero h1 {
      font-size: clamp(34px, 5.2vw, 56px);
      font-weight: 700;
      line-height: 1.08;
      margin: 12px 0 16px;
    }
    .hero p {
      font-size: 17px;
      color: #e5ece6;
      max-width: 520px;
      line-height: 1.5;
    }
    .hero-actions {
      display: flex;
      gap: 14px;
      margin-top: 28px;
      flex-wrap: wrap;
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 13px 22px;
      font-weight: 700;
      font-size: 14px;
      border: 0;
      cursor: pointer;
      background: var(--accent);
      color: #ffffff;
      border-radius: 3px;
      transition: transform 0.15s ease, filter 0.15s ease;
    }
    .cta-btn:hover {
      transform: translateY(-1px);
      filter: brightness(1.06);
    }
    .cta-btn.alt {
      background: var(--secondary);
    }

    .story, .projects, .equipment, .contact {
      padding: 72px 7%;
    }
    .story {
      max-width: 1040px;
      background: #ffffff;
    }
    .story h2, .projects h2, .equipment h2, .contact h2 {
      font-size: clamp(28px, 3.8vw, 40px);
      font-weight: 700;
      line-height: 1.15;
      margin: 10px 0 14px;
    }
    .section-lead {
      color: #55615a;
      max-width: 680px;
      font-size: 16px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-top: 36px;
      padding-top: 28px;
      border-top: 1px solid #e8ede8;
    }
    .stat-card strong {
      display: block;
      font-size: 32px;
      font-weight: 800;
      color: var(--accent);
    }
    .stat-card span {
      font-size: 13px;
      font-weight: 600;
      color: #637068;
    }

    .equipment {
      background: #fbfbf8;
    }
    .machine-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 22px;
      margin-top: 32px;
    }
    .machine-card {
      background: #ffffff;
      border: 1px solid #e1e7e2;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .machine-card:hover {
      box-shadow: 0 10px 24px rgba(20,35,25,0.08);
      transform: translateY(-2px);
    }
    .machine-image-wrap {
      position: relative;
      width: 100%;
      height: 180px;
      background: #eaefea;
      overflow: hidden;
    }
    .machine-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .machine-badge {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(18,28,27,0.85);
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 2px;
    }
    .machine-info {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .machine-info h3 {
      font-size: 17px;
      margin: 0 0 6px;
      color: #1a2520;
    }
    .machine-info p {
      font-size: 13px;
      color: #626e67;
      margin: 0 0 16px;
    }
    .machine-inquire-btn {
      margin-top: auto;
      display: inline-block;
      text-align: center;
      padding: 9px 14px;
      font-size: 13px;
      font-weight: 700;
      background: #edf3ee;
      color: #1d2d25;
      border: 1px solid #d5ded6;
      border-radius: 3px;
      transition: background 0.15s ease;
    }
    .machine-inquire-btn:hover {
      background: var(--accent);
      color: #ffffff;
      border-color: var(--accent);
    }

    .projects {
      background: #edf2ee;
    }
    .project-strip {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 26px;
    }
    .project-tag {
      background: #ffffff;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 700;
      color: #212c26;
      border-left: 4px solid var(--accent);
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }

    .contact {
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      gap: 48px;
    }
    .info-blocks {
      display: grid;
      gap: 16px;
      margin-top: 28px;
    }
    .info-item {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
    .info-item strong {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #79867e;
      margin-bottom: 2px;
    }
    .contact-link {
      font-weight: 700;
      color: var(--secondary);
    }
    .whatsapp-link {
      color: #15803d;
    }
    
    .inquiry-box {
      background: #f7f9f7;
      border: 1px solid #dce4dc;
      padding: 28px;
      border-radius: 4px;
    }
    .inquiry-box h3 {
      margin: 0 0 4px;
      font-size: 20px;
    }
    .form-subtitle {
      font-size: 13px;
      color: #66726b;
      margin: 0 0 18px;
    }
    .inquiry-box label {
      display: grid;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      color: #313d36;
      margin-bottom: 12px;
    }
    .inquiry-box input, .inquiry-box select, .inquiry-box textarea {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #cad4cb;
      background: #ffffff;
      font-size: 14px;
      font-family: inherit;
      border-radius: 3px;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .submit-button {
      width: 100%;
      padding: 13px;
      background: var(--accent);
      color: #ffffff;
      border: 0;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 3px;
      transition: filter 0.15s ease;
    }
    .submit-button:hover {
      filter: brightness(1.08);
    }
    .form-feedback {
      margin-top: 14px;
      padding: 12px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 600;
    }
    .form-feedback.success {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #bbf7d0;
    }
    .hidden { display: none; }

    .footer {
      padding: 32px 7%;
      background: #17211c;
      color: #c9d3cb;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }

    /* Style variants */
    .workshop .topbar {
      border-bottom: 3px solid var(--accent);
    }
    .workshop .story {
      border-left: 5px solid var(--accent);
    }
    .workshop .machine-card {
      border: 2px solid #202d26;
      border-radius: 0;
    }
    .workshop .project-tag {
      border: 1px solid #202d26;
      border-left: 4px solid var(--accent);
      border-radius: 0;
    }

    .modern .topbar {
      background: #141c18;
      color: #ffffff;
      border-bottom: 0;
    }
    .modern .brand {
      color: #ffffff;
    }
    .modern .nav a:hover {
      color: var(--accent);
    }
    .modern .machine-card {
      border-radius: 12px;
      overflow: hidden;
    }
    .modern .project-tag {
      border-radius: 99px;
    }

    @media (max-width: 820px) {
      .contact {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      .form-row {
        grid-template-columns: 1fr;
      }
      .topbar {
        height: auto;
        padding: 14px 6%;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
      .nav {
        flex-wrap: wrap;
        gap: 16px;
      }
      .hero {
        padding: 54px 6%;
      }
      .story, .projects, .equipment, .contact {
        padding: 54px 6%;
      }
    }
  </style>
</head>
<body class="${layoutClass}">
  <div class="site">
    <header class="topbar">
      <a class="brand" href="#top">
        ${logoMarkup}
        ${config.logo ? `<span>${escapeHtml(config.business)}</span>` : ""}
      </a>
      <nav class="nav">
        ${nav}
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(config.business)}</p>
          <h1>${escapeHtml(config.headline)}</h1>
          <p>${escapeHtml(config.description)}</p>
          <div class="hero-actions">
            <a class="cta-btn" href="#contact">${escapeHtml(config.heroCtaText)}</a>
            <a class="cta-btn alt" href="#equipment">${escapeHtml(config.heroSecondaryCtaText)}</a>
          </div>
        </div>
      </section>

      ${sectionsHtml}
    </main>

    <footer class="footer">
      <div>© ${new Date().getFullYear()} ${escapeHtml(config.business)} · All Rights Reserved.</div>
      <div>${escapeHtml(config.phone)} · ${escapeHtml(config.email)}</div>
    </footer>
  </div>

  <script>
    // Quick machine pre-select
    document.querySelectorAll('.machine-inquire-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var machineName = this.getAttribute('data-machine');
        var select = document.querySelector('select[name="machine"]');
        if (select && machineName) {
          select.value = machineName;
        }
      });
    });

    // Inquiry form submission
    var form = document.getElementById('inquiry-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var data = new FormData(form);
        var name = data.get('name') || '';
        var mobile = data.get('mobile') || '';
        var email = data.get('email') || '';
        var machine = data.get('machine') || '';
        var locationText = data.get('location') || '';
        var message = data.get('message') || '';

        var feedback = document.getElementById('form-feedback');
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = '✓ Thank you, ' + name + '! Your quote request for <strong>' + machine + '</strong> has been logged. Our dispatch manager will contact you at ' + mobile + '.';
          feedback.scrollIntoView({ behavior: 'smooth' });
        }

        var subject = encodeURIComponent('Rental Quote Request: ' + machine + ' from ' + name);
        var body = encodeURIComponent(
          'Name: ' + name + '\\n' +
          'Mobile: ' + mobile + '\\n' +
          'Email: ' + email + '\\n' +
          'Equipment: ' + machine + '\\n' +
          'Location: ' + locationText + '\\n\\n' +
          'Requirements:\\n' + message
        );

        // If WhatsApp number is available, user can also initiate chat
        ${
          config.whatsapp
            ? `
        var waPhone = "${escapeHtml(config.whatsapp.replace(/\D/g, ""))}";
        if (confirm("Quote recorded! Would you also like to open WhatsApp to chat with our fleet dispatch directly?")) {
          window.open("https://wa.me/" + waPhone + "?text=" + body, "_blank");
        } else {
          location.href = "mailto:${escapeHtml(config.email)}?subject=" + subject + "&body=" + body;
        }
        `
            : `
        location.href = "mailto:${escapeHtml(config.email)}?subject=" + subject + "&body=" + body;
        `
        }
      });
    }
  </script>
</body>
</html>`;
}

const fieldClass = "mt-1.5 border-[#dce2dc] bg-white text-sm focus-visible:ring-[#1992dc]";

const STORAGE_KEY = "trimurti_site_builder_state_v1";

const Index = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);

  const [site, setSite] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...starter, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return starter;
  });

  const [activeTab, setActiveTab] = useState<"brand" | "sections" | "style" | "export">("brand");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  // Auto-save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(site));
    } catch {
      // ignore
    }
  }, [site]);

  const preview = useMemo(() => createSite(site), [site]);

  const update = <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) =>
    setSite((current) => ({ ...current, [key]: value }));

  const toggleSection = (id: SectionId) =>
    update(
      "sections",
      site.sections.includes(id)
        ? site.sections.filter((item) => item !== id)
        : [...site.sections, id]
    );

  const moveSection = (id: SectionId, direction: "up" | "down") => {
    const idx = site.sections.indexOf(id);
    if (idx === -1) return;
    const newSections = [...site.sections];
    if (direction === "up" && idx > 0) {
      const temp = newSections[idx - 1];
      newSections[idx - 1] = newSections[idx];
      newSections[idx] = temp;
      update("sections", newSections);
    } else if (direction === "down" && idx < newSections.length - 1) {
      const temp = newSections[idx + 1];
      newSections[idx + 1] = newSections[idx];
      newSections[idx] = temp;
      update("sections", newSections);
    }
  };

  const uploadLogo = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("logo", String(reader.result));
    reader.readAsDataURL(file);
  };

  const uploadHeroImage = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("heroImage", String(reader.result));
    reader.readAsDataURL(file);
  };

  // Machine fleet manager
  const addMachine = () => {
    const newMachine: MachineItem = {
      id: `m_${Date.now()}`,
      name: "Hydraulic Mobile Crane",
      capacity: "25–50 tonnes",
      image: "/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png",
    };
    update("machines", [...site.machines, newMachine]);
  };

  const updateMachine = (id: string, updates: Partial<MachineItem>) => {
    update(
      "machines",
      site.machines.map((m) => (m.id === id ? { ...m, ...updates } : m))
    );
  };

  const deleteMachine = (id: string) => {
    update(
      "machines",
      site.machines.filter((m) => m.id !== id)
    );
  };

  const uploadMachineImage = (id: string, file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateMachine(id, { image: String(reader.result) });
    reader.readAsDataURL(file);
  };

  // Project tags
  const [newTagInput, setNewTagInput] = useState("");
  const addProjectTag = () => {
    if (!newTagInput.trim()) return;
    if (!site.projectTags.includes(newTagInput.trim())) {
      update("projectTags", [...site.projectTags, newTagInput.trim()]);
    }
    setNewTagInput("");
  };

  const removeProjectTag = (tag: string) => {
    update(
      "projectTags",
      site.projectTags.filter((t) => t !== tag)
    );
  };

  // Standalone exporter
  const downloadSite = async () => {
    const assets = [
      ...new Set(
        [
          site.logo,
          site.heroImage,
          ...site.machines.map((machine) => machine.image),
        ].filter((path) => path && path.startsWith("/"))
      ),
    ];

    const portableAssets = await Promise.all(
      assets.map(async (path) => {
        try {
          const response = await fetch(path);
          if (!response.ok) return [path, path] as const;
          const blob = await response.blob();
          const dataUrl = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = () => resolve(path);
            reader.readAsDataURL(blob);
          });
          return [path, dataUrl] as const;
        } catch {
          return [path, path] as const;
        }
      })
    );

    const portableHtml = portableAssets.reduce(
      (html, [path, dataUrl]) => html.split(path).join(dataUrl),
      preview
    );

    const file = new Blob([portableHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${
      site.business
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "business-site"
    }.html`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    toast({
      title: "Site Exported!",
      description: "Downloaded standalone HTML file with self-contained assets.",
    });
    window.setTimeout(() => setDownloaded(false), 2500);
  };

  const copyHtml = () => {
    navigator.clipboard.writeText(preview);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Complete HTML copied to clipboard.",
    });
    window.setTimeout(() => setCopied(false), 2000);
  };

  const exportConfigJson = () => {
    const blob = new Blob([JSON.stringify(site, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "trimurti-site-config.json";
    link.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Config Exported",
      description: "Downloaded trimurti-site-config.json backup.",
    });
  };

  const importConfigJson = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setSite({ ...starter, ...parsed });
        toast({
          title: "Config Imported!",
          description: "Successfully loaded saved site configuration.",
        });
      } catch {
        toast({
          title: "Import Error",
          description: "Invalid JSON configuration file.",
          variant: "destructive",
        });
      }
    };
    reader.readAsText(file);
  };

  const resetStarter = () => {
    if (confirm("Reset all settings to starter defaults?")) {
      setSite(starter);
      localStorage.removeItem(STORAGE_KEY);
      toast({
        title: "Reset Complete",
        description: "Restored starting configuration.",
      });
    }
  };

  const openNewTab = () => {
    const win = window.open();
    if (win) {
      win.document.write(preview);
      win.document.close();
    }
  };

  return (
    <main className="builder-shell min-h-screen">
      <header className="builder-topbar">
        <a href="#editor" className="builder-brand">
          <span className="brand-mark">
            <Layers3 size={18} />
          </span>
          <span>
            FIELD / FORM
            <small>Business Site Studio · Trimurti Enterprises</small>
          </span>
        </a>
        <div className="topbar-center">
          <span className="status-dot" />
          Draft auto-saved locally
        </div>
        <div className="topbar-actions">
          <Button
            variant="outline"
            size="sm"
            className="reset-button"
            onClick={resetStarter}
          >
            <RotateCcw size={14} className="mr-1" /> Reset
          </Button>
          <Button
            size="sm"
            className="download-button"
            onClick={downloadSite}
          >
            <Download size={14} className="mr-1" />
            {downloaded ? "Exported!" : "Export Standalone Site"}
          </Button>
        </div>
      </header>

      <div className="builder-heading">
        <div>
          <p className="overline">PRODUCTION-READY SITE BUILDER</p>
          <h1>
            Craft a portal that fits <em>your heavy equipment business.</em>
          </h1>
          <p className="heading-copy">
            Configure identity, fleet machinery, project credentials, and export a 100% portable HTML file.
          </p>
        </div>
        <div className="heading-count">
          <span>01</span>
          <span>
            of 01
            <br />
            studio
          </span>
        </div>
      </div>

      <div id="editor" className="builder-grid">
        {/* Editor Sidebar */}
        <aside className="editor-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">CONFIGURATION</p>
              <h2>Editor Controls</h2>
            </div>
            <Settings2 size={18} />
          </div>

          <div className="editor-tabs" role="tablist" aria-label="Site settings">
            {[
              { id: "brand", label: "Brand", icon: Sparkles },
              { id: "sections", label: "Sections", icon: Layers3 },
              { id: "style", label: "Style", icon: Palette },
              { id: "export", label: "Export", icon: Download },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  size="sm"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={activeTab === tab.id ? "editor-tab active" : "editor-tab"}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                >
                  <Icon size={14} />
                  {tab.label}
                </Button>
              );
            })}
          </div>

          <div className="editor-content overflow-y-auto max-h-[calc(100vh-280px)]">
            {/* BRAND TAB */}
            {activeTab === "brand" && (
              <div className="form-stack">
                <div className="field-group">
                  <Label htmlFor="business">Business name</Label>
                  <Input
                    id="business"
                    className={fieldClass}
                    value={site.business}
                    onChange={(e) => update("business", e.target.value)}
                  />
                </div>
                <div className="field-group">
                  <Label htmlFor="headline">Main Hero Headline</Label>
                  <Input
                    id="headline"
                    className={fieldClass}
                    value={site.headline}
                    onChange={(e) => update("headline", e.target.value)}
                  />
                </div>
                <div className="field-group">
                  <Label htmlFor="description">Hero Subtitle & Meta Description</Label>
                  <Textarea
                    id="description"
                    className={fieldClass}
                    rows={2}
                    value={site.description}
                    onChange={(e) => update("description", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="field-group">
                    <Label htmlFor="heroCtaText">Primary CTA Button</Label>
                    <Input
                      id="heroCtaText"
                      className={fieldClass}
                      value={site.heroCtaText}
                      onChange={(e) => update("heroCtaText", e.target.value)}
                    />
                  </div>
                  <div className="field-group">
                    <Label htmlFor="heroSecondaryCtaText">Secondary CTA Button</Label>
                    <Input
                      id="heroSecondaryCtaText"
                      className={fieldClass}
                      value={site.heroSecondaryCtaText}
                      onChange={(e) => update("heroSecondaryCtaText", e.target.value)}
                    />
                  </div>
                </div>

                {/* Logo Uploader */}
                <div className="field-group">
                  <Label>Brand Logo</Label>
                  <label className="upload-control">
                    <ImagePlus size={17} />
                    <span>
                      {site.logo ? "Logo Loaded (Click to change)" : "Choose a Logo"}
                      <small>PNG, JPG or SVG image</small>
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => uploadLogo(e.target.files?.[0])}
                    />
                  </label>
                  {site.logo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-red-600 h-6 p-0 mt-1"
                      onClick={() => update("logo", "")}
                    >
                      Remove Logo (Use wordmark)
                    </Button>
                  )}
                </div>

                {/* Hero Background Image */}
                <div className="field-group">
                  <Label>Hero Background Photo</Label>
                  <label className="upload-control">
                    <Upload size={17} />
                    <span>
                      Upload Hero Background
                      <small>High-resolution machinery backdrop</small>
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => uploadHeroImage(e.target.files?.[0])}
                    />
                  </label>
                </div>

                <div className="field-divider" />
                <p className="group-label">CONTACT & REGISTRATION</p>

                <div className="field-group">
                  <Label htmlFor="email">Support Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className={fieldClass}
                    value={site.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="field-group">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      className={fieldClass}
                      value={site.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                  <div className="field-group">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      className={fieldClass}
                      value={site.whatsapp}
                      onChange={(e) => update("whatsapp", e.target.value)}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <Label htmlFor="address">Yard / Office Address</Label>
                  <Input
                    id="address"
                    className={fieldClass}
                    value={site.address}
                    onChange={(e) => update("address", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="field-group">
                    <Label htmlFor="gstin">GSTIN Number</Label>
                    <Input
                      id="gstin"
                      className={fieldClass}
                      value={site.gstin}
                      onChange={(e) => update("gstin", e.target.value)}
                    />
                  </div>
                  <div className="field-group">
                    <Label htmlFor="hours">Operating Hours</Label>
                    <Input
                      id="hours"
                      className={fieldClass}
                      value={site.hours}
                      onChange={(e) => update("hours", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SECTIONS TAB */}
            {activeTab === "sections" && (
              <div className="form-stack">
                <p className="section-intro">
                  Toggle, re-order, and manage the content for each portal section.
                </p>

                {/* Section Ordering & Toggles */}
                <div className="space-y-3">
                  {site.sections.map((id, index) => (
                    <div key={id} className="p-3 border rounded bg-white shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 font-bold text-xs cursor-pointer">
                          <Checkbox
                            checked={site.sections.includes(id)}
                            onCheckedChange={() => toggleSection(id)}
                          />
                          <span>{sectionLabels[id]}</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            disabled={index === 0}
                            onClick={() => moveSection(id, "up")}
                            title="Move Up"
                          >
                            <ArrowUp size={12} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            disabled={index === site.sections.length - 1}
                            onClick={() => moveSection(id, "down")}
                            title="Move Down"
                          >
                            <ArrowDown size={12} />
                          </Button>
                        </div>
                      </div>

                      {/* Content editor per section */}
                      {id === "about" && (
                        <div className="pt-2 border-t space-y-2">
                          <Input
                            placeholder="About Section Heading"
                            className={fieldClass}
                            value={site.aboutTitle}
                            onChange={(e) => update("aboutTitle", e.target.value)}
                          />
                          <Textarea
                            placeholder="About Story / Description"
                            className={fieldClass}
                            rows={3}
                            value={site.aboutText}
                            onChange={(e) => update("aboutText", e.target.value)}
                          />
                        </div>
                      )}

                      {id === "equipment" && (
                        <div className="pt-2 border-t space-y-3">
                          <Input
                            placeholder="Equipment Heading"
                            className={fieldClass}
                            value={site.equipmentTitle}
                            onChange={(e) => update("equipmentTitle", e.target.value)}
                          />
                          <Textarea
                            placeholder="Equipment Subtitle"
                            className={fieldClass}
                            rows={2}
                            value={site.equipmentText}
                            onChange={(e) => update("equipmentText", e.target.value)}
                          />

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] font-bold text-gray-700">
                              Fleet Machines ({site.machines.length})
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 text-[11px] gap-1"
                              onClick={addMachine}
                            >
                              <Plus size={12} /> Add Machine
                            </Button>
                          </div>

                          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                            {site.machines.map((machine) => (
                              <div
                                key={machine.id}
                                className="p-2 border rounded bg-gray-50 text-xs space-y-1.5"
                              >
                                <div className="flex items-center justify-between">
                                  <Input
                                    value={machine.name}
                                    placeholder="Machine Name"
                                    className="h-7 text-xs bg-white"
                                    onChange={(e) =>
                                      updateMachine(machine.id, { name: e.target.value })
                                    }
                                  />
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 text-red-500 hover:text-red-700 ml-1"
                                    onClick={() => deleteMachine(machine.id)}
                                  >
                                    <Trash2 size={12} />
                                  </Button>
                                </div>
                                <Input
                                  value={machine.capacity}
                                  placeholder="Capacity / Tonnage (e.g. 50–100 tonnes)"
                                  className="h-7 text-xs bg-white"
                                  onChange={(e) =>
                                    updateMachine(machine.id, { capacity: e.target.value })
                                  }
                                />
                                <div className="flex items-center gap-2">
                                  <img
                                    src={machine.image}
                                    alt={machine.name}
                                    className="w-10 h-7 object-cover rounded border"
                                  />
                                  <label className="text-[10px] text-blue-600 hover:underline cursor-pointer">
                                    Change image
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={(e) =>
                                        uploadMachineImage(machine.id, e.target.files?.[0])
                                      }
                                    />
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {id === "projects" && (
                        <div className="pt-2 border-t space-y-2">
                          <Input
                            placeholder="Projects Heading"
                            className={fieldClass}
                            value={site.projectsTitle}
                            onChange={(e) => update("projectsTitle", e.target.value)}
                          />
                          <Textarea
                            placeholder="Projects Description"
                            className={fieldClass}
                            rows={2}
                            value={site.projectsText}
                            onChange={(e) => update("projectsText", e.target.value)}
                          />

                          <div className="pt-1">
                            <span className="text-[11px] font-bold text-gray-700 block mb-1">
                              Sector & Capability Tags
                            </span>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {site.projectTags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-200 text-[11px]"
                                >
                                  {tag}
                                  <button
                                    type="button"
                                    onClick={() => removeProjectTag(tag)}
                                    className="hover:text-red-600 font-bold"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-1">
                              <Input
                                placeholder="Add sector tag..."
                                className="h-7 text-xs"
                                value={newTagInput}
                                onChange={(e) => setNewTagInput(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    addProjectTag();
                                  }
                                }}
                              />
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 text-xs px-2"
                                onClick={addProjectTag}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {id === "contact" && (
                        <div className="pt-2 border-t space-y-2">
                          <Input
                            placeholder="Contact Heading"
                            className={fieldClass}
                            value={site.contactTitle}
                            onChange={(e) => update("contactTitle", e.target.value)}
                          />
                          <Textarea
                            placeholder="Contact Subtitle / Instructions"
                            className={fieldClass}
                            rows={2}
                            value={site.contactText}
                            onChange={(e) => update("contactText", e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STYLE TAB */}
            {activeTab === "style" && (
              <div className="form-stack">
                <p className="section-intro">
                  Select a layout direction, typography pairing, and brand colors.
                </p>

                <p className="group-label">LAYOUT THEME</p>
                <div className="style-choices">
                  {(["Field notes", "Workshop", "Modern"] as const).map((style) => (
                    <Button
                      key={style}
                      variant="outline"
                      className={
                        site.style === style ? "style-choice selected" : "style-choice"
                      }
                      onClick={() => update("style", style)}
                    >
                      <span
                        className={`style-swatch ${style.toLowerCase().replace(" ", "-")}`}
                      />
                      <span>{style}</span>
                      {site.style === style && <span className="selected-mark">✓</span>}
                    </Button>
                  ))}
                </div>

                <div className="field-divider" />
                <p className="group-label">TYPOGRAPHY</p>
                <div className="grid gap-2">
                  {typographyOptions.map((item) => (
                    <Button
                      key={item.id}
                      variant="outline"
                      size="sm"
                      className={`justify-between text-xs h-9 ${
                        site.typography === item.id ? "border-[#d7771b] bg-[#fffaf4]" : ""
                      }`}
                      onClick={() => update("typography", item.id)}
                    >
                      <span style={{ fontFamily: item.fontStack }}>{item.label}</span>
                      {site.typography === item.id && (
                        <Check size={14} className="text-[#cd7017]" />
                      )}
                    </Button>
                  ))}
                </div>

                <div className="field-divider" />
                <p className="group-label">PRESET PALETTES</p>
                <div className="grid gap-1.5">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      className="flex items-center justify-between p-2 rounded border bg-white hover:border-[#1992dc] text-left text-xs transition"
                      onClick={() => {
                        update("accent", preset.accent);
                        update("secondary", preset.secondary);
                      }}
                    >
                      <span className="font-semibold text-gray-700">{preset.name}</span>
                      <div className="flex gap-1.5">
                        <span
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: preset.accent }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: preset.secondary }}
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="field-divider" />
                <p className="group-label">CUSTOM BRAND PALETTE</p>

                <div className="color-editor">
                  <Label htmlFor="accent-color">Primary Accent (CTAs & Highlights)</Label>
                  <div>
                    <Input
                      id="accent-color"
                      type="color"
                      value={safeColor(site.accent, "#f48516")}
                      onChange={(e) => update("accent", e.target.value)}
                    />
                    <Input
                      aria-label="Main accent hex"
                      value={site.accent}
                      onChange={(e) => update("accent", e.target.value)}
                    />
                  </div>
                </div>

                <div className="color-editor">
                  <Label htmlFor="secondary-color">Secondary Accent (Links & Accents)</Label>
                  <div>
                    <Input
                      id="secondary-color"
                      type="color"
                      value={safeColor(site.secondary, "#1992dc")}
                      onChange={(e) => update("secondary", e.target.value)}
                    />
                    <Input
                      aria-label="Second accent hex"
                      value={site.secondary}
                      onChange={(e) => update("secondary", e.target.value)}
                    />
                  </div>
                </div>

                <div className="palette-preview">
                  <span style={{ backgroundColor: safeColor(site.accent, "#f48516") }} />
                  <span style={{ backgroundColor: safeColor(site.secondary, "#1992dc") }} />
                  <span className="paper-swatch" />
                  <span className="ink-swatch" />
                  <small>Primary · Secondary · Paper · Ink</small>
                </div>
              </div>
            )}

            {/* EXPORT TAB */}
            {activeTab === "export" && (
              <div className="form-stack space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    Export Standalone Single-File Site
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Downloads an all-in-one HTML bundle with inlined images, CSS, and interactive JavaScript. Zero dependencies, ready to host anywhere.
                  </p>
                  <Button className="w-full gap-2 bg-[#dc7918] hover:bg-[#c8670c]" onClick={downloadSite}>
                    <Download size={16} />
                    {downloaded ? "Downloaded!" : "Download Portable HTML"}
                  </Button>
                </div>

                <div className="border-t pt-3">
                  <h4 className="text-xs font-bold text-gray-800 mb-1">Copy Raw HTML</h4>
                  <p className="text-[11px] text-gray-500 mb-2">
                    Copy complete markup to clipboard to paste into Webflow, WordPress, or GitHub Pages.
                  </p>
                  <Button variant="outline" size="sm" className="w-full gap-2" onClick={copyHtml}>
                    {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                    {copied ? "Copied to Clipboard!" : "Copy HTML Code"}
                  </Button>
                </div>

                <div className="border-t pt-3">
                  <h4 className="text-xs font-bold text-gray-800 mb-1">Backup & Restore Config</h4>
                  <p className="text-[11px] text-gray-500 mb-2">
                    Save your site data as a JSON file or restore a previous session.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="gap-1 text-xs" onClick={exportConfigJson}>
                      <FileJson size={14} /> Export JSON
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 text-xs"
                      onClick={() => jsonInputRef.current?.click()}
                    >
                      <Upload size={14} /> Import JSON
                    </Button>
                    <input
                      ref={jsonInputRef}
                      type="file"
                      accept=".json"
                      className="hidden"
                      onChange={(e) => importConfigJson(e.target.files?.[0])}
                    />
                  </div>
                </div>

                <div className="border-t pt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs text-red-600 hover:text-red-700"
                    onClick={resetStarter}
                  >
                    Reset Everything to Starter Defaults
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="editor-footer">
            <span>Real-time preview synchronized</span>
            <span className="live-dot" />
            Live
          </div>
        </aside>

        {/* Live Preview Area */}
        <section className="preview-area" aria-label="Live site preview">
          <div className="preview-toolbar">
            <div className="preview-title">
              <Eye size={15} />
              <span>LIVE PREVIEW</span>
              <span className="preview-divider">/</span>
              <span className="preview-business">{site.business || "Your business"}</span>
            </div>

            {/* Viewport & preview controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded bg-white p-0.5 shadow-xs">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-6 w-6 ${viewport === "desktop" ? "bg-gray-100 font-bold" : ""}`}
                  onClick={() => setViewport("desktop")}
                  title="Desktop View (Full Width)"
                >
                  <Monitor size={13} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-6 w-6 ${viewport === "tablet" ? "bg-gray-100 font-bold" : ""}`}
                  onClick={() => setViewport("tablet")}
                  title="Tablet View (768px)"
                >
                  <Tablet size={13} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-6 w-6 ${viewport === "mobile" ? "bg-gray-100 font-bold" : ""}`}
                  onClick={() => setViewport("mobile")}
                  title="Mobile View (375px)"
                >
                  <Smartphone size={13} />
                </Button>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => setPreviewKey((k) => k + 1)}
                title="Refresh Preview"
              >
                <RefreshCw size={12} />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={openNewTab}
                title="Open Preview in New Tab"
              >
                <ExternalLink size={12} />
              </Button>
            </div>
          </div>

          {/* Device Frame */}
          <div
            className={`preview-frame transition-all duration-300 mx-auto ${
              viewport === "tablet"
                ? "max-w-[768px] border-4 border-gray-700 rounded-xl"
                : viewport === "mobile"
                ? "max-w-[375px] border-8 border-gray-800 rounded-2xl"
                : "w-full"
            }`}
          >
            <iframe
              key={previewKey}
              title="Live business website preview"
              srcDoc={preview}
            />
          </div>

          <div className="preview-caption">
            <LayoutTemplate size={15} />
            <span>
              {viewport.toUpperCase()} VIEWPORT · Real-time single-page preview with embedded styles & scripts.
            </span>
            <span className="caption-line" />
          </div>
        </section>
      </div>

      <footer className="builder-footer">
        <span>
          FIELD / FORM <span className="footer-dot">·</span> BUSINESS SITE STUDIO
        </span>
        <span>
          A lightweight, portable architecture for Trimurti Enterprises.
        </span>
      </footer>
    </main>
  );
};

export default Index;
