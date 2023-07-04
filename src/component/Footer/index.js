import React from 'react';
import './css.css'

class Footer extends React.Component { 
  render(props) { 
    return (
        <div align="center">
            <div className="footer">
                <span className="hr1"/>
                <div>Copyrigt © 2021. «Gurnama hyzmat Ähli Hukuklary Goragly»</div>
            </div>
        </div>
    );
    }
}

export default Footer;