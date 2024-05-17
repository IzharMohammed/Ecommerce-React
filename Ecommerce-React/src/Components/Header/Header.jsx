import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu ,
  DropdownItem ,
  NavbarText,
} from 'reactstrap';
import { useCookies } from 'react-cookie';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const[token , setToken , removeToken] = useCookies(['jwt-token']);
  console.log('token is ', token);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
         
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
      <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {
                      token['jwt-token'] ? 
                      <Link onClick={()=>removeToken('jwt-token')} to='/Login'>Logout</Link> :
                      <Link to='/Login'>Signin</Link>
                  }
                 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;