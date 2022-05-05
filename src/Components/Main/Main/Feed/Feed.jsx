/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import style from './Feed.module.css';
function Feed() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
      fetch('https://www.breakingbadapi.com/api/quotes')
          .then(response => response.json())
          .then(data => console.log(data.quote));

  }, );

  const PrintQuote = (props) => {
    let quote = props.quote;
    return quote;
  
  }

return (
   <div className={style.main}>
    <div className={style.sections}>  
    <p className={style.sometext}> Рандомная цитата для тебя, милый Друг: <PrintQuote quote ={url} /> </p>

    </div>
  </div>

  );
}
export default Feed;