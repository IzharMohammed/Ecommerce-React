import React, { useContext, useEffect, useState } from 'react';
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
import { userContext } from '../context/UserContext';
import axios from 'axios';
import { getUserCart } from '../../Apis/FakeStoreProdApis';
import { cartContext } from '../context/CartContext';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const[token , setToken , removeToken] = useCookies(['jwt-token']);
  const{cart,setCart}=useContext(cartContext);

  async function getCartDetails(userId){
   const response = await axios.get(getUserCart(userId));
   console.log(response.data[0]);
   setCart(response.data[0]);
  }

console.log(cart);

  const toggle = () => setIsOpen(!isOpen);
   const{user,setUser}=useContext(userContext);
                  
     function logout(){
      removeToken('jwt-token',{httpOnly : true});
      axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`,{withCredentials: true});
      setUser(null);                    
           }

 useEffect(()=>{
  console.log('user', user);
    getCartDetails(user.id);
   },[token])
                     


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
      {cart && cart.products &&  <DropdownItem>{`Cart (${cart.products.length})` }  </DropdownItem>}
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {
                      token['jwt-token'] ? 
                      <Link onClick={()=>logout()} to='/Login'>Logout</Link> :
                      <Link to='/Login'>Signin</Link>
                  }
                 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {
            user && 
            <NavbarText>{user.username}</NavbarText>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;