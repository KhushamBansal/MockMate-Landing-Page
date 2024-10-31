
import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    //add anchor tag with NavLink to link to different pages
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MOCKMATE</div>
      <nav className={styles.nav}>
        <a href="" className={styles.navLink}>Home</a>
        <a href="" className={styles.navLink}>Features</a>
        <a href="" className={styles.navLink}>How It Works</a>
        <a href="" className={styles.navLink}>Testimonials</a>
        <a href="" className={styles.navLink}>Contact us</a>
      </nav>
      <a href=""><button className={styles.loginButton}>New User / Login</button></a>
    </header>
  );
};

export default Header;