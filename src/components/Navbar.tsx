"use client"
import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <div className={styles.topBar}>
          <a
            className={`${styles.menuToggle} ${menuOpen ? styles.isClicked : ''}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            <span></span>
          </a>

          <div className={styles.logo}>
            <Link href="/">Abdullah</Link>
          </div>

          <nav
            className={`${styles.mainNavigation} ${
              menuOpen ? styles.mainNavigationOpen : ''
            }`}
          >
            <ul>
              <li className={styles.current}>
                <Link href="#intro">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#resume">Resume</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
