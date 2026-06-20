import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Great_Vibes, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-calligraphy',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Deep Parmar | Best Web Designer, Web Developer & Application Developer in Gujarat (Surat, Vapi, Vadodara, Ahmedabad) | DAP Studios',
  description: 'Looking for the best web designer, web developer, or application developer in Gujarat? Deep Parmar, founder of DAP Studios & DAP Tech Sol, offers premium web design & application development services in Surat, Vapi, Vadodara, and Ahmedabad.',
  keywords: [
    'Deep Parmar',
    'DAP Studios',
    'The DAP',
    'DAP Tech Sol',
    'web designer in Gujarat',
    'web developer in Gujarat',
    'application developer in Gujarat',
    'web designer in Surat',
    'web developer in Surat',
    'application developer in Surat',
    'web designer in Vapi',
    'web developer in Vapi',
    'application developer in Vapi',
    'web designer in Vadodara',
    'web developer in Vadodara',
    'application developer in Vadodara',
    'web designer in Ahmedabad',
    'web developer in Ahmedabad',
    'application developer in Ahmedabad'
  ],
  icons: {
    icon: '/assets/ico.png'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DAP Studios (The DAP)",
    "alternateName": "DAP Tech Sol",
    "image": "https://dapstudios.in/assets/ico.png", // Recommended: replace with your actual deployed URL
    "description": "Premium web design, web development, and application development agency run by Deep Parmar in Gujarat, serving clients in Surat, Vapi, Vadodara, and Ahmedabad.",
    "founder": {
      "@type": "Person",
      "name": "Deep Parmar",
      "jobTitle": ["Web Designer", "Web Developer", "Application Developer"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1702",
      "longitude": "72.8311"
    },
    "url": "https://dapstudios.in", // Recommended: replace with your actual domain
    "sameAs": [
      "https://github.com/Deep-Parmar",
      "https://www.linkedin.com/in/deep-parmar" // Recommended: update with actual profile links
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Surat" },
      { "@type": "AdministrativeArea", "name": "Vapi" },
      { "@type": "AdministrativeArea", "name": "Vadodara" },
      { "@type": "AdministrativeArea", "name": "Ahmedabad" },
      { "@type": "AdministrativeArea", "name": "Gujarat" }
    ],
    "knowsAbout": [
      "Web Design",
      "Web Development",
      "Application Development",
      "UI/UX Design",
      "Cloud Architecture"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} ${cormorant.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-white/20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
