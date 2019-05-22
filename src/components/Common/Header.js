import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import CustomLink from './CustomLink';

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
              <CustomLink name="Home" target="/"></CustomLink>
            </li>
            <li>
              <CustomLink name="About" target="/aboutme"></CustomLink>
            </li>
            <li>
              <CustomLink name="Skill" target="/skill"></CustomLink>
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

export default withRouter(Header);
