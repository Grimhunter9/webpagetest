import React from 'react';
import { Card } from 'react-bootstrap';
import { FcGraduationCap } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import Dhand from './Darkhand.png';




class Serv extends  React.Component{
    render(){

        return(
            <div className="service">
            <p className="do">What we do</p>
            <img  className="for" src={Dhand} alt=""/>

            <div className="container"> 
            
            <div className="options" >
                
           <p className="options1">Education <FcGraduationCap className="icon"/> </p>
           <Card className="card1" >
            <p >
            <strong>If you want to compelete your studies abroad, we have connections to  the best universities all over europe.</strong>
            </p>
          </Card>
           
           </div>

           <div className="cards">  

           <p className="options2">Work <FcSupport className="icon"/></p>
          <Card className="card2" id="about">
          <p>
          <strong>If you want to work in the EU ,
          we have many relationships with many companies,
          work contracts can be given to you from all the union countries.</strong>
          </p>
         </Card>
               
        </div>
        </div>

        </div>
        )
    }

}
export default Serv;
