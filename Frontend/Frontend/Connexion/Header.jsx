import React, { useState } from 'react';
import './Header.css'   // On ajoute un fichier CSS pour les styles
import projectsImage from '../assets/Zeduc.jpg'; // On importe l'image du logo de Zeduc


const Header = () => {
    return (
  <header className="header">
   <div className="d-flex flex-column" style={{ height: '100px' }}>
    <img src={projectsImage} alt="Logo" className="logo" />
    <h6 className="header-text" style={{ marginBottom: '0', alignSelf: 'flex-end', marginRight: '10px' }}>MIAM MIAM</h6>
   </div>
  </header>

    );
  };
  
  export default Header;
