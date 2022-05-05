/* eslint-disable linebreak-style */
import React from 'react';
import styleToys from './Toys.module.css';
import ToyItem from '../CreateItem/CreateItem';
import toy1 from './../../../img/toyItem (1).jpg';
import toy2 from './../../../img/toyItem (2).jpg';
import toy3 from './../../../img/toyItem (3).jpg';
// eslint-disable-next-line require-jsdoc
function Toys() {
  let toys = [
    {icon:toy1, name:"Мяч с игрушкой из шнура", producer:"BuD'z ", oldPrice:"2500", rate:"4.67", discount:"17"},
    {icon:toy2, name:"Пушистые мыши 3шт", producer:"Zanies", oldPrice:"3300", rate:"4.1", discount:"5"},
    {icon:toy3, name:"Когтеточка", producer:"Big Foot Cat", oldPrice:"2460", rate:"3.22", discount:"14"}


]
let printToys = toys.map(toy => <ToyItem icon={toy.icon} name={toy.name} producer={toy.producer} 
                                          oldPrice={toy.oldPrice} rate={toy.rate} discount={toy.discount}/>
);

  return (
    <div className={styleToys.main}>


<div className={styleToys.sections}>
{printToys}
</div>

    </div>

  );
}

export default Toys;
