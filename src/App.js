import React from 'react';
import Header from './header/Header';
import Roll from './Roll/Roll';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Serv from './Serv/Serv';

import Price from './Price/Price';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';



/******************************************************************************/
/*hello there testing out the github*/

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './header/Header.css';
import './Roll/Roll.css';
import './Serv/Serv.css';
import './About/About.css';
import './Contacts/Contacts.css';
import './Price/Price.css';

class App extends React.Component{

  render(){
  return(
    <Router>

  <div>
  <Header></Header>
   <Roll></Roll>

  
  <div class="content-area">
  
    
   
  
  <Switch>

   <Route exact path="/"> 
   
       <Serv/>
       <About/>
       <Contacts/>
   </Route>

   
   <Route exact path="#about"  component={About}> 
       <Serv/>
       <About/>
       <Contacts/>
    </Route>


    <Route exact path="#Contacts" component={Contacts}> 
        <Serv/>
        <About/>
        <Contacts/>
    </Route>

    <Route exact path="#Service" component={Serv}> 
        <Serv/>
        <About/>
        <Contacts/>
    </Route>

    <Route exact path="/price" component={Price}>
       <Price/>
       <Contacts/>
  </Route>

     
   </Switch>
  </div>
  
    
   </div>
</Router>
)}}
  
  export default App;
  
