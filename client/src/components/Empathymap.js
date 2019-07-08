import React,{ Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink ,
  Container
  } from 'reactstrap';

class Empathymap extends Component{
  state={
    isOpen:false
  }

  toggle=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  render(){
    return(
      <div>
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand>Project1</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="http://localhost:3000/empathymap/empathynotes">
                      Emapthy Notes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="http://localhost:3000/personamaps">
                      PersonaMap
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="http://localhost:3000/journeymap">
                      Journey Map
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="http://localhost:3000/ideate">
                      Ideate
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/bradtraversy">
                      Prototype
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/bradtraversy">
                      Feedback & Testing
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
            </Navbar>
          </div>
        </div>
    );
  }
}

export default Empathymap;