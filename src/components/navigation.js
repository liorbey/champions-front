import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from "../images/Champions_Logo_White.svg"
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

export default () => (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#056DF7'}}>
  <Navbar.Brand href="/"><img className="header__img" src={logo} alt="Logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/screens"></Nav.Link>
      <NavDropdown title="Pages" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
        <NavDropdown.Item href="/events">Upcoming Events</NavDropdown.Item>
        <NavDropdown.Item href="/discovery-testing-platforms">Discovery Testing Platforms</NavDropdown.Item>
        <NavDropdown.Item href="/preclinical-research">Preclinical Research</NavDropdown.Item>
        <NavDropdown.Item href="/clinical-trial-solutions">Clinical Trial Solutions</NavDropdown.Item>
        <NavDropdown.Item href="/blog">Resource Library</NavDropdown.Item>
        <NavDropdown.Item href="/strategic-partnerships">Strategic Partnerships</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/screens">Screen Enrollment</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/#contact">
      Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
