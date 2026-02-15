import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Providers } from "./providers";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://davidfernandez.dev'),
  title: "David Fernandez | AI Engineer",
  description: "AI Engineer with 5 years of engineering and 3 years of production AI/ML systems. Building predictive maintenance, anomaly detection, and real-time classification systems. M.S. in AI at CU Boulder.",
  keywords: "AI Engineer, Machine Learning Engineer, ML Engineer, Predictive Maintenance, Anomaly Detection, Real-Time Classification, MLOps, PyTorch, Scikit-Learn, Time-Series, LSTM, Isolation Forest, Feature Engineering, Model Serving, Python, FastAPI, Docker, Kubernetes, Azure ML, Production ML Systems",
  openGraph: {
    title: "David Fernandez | AI Engineer",
    description: "AI Engineer with 5 years of engineering and 3 years of production AI/ML systems. Building predictive maintenance, anomaly detection, and real-time classification systems.",
    type: "website",
    url: "https://davidfernandez.dev",
    siteName: "David Fernandez",
    locale: "en_US",
    images: [
      {
        url: "/assets/photo.jpg",
        width: 120,
        height: 120,
        alt: "David Fernandez - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Fernandez | AI Engineer",
    description: "AI Engineer with 5 years of engineering and 3 years of production AI/ML systems. Predictive maintenance, anomaly detection, and real-time classification systems.",
    creator: "@davidfertube",
    images: ["/assets/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://davidfernandez.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
