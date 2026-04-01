import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sirvato — The Autonomous Digital Empire Engine",
    template: "%s | Sirvato",
  },
  description:
    "Sirvato is a next-generation AI system that builds, manages, and scales your digital empire autonomously.",
  keywords: ["AI", "autonomous", "digital empire", "Sirvato", "AI system"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sirvato.io",
    siteName: "Sirvato",
    title: "Sirvato — The Autonomous Digital Empire Engine",
    description:
      "A next-generation AI system that builds, manages, and scales your digital empire autonomously.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
