/* eslint-disable linebreak-style */
import React from 'react';
import styleBeds from './Beds.module.css';
import BedItem from '../CreateItem/CreateItem';
import bed1 from './../../../img/bedItem (1).jpg';
import bed2 from './../../../img/bedItem (2).jpg';
import bed3 from './../../../img/bedItem (3).jpg';
// eslint-disable-next-line require-jsdoc
function Beds() {
  let beds = [
      {icon:bed1, name:"Лежак-трансформер «Домосед»", producer:"Зоогурман", oldPrice:"12000", rate:"4.67", discount:"11"},
      {icon:bed2, name:"Домик для кошек", producer:"Дарэлл Лукошко", oldPrice:"9500", rate:"4.31", discount:"26"},
      {icon:bed3, name:"Лежак для котов", producer:"Природа Кантри", oldPrice:"8890", rate:"4.8", discount:"7"}



  ]
  let printBed = beds.map(bed => <BedItem icon={bed.icon} name={bed.name} producer={bed.producer} 
                                            oldPrice={bed.oldPrice} rate={bed.rate} discount={bed.discount}/>
  );



  
  return (
    <div className={styleBeds.main}>


<div className={styleBeds.sections}>
{printBed}
</div>

    </div>

  );
}

export default Beds;
