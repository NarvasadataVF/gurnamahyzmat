import React from 'react';
import './css.css'

class Experience extends React.Component { 
  render(props) { 
    return (
        <div align="center" className="ExperienceHolder">
            <div className="Experience">
                <div className="exp_content">
                    <h1>Успешный Опыт</h1>
                    <span className="hr"/>
                    <div class="grid-container">
                        <div class="grid-item" id="minh">
                            <h1>2019</h1>
                            <span>Паром<br/> RO-PAX «Berkarar» </span>
                            <ul>
                                <li>организация ремонтных работ</li>
                            </ul>
                        </div>
                        <div class="grid-item" id="jeyhun">
                            <h1>2020</h1>
                            <span>Нефтеналивной<br/> танкер «Джейхун»</span>
                            <ul>
                                <li>организация ремонтных работ</li>
                                <li>техническое сопровождение </li>
                                <li>поставка ЗИП и комплектующих</li>
                                <li>гарантийное обслуживание</li>
                            </ul>
                        </div>
                        <div class="grid-item">
                            <h1>2020</h1>
                            <span>Сухогруз<br/> «Махтумкули» </span>
                            <ul>
                                <li>организация ремонтных работ</li>
                            </ul>
                        </div>
                        <div class="grid-item">
                            <h1>2019</h1>
                            <span>Крановая баржа<br/> «Korogly»</span>
                            <ul>
                                <li>организация ремонтных работ</li>
                            </ul>
                        </div>
                        <div class="grid-item" id="etrek">
                            <h1>2020</h1>
                            <span>Нефтеналивной<br/> танкер «Этрек» </span>
                            <ul>
                                <li>ремонтные работы палубных механизмов</li>
                                <li>окраска и очистка судна </li>
                                <li>техническое сопровождение и решение вопросов, <br/>связанных с пропульсивной системой</li>
                                <li>рекомендации производителя</li>
                            </ul>
                        </div>
                        <div class="grid-item" id="longGrid">
                            <p>Подводное освидетельствование различных судов с применением подводного телевидения, в соответствии с требованиями РМРС (Российский морской регистр судоходства)</p>                            
                        </div>                          
                    </div>
                    <h1 id="project">Текущие проекты</h1>                                             
                    <span className="hr"/>
                    <div className="going_projects vbot">
                        <h1>2020 - 2021</h1>                    
                        <ul>                        
                            <li>проведение водолазного обследования морских объектов</li>
                        </ul>
                    </div>
                    <div className="going_projects xbot">
                        <h1>2021</h1>
                        <span>Сухогруз «Туркменистан»</span> 
                        <ul>
                            <li>подготовительные работы</li>
                            <li>ремонтные работы на корпусной части</li>
                            <li>очистка и окраска судна</li>
                            <li>техническое сопровождение проекта</li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Experience;