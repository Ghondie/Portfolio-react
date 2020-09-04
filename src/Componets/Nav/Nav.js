  
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


export const NavigationBar= () => {
  return(
    <Nav>

    <Nav.Item>
     <Link to ="/"> <Nav.Link href="/">Home</Nav.Link></Link>
    </Nav.Item>
    <Nav.Item>
    <Link to ="/Portfolio"> <Nav.Link href="/Portfolio">Portfolio</Nav.Link></Link>
    </Nav.Item>
    <Nav.Item>
    <Link to ="/About">  <Nav.Link href="/About">About</Nav.Link></Link>
    </Nav.Item>

  </Nav>
)
}
export default NavigationBar;