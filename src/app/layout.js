import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sleima Ducros - Portfolio",
  description: "Sleima Ducros - Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <div className="bg-grid" />
          <div className="bg-noise" />
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
