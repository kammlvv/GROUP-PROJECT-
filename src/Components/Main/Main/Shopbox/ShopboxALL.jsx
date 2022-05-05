/* eslint-disable linebreak-style */
import React from 'react';
import styleShopboxALL from './ShopboxALL.module.css';
import ShopBox from './Shopbox.jsx';
import beds from './../../../img/beds.jpg';
import toys from './../../../img/toys.jpg';
import toilet from './../../../img/toilet.jpg';
import feed from './../../../img/feed.jpg';
import bags from './../../../img/bags.jpg';
import hygiene from './../../../img/hygiene.jpg';
// eslint-disable-next-line require-jsdoc
function ShopBoxALL(props) {
  return (
<div className={styleShopboxALL.sections}>
<ShopBox icon={beds} alt="beds" section="Лежанки и домики"/>
<ShopBox icon={toys} alt="toys" section="Игрушки"/>
<ShopBox icon={toilet} alt="toilet" section="Лотки и наполнители"/>
<ShopBox icon={feed} alt="feed" section="Миски и корм"/>
<ShopBox icon={bags} alt="bags" section="Переноски и сумки"/>
<ShopBox icon={hygiene} alt="hygiene" section="Уход и гигиена"/>

</div>

  );
}

export default ShopBoxALL;
