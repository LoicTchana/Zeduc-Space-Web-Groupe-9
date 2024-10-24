import React from 'react';
import { Navbar, Nav, Container, Image, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ZeducImage from '../assets/Zeduc.jpg';
import User from '../assets/Generic avatar.png';
import dropdownImage from '../assets/arrow_drop_down.png';
import searchIcon from '../assets/Vector (1).png'




const HeaderAdministrateur = () => {
    return (
        <Navbar style={{ backgroundColor: '#D4B35E',height:'100px', width:'100%' }} expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <img
                    src={ZeducImage}
                    alt="Logo"
                    width="50"
                    height="50"
                    className="d-inline-block align-top" style={{borderRadius:'15px'}}
                />{' '}
                Zeduc Space
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#" >
                    <img src={searchIcon} alt="Search" width="20" height="20" />
                </Nav.Link>
                <Nav.Link href="#" >
                    <img src={User} alt="User" width="30" height="30"   />
                </Nav.Link>
                <Nav.Link href="#">
                    <img src={dropdownImage} alt="Dropdown" width="20" height="20"/>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);
};

export default HeaderAdministrateur;
