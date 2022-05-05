/* eslint-disable linebreak-style */
import React from 'react';
import styleMain from './Main.module.css';
import ShopBoxALL from './Shopbox/ShopboxALL.jsx';

// eslint-disable-next-line require-jsdoc
function Main() {
  return (
    <main className={styleMain.main}>

<ShopBoxALL/>
    </main>
  );
}

export default Main;
