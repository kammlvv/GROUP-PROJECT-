/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import styleApp from './App.module.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main/Main';
import Beds from './Components/Main/Main/Beds/Beds';
import Aside from './Components/Aside/Aside';
import Toilet from './Components/Main/Main/Toilet/Toilet';
import Toys from './Components/Main/Main/Toys/Toys';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hygiene from './Components/Main/Main/Hygiene/Hygiene';
import Feed from './Components/Main/Main/Feed/Feed';
import Bags from './Components/Main/Main/Bags/Bags';
function App() {
  return (
    <BrowserRouter>
      <div className={styleApp.App}>
        <Header />
        <Aside />
        <div>
        <Routes className={styleApp.content}>
            <Route path="" element={<Main/>}/>
            <Route path="/beds" element={<Beds/>}/>
            <Route path="/toys" element={<Toys/>}/>
            <Route path="/toilet" element={<Toilet/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/bags" element={<Bags/>}/>
            <Route path="/hygiene" element={<Hygiene/>}/>

          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
