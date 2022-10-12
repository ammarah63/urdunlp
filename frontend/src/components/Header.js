import React from 'react'
import {Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/LOGO.png'
import bu from '../assets/bahria_logo.png';

export default function Header() {
  return (
    <>
    <Container>
      <Row>
    <Navbar fixed="top" style={{backgroundColor: '#ffffff'}}  expand="lg">
      <Col xl={2}>
      <Navbar.Brand className="mx-5" href="#home"> <img
              src={logo}
              width="200"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            /></Navbar.Brand>
            </Col>
        <Col xl={8} className="ps-5"  style={{marginLeft:120}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-center ms-5">
        <Nav className=" ms-5 text-center justify-content-center">
          <Nav.Link href="#home" className=" ms-5 text-center" style={{fontSize:30, fontWeight:900, color:'black', marginLeft:'50%'}}>Image Gray Scale Tool</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Col>
      <Col xl={2}>
      <Navbar.Brand className="mx-5" href="#home"> <img
              src={bu}
              width="150"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            /></Navbar.Brand>
      </Col> 
  </Navbar>
  </Row>
  </Container>
  </>
  )
}



/* import React from 'react'
import {Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/LOGO.png'

export default function Header() {
  return (
    <>
    <Navbar fixed="top" bg="#ffffff"  expand="lg">
      <Navbar.Brand className="mx-5" href="#home"> <img
              src={logo}
              width="200"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="mx-3" style={{fontSize:20, fontWeight:900}}>Home</Nav.Link>
          <Nav.Link href="#link" className="mx-3" style={{fontSize:20, fontWeight:900}}>Page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  </>
  )
}
 */