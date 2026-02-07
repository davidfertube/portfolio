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
  title: "David Fernandez | Cloud AI Engineer",
  description: "Cloud AI Engineer building agentic RAG pipelines, LLM failover systems, and serverless AI infrastructure. Contributor to LangGraph and Pydantic. Houston, TX.",
  keywords: "Cloud AI Engineer, Agentic RAG, LLM Infrastructure, GenAI, Serverless AI, Vector Databases, LangGraph, LangChain, LlamaIndex, Azure, GCP, Kubernetes, MLOps, CI/CD, Energy Industry, Houston, Python, TypeScript, Multi-Agent Orchestration",
  openGraph: {
    title: "David Fernandez | Cloud AI Engineer",
    description: "Cloud AI Engineer building agentic RAG pipelines, LLM failover systems, and serverless AI infrastructure. Contributor to LangGraph and Pydantic. Houston, TX.",
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
