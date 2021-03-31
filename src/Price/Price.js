import React from 'react';
import { FcMoneyTransfer } from "react-icons/fc";
import { Card } from 'react-bootstrap';

class Price extends React.Component{
    render(){ 

        return(
            <div className="price">
                 <div> 
                     <p className="our">Our prices <FcMoneyTransfer className="money"></FcMoneyTransfer></p>
                </div>

                <div className="pc">

                <Card className="cp"> 
                    <Card.Header className="cardh"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhZ5RMNpBsqyGg-JZi7sx3snucUYhPGiIzg&usqp=CAU" alt=""/></Card.Header>
                    <Card.Body className="cc">
                    <p >
                    <strong>If you are looking for a good place to study in the EU, we have connections to the best well known universities all over europe. </strong>
                    </p>
                    </Card.Body>
                
                <Card.Footer className="cardf"><strong><a className="con" href="/#Contacts">Contact US</a></strong></Card.Footer>
                  </Card>
 


                <Card className="cp"> 
                    <Card.Header className="cardh"><img  src="https://images.idgesg.net/images/article/2020/02/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-large.jpg" alt=""/></Card.Header>
                    <Card.Body className="cc">
                    <p >
                    <strong>If you are looking for work, we have many connections with didferent kinds of well known companies worldwide.</strong>
                    </p>
                    </Card.Body>
                   
                <Card.Footer className="cardf"> <strong><a className="con" href="/#Contacts">Contact US</a></strong></Card.Footer>
                    </Card>



                <Card className="cp"> 
                    <Card.Header className="cardh"><img  src="https://www.vision-advertising.com/wp-content/uploads/2019/02/Consultation.jpg" alt=""/></Card.Header>
                    <Card.Body className="cc">
                    <p >
                    <strong>If you  have any questions either working or studying abroad feel free to contacts us by pressing the button below</strong>
                    </p>
                    </Card.Body>
                   
                <Card.Footer className="cardf"><strong><a className="con" href="https://www.whatsapp.com/?lang=en">Contact US Here</a></strong></Card.Footer>
                    </Card>

            </div>

                
            
            </div>
        )
    }

}
export default Price;
