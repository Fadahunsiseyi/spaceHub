import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <div className="brand-container">
        <NavLink className="brand-wrapper" to="/">
          <img src="planet.png" className="brand" alt="Planet-img" />
          <h1 className="nav-head">Space Travelers&apos; Hub</h1>
        </NavLink>
      </div>
      <ul className="nav-menu">
        {urls.map((url) => (
          <li className="nav-item" key={url.id}>
            <NavLink className="nav-link" to={url.url}>{url.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
