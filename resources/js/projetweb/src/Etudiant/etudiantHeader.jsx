import React, { useState,useEffect, useRef  } from 'react';
import './etudiantHeader.css'   // On va ajouter un fichier CSS pour les styles
import Zeducimage from '../assets/Zeduc.jpg'; // Ajuste le chemin selon l'emplacement de ton fichier
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import SearchIcon from '../assets/Vector (1).png'
import PersonneImage from '../assets/Generic avatar.png'
import dropdownimage from '../assets/arrow_drop_down.png'

const HeaderEtudiant = () => {
  return (
      <header className="header">
          <img src={Zeducimage} alt="Logo" className="logo" />
          <Navbar>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
                      <Nav.Link href="#mes-commandes" className="mx-3">Mes commandes</Nav.Link>
                      <Nav.Link href="#promotion" className="mx-3">Promotion</Nav.Link>
                  </Nav>
                  <div className='Search'>
                      <input type='search' placeholder='What do you like to eat?' className='me-2' aria-label="Search" />
                      <img src={SearchIcon} alt="Rechercher" className='mx-3' />
                     
                      
                      <Dropdown>
                          <Dropdown.Toggle as="div" >
                          <img src={PersonneImage} alt="Compte" className='compte' />
                              
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{textAlign:"right"}}>
                              <Dropdown.Item href="#mon-compte">Mon compte</Dropdown.Item>
                              <Dropdown.Item href="#mes-points">Mes points de fidélité</Dropdown.Item>
                              <Dropdown.Item href="#historique">Mon historique de commande</Dropdown.Item>
                              <Dropdown.Item href="#parrainage">Mon code de parrainage</Dropdown.Item>
                              <Dropdown.Item href="#meilleurs-clients">Voir les meilleurs clients</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                  </div>
              </Navbar.Collapse>
          </Navbar>
      </header>
  );
};

export default HeaderEtudiant;