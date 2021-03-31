import React from 'react';
import Phone from './Phone.jpg';
import Facebook from './Face.jpg';
import Whatsapp from './Wat.jpg';
import Instagram from './Insta.jpg';
import Telegram from './Telegram.jpg';

class Contacts extends  React.Component{
    render(){
 
        return(
            <div className="contacts" id="contacts">
                <div className="bar1">
                    <div className="ba">
                        <p className="info" >Contacts <img  className="phone" src={Phone} alt=""/></p>
                        <p  className="info3"><strong>Email us :<a className="eml" href="mailto:tbestfuture01@gmail.com">tbestfuture01@gmail.com</a> </strong></p>
                        <p className="info2" ><strong>For more information contact us:</strong></p>
                     

                        <div className="bar2"> 
                        <a className="link" href="https://www.messenger.com/t/username"> <img  className="fa" src={Facebook} alt=""  /> </a>
                        <a className="link" href="http://www.instagram.com/username"> <img  className="in" src={Instagram} alt="" /> </a>
                        <a className="link" href="https://telegram.me/username"> <img  className="tl" src={Telegram} alt="" /> </a>
                        <a className="link" href="https://wa.me/+380960498331 "> <img  className="wp" src={Whatsapp} alt="" /> </a>
                        </div>
                     
                    </div>

                    <div className="bar3">
                        <input className="information" placeholder="Enter your Name..."></input>
                        <input className="information" placeholder="Enter your email..."></input>
                        <textarea className="touch" placeholder="Ask us anything..." ></textarea>
                        <button className="sub" type="submit" >Get in touch</button>
                    </div>
               
               
                </div>
               
                

            </div>
        )
    }

}
export default Contacts;
