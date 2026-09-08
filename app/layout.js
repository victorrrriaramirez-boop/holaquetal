import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Analytics from '@/components/Analytics';
import { site, images, absolute } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Centro Evangelístico Solamente Cree | Madrid', template: '%s | Solamente Cree' },
  description: 'Centro Evangelístico Solamente Cree en Madrid. Culto dominical, oración, alabanza, predicación y ministerio de Manuel y Toñy.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'es_ES', siteName: site.name, url: site.url,
    title: 'Centro Evangelístico Solamente Cree | Madrid',
    description: 'Cultos, adoración, oración y ministerio en Madrid con Manuel y Toñy.',
    images: [{ url: images.media, width: 1200, height: 630, alt: 'Centro Evangelístico Solamente Cree en Madrid' }]
  },
  twitter: { card: 'summary_large_image', title: 'Centro Evangelístico Solamente Cree | Madrid', description: 'Cultos, adoración, oración y ministerio en Madrid con Manuel y Toñy.', images: [images.media] },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Church','LocalBusiness'], '@id': absolute('/#church'), name: site.name,
      alternateName: ['Iglesia Cristiana Solamente Cree','Dejan2huella Producciones'], url: site.url,
      image: images.media, logo: images.logo, telephone: site.phone, email: site.email,
      founder: [{ '@type':'Person', name:'Apóstol Manuel Ramírez de Arellano' }, { '@type':'Person', name:'Toñy' }],
      address: { '@type':'PostalAddress', streetAddress:'Av. de Guadalajara, 2 (C.C. Las Rosas, CINESA Sala 7)', addressLocality:'Madrid', postalCode:'28032', addressRegion:'Madrid', addressCountry:'ES' },
      geo: { '@type':'GeoCoordinates', latitude:40.423985, longitude:-3.626359 },
      openingHoursSpecification: [{ '@type':'OpeningHoursSpecification', dayOfWeek:'Sunday', opens:'11:00', closes:'13:30' }],
      sameAs: [site.socials.youtube,site.socials.facebook,site.socials.tiktok]
    },
    { '@type':'WebSite', '@id': absolute('/#website'), url: site.url, name: site.name, inLanguage:'es-ES' }
  ]
};

export default function RootLayout({ children }) {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  return <html lang="es"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}} />
  </head><body>
    {gtm && <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtm}`} height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>}
    <Header />
    <main>{children}</main>
    <Footer />
    <WhatsAppFloat />
    <Analytics />
  </body></html>;
}
