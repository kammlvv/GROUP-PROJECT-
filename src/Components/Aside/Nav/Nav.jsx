/* eslint-disable linebreak-style */
import React from 'react';
import styleNav from './Nav.module.css';
import {NavLink} from 'react-router-dom';
// eslint-disable-next-line require-jsdoc
function Nav() {
  return (
    <nav className={styleNav.nav}>
      <div className={`${styleNav.NAV} ${styleNav.beds}`}>
        <NavLink to="/beds" className={styleNav.Link} activeClassName={styleNav.activeLink}>
        Лежанки и домики </NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.toys}`}>
        <NavLink to="/toys" className={styleNav.Link} activeClassName={styleNav.activeLink}>
        Игрушки </NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.feed}`}>
        <NavLink to="/feed" className={styleNav.Link} activeClassName={styleNav.activeLink}>
          Миски и корм</NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.toilet}`}>
        <NavLink to="/toilet" className={styleNav.Link}  activeClassName={styleNav.activeLink}>
        Лотки и наполнители</NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.bags}`}>
        <NavLink to="/bags" className={styleNav.Link} activeClassName={styleNav.activeLink}>
          Переноски и сумки</NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.hygiene}`}>
        <NavLink to="/hygiene" className={styleNav.Link} activeClassName={styleNav.activeLink}>
        Уход и гигиена </NavLink>{' '}
      </div>

    </nav>
  );
}

export default Nav;
