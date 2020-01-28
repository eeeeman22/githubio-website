import React from 'react';

const Navbar = ({ setCurrentSection }) => (
  <ul className="navbar">
    <div className="navbarElement" onClick={() => setCurrentSection('About')}>
      About
    </div>
    <div
      className="navbarElement"
      onClick={() => setCurrentSection('Applications')}
    >
      Applications
    </div>
    <div className="navbarTitle">
      <h1> IAN ROBINSON</h1>
      <div>Software Engineer</div>
      <div>and</div>
      <div>Saxophonist</div>
    </div>
    <div className="navbarElement" onClick={() => setCurrentSection('Media')}>
      Media
    </div>
    <div className="navbarElement" onClick={() => setCurrentSection('Contact')}>
      Contact
    </div>
  </ul>
);

export default Navbar;
