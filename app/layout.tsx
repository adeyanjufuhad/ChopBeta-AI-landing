import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "Chop Beta AI — AI-Powered Food Decision Platform",
  description: "AI food intelligence built for Nigeria. Join the Chop Beta AI waitlist.",
  openGraph: {
    title: "Chop Beta AI — AI-Powered Food Decision Platform",
    description: "AI food intelligence built for Nigeria. Join the Chop Beta AI waitlist.",
    type: "website",
    // TODO: add the final Open Graph image before launch.
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
