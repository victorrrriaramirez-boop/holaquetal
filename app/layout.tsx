import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { site, images } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Solamente Cree | Centro Evangelístico en Madrid", template: "%s | Solamente Cree" },
  description: "Centro Evangelístico Solamente Cree en Madrid. Cultos dominicales, oración, consejería, alabanza y ministerio de Manuel y Toñy.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", locale: "es_ES", siteName: site.name, url: site.url, title: "Solamente Cree | Centro Evangelístico en Madrid", description: "Comunidad de fe, adoración y avivamiento en Madrid.", images: [{ url: images.multimedia, alt: "Centro Evangelístico Solamente Cree" }] },
  twitter: { card: "summary_large_image", title: "Solamente Cree | Centro Evangelístico en Madrid", description: "Comunidad de fe, adoración y avivamiento en Madrid.", images: [images.multimedia] },
  robots: { index: true, follow: true }
};

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": `${site.url}/#church`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: "Av. de Guadalajara, 2 (C.C. Las Rosas, CINESA Sala 7)", addressLocality: "Madrid", postalCode: "28032", addressRegion: "Madrid", addressCountry: "ES" },
  geo: { "@type": "GeoCoordinates", latitude: 40.423985, longitude: -3.626359 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "13:30" }],
  founder: [{ "@type": "Person", name: "Apóstol Manuel Ramírez de Arellano" }, { "@type": "Person", name: "Toñy" }],
  sameAs: [site.social.youtube, site.social.facebook, site.social.tiktok]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  return <html lang="es"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/></head><body>
    {gtm && <><Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}} /></>}
    {ga && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/><Script id="ga" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}} /></>}
    <StructuredData data={churchSchema} />
    <Header />{children}<Footer />
    <a className="floating-whatsapp" href={`${site.whatsapp}?text=Hola,%20quisiera%20recibir%20oración%20y%20atención%20pastoral`} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">WhatsApp</a>
  </body></html>;
}
