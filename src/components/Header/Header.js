import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="header-top">
          <a class="mailbox" href="">
            <i class="fas fa-envelope"></i>
            <span>AVAILABLE FOR FREELANCE</span>
          </a>
          <div class="icons">
            <a class="icons icon-search" href="">
              <i class="fas fa-search"></i>
            </a>
            <a class="icons icon-download" href="">
              <i class="fas fa-download"></i>
            </a>
            <a class="icons icon-ellipsis" href="">
              <i class="fas fa-ellipsis-v"></i>
            </a>
          </div>
        </div>
        <div class="header-bottom">
          <div class="logo">
            SILITY
          </div>
          <div class="navbar">
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">SKILL</a></li>
              <li><a href="">EXPERIENCE</a></li>
              <li><a href="">EDUCATION</a></li>
              <li><a href="">WORK</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </div>
          <a class="burger">
            Menu
            <i class="fa fa-bars"></i>
          </a>
          <div class="btn-plus">
            +
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
