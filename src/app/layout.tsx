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
  description: "AI Engineer & AI Solutions Engineer with 5+ years shipping production AI systems across energy, fintech, and edtech. Expert in GenAI, Agentic RAG, and Multi-Agent Orchestration (Core LangGraph Contributor) and the Microsoft AI stack — Azure AI Foundry, Copilot Studio, and Fabric Data Agents. Python, FastAPI, React, Cloud-Native.",
  keywords: "AI Engineer, Machine Learning Engineer, ML Engineer, Predictive Maintenance, Anomaly Detection, Real-Time Classification, MLOps, PyTorch, Scikit-Learn, Time-Series, LSTM, Isolation Forest, Feature Engineering, Model Serving, Python, FastAPI, Docker, Kubernetes, Azure ML, Production ML Systems",
  openGraph: {
    title: "David Fernandez | AI Engineer",
    description: "AI Engineer & AI Solutions Engineer with 5+ years shipping production AI systems across energy, fintech, and edtech. Expert in GenAI, Agentic RAG, and Multi-Agent Orchestration (Core LangGraph Contributor) and the Microsoft AI stack.",
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
    description: "AI Engineer & AI Solutions Engineer with 5+ years shipping production AI systems across energy, fintech, and edtech. Expert in GenAI, Agentic RAG, and Multi-Agent Orchestration (Core LangGraph Contributor) and the Microsoft AI stack.",
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
