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
  title: "David Fernandez | Industrial AI Engineer",
  description: "Industrial AI Engineer specializing in Azure, Agentic RAG, Computer Vision, and LLM deployment for the Energy Corridor. Building production-grade AI systems for Oil & Gas, SCADA, and HSE compliance.",
  keywords: "Industrial AI, Industrial AI Engineer, Azure AI Engineer, Energy Corridor, Oil and Gas AI, Agentic RAG, LangGraph, Computer Vision, YOLOv8, SCADA Integration, OPC UA, OSDU, HSE Compliance, LLM Deployment",
  openGraph: {
    title: "David Fernandez | Industrial AI Engineer",
    description: "Building production-grade Agentic AI systems for the Energy Corridor",
    type: "website",
    url: "https://davidfernandez.dev",
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
