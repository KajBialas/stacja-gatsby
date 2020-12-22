import React from 'react';
import { Link } from 'gatsby';

function Navigation() {
  return (
    <nav>
      <Link to="/">HomePage</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation;