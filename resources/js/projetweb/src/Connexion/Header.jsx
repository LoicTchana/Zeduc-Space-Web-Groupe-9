import React, { useState } from 'react';
import './Header.css'   // On va ajouter un fichier CSS pour les styles
import projectsImage from '../assets/Zeduc.jpg'; // Ajuste le chemin selon l'emplacement de ton fichier


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
