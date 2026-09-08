import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="hero-glow" /><div className="container hero-content"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children && <div className="hero-actions">{children}</div>}</div></section>;
}
