import React, { useState } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button } from 'reactstrap';
import Btn from '../../shared-components/atoms/Button/CdButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    // Handle sign out logic here, such as clearing user data or tokens
    console.log('User signed out');
    // Redirect to login or another appropriate page if necessary
  };

  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">CompanyName</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">About</NavLink>
              </NavItem>
            </Nav>
            <Btn onClick={handleSignOut} color="secondary" className="ml-auto" children={'Sign Out'} />
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
