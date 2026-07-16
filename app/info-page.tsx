import Link from "next/link";

type Section = { title: string; paragraphs?: React.ReactNode[]; items?: React.ReactNode[] };

export function InfoPage({ eyebrow, title, intro, updated, sections }: {
  eyebrow: string; title: string; intro: string; updated?: string; sections: Section[];
}) {
  return <main className="info-page">
    <nav className="info-nav"><Link href="/">Gridee</Link><div><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><Link href="/data-safety">Data Safety</Link></div></nav>
    <header className="info-hero"><p>{eyebrow}</p><h1>{title}</h1><div className="info-intro"><p>{intro}</p>{updated && <span>{updated}</span>}</div></header>
    <div className="info-content">
      {sections.map(section => <section className="info-card" key={section.title}><h2>{section.title}</h2>{section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.items && <ul>{section.items.map((item, index) => <li key={index}>{item}</li>)}</ul>}</section>)}
      <section className="info-contact"><h2>Questions?</h2><p>Our team is here to help.</p><a href="mailto:gridee.business@gmail.com">gridee.business@gmail.com</a></section>
    </div>
    <footer className="info-footer"><span>© 2026 Gridee. All rights reserved.</span><Link href="/">Back to Gridee</Link></footer>
  </main>;
}
