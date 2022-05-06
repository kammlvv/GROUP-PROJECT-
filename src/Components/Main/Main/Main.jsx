/* eslint-disable linebreak-style */
import React from 'react';
import styleMain from './Main.module.css';
import ShopBoxALL from './Shopbox/ShopboxALL.jsx';
import BedItem from './Beds/Beds.jsx';
import ToiletItem from './Toilet/Toilet.jsx';
import ToysItem from './Toys/Toys.jsx';
import FeedB from './Feedback/FeedB.jsx';

// eslint-disable-next-line require-jsdoc
function Main() {
  return (
    <main className={styleMain.main}>

<ShopBoxALL/>
<hr className={styleMain.hr1}/>
<div className={styleMain.block}> BESTSELLERS </div> 
 <hr className={styleMain.hr2}/>
<BedItem/>
<hr className={styleMain.hr3}/>
<div className={styleMain.block2}> NEW ARRIVALS </div> 
 <hr className={styleMain.hr4}/>
<ToiletItem/>
<ToysItem/>
<hr className={styleMain.hr5}/>
<div className={styleMain.block3}> REVIEWS </div> 
 <hr className={styleMain.hr6}/>
<FeedB/>
    </main>
  );
}

export default Main;
