/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <>
    <h1>Math Magicians</h1>

    <nav>
      <img src={require('../asset/mlogo.png')} alt="logo" width="100px" height="40px" />

      <ul className={styles.navul}>
        <li className={styles.navlink}>
          <Link to="/" className={styles.navlink}>Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/calculator" className={styles.navlink}>Calculator</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/quote" className={styles.navlink}>Qoute</Link>
        </li>
      </ul>
    </nav>
  </>
);
export default Navbar;
