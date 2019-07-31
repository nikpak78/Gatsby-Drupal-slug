import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
  
 } from 'reactstrap';
  

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="pano" >
        <Navbar color="dark" light expand="md">
          <NavbarBrand><Link to="/">PC Base</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink><Link to="/">Αρχική</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/blog/">Blog</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/page-2/">page 2</Link></NavLink>
              </NavItem>
             
              
              
            </Nav>
          </Collapse>
        </Navbar>
      

      </div>
    );
  }
}
