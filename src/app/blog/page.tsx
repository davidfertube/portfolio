import styles from './page.module.css';


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
                <p style={{ textAlign: 'center', color: 'var(--color-text-light)' }}>No posts yet.</p>
            </div>
        </main>
    );
}
