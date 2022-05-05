/* eslint-disable linebreak-style */
import React from 'react';
import styleToilet from './Toilet.module.css';
import ToiletItem from '../CreateItem/CreateItem';
import toilet1 from './../../../img/toiletItem (1).jpg';
import toilet2 from './../../../img/toiletItem (2).jpg';
import toilet3 from './../../../img/toiletItem (3).jpg';
// eslint-disable-next-line require-jsdoc
function Beds() {
  let toilets = [
    {icon:toilet1, name:"Наполнитель силикагелевый", producer:"Murkel Роза", oldPrice:"21000", rate:"4.117", discount:"15"},
    {icon:toilet2, name:"Ferplast Лоток для Кошек", producer:"Birba", oldPrice:"18600", rate:"4.5", discount:"10"},
    {icon:toilet3, name:"Лоток для кошек Барсик", producer:"Толстый кот", oldPrice:"3800", rate:"3.7", discount:"24"}


]
let printToilet = toilets.map(toilet => <ToiletItem icon={toilet.icon} name={toilet.name} producer={toilet.producer} 
                                          oldPrice={toilet.oldPrice} rate={toilet.rate} discount={toilet.discount}/>
);
  return (
    <div className={styleToilet.main}>


<div className={styleToilet.sections}>
{printToilet}
</div>

    </div>

  );
}

export default Beds;
