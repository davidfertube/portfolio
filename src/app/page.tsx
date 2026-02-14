import AzureGraphBackground from '@/components/AzureGraphBackground';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import styles from './page.module.css';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Fernandez',
    jobTitle: 'Cloud AI Engineer',
    url: 'https://davidfernandez.dev',
    sameAs: [
      'https://github.com/davidfertube',
      'https://linkedin.com/in/davidfertube',
      'https://x.com/davidfertube',
      'https://huggingface.co/davidfertube',
    ],
    email: 'davidfertube@gmail.com',
    image: 'https://davidfernandez.dev/assets/photo.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Katy',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'LangGraph',
      'Pydantic',
      'RAG Pipelines',
      'LLM Infrastructure',
      'Cloud Computing',
      'Energy Industry',
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Hero - Keep 3D sphere and titles */}
      <section id="hero" className={styles.hero}>
        <div className={styles.contentWrapper}>
          <div className={styles.sphereContainer}>
            <AzureGraphBackground />
          </div>
          <div className={styles.titleContainer}>
            <h1>AI ENGINEER</h1>
            <h2>
              <span>ENERGY INDUSTRY</span>
              <span className={styles.separator}>|</span>
              <span>Greater Houston</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2: About - Vertically centered */}
      <section id="about" className={styles.section}>
        <AboutSection />
      </section>

      {/* Section 3: Portfolio */}
      <section id="portfolio" className={styles.section}>
        <PortfolioSection />
      </section>
    </main>
  );
}
