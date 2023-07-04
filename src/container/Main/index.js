import React from 'react';
import './css.css'


import Home from './../../component/Home'
import MainNavbar from './../../component/MainNavbar'
import MainContacts from './../../component/MainContacts'



function Contacts() {
  return (
    <div className="MainContainer">
        <MainNavbar />
        <Home />
        <MainContacts />
         
    </div>
  );
}

export default Contacts;

