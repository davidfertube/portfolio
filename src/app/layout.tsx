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
  description: "AI Engineer at Archrock, delivering enterprise AI end to end on the Microsoft AI platform: Microsoft Fabric and OneLake, Azure AI Foundry, Copilot Studio, Power BI, and Power Apps. Ships Copilot Studio agents in Teams, Azure AI Foundry agents with grounded RAG, and predictive maintenance models on Fabric. Expert in GenAI, Agentic RAG, and Multi Agent Orchestration (Core LangGraph Contributor). Python, FastAPI, React, Azure.",
  keywords: "AI Engineer, Microsoft AI Platform, Azure AI Foundry, Copilot Studio, Microsoft Fabric, Fabric Data Agents, OneLake, Power Platform, Power BI, Power Apps, Power Automate, Azure OpenAI, Azure ML, Entra ID, Machine Learning Engineer, ML Engineer, Agentic RAG, Multi Agent Orchestration, Predictive Maintenance, Anomaly Detection, MLOps, Python, FastAPI, Production ML Systems",
  openGraph: {
    title: "David Fernandez | AI Engineer",
    description: "AI Engineer at Archrock, delivering enterprise AI end to end on the Microsoft AI platform: Fabric, Azure AI Foundry, Copilot Studio, and Power Platform. Copilot Studio agents in Teams, Foundry agents with grounded RAG, and predictive maintenance on Fabric.",
    type: "website",
    url: "https://davidfernandez.dev",
    siteName: "David Fernandez",
    locale: "en_US",
    images: [
      {
        url: "/assets/photo.jpg",
        width: 120,
        height: 120,
        alt: "David Fernandez, AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Fernandez | AI Engineer",
    description: "AI Engineer at Archrock, delivering enterprise AI end to end on the Microsoft AI platform: Fabric, Azure AI Foundry, Copilot Studio, and Power Platform. Copilot Studio agents in Teams, Foundry agents with grounded RAG, and predictive maintenance on Fabric.",
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
