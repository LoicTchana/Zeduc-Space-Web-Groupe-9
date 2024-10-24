import React from 'react';
import lineImage from '../assets/Line.png';
import employeImage from '../assets/Employe.png';
import './employeMain.css';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import ValidationCommande from './validationcommande';


const EspaceEmploye = () => {
  const navigate = useNavigate(); // Créer une instance de useNavigate
    return (
      
      <div className="container">
        <h4 className="title">BIENVENUE DANS L'ESPACE EMPLOYE</h4>
        <div className="content">
          <div className="buttons"> {/*Ici, on utilise les routes pour renvoyer l'employé dans différentes pages en fonction du bouuton qu'il clique */}
          <button className="button" onClick={() => navigate('/suivi_commande')}>CONSULTER LES COMMANDES</button>
            <button className="button" onClick={() => navigate('/menu')}>MISE A JOUR DU MENU</button>
            <button className="button" onClick={() =>navigate('/valider_reclamations')}>VALIDER LES RECLAMATIONS</button>
            <button className="button" onClick={() =>navigate('/statistiques')}>STATISTIQUE DE VENTE</button>
          </div>
          <div className="image-container">
            <div className="circle"> {/*cette division crée un cercle du côté droit et lui donne une couleur de fond: elle est stylisée dans le fichier CSS */}

            </div>
              <img src={employeImage} alt="Image" className="inner-image" /> {/*Chemin d'accès de  l'image */}
           </div>
        
        </div>
      
      </div>

      
      
      
    );
  };
  
  export default EspaceEmploye;