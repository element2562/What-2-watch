import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class extends Component {
render(){
return(
  <React.Fragment>
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
        
      <Link to="/">My Library</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem href="/addmovies">
      Add Movies
    </NavItem>
    <NavItem href="/recommend">
        Recommendation
    </NavItem>
{/* <NavDropdown title={username} id="user-dropdown">
<MenuItem id="userDrop" onClick={() => {
      sessionStorage.removeItem("User")
      window.location.reload();
    }}>
      Logout
    </MenuItem>
</NavDropdown> */}
</Nav>
</Navbar>

</React.Fragment>
)
}
}