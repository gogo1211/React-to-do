import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__title"><a>Sility</a></div>
        <a className="header__btn-action">+</a>
        <a className="header__btn-menu">Menu <i className="fa fa-bars"></i></a>
        <nav className="nav-main">
          <ul className="list-unstyled">
            <li>
              <NavLink to={ '/home' } activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={ '/aboutme' } activeClassName="active">
                About
              </NavLink>
            </li>
            <li><a>Skill</a></li>
            <li><a>Experience</a></li>
            <li><a>Education</a></li>
            <li><a>Work</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
