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
  title: "David Fernandez | Applied AI Engineer",
  description: "Applied AI Engineer with 5+ years delivering production-grade GenAI solutions for the energy industry.",
  keywords: "Applied AI Engineer, GenAI, LLM, RAG, LangGraph, LangChain, LlamaIndex, Azure, GCP, Kubernetes, MLOps, Energy Industry, Houston, Python, Vector Search, Multi-Agent Orchestration",
  openGraph: {
    title: "David Fernandez | Applied AI Engineer",
    description: "Applied AI Engineer with 5+ years delivering production-grade GenAI solutions for the energy industry.",
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
