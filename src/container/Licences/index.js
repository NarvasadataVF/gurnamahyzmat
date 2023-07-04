import React from 'react';
import './css.css'

import Navbar from './../../component/Navbar'
import Licencescn from './../../component/Licences'
import Footer from './../../component/Footer'

function Licences() {
  return (
    <div align="center" className="LicencesContainer">
        <Navbar licences="nav_activetab"/>  
        <Licencescn />
        <Footer />
    </div>
  );
}

export default Licences;

