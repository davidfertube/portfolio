import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Blog | David Fernandez',
    description: 'Articles on Industrial AI, Azure, Computer Vision, and Multi-Agent Systems by David Fernandez',
};

export default function BlogPage() {
    return (
        <main className={styles.blogPage}>
            <div className={styles.header}>
                <h1>Blog</h1>
                <p className={styles.subtitle}>Insights on Industrial AI and Enterprise Systems</p>
            </div>

            <div className={styles.articleGrid}>
                <Link href="/blog/industrial-ai-portfolio" className={styles.articleCard}>
                    <div className={styles.articleMeta}>
                        <span className={styles.date}>January 15, 2026</span>
                        <span className={styles.readTime}>12 min read</span>
                    </div>
                    <h2>Building Production-Ready AI for the Energy Corridor</h2>
                    <p className={styles.excerpt}>
                        From Computer Vision to Multi-Agent Systems: How I built 8 production-ready AI demos
                        that address real challenges in the energy sector.
                    </p>
                    <div className={styles.tags}>
                        <span>Industrial AI</span>
                        <span>Azure</span>
                        <span>Computer Vision</span>
                        <span>LangGraph</span>
                    </div>
                </Link>
            </div>
        </main>
    );
}
