import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <div className="header__title"><a>Sility</a></div>
        <a className="header__btn-action">+</a>
        <a className="header__btn-menu">Menu <i className="fa fa-bars"></i></a>
        <nav className="nav-main">
          <ul className="list-unstyled">
            <li>
              <NavLink exact to={ '/' } activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={ '/aboutme' } activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={ '/skill' } activeClassName="active">
                Skill
              </NavLink>
            </li>
            <li><a>Experience</a></li>
            <li>
              <NavLink to={ '/education' } activeClassName="active">
                Education
              </NavLink>
            </li>
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
