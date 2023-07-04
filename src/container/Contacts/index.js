import React from 'react';
import './css.css'

import Navbar from './../../component/Navbar'
import Contactscn from './../../component/Contacts'
import Footer from './../../component/Footer'

function Contacts() {
  return (
    <div align="center" className="ContactsContainer">
        <Navbar contacts="nav_activetab"/>  
        <Contactscn />

        <Footer />
        <a 
    href="https://metrika.yandex.ru/stat/?id=82333909&amp;from=informer"
    target="_blank" rel="noreferrer"><img src="https://informer.yandex.ru/informer/82333909/3_0_86D2FFFF_66B2FFFF_1_pageviews"
    style={{width: "88px", height: "31px",  border: "0px"}} alt="Яндекс.Метрика" title="Посетителей" class="ym-advanced-informer yandexPosition" data-cid="82333909" data-lang="ru" /></a> 
    </div>
  );
}

export default Contacts;
