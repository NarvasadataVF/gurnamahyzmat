import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './app.css'

import {Main, Contacts, About, Licences, Services, Experience} from './container'

function App() {  
  return (
    <>
    <BrowserRouter>              
              <Switch>           
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/contacts" component={Contacts}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/licences" component={Licences}/>
                  <Route exact path="/Services" component={Services}/>
                  <Route exact path="/experience" component={Experience}/>
              </Switch>            
      </BrowserRouter> 
    </>
  );
}

export default App;
