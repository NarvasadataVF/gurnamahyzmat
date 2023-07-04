import React from 'react';
import './css.css'

import Navbar from './../../component/Navbar'
import Servicescn from './../../component/Services'
import Footer from './../../component/Footer'

function Services() {
  return (
    <div align="center" className="ServicesContainer">
        <Navbar services="nav_activetab"/>  
        <Servicescn />
        <Footer />
    </div>
  );
}

export default Services;
