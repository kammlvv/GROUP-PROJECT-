/* eslint-disable linebreak-style */
import React from 'react';
import style from './Feed.module.css';
function Feed() {

  let getQuote = React.createRef();
  const printQuote = () => {
    let quote = getQuote.current.value;
    alert("Спасибо за ваше пожелание: " + quote);
  
  }

return (
   <div className={style.main}>
    <div className={style.sections}>  
    <textarea className={style.someText} ref={getQuote} placeholder=" Напиши свои пожелания, милый Друг: "> </textarea>
    <button className={style.buttonOnClick} onClick = {printQuote}>
       Нажми чтобы отправить ! 
    </button>
    </div>
  </div>

  );
}
export default Feed;