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
  title: 'Deep A Parmar',
  description: 'Portfolio for DAP Studios, DAP Tech Sol, and Deep Parmar. Providing innovative tech and design solutions for Surat, Gujarat, Vadodara, Vapi, and the world.',
  keywords: ['DAP Studios', 'Dap Tech Sol', 'Deep Parmar', 'Surat', 'Gujarat', 'Vadodara', 'Vapi', 'Creative Studio', 'Tech Solutions', 'Web Development'],
  icons: {
    icon: '/assets/ico.png'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} ${cormorant.variable} dark`}>
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-white/20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
