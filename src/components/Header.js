import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'BOOKS',
    },
    {
      id: uuidv4(),
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-brand">
            <span className="logo mr-3">Bookstore CMS</span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <NavLink className="nav-link" to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <span className="login">
              <FaUser style={{ color: '#0290ff' }} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
