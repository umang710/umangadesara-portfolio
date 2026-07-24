import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MouseGlow } from "@/components/ui/MouseGlow";
// import { AudioWidget } from "@/components/ui/AudioWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umang Adesara | Builder",
  description: "Technical Founder & Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#09090b] text-zinc-50 antialiased relative min-h-screen`}
      >
        {/* Global Interactive Elements */}
        <MouseGlow />
        {/* <AudioWidget /> */}

        <Navbar />

        {/* Content Container */}
        <div className="pt-16 relative z-10">{children}</div>
      </body>
    </html>
  );
}
