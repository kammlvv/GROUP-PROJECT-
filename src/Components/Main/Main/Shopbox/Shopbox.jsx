/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from "react-router-dom";
import styleShopbox from './Shopbox.module.css';
// eslint-disable-next-line require-jsdoc
function ShopBox(props) {
  return (
<div className={styleShopbox.container}>

     <img className={styleShopbox.icon} src={props.icon} alt={props.alt} />
     <div className={styleShopbox.section} > {props.section} </div>
     <NavLink to={"/" + props.alt} className={styleShopbox.Link} activeClassName={styleShopbox.activeLink}>
      Купить сейчас
          </NavLink>{" "}


</div>

  );
}

export default ShopBox;
