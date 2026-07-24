import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { Footer } from "@/components/ui/Footer";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { ThemeProvider } from "@teispace/next-themes";

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
    // suppressHydrationWarning is required by next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-brand-light dark:bg-background text-zinc-900 dark:text-zinc-100 antialiased relative min-h-screen flex flex-col transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* The Premium Background Grid - Adapts to Light and Dark Mode */}
          <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#BB528A25_1px,transparent_1px),linear-gradient(to_bottom,#BB528A25_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]">
            {/* The Glow Sphere - Uses clean brand-accent class */}
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-accent opacity-[0.15] dark:opacity-[0.10] blur-[100px]"></div>
          </div>

          <SplashScreen />
          <MouseGlow />
          <Navbar />

          <div className="pt-16 relative z-10 flex-grow">{children}</div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
