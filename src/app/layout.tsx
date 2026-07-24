import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { Footer } from "@/components/ui/Footer";
import { SplashScreen } from "@/components/ui/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umang Adesara | Builder",
  description: "Lead Software Engineer & Technical Founder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Changed background to Lavender Blush and base text to dark zinc */}
      <body
        className={`${inter.className} bg-[#F6E3E5] text-zinc-900 antialiased relative min-h-screen flex flex-col`}
      >
        {/* The Premium Background Grid - Tinted with Fuchsia Plum (#BB528A) at 15% opacity */}
        <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#BB528A25_1px,transparent_1px),linear-gradient(to_bottom,#BB528A25_1px,transparent_1px)] bg-[size:24px_24px]">
          {/* Changed the glow sphere to Fuchsia Plum */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#BB528A] opacity-[0.15] blur-[100px]"></div>
        </div>

        <SplashScreen />
        <MouseGlow />
        <Navbar />

        <div className="pt-16 relative z-10 flex-grow">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
