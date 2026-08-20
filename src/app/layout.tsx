// app/layout.tsx
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://www.swarajyaconsultancy.in"),
  title: {
    default:
      "Swarajya Consultancy | Premium Software Solutions & Digital Products",
    template: "%s | Swarajya Consultancy",
  },
  description:
    "Swarajya Consultancy crafts premium digital products and software solutions. From full-stack development to cybersecurity — we engineer excellence.",
  keywords: [
    "Swarajya Consultancy",
    "Software Solutions",
    "Digital Products",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "CyberSecurity Solutions",
    "ISO 27001 Consulting",
    "Analytics",
    "Power BI",
    "XpenseControl",
    "AskIT",
  ],
  openGraph: {
    title:
      "Swarajya Consultancy | Premium Software Solutions & Digital Products",
    description:
      "We craft premium digital products and full-stack software solutions for businesses worldwide.",
    url: "https://www.swarajyaconsultancy.in",
    siteName: "Swarajya Consultancy",
    images: [
      {
        url: "/swarajya-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Swarajya Consultancy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.swarajyaconsultancy.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Swarajya Consultancy",
              url: "https://www.swarajyaconsultancy.in",
              logo: "https://www.swarajyaconsultancy.in/swarajya-logo-new.png",
              description:
                "Premium software solutions and digital products — full-stack development, cybersecurity, and business intelligence.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/company/swarajya-consultancy",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-surface-deep text-slate-100 dark:text-slate-100 antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Subtle dot pattern overlay behind everything */}
          <div className="fixed inset-0 dot-pattern opacity-30 pointer-events-none z-0" />

          <div className="relative z-10">
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </div>
          
          <ScrollProgress />

          {/* Render Navbar last in the DOM to absolutely guarantee it paints on top, bypassing any WebKit/backdrop-filter z-index bugs */}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
