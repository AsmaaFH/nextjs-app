import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts/1">Post1</Link>
    </div>
  );
};

export default Navbar;
