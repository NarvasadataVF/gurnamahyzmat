import React from 'react';
import './css.css'

import licence1 from './../../img/lic1.jpg'
import licence2 from './../../img/lic2.jpg'
import licence3 from './../../img/lic3.jpg'
import licence4 from './../../img/lic4.jpg'
import licence5 from './../../img/lic5.jpg'
import licence6 from './../../img/lic6.jpg'

class Licences extends React.Component { 
   
    
  render(props) { 

    

    return (
        <div align="center" className="LicencesHolder">
            <div className="Licences">
                <div className="licences_content">
                    <h1>Лицензии и Свидетельства</h1>
                    <span className="hr"/>
                    <div>
                        <ul>
                            <li ><img className="deactive_img" src={licence1}  alt="LicenceImg"/></li>
                            <li ><img className="deactive_img" src={licence2}  alt="LicenceImg"/></li>
                            <li ><img className="deactive_img" src={licence3}  alt="LicenceImg"/></li>                                    
                        </ul>
                        <ul>    
                            <li ><img className="deactive_img" src={licence4}  alt="LicenceImg"/></li>
                            <li ><img className="deactive_img" src={licence5}  alt="LicenceImg"/></li>
                            <li ><img className="deactive_img" src={licence6}  alt="LicenceImg"/></li>                                    
                        </ul>    
                        {/* <div className="alphaChannel display_none" ref="alph"/> */}
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Licences;