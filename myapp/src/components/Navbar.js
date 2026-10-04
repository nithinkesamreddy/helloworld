import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyApp</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
