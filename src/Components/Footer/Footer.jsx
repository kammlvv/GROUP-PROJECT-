/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable linebreak-style */
import React from "react";
import styleFooter from "./Footer.module.css";
import insta from "./../img/insta.png";
import facebook from "./../img/facebook.png";
import telegram from "./../img/telegram.png";
import vk from "./../img/vk.png";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line require-jsdoc
function Footer() {
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.socialNetworks}>
        <a className={styleFooter.icons} href="https://www.instagram.com/">
          <img
            className={`${styleFooter.icons} ${styleFooter.insta}`}
            src={insta}
          />
        </a>
        <a className={styleFooter.icons} href="https://www.facebook.com/">
          <img
            className={`${styleFooter.icons} ${styleFooter.facebook}`}
            src={facebook}
          />
        </a>
        <a className={styleFooter.icons} href="https://telegram.com/">
          <img
            className={`${styleFooter.icons} ${styleFooter.telegram}`}
            src={telegram}
          />
        </a>
        <a className={styleFooter.icons} href="https://vk.com/">
          <img className={`${styleFooter.icons} ${styleFooter.vk}`} src={vk} />
        </a>
      </div>
      <div className={styleFooter.list}>
      <div className={`${styleFooter.NAV} ${styleFooter.aboutUs}`}>
          <NavLink to="/aboutUs" className={styleFooter.Link} activeClassName={styleFooter.activeLink}>
          ABOUT US
          </NavLink>{" "}
        </div>
        <div className={`${styleFooter.NAV} ${styleFooter.terms}`}>
          <NavLink to="/terms" className={styleFooter.Link} activeClassName={styleFooter.activeLink}>
          TERMS & CONDITIONS
          </NavLink> {" "}
        </div>
        <div className={`${styleFooter.NAV} ${styleFooter.policy}`}>
          <NavLink to="/policy" className={styleFooter.Link} activeClassName={styleFooter.activeLink}>
          PRIVACY POLICY
          </NavLink>{" "}
        </div>
        <div className={`${styleFooter.NAV} ${styleFooter.contact}`}>
          <NavLink to="/contact" className={styleFooter.Link} activeClassName={styleFooter.activeLink}>
          CONTACT
          </NavLink>{" "}
        </div>
      </div>

      <div className={styleFooter.copyRight}>
        <p> Copyright 2022 © bfycat.kz</p>
      </div>
    </footer>
  );
}

export default Footer;
