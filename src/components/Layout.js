import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const urls = [
    {
      id: 1,
      url: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      url: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      url: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navbar">
      <div className="Brend-container">
        <img src="planet.png" className="Brend" alt="Planet-img" />
        <h1 className="nav-head">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-menu">
        {urls.map((url) => (
          <li className="nav-item" key={url.id}>
            <NavLink to={url.url}>{url.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
