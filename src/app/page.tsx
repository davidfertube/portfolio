import AzureGraphBackground from '@/components/AzureGraphBackground';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.sphereContainer}>
          <AzureGraphBackground />
        </div>
        <div className={styles.titleContainer}>
          <h1>INDUSTRIAL AI ENGINEER</h1>
          <h2>AZURE NATIVE</h2>
        </div>
      </section>
    </main>
  );
}
