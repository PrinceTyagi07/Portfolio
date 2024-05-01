import React, { useEffect, useState } from 'react'
import './header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
const [activeNav,setActiveNav] = useState("#home")


  return (
    <>
    <Navbar expand="lg" className="bg-navbar header">
      <div className='container'>
        <Navbar.Brand href="#home" className='fs-5 font-style fw-bold'>चौ. प्रिंस त्यागी★</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='fw-bold'>
            <Nav.Link className={activeNav === "#home"?"nav_link mx-2":"link mx-2"} href="#home" onClick={()=>setActiveNav("#home")}>Home</Nav.Link>
            <Nav.Link className={activeNav === "#about"?"nav_link mx-2":"link mx-2"} href="#about" onClick={()=>setActiveNav("#about")}>About</Nav.Link>
            <Nav.Link className={activeNav === "#skills"?"nav_link mx-2":"link mx-2"} href="#skills" onClick={()=>setActiveNav("#skills")}>Skills</Nav.Link>
            <Nav.Link className={activeNav === "#qualification"?"nav_link mx-2":"link mx-2"} href="#qualification" onClick={()=>setActiveNav("#qualification")}>Qualification</Nav.Link>
            <Nav.Link className={activeNav === "#projects"?"nav_link mx-2":"link mx-2"} href="#projects" onClick={()=>setActiveNav("#projects")}>Projects</Nav.Link>
            <Nav.Link className={activeNav === "#contact"?"nav_link mx-2":"link mx-2"} href="#contact" onClick={()=>setActiveNav("#contact")}>Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  )
}

export default Header
