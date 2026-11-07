import { useMemo, useState } from "react";
import { Download, Eye, ImagePlus, LayoutTemplate, Layers3, Palette, Plus, RotateCcw, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SectionId = "about" | "projects" | "equipment" | "contact";
type SiteConfig = {
  business: string;
  headline: string;
  description: string;
  logo: string;
  accent: string;
  secondary: string;
  sections: SectionId[];
  about: string;
  projects: string;
  equipment: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  style: "Field notes" | "Workshop" | "Modern";
};

const starter: SiteConfig = {
  business: "Trimurti Enterprises",
  headline: "Equipment that keeps projects moving.",
  description: "Construction equipment and dependable support, ready for your next project.",
  logo: "/lovable-uploads/128b9340-0c29-4df1-80d0-dadb4dc2b0b9.png",
  accent: "#f48516",
  secondary: "#1992dc",
  sections: ["about", "projects", "equipment", "contact"],
  about: "A reliable equipment partner for construction, infrastructure and industrial projects.",
  projects: "From structural work to earthmoving, we bring the right equipment and experienced support to each site.",
  equipment: "Explore a capable fleet, selected to meet demanding site requirements.",
  contact: "Tell us what your project needs. Our team will help you find the right equipment.",
  email: "info@trimurtienterprises.com",
  phone: "+91 98765 43210",
  address: "Mumbai, Maharashtra, India",
  style: "Field notes",
};

const sectionLabels: Record<SectionId, string> = {
  about: "About us",
  projects: "Projects",
  equipment: "Equipment",
  contact: "Contact",
};

const machines = [
  { name: "Pick and carry crane", capacity: "15–23 tonnes", image: "/lovable-uploads/582481b6-7488-47d8-ba5c-0d01d2bd2eaf.png" },
  { name: "Telescopic crane", capacity: "50–100 tonnes", image: "/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png" },
  { name: "Crawler crane", capacity: "50–250 tonnes", image: "/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png" },
];

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);
const safeColor = (value: string, fallback: string) => /^#[\da-f]{6}$/i.test(value) ? value : fallback;

function createSite(config: SiteConfig) {
  const accent = safeColor(config.accent, "#f48516");
  const secondary = safeColor(config.secondary, "#1992dc");
  const nav = config.sections.map((id) => `<a href="#${id}">${sectionLabels[id]}</a>`).join("");
  const sections = config.sections.map((id) => {
    if (id === "about") return `<section id="about" class="story"><p class="eyebrow">A little about us</p><h2>People, equipment, and a job done right.</h2><p>${escapeHtml(config.about)}</p></section>`;
    if (id === "projects") return `<section id="projects" class="projects"><p class="eyebrow">On site</p><h2>Work that moves the world forward.</h2><p>${escapeHtml(config.projects)}</p><div class="project-strip"><span>Industrial</span><span>Infrastructure</span><span>Earthmoving</span></div></section>`;
    if (id === "equipment") return `<section id="equipment" class="equipment"><p class="eyebrow">The fleet</p><h2>Ready for the work ahead.</h2><p>${escapeHtml(config.equipment)}</p><div class="machine-grid">${machines.map((machine) => `<article><img src="${machine.image}" alt="${machine.name}"><div><h3>${machine.name}</h3><p>${machine.capacity}</p></div></article>`).join("")}</div></section>`;
    return `<section id="contact" class="contact"><div><p class="eyebrow">Start a conversation</p><h2>Let’s get your project moving.</h2><p>${escapeHtml(config.contact)}</p><p>${escapeHtml(config.email)}<br>${escapeHtml(config.phone)}<br>${escapeHtml(config.address)}</p></div><form id="inquiry"><label>Your name<input name="name" required></label><div class="form-row"><label>Email<input name="email" type="email"></label><label>Mobile<input name="mobile" type="tel"></label></div><label>How can we help?<textarea name="message" required rows="3"></textarea></label><button type="submit">Send an enquiry ↗</button></form></section>`;
  }).join("");
  const layout = config.style === "Workshop" ? "workshop" : config.style === "Modern" ? "modern" : "field-notes";
  const logo = config.logo ? `<img class="logo" src="${config.logo}" alt="${escapeHtml(config.business)}">` : `<span class="wordmark">${escapeHtml(config.business)}</span>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(config.business)}</title><meta name="description" content="${escapeHtml(config.description)}"><style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f7f7f3;color:#202823;font:16px/1.6 Arial,sans-serif}a{color:inherit;text-decoration:none}.site{--accent:${accent};--secondary:${secondary};--paper:#f7f7f3;--ink:#202823}.topbar{height:74px;padding:0 7%;display:flex;align-items:center;justify-content:space-between;background:#fff}.brand{display:flex;align-items:center;gap:12px;font-weight:700}.logo{width:auto;max-width:150px;height:46px;object-fit:contain}.wordmark{font-size:18px}.nav{display:flex;gap:26px;font-size:13px}.nav a:hover{color:var(--secondary)}.hero{min-height:400px;padding:68px 8%;display:flex;align-items:center;background:linear-gradient(90deg,rgba(18,28,27,.88),rgba(18,28,27,.22)),url('/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png') center 45%/cover;color:white}.hero-copy{max-width:620px}.eyebrow{text-transform:uppercase;font-size:11px;font-weight:700;letter-spacing:1.5px;color:var(--secondary)}.hero .eyebrow{color:#d2e8f5}.hero h1{font:700 clamp(36px,6vw,64px)/1.03 Georgia,serif;margin:14px 0 18px}.hero p{max-width:480px;color:#e5e9e5}.actions{display:flex;gap:12px;margin-top:26px}.cta,form button{display:inline-flex;border:0;background:var(--accent);color:white;padding:12px 18px;font-weight:700;cursor:pointer}.cta.alt{background:var(--secondary)}.story,.projects,.equipment,.contact{padding:72px 8%}.story{max-width:1000px}.story h2,.projects h2,.equipment h2,.contact h2{font:700 38px/1.1 Georgia,serif;max-width:650px;margin:12px 0}.story>p:last-child,.projects>p:not(.eyebrow),.equipment>p:not(.eyebrow),.contact>div>p:not(.eyebrow){max-width:650px;color:#58625d}.projects{background:#eaf0eb}.project-strip{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}.project-strip span{padding:12px 18px;background:#fff;border-left:3px solid var(--accent)}.equipment{background:#fff}.machine-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}.machine-grid article{border:1px solid #e4e8e3}.machine-grid img{width:100%;height:150px;object-fit:cover}.machine-grid article div{padding:12px}.machine-grid h3{font-size:15px;margin:0}.machine-grid article p{font-size:13px;color:#68716c;margin:4px 0 0}.contact{display:grid;grid-template-columns:1fr 1fr;gap:44px;background:#eaf0eb}.contact form{display:grid;gap:12px}.contact label{display:grid;gap:5px;font-size:12px;font-weight:700}.contact input,.contact textarea{width:100%;border:1px solid #d4dcd6;padding:11px;font:inherit;background:white}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.contact form button{justify-content:center}.footer{padding:22px 8%;background:#202823;color:#e9eeea;font-size:12px}.workshop .hero{min-height:350px}.workshop .story{border-left:4px solid var(--accent);margin:30px 8%;padding:24px 30px}.workshop .topbar{border-bottom:3px solid var(--accent)}.modern .topbar{background:#202823;color:white}.modern .hero{min-height:450px}.modern .story{margin-left:auto;margin-right:auto;text-align:center}.modern .story h2,.modern .story>p:last-child{margin-left:auto;margin-right:auto}.modern .project-strip span{border-radius:24px}@media(max-width:650px){.topbar{height:auto;min-height:70px;padding:12px 5%;align-items:flex-start;gap:12px;flex-direction:column}.nav{gap:14px;flex-wrap:wrap}.hero{min-height:390px;padding:48px 7%}.story,.projects,.equipment,.contact{padding:52px 7%}.story h2,.projects h2,.equipment h2,.contact h2{font-size:32px}.machine-grid{grid-template-columns:1fr}.machine-grid img{height:190px}.contact{grid-template-columns:1fr;gap:20px}.form-row{grid-template-columns:1fr}.actions{flex-wrap:wrap}}
</style></head><body><div class="site"><header class="topbar"><a class="brand" href="#top">${logo}${config.logo ? `<span>${escapeHtml(config.business)}</span>` : ""}</a><nav class="nav">${nav}</nav></header><main id="top"><section class="hero"><div class="hero-copy"><p class="eyebrow">${escapeHtml(config.business)}</p><h1>${escapeHtml(config.headline)}</h1><p>${escapeHtml(config.description)}</p><div class="actions"><a class="cta" href="#contact">Get in touch ↗</a><a class="cta alt" href="#equipment">Explore the fleet</a></div></div></section>${sections}</main><footer class="footer">© ${new Date().getFullYear()} ${escapeHtml(config.business)} · ${escapeHtml(config.email)} · ${escapeHtml(config.phone)}</footer></div><script>document.querySelector('#inquiry')?.addEventListener('submit',function(e){e.preventDefault();const f=new FormData(this);if(!f.get('email')&&!f.get('mobile')){alert('Please enter an email address or mobile number.');return}const subject=encodeURIComponent('Website enquiry from '+f.get('name'));const body=encodeURIComponent(f.get('message')+'\n\nReply to: '+(f.get('email')||f.get('mobile')));location.href='mailto:${escapeHtml(config.email)}?subject='+subject+'&body='+body;});</script></body></html>`;
}

const fieldClass = "mt-1.5 border-[#dce2dc] bg-white text-sm focus-visible:ring-[#1992dc]";

const Index = () => {
  const [site, setSite] = useState<SiteConfig>(starter);
  const [activeTab, setActiveTab] = useState<"brand" | "sections" | "style">("brand");
  const [downloaded, setDownloaded] = useState(false);
  const preview = useMemo(() => createSite(site), [site]);

  const update = <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => setSite((current) => ({ ...current, [key]: value }));
  const toggleSection = (id: SectionId) => update("sections", site.sections.includes(id) ? site.sections.filter((item) => item !== id) : [...site.sections, id]);
  const uploadLogo = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("logo", String(reader.result));
    reader.readAsDataURL(file);
  };
  const downloadSite = async () => {
    const assets = [...new Set([site.logo, ...machines.map((machine) => machine.image), "/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png"]).filter((path) => path.startsWith("/"))];
    const portableAssets = await Promise.all(assets.map(async (path) => {
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
    }));
    const portableHtml = portableAssets.reduce((html, [path, dataUrl]) => html.split(path).join(dataUrl), preview);
    const file = new Blob([portableHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${site.business.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "business-site"}.html`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 2500);
  };

  return <main className="builder-shell min-h-screen">
    <header className="builder-topbar">
      <a href="#editor" className="builder-brand"><span className="brand-mark"><Layers3 size={18} /></span><span>FIELD / FORM<small>Business site studio</small></span></a>
      <div className="topbar-center"><span className="status-dot" />Draft saved locally</div>
      <div className="topbar-actions"><Button variant="outline" size="sm" className="reset-button" onClick={() => setSite(starter)}><RotateCcw size={15} /> Reset</Button><Button size="sm" className="download-button" onClick={downloadSite}><Download size={15} />{downloaded ? "Downloaded" : "Export site"}</Button></div>
    </header>

    <div className="builder-heading"><div><p className="overline">A SMALL, REPEATABLE START</p><h1>Make a site that feels like <em>your business.</em></h1><p className="heading-copy">Keep the useful structure. Change the story, the sections, and the look.</p></div><div className="heading-count"><span>01</span><span>of 01<br />site</span></div></div>

    <div id="editor" className="builder-grid">
      <aside className="editor-panel">
        <div className="panel-heading"><div><p className="overline">YOUR STARTING POINT</p><h2>Site details</h2></div><Settings2 size={18} /></div>
        <div className="editor-tabs" role="tablist" aria-label="Site settings">
          {(["brand", "sections", "style"] as const).map((tab) => <Button key={tab} variant="ghost" size="sm" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "editor-tab active" : "editor-tab"} onClick={() => setActiveTab(tab)}>{tab === "brand" ? <Sparkles size={15} /> : tab === "sections" ? <Layers3 size={15} /> : <Palette size={15} />}{tab === "brand" ? "Brand" : tab === "sections" ? "Sections" : "Style"}</Button>)}
        </div>

        <div className="editor-content">
          {activeTab === "brand" && <div className="form-stack">
            <div className="field-group"><Label htmlFor="business">Business name</Label><Input id="business" className={fieldClass} value={site.business} onChange={(event) => update("business", event.target.value)} /></div>
            <div className="field-group"><Label htmlFor="headline">Main headline</Label><Input id="headline" className={fieldClass} value={site.headline} onChange={(event) => update("headline", event.target.value)} /></div>
            <div className="field-group"><Label htmlFor="description">Short description</Label><Textarea id="description" className={fieldClass} rows={3} value={site.description} onChange={(event) => update("description", event.target.value)} /></div>
            <div className="field-group"><Label>Logo</Label><label className="upload-control"><ImagePlus size={17} /><span>{site.logo.startsWith("data:") ? "Logo selected" : "Choose a logo"}<small>PNG, JPG or SVG image</small></span><input type="file" accept="image/*" onChange={(event) => uploadLogo(event.target.files?.[0])} /></label></div>
            <div className="field-divider" /><p className="group-label">Contact details</p>
            <div className="field-group"><Label htmlFor="email">Email address</Label><Input id="email" type="email" className={fieldClass} value={site.email} onChange={(event) => update("email", event.target.value)} /></div>
            <div className="field-group"><Label htmlFor="phone">Phone number</Label><Input id="phone" className={fieldClass} value={site.phone} onChange={(event) => update("phone", event.target.value)} /></div>
            <div className="field-group"><Label htmlFor="address">Address</Label><Input id="address" className={fieldClass} value={site.address} onChange={(event) => update("address", event.target.value)} /></div>
          </div>}

          {activeTab === "sections" && <div className="form-stack">
            <p className="section-intro">Pick the pieces this business needs, then add its own details.</p>
            {(["about", "projects", "equipment", "contact"] as SectionId[]).map((id) => <div className="section-editor" key={id}>
              <label className="section-toggle"><Checkbox checked={site.sections.includes(id)} onCheckedChange={() => toggleSection(id)} /><span>{sectionLabels[id]}</span><span className="section-plus"><Plus size={15} /></span></label>
              {site.sections.includes(id) && id !== "contact" && <Textarea aria-label={`${sectionLabels[id]} details`} className={fieldClass} rows={3} value={site[id]} onChange={(event) => update(id, event.target.value)} />}
              {site.sections.includes(id) && id === "contact" && <Textarea aria-label="Contact details" className={fieldClass} rows={3} value={site.contact} onChange={(event) => update("contact", event.target.value)} />}
            </div>)}
            <p className="section-footnote">Equipment photos and project examples are included in the starting template.</p>
          </div>}

          {activeTab === "style" && <div className="form-stack">
            <p className="section-intro">Choose a visual starting point and set your brand colors.</p>
            <p className="group-label">LAYOUT DIRECTION</p>
            <div className="style-choices">{(["Field notes", "Workshop", "Modern"] as const).map((style) => <Button key={style} variant="outline" className={site.style === style ? "style-choice selected" : "style-choice"} onClick={() => update("style", style)}><span className={`style-swatch ${style.toLowerCase().replace(" ", "-")}`} /><span>{style}</span>{site.style === style && <span className="selected-mark">✓</span>}</Button>)}</div>
            <div className="field-divider" /><p className="group-label">BRAND PALETTE</p>
            <div className="color-editor"><Label htmlFor="accent-color">Main accent</Label><div><Input id="accent-color" type="color" value={safeColor(site.accent, "#f48516")} onChange={(event) => update("accent", event.target.value)} /><Input aria-label="Main accent hex" value={site.accent} onChange={(event) => update("accent", event.target.value)} /></div></div>
            <div className="color-editor"><Label htmlFor="secondary-color">Second accent</Label><div><Input id="secondary-color" type="color" value={safeColor(site.secondary, "#1992dc")} onChange={(event) => update("secondary", event.target.value)} /><Input aria-label="Second accent hex" value={site.secondary} onChange={(event) => update("secondary", event.target.value)} /></div></div>
            <div className="palette-preview"><span style={{ backgroundColor: safeColor(site.accent, "#f48516") }} /><span style={{ backgroundColor: safeColor(site.secondary, "#1992dc") }} /><span className="paper-swatch" /><span className="ink-swatch" /><small>Accent · Accent · Paper · Ink</small></div>
          </div>}
        </div>
        <div className="editor-footer"><span>Changes appear in your preview</span><span className="live-dot" />Live</div>
      </aside>

      <section className="preview-area" aria-label="Live site preview">
        <div className="preview-toolbar"><div className="preview-title"><Eye size={15} /><span>LIVE PREVIEW</span><span className="preview-divider">/</span><span className="preview-business">{site.business || "Your business"}</span></div><div className="preview-device"><span className="device-indicator" />Desktop view</div></div>
        <div className="preview-frame"><iframe title="Live business website preview" srcDoc={preview} /></div>
        <div className="preview-caption"><LayoutTemplate size={15} /><span>A clear framework, ready for its own character.</span><span className="caption-line" /></div>
      </section>
    </div>
    <footer className="builder-footer"><span>FIELD / FORM <span className="footer-dot">·</span> BUSINESS SITE STUDIO</span><span>One good structure. Room for every business to make it their own.</span></footer>
  </main>;
};

export default Index;