import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav, NavItem,NavLink   } from 'reactstrap';
function App() {


  return (
<Nav
  fill
  pills
>
  <NavItem>
    <NavLink
      active
      href="#"
    >
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Much Longer Nav Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
  )
}

export default App
