import React from 'react';
import './css.css'

class MainContacts extends React.Component { 
    
  render(props) {
    
    return (
        <div align="center" className="MainContactsHolder">
            <div className="MainContacts">
                <h1>Контакты</h1>
                <ul>
                    <li><a href="https://www.google.com/maps/place/%C5%9Eagadam+k%C3%B6%C3%A7esi+8,+T%C3%BCrkmenba%C5%9Fy,+%D0%A2%D1%83%D1%80%D0%BA%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.0023136,52.9937192,17z/data=!4m13!1m7!3m6!1s0x402c13de46f95bf1:0x57d821c46cc36ff0!2zxZ5hZ2FkYW0ga8O2w6dlc2kgOCwgVMO8cmttZW5iYcWfeSwg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC9!3b1!8m2!3d40.0018082!4d52.9960742!3m4!1s0x402c13de46f95bf1:0x57d821c46cc36ff0!8m2!3d40.0018082!4d52.9960742" target="_blank" rel="noopener noreferrer">
                        745000, Туркменистан, 
                        </a></li>
                    <li><a href="https://www.google.com/maps/place/%C5%9Eagadam+k%C3%B6%C3%A7esi+8,+T%C3%BCrkmenba%C5%9Fy,+%D0%A2%D1%83%D1%80%D0%BA%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.0023136,52.9937192,17z/data=!4m13!1m7!3m6!1s0x402c13de46f95bf1:0x57d821c46cc36ff0!2zxZ5hZ2FkYW0ga8O2w6dlc2kgOCwgVMO8cmttZW5iYcWfeSwg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC9!3b1!8m2!3d40.0018082!4d52.9960742!3m4!1s0x402c13de46f95bf1:0x57d821c46cc36ff0!8m2!3d40.0018082!4d52.9960742" target="_blank" rel="noopener noreferrer">  
                        Балканский велаят
                        </a></li>
                    <li><a href="https://www.google.com/maps/place/%C5%9Eagadam+k%C3%B6%C3%A7esi+8,+T%C3%BCrkmenba%C5%9Fy,+%D0%A2%D1%83%D1%80%D0%BA%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.0023136,52.9937192,17z/data=!4m13!1m7!3m6!1s0x402c13de46f95bf1:0x57d821c46cc36ff0!2zxZ5hZ2FkYW0ga8O2w6dlc2kgOCwgVMO8cmttZW5iYcWfeSwg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC9!3b1!8m2!3d40.0018082!4d52.9960742!3m4!1s0x402c13de46f95bf1:0x57d821c46cc36ff0!8m2!3d40.0018082!4d52.9960742" target="_blank" rel="noopener noreferrer">
                        г. Туркменбаши, ул. Шагадам д.8 
                        </a></li>
                    <li>Тел.: <a href="tel: +99324349320">+993 243 4-93-20</a></li>
                    <li>email: <a href="mailto: info@gurnamahyzmat.com.tm">info@gurnamahyzmat.com.tm</a></li>                    
                </ul>
                
                <div className="copyright_main">Copyrigt © 2021. «Gurnama hyzmat Ähli Hukuklary Goragly»</div>
            </div>
        </div>
    );
    }
}

export default MainContacts;

