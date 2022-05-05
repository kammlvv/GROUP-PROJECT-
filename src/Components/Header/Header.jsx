/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
import React from 'react';
import styleHeader from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from './../img/logo.png';
// eslint-disable-next-line require-jsdoc
class Header extends React.Component {
  render() {
    return (
      <header className={styleHeader.header}>
        <div className={styleHeader.logotype}>
        <NavLink to="/"><img className={styleHeader.logo} src={logo} alt="logo"/>
          </NavLink>
        </div>
        <div className={styleHeader.login}>
          <NavLink to="/login" className={styleHeader.Link} activeClassName={styleHeader.activeLink}>Вход</NavLink> или <NavLink to="/register" className={styleHeader.Link} activeClassName={styleHeader.activeLink}>регистрация</NavLink>
        </div>


      </header>
    );
  }
}

export default Header;
