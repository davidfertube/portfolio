import AzureGraphBackground from '@/components/AzureGraphBackground';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
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
