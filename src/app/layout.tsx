// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import PageWrapper from "@/components/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.swarajyaconsultancy.in"),
  title: {
    default: "Swarajya Consultancy | Software Solutions & Analytics",
    template: "%s | Swarajya Consultancy",
  },
  description:
    "Swarajya Consultancy brings 2+ years of expertise in software solutions.",
  keywords: [
    "Swarajya Consultancy",
    "Solution Company",
    "Software Solutions",
    "Analytics",
    "FullStack Solutions",
    "Frontend Development",
    "Backend Development",
    "CyberSecurity Solutions",
    "ISO 27001 Consulting",
  ],
  openGraph: {
    title:
      "Swarajya Consultancy | Web & Analytics Solution Experts in Maharashtra",
    description:
      "Experts in web technology solutions and analytics for your data.",
    url: "https://www.swarajyaconsultancy.in",
    siteName: "Swarajya Consultancy",
    images: [
      {
        url: "/swarajya-logo.png",
        width: 1200,
        height: 630,
        alt: "Swarajya Consultancy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Swarajya Consultancy | Trusted Civil & Interior Contractors",
  //   description:
  //     "Swarajya Consultancy specializes in civil, interior, and pharma-compliant turnkey projects across India.",
  //   images: ["https://www.swarajyaconsultancy.in/og-image.jpg"],
  //   creator: "@swarajyaconsultancy",
  // },
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
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />

        {/* ✅ Floating WhatsApp Button */}
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href="https://wa.link/g2fvot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <img
              src="/whatsapp-icon.png"
              alt="WhatsApp Chat"
              className="w-14 h-14 drop-shadow-xl rounded-full animate-bounce"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
