'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/photo.jpg"
          alt="David Fernandez"
          width={36}
          height={36}
        />
        <span>David Fernandez</span>
      </Link>

      <button
        className={styles.toggle}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
        <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}
