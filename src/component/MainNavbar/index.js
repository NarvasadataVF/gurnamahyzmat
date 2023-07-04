import React from 'react';
import './css.css'

import white_logo from './../../img/gh_logo_white.png'
import menu from './../../img/menu.svg'

class MainNavbar extends React.Component { 
    menuopener(){
        let a = this.refs.route
        let a1 = this.refs.route1
        let a2 = this.refs.route2
        let a3 = this.refs.route3
        let a4 = this.refs.route4
        let b = this.refs.logo

        b.classList.toggle("active_logo")

        a.classList.toggle("menu_active")
        a1.classList.toggle("menu_active")
        a2.classList.toggle("menu_active")
        a3.classList.toggle("menu_active")
        a4.classList.toggle("menu_active")
        a4.classList.toggle("active_bot")
      }
  render(props) { 
      
    return (
        <div align="center" className="MainNavbarHolder">
            <div className="MainNavbar">
                <div className="mainnav_bg active_logo" ref="logo">
                    <span className="mobile_hamburger">
                        <img src={menu} alt="Menu" onClick={this.menuopener.bind(this)}/>
                    </span>
                    <div className="mainnav_flex">
                        <div className="mainnav_logo">                    
                                <img src={white_logo} alt="logo"/>                                                        
                        </div>

                        <div className="mainnav_route">
                            <div>
                                <span>Надежность, стабильность и процветание </span>
                            </div>
                            <div>
                                <ul>
                                    <a href="/about" >
                                        <li ref="route" className="menu_active">О Компании</li>
                                    </a>
                                    <a href="/services" >
                                        <li ref="route1" className="menu_active">Услуги</li>
                                    </a>
                                    <a href="/experience" >
                                        <li ref="route2" className="menu_active">Опыт</li>
                                    </a>
                                    <a href="/licences" >
                                        <li ref="route3" className="menu_active">Лицензии</li>
                                    </a>
                                    <a href="/contacts" >
                                        <li ref="route4" className="menu_active active_bot">Контакты</li>
                                    </a>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default MainNavbar;