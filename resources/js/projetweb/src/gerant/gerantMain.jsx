import React from 'react';
import './gerantMain.css';
import lineImage from '../assets/Line.png';
import gerantImage from '../assets/gerant.png'

const EspaceGerant = () => {
    return (
      <div className="container">
        <h4 className="title">ESPACE GERANT</h4>
         <img src={lineImage} alt='lineimage' class='line'/>
        <div className="content">
          <div className="buttons">
            <button className="button">SUPERVISER LES COMMANDES</button>
            <button className="button">CREER UN COMPTE EMPLOYE</button>
            <button className="button">GERER LES RECLAMATIONS</button>
            <button className="button">VOIR LES STATISTIQUES GENERALES</button>

          </div>
          <div className="image-container">
          
            <div className="circle">
           
            </div>
            <img src={gerantImage} alt="Image" className="inner-image" /> {/*Chemin d'accès de  l'image */}
            
          </div>
        </div>
      </div>
    );
  };
  
  export default EspaceGerant;