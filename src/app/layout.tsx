import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { Footer } from "@/components/ui/Footer";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { ThemeProvider } from "@teispace/next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://umangadesara.com"),
  title: {
    default: "Umang Adesara | Full Stack & AI Engineer",
    template: "%s | Umang Adesara",
  },
  description:
    "Full Stack Software Engineer & Data Scientist specializing in React, Next.js, Python, and AI systems. Run an interactive AI match on my portfolio.",
  keywords: [
    "Umang Adesara",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Engineer",
    "Data Scientist",
    "AI Analyst",
    "Data Analyst",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "LLM",
    "RAG",
    "LangChain",
    "Groq LPU",
    "Portfolio",
  ],
  authors: [{ name: "Umang Adesara", url: "https://umangadesara.com" }],
  creator: "Umang Adesara",
  publisher: "Umang Adesara",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umangadesara.com",
    title: "Umang Adesara | Full Stack & AI Engineer",
    description:
      "Building scalable web architecture and data-driven AI systems. Run a semantic match on my stack.",
    siteName: "Umang Adesara Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Umang Adesara - Full Stack & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umang Adesara | Full Stack & AI Engineer",
    description:
      "Building scalable web architecture and data-driven AI systems. Run a semantic match on my stack.",
    images: ["/og-image.png"],
  },
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
        className={`${GeistSans.className} bg-brand-light dark:bg-background text-zinc-900 dark:text-zinc-100 antialiased relative min-h-screen flex flex-col transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Film Grain Noise Overlay */}
          <div
            className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] dark:opacity-[0.02]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          ></div>

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
