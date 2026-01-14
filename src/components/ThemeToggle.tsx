'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <button className={styles.toggleBtn} aria-label="Loading Theme Toggle"><div style={{ width: 20, height: 20 }} /></button>;
    }

    return (
        <button
            className={styles.toggleBtn}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? (
                <Sun className={styles.icon} />
            ) : (
                <Moon className={styles.icon} />
            )}
        </button>
    );
}
