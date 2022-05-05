/* eslint-disable linebreak-style */
import React from 'react';
import styleAside from './Aside.module.css';
import Nav from './Nav/Nav';
// eslint-disable-next-line require-jsdoc
function Aside() {
  return (
    <aside className={styleAside.aside}>
      <Nav/>
    </aside>
  );
}

export default Aside;
