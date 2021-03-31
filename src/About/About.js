import React from 'react';
import Flag from './Flag.png';
import { FcBusinessman } from "react-icons/fc";

class About extends React.Component{
    render(){

        return( 
            <div className="about">
                <div> <p className="us">About us<FcBusinessman className="pic"></FcBusinessman></p></div>
                <div><img src={Flag} alt=""/></div>
                <div className="help"> 
                        <p className="help2"><strong>We help students and others all over the the world,
         insuring  a brighter future in either finding a good place to work in or a place to study abroad,
          we have connections with many well known companies and universities all over the globe.</strong></p>
               </div>
                
               
           
            </div>
        )
    }

}
export default About;
