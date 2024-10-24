import React, { useState } from 'react';
import './gerantHeader.css'   // On va ajouter un fichier CSS pour les styles
import Zeducimage from '../assets/Zeduc.jpg'; // Ajuste le chemin selon l'emplacement de ton fichier
import SearchIcon from '../assets/Vector (1).png'
import PersonneImage from '../assets/Generic avatar.png'
import dropdownimage from '../assets/arrow_drop_down.png'
import bagimage from '../assets/fi-rr-shopping-bag (1).png';
import { Navbar, Nav} from 'react-bootstrap';

const HeaderGerant = () => {
    return (
  <header className="header">

     
     <img src={Zeducimage} alt="Logo" className="logo" />
     <Nav className="me-auto">
          <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
      </Nav>
    
   
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       
        <div className='Search'>
         
        
        <img src={SearchIcon} alt="Rechercher" className='mx-3'/>
        <img src={bagimage} alt="Rechercher" className='mx-3'/>
        <img src={PersonneImage} alt="Compte"  className='compte'/>
        <img src={dropdownimage} alt="Compte" className='dropdown'/>
        </div>
      </Navbar.Collapse>
    </Navbar>
   
  </header>

    );
  };
  
  export default HeaderGerant;