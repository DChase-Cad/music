import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const TopNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    //nav toggle
    const toggle = () => setIsOpen(!isOpen);

    //toggle function for drop down nav
    function toggleLink() {
        if (isOpen === true) {
            toggle();
        }
    };

    return (

        <Navbar className="navbar-dark" light expand='md' sticky='top'>
            <NavbarBrand className="d-md-none" href="/"><img src="assets/img/phoenix.png" alt="Logo" height="30" width="30" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem onClick={toggleLink} className="nav-item ml-4 active drop"><Link to='/' className="nav-link"><i className="d-none d-md-inline fa fa-home fa-lg"></i> Home</Link></NavItem>
                    <NavItem onClick={toggleLink} className="nav-item ml-4 drop"><Link to='/aboutus' className="nav-link" ><i className="d-none d-md-inline fa fa-info fa-lg"></i> About</Link></NavItem>
                    <NavItem onClick={toggleLink} className="nav-item ml-4 drop"><Link to='/classresources' className="nav-link" href="/classResources.html"><i className="d-none d-md-inline fa fa-users fa-lg"></i> Class Resources</Link></NavItem>
                    <NavItem onClick={toggleLink} className="nav-item ml-4 drop"><Link to='/gallery' className="nav-link"><i className="d-none d-md-inline fa fa-list fa-lg"></i> Gallery</Link></NavItem>
                    <NavItem onClick={toggleLink} className="nav-item ml-4 drop"><Link className="nav-link" href="mailto:"><i className="d-none d-md-inline fa fa-address-card fa-lg"> </i> Contact</Link></NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default TopNavbar;






















// import React, { Component , useState} from 'react';
// import {Navbar,NavbarBrand,NavbarToggler,Collapse, NavItem,NavLink,NavbarText} from 'reactstrap';
// import logo from '../img/phoenix.png';

// class TopNavbar extends Component {
//     const Example = (props) => {
//         const [isOpen, setIsOpen] = useState(false);
//         const toggle = () => setIsOpen(!isOpen);}

//     render() {
//         return (

//             <Navbar className="navbar-expand-sm navbar-dark sticky-top">
//                 <div className="container col">
//                     <NavbarBrand className="d-sm-none" href="#"><img src={logo} height="30" width="30" /></NavbarBrand>
//                     <NavbarToggler onClick={toggle} />
//                     <Collapse className="navbar-collapse text-nowrap" id="ashesNavbar">
//                         <ul className="navbar-nav col justify-content-end">
//                             <NavItem className="nav-item ml-5 active"><a className="nav-link" href="#"><i className="fa fa-home fa-lg"></i> Home</a></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="aboutUs.html"><i className="fa fa-info fa-lg"></i> About</NavLink></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="classResources.html"><i className="fa fa-users fa-lg"></i> Class Resources</NavLink></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="gallery.html"><i className="fa fa-list fa-lg"></i> Gallery</NavLink></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="mailto:"><i className="fa fa-address-card fa-lg"></i> Contact</NavLink></NavItem>
//                         </ul>
//                     </Collapse>
//                 </div>
//             </Navbar>

//         );
//     }
// }

// export default TopNavbar;