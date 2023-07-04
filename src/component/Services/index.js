import React from 'react';
import './css.css'

import serv1 from './../../img/serv1.png'
import serv2 from './../../img/serv2.png'
import serv3 from './../../img/serv3.png'
import serv4 from './../../img/serv4.png'
import serv5 from './../../img/serv5.png'
import serv6 from './../../img/serv6.png'

class Services extends React.Component {     
  render(props) {     

    return (
        <div align="center" className="ServicesHolder">
            <div className="Services">
                <div className="services_content">
                    <h1>Наши услуги</h1>
                    <span className="hr"/>
                    <div className="box_item">
                        <div>
                            <img src={serv1} alt="GurnamaHyzmatItem"/>                            
                        </div>
                        <span>Судоремонтные и сервисные работы<br/> морских и речных объектов</span>
                    </div>
                    <ul>
                        <li>подготовительные работы по ремонту судна: очистка и дегазация судов;</li>
                        <li>ремонт винто-рулевых комплексов любого типа;</li>
                        <li>ремонт двигателей и агрегатов, судовых механизмов;</li>
                        <li>замеры остаточных толщин корпусов, корпусные работы, трубопроводные работы;</li>
                        <li>механическая, водоструйная и абразивноструйная очистка корпуса и других конструкций судов любого размера и типа, окраску всех типов, техническое сопровождение;</li>
                        <li>ремонтные работы электротехнической части и автоматики судов;</li>
                        <li>поставка сменных запасных частей, комплектующих, расходных и лакокрасочных материалов и абразивных материалов;</li>
                        <li>организация работ по восстановлению радио и навигационных оборудований.</li>
                    </ul>
                    <span className="hr"/>

                    <div className="box_item">
                        <div>
                            <img src={serv2} alt="GurnamaHyzmatItem"/>                            
                        </div>
                        <span>Подводно-технические<br/> (водолазные) работы</span>
                    </div>
                    <ul>
                        <li>водолазные работы любой сложности;</li>
                        <li>водолазные обследования гидротехнических сооружений;</li>
                        <li>оценка состояния гидротехнических сооружений;</li>
                        <li>обследование подводных сооружений;</li>
                        <li>вызов водолазной группы;</li>
                        <li>водолазное обследование дна и т.д.</li>
                        <li>подводное освидетельствование судов с применением подводного телевидения в соответствии с требованиями РМРС</li>
                    </ul>                                  
                    <span className="hr"/> 
                    <div className="box_item">
                        <div>
                            <img src={serv3} alt="GurnamaHyzmatItem"/>                            
                        </div>
                        <span>Гражданское и <br/>промышленное строительство</span>
                    </div>
                    <span className="hr"/>      

                    <div className="box_item">
                        <div>
                            <img src={serv4} alt="GurnamaHyzmatItem"/>                            
                        </div>
                        <span>Снабжение и техническое обслуживание<br/> морских объектов</span>
                    </div>
                    <span className="hr"/>      

                    <div className="box_item">
                        <div>
                            <img src={serv5} alt="GurnamaHyzmatItem"/>                            
                        </div>
                        <span>Сооружения нефтегазовых<br/> и химических отраслей</span>
                    </div>
                    <span className="hr"/>      

                    <div className="box_item">
                        <div>
                            <img src={serv6} alt="GurnamaHyzmatItem"/>                            
                        </div>
                        <span>Строительство водных сооружений, гидротехнические работы,<br/> дноуглубления и дноочистительные ремонтные работы</span>
                    </div>                

                    
                </div>
            </div>
        </div>
    );
    }
}

export default Services;