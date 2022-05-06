import React, { useState, useEffect } from 'react';
import style from './Hygiene.module.css';
function Hygiene() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
      fetch('https://random.dog/woof.json')
          .then(response => response.json())
          .then(data => setUrl(data.url));

  }, );

return (
   <div className={style.main}>
    <div className={style.sections}>  
    <button className={style.buttonClick}>
      <a href="/Hygiene" className={style.href}> Нажми на меня ! </a> 
    </button>

    <p className={style.sometext}> Рандомные Собаки на сайте для Кошек, не странно ли??? </p>


      <img src={url} className={style.dogImg} alt="dog"/> 
    </div>
  </div>

  );
}
export default Hygiene;