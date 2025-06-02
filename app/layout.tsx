import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Retor Tech – Full-Stack Development & IT Consulting in Bengaluru',
  description: 'Retor Tech helps startups and SMEs ship full-stack apps faster. Web & mobile development, architecture, DevOps, security, and AI integration services.',
  keywords: 'IT consulting, web development, mobile apps, DevOps, Bengaluru, India',
  openGraph: {
    title: 'Retor Tech – IT Consultancy & Software Services',
    description: 'Building digital products that work. Based in Bengaluru, serving global clients.',
    url: 'https://retor.tech',
    siteName: 'Retor Tech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}