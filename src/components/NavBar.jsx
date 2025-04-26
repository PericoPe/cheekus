import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarInner}>
      <a href="/#hero"
        className={styles.logoLink}
        onClick={e => {
          e.preventDefault();
          window.location.hash = '#hero';
          document.getElementById('hero')?.scrollIntoView({behavior:'smooth'});
        }}>
        <span className={styles.logoText}>Hey Jack!</span>
      </a>
    </div>
  </nav>
);

export default NavBar;
