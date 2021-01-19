import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (): JSX.Element => (
  <div className="header">
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Sean Doughty</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="/projects/learning-to-see-in-the-dark">Learning to See in the Dark</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="https://sean-doughty.medium.com/">Blog</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
);

export default Header; 