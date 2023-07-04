import React from 'react';
import './css.css'

import main1 from './../../img/main1.jpg'
import main2 from './../../img/main2.jpg'
import main3 from './../../img/main3.jpg'
import main4 from './../../img/main4.jpg'

class Home extends React.Component { 
  render(props) { 
    return (
        <div>
            <div className="Home">                            
                <ul> 
                    <li>   
                        <div>
                            <img src={main1} alt="mainPage_industry_img"/>
                        </div>
                        <span>Судоремонтные и сервисные работы</span>
                    </li>
                    <li className="alpha_ch"></li>
                    <li>
                        <div>
                            <img src={main3} alt="mainPage_industry_img"/>
                        </div>
                        <span>Промышленное и гражданское строительство</span>
                    </li>
                    <li className="alpha_ch alpha_blind tester"></li>
                </ul>
                <ul>
                    <li className="alpha_ch alpha_blind"></li>
                    <li>                    
                        <div>
                            <img src={main4} alt="mainPage_industry_img"/>
                        </div>
                        <span>Снабжение и техническое обслуживание</span>
                    </li>
                    <li className="alpha_ch"></li>
                    <li>
                        <div>
                            <img src={main2} alt="mainPage_industry_img"/>
                        </div>
                        <span>Сооружения нефтегазовых и химических отраслей</span>
                    </li>
                </ul>          
            </div>
            
           
                           
        </div>
    );
    }
}

export default Home;