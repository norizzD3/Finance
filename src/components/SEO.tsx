import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | ProsperGuide`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Expert financial guides and tools.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description || "Expert financial guides and tools.";
      document.head.appendChild(meta);
    }
  }, [title, description, location.pathname]);

  return null;
}
