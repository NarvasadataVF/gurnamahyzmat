import React from 'react';
import './css.css'

import Navbar from './../../component/Navbar'
import Experiencecn from './../../component/Experience'
import Footer from './../../component/Footer'

function Experience() {
  return (
    <div align="center" className="ExperienceContainer">
        <Navbar experience="nav_activetab"/>  
        <Experiencecn />
        <Footer />
    </div>
  );
}

export default Experience;
