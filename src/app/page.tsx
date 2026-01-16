import AzureGraphBackground from '@/components/AzureGraphBackground';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <AzureGraphBackground />
      <section className={styles.hero}>
        <h1>INDUSTRIAL AI ENGINEER</h1>
        <h2>AZURE NATIVE</h2>
      </section>
    </main>
  );
}
