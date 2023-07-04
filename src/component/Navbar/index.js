import React from 'react';
import './css.css'

import logoValve from './../../img/gh_logo_valve.png'
import logoShip from './../../img/gh_logo_ship.png'
import logoName from './../../img/gh_logo_name.png'

import menu1 from './../../img/menu.svg'

class Navbar extends React.Component { 
    menuopener(){
        let a = this.refs.route
        let b = this.refs.logo
        let c = this.refs.hamb

        b.classList.toggle("active_logo")

        a.classList.toggle("menu_activ")

        c.classList.toggle("hamb_active")
       
      }
  render(props) { 
    
    return (
        <div align="center" className="NavbarHolder">
            <div className="Navbar" align="center">
                <span className="mobile_hamburger1" ref="hamb" onClick={this.menuopener.bind(this)}>
                    <img src={menu1} alt="Menu" />
                </span>
                <div className="navbar_content" ref="route">
                    <div className="navbar_logo_holder">
                        <a href="/">
                            <div className="logo_rotate" ref="logo">
                                <img src={logoValve} alt="valveLogo" />
                                <img src={logoShip} alt="shipLogo"/>
                            </div>                    
                            <div className="logo_name">
                                <img src={logoName} alt="GHcompanyNameLogo" ref="logo_name"/>
                            </div>
                        </a>
                    </div>
                    <div className="navbar_route">
                        <ul>
                            <a href="/about" className={this.props.about} ><li>О компании</li></a>
                            <a href="/services" className={this.props.services} ><li>Услуги</li></a>
                            <a href="/experience" className={this.props.experience} ><li>Опыт</li></a>
                            <a href="/licences" className={this.props.licences} ><li>Лицензии</li></a>
                            <a href="/contacts" className={this.props.contacts}><li>Контакты</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Navbar;