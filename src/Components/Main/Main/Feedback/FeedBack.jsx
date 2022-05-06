/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from "react-router-dom";
import styleFeedBack from './FeedBack.module.css';
import star from './../../../img/star.png';
// eslint-disable-next-line require-jsdoc

function FeedBack(props) {
 
  return (
<div className={styleFeedBack.container}>

        <div className={styleFeedBack.icondiv}>    
           <img className={styleFeedBack.icon} src={props.icon} alt={props.alt} /> </div>
     <div className={styleFeedBack.name}> {props.name} </div>

     <div className={styleFeedBack.item} > 
     <img className={styleFeedBack.star} src={star} alt="star"/>  <div className={styleFeedBack.rate} > {props.rate} </div>
     <div className={styleFeedBack.review}> {props.review} </div>
     </div>


</div>

  );
}

export default FeedBack;
