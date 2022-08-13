import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.bg}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts/1">Post1</Link>
    </div>
  );
};

export default Navbar;
