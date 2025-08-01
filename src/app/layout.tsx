import Header from "./ui/components/header";
import Footer from "./ui/components/footer";
import { Fira_Sans, Fira_Mono } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: "400",
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} ${firaMono.variable} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
