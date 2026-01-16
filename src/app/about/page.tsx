import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'About | David Fernandez',
  description: 'About David Fernandez - Industrial AI Engineer specializing in energy and enterprise with expertise in Azure, GenAI, and production-grade AI systems',
};

const skills = [
  'Azure AI', 'Generative AI', 'LLM Ops', 'RAG Pipelines', 'Computer Vision',
  'SCADA/OT', 'Power BI', 'Python', 'Databricks', 'Digital Twins',
  'Predictive Maintenance', 'MLOps', 'Purdue Model (ISA-95)', 'OSIsoft PI',
  'OPC UA', 'Microsoft Fabric', 'KQL', 'Physics-Informed ML', 'DSPy', 'AutoGen'
];

const contributions = [
  'LangChain', 'LangGraph', 'Microsoft AutoGen', 'StanfordNLP', 'Unstructured.io', 'DSPy', 'HuggingFace'
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.layout}>
        {/* Column 1: Profile */}
        <div className={styles.profileCol}>
          <Image
            src="/assets/photo.jpg"
            alt="David Fernandez"
            width={140}
            height={140}
            className={styles.photo}
            priority
          />
          <h1>David Fernandez</h1>
          <p className={styles.subtitle}>INDUSTRIAL AI ENGINEER</p>
          <p className={styles.location}>Katy, TX</p>

          <div className={styles.summary}>
            <p>Building production-grade AI systems for energy and enterprise.</p>
            <p>Specializing in multi-agent systems, RAG pipelines, and computer vision for industrial applications.</p>
          </div>

          <div className={styles.socialLinks}>
            <a href="mailto:davidfertube@gmail.com" title="Email" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://github.com/davidfertube" target="_blank" rel="noopener noreferrer" title="GitHub" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/davidfertube/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://x.com/davidfertube" target="_blank" rel="noopener noreferrer" title="Twitter" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://huggingface.co/davidfertube" target="_blank" rel="noopener noreferrer" title="HuggingFace" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm3 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 6.5c.5 2 2 3.5 3.5 3.5s3-1.5 3.5-3.5c0-.276-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Experience & Education */}
        <div className={styles.mainCol}>
          <div className={styles.block}>
            <h2>Experience</h2>
            <div className={styles.expItem}>
              <strong>AI Engineer (Contributor)</strong>
              <span>Hugging Face | May 2024 - Present</span>
            </div>
            <div className={styles.expItem}>
              <strong>Product Engineer</strong>
              <span>TestMachine | Dec 2022 - Mar 2024</span>
            </div>
            <div className={styles.expItem}>
              <strong>Founder (Product)</strong>
              <span>Stealth AI Startup | Feb 2020 - Oct 2022</span>
            </div>
            <div className={styles.expItem}>
              <strong>Digital Project Coordinator</strong>
              <span>Global Team Blue (GTB) | Mar 2018 - Nov 2019</span>
            </div>
          </div>

          <div className={styles.block}>
            <h2>Education</h2>
            <div className={styles.expItem}>
              <strong>Master&apos;s degree, Artificial Intelligence</strong>
              <span>University of Colorado Boulder | 2026</span>
            </div>
            <div className={styles.expItem}>
              <strong>Bachelor&apos;s degree, Marketing</strong>
              <span>Lindenwood University | 2017</span>
            </div>
          </div>
        </div>

        {/* Column 3: Skills & Certs */}
        <div className={styles.sidebarCol}>
          <div className={styles.block}>
            <h2>Skills</h2>
            <div className={styles.tags}>
              {skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h2>Certifications</h2>
            <div className={styles.expItem}>
              <strong>Azure AI Engineer (AI-102)</strong>
              <span>Microsoft | 2026</span>
            </div>
          </div>

          <div className={styles.block}>
            <h2>Open Source</h2>
            <div className={styles.tags}>
              {contributions.map((contrib, i) => (
                <span key={i}>{contrib}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
