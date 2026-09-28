import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chopbeta-ai.vercel.app"),
  title: "Chop Beta AI — AI-Powered Food Decision Platform",
  description: "AI meal decisions built for Nigeria: health-aware, halal-safe suggestions, shopping lists in local market units, and ordering from market vendors. Join the waitlist.",
  openGraph: {
    title: "Chop Beta AI — AI-Powered Food Decision Platform",
    description: "AI meal decisions built for Nigeria: health-aware, halal-safe suggestions, shopping lists in local market units, and ordering from market vendors. Join the waitlist.",
    type: "website",
    images: [{ url: "/images/chop-beta-hero.png", width: 1672, height: 941, alt: "Chop Beta AI" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1E9054",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
