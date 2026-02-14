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
  title: "David Fernandez | Cloud AI Engineer",
  description: "Cloud AI Engineer building agentic RAG pipelines, LLM failover systems, and serverless AI infrastructure. Contributor to LangGraph and Pydantic. Houston, TX.",
  keywords: "Cloud AI Engineer, Agentic RAG, LLM Infrastructure, GenAI, Serverless AI, Vector Databases, LangGraph, LangChain, LlamaIndex, Azure, GCP, Kubernetes, MLOps, CI/CD, Energy Industry, Houston, Python, TypeScript, Multi-Agent Orchestration",
  openGraph: {
    title: "David Fernandez | Cloud AI Engineer",
    description: "Cloud AI Engineer building agentic RAG pipelines, LLM failover systems, and serverless AI infrastructure. Contributor to LangGraph and Pydantic. Houston, TX.",
    type: "website",
    url: "https://davidfernandez.dev",
    siteName: "David Fernandez",
    locale: "en_US",
    images: [
      {
        url: "/assets/photo.jpg",
        width: 120,
        height: 120,
        alt: "David Fernandez - Cloud AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Fernandez | Cloud AI Engineer",
    description: "Cloud AI Engineer building agentic RAG pipelines, LLM failover systems, and serverless AI infrastructure.",
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
