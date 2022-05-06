/* eslint-disable linebreak-style */
import React from 'react';
import style from './FeedB.module.css';
import FeedBack from "./FeedBack"
import feed1 from './../../../img/feed.png';
import feed2 from './../../../img/feed2.png';
import feed3 from './../../../img/feed3.png';
function FeedB() {

  let feedBs = [
    {icon:feed1, name:"Алишер Сакенов", rate:"4,7", alt:"logo", review:  "Nice Website", item:"Лежак-трансформер «Домосед»"},
    {icon:feed2, name:"Аяла Кыргызбай", rate:"4,1", alt:"logo", review: "Best site ever visited", item:"Наполнитель силикагелевый"},
    {icon:feed3, name:"Ашекей Динмухаммед", rate:"4,2", alt:"logo", review:  "Would like more things", item:"Когтеточка"}



]
let printFeedB = feedBs.map(feedB => <FeedBack icon={feedB.icon} name={feedB.name} alt={feedB.alt} 
  review={feedB.review} rate={feedB.rate} item={feedB.item}/>
);




return (
  <div className={style.main}>


<div className={style.sections}>
{printFeedB}
</div>

  </div>

);
}
export default FeedB;