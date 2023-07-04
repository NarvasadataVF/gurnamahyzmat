import React from 'react';
import './css.css'

import Navbar from './../../component/Navbar'
import Aboutus from './../../component/About'
import Footer from './../../component/Footer'

function About() {
  return (
    <div align="center" className="AboutContainer">
        <Navbar about="nav_activetab"/>  
        <Aboutus />
        <Footer />
    </div>
  );
}

export default About;
