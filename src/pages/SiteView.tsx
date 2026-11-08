import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit3, Download, ExternalLink } from "lucide-react";
import { starter, createSite, SiteConfig, STORAGE_KEY } from "./Index";

const SiteView = () => {
  const [site] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...starter,
          ...parsed,
          machines:
            Array.isArray(parsed.machines) && parsed.machines.length > 0
              ? parsed.machines
              : starter.machines,
          projectTags:
            Array.isArray(parsed.projectTags) && parsed.projectTags.length > 0
              ? parsed.projectTags
              : starter.projectTags,
          sections:
            Array.isArray(parsed.sections) && parsed.sections.length > 0
              ? parsed.sections
              : starter.sections,
        };
      }
    } catch {
      // ignore
    }
    return starter;
  });

  const html = useMemo(() => createSite(site), [site]);

  const openCleanNewTab = () => {
    const win = window.open();
    if (win) {
      win.document.write(html);
      win.document.close();
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Floating Action Controls */}
      <header className="fixed top-3 right-4 z-50 flex items-center gap-2 bg-gray-900/90 backdrop-blur-md p-1.5 rounded-xl shadow-2xl border border-white/20">
        <Link to="/">
          <Button
            size="sm"
            variant="ghost"
            className="text-xs font-semibold text-white hover:bg-white/10 gap-1.5 h-8"
          >
            <ArrowLeft size={13} /> Back to Studio Editor
          </Button>
        </Link>
        <div className="w-[1px] h-4 bg-white/20" />
        <Button
          size="sm"
          variant="ghost"
          className="text-xs font-semibold text-orange hover:bg-orange/10 gap-1.5 h-8"
          onClick={openCleanNewTab}
        >
          <ExternalLink size={13} /> Full Window
        </Button>
      </header>

      {/* Rendered Site */}
      <iframe
        title="Trimurti Enterprises Business Portal"
        srcDoc={html}
        className="w-full h-screen border-0 block"
      />
    </div>
  );
};

export default SiteView;
