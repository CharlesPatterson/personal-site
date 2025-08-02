import { Metadata } from 'next';
import { Fira_Sans, Fira_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/lib/ui/components/Header';
import Footer from '@/lib/ui/components/Footer';

const firaSans = Fira_Sans({
  weight: '400',
  variable: '--font-fira-sans',
  subsets: ['latin'],
});

const firaMono = Fira_Mono({
  weight: '400',
  variable: '--font-fira-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Charles Patterson's Personal Site",
  description: "Charles Patterson's resume site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${firaSans.variable} ${firaMono.variable} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
