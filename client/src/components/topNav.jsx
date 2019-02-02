import React,{Component} from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink
} from 'reactstrap';

class TopNav extends Component{

  constructor(props){
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state={isOpen:true};
  }

  toggleNavbar(){
  this.setState({isOpen:!this.state.isOpen});
  }

  render(){
     return(
     <div>
     <Navbar color="warning" light>

         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
         <Collapse isOpen={!this.state.isOpen} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink href="/components/">Components</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
         <NavbarBrand href="/" className="mr-auto">Notes</NavbarBrand>
       </Navbar>
     </div>
     );
  }
}

export default TopNav;
