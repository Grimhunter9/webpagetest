import React from 'react';
import Earth from './Earth.png';
import { Navbar , Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';



class Header extends React.Component{

render(){ 
    return(
    <div>
        <div>

        <Navbar className="header" collapseOnSelect expand="lg">
        <Navbar.Brand><img className="earth"  src={Earth} alt=""/>  <p className="mig">The best future</p> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar"> 

      <Nav><HashLink smooth className="b" to="/#about">About</HashLink></Nav>
      <Nav><HashLink smooth className="b" to="/#contacts">contacts</HashLink></Nav>
      <Nav><HashLink smooth className="b" to="/#service">Services</HashLink></Nav>
      <Nav><Link  className="b" to="/price">Pricing</Link></Nav>

        <div className="nav-button">
        <nav><button className="btn-bar"><strong>Sign Up</strong></button></nav>
        <nav><button className="btn-bar"><strong>Sign In</strong></button></nav>
        </div>

    </Nav>
 
        </Navbar.Collapse>
        </Navbar>   

    </div>
    
    </div>





    )
}
}

export default Header;
