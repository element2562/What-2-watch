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
 <NavDropdown title={this.props.userInfo.userName} id="user-dropdown">
 <MenuItem id="userDrop" onClick={() => {
       sessionStorage.removeItem("What2Watch_token");
       this.props.history.push("/");
     }}>
       Logout
     </MenuItem>
 </NavDropdown>
</Nav>
</Navbar>

</React.Fragment>
)
}
}