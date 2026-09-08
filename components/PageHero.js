export default function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="container narrow"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</div></section>;
}
