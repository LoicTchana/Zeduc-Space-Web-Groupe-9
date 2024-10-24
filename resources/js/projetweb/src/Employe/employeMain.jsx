import React from 'react';
import './employeMain.css';

const EspaceEmploye = () => {
    return (
      <div className="container">
        <h4 className="title">BIENVENUE DANS L'ESPACE EMPLOYE</h4>
        <div className="content">
          <div className="buttons">
            <button className="button">MISE A JOUR DU MENU</button>
            <button className="button">VALIDER LES RECLAMATIONS</button>
            <button className="button">VOIR STATISTIQUE DE VENTE</button>
          </div>
          <div className="image-container">
            <div className="circle">
              <img src="path/to/your/image.png" alt="Image" className="inner-image" /> {/*Chemin d'accès de  l'image */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EspaceEmploye;