/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from "react-router-dom";
import styleCreateItem from './CreateItem.module.css';
import star from './../../../img/star.png';
// eslint-disable-next-line require-jsdoc
const CurrentPrice = (props) => {
  let price = ((props.oldPrice*(100-props.discount))/100);
  return price;

}
let sign = "₸";
function CreateItem(props) {
 
  return (
<div className={styleCreateItem.container}>

      <NavLink to={"/" + props.alt} className={styleCreateItem.Link} activeClassName={styleCreateItem.activeLink}>
        <div className={styleCreateItem.icondiv}>    
           <img className={styleCreateItem.icon} src={props.icon} alt={props.alt} /> </div>

          </NavLink>{" "}
     <div className={styleCreateItem.discount} > -{props.discount}% </div>
     <div className={styleCreateItem.producer} > {props.producer} </div>
     <div className={styleCreateItem.name} > {props.name} </div>
     <img className={styleCreateItem.star} src={star} alt="star"/>  <div className={styleCreateItem.rate} > {props.rate} </div>
     <div className={styleCreateItem.price} > 
     <div className={styleCreateItem.oldPrice}> {props.oldPrice} </div>
     {<CurrentPrice oldPrice = {props.oldPrice} discount = {props.discount}/> } {sign} </div>


</div>

  );
}

export default CreateItem;
