import React, { useState } from 'react';
import './gerantMain.css';
import lineImage from '../assets/Line.png';
import gerantImage from '../assets/gerant.png'
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const EspaceGerant = () => {
const navigate = useNavigate();
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

    return (
      <div className="container">
        <h4 className="title">ESPACE GERANT</h4>
         <img src={lineImage} alt='lineimage' class='line'/>
        <div className="content">
          <div className="buttons">
            <button className="button">ETAT DES COMMANDES</button> {/*Bouttons utilisant les routes pour rediriger vers d'autres pages*/}
            <button className="button" onClick={() => navigate('/gestionEmploye')}>AJOUTER UN EMPLOYE</button>
            <button className="button" onClick={() => navigate('/valider_reclamations')} >GERER LES RECLAMATIONS</button>
            <button className="button" onClick={() => navigate('/statistiques')} >VOIR LES STATISTIQUES GENERALES</button>

          </div>
          <div className="image-container">
          
            <div className="circle">
           
            </div>
            <img src={gerantImage} alt="Image" className="inner-image" /> {/*Chemin d'accès de  l'image */}
            
          </div>
        </div>
         {/*Modal Ajouter*/}
       <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un compte employé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <Form.Group controlId="formNom">
                            <Form.Label>Nom de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom" />
                        </Form.Group>
                        <Form.Group controlId="formMotDePasse">
                            <Form.Label>Mot de passe du compte</Form.Label>
                            <Form.Control type="password" placeholder="Entrez le mot de passe" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email de  l'employé</Form.Label>
                            <Form.Control type="email" placeholder="Entrez l'adresse mail" />
                        </Form.Group>
                        <Form.Group controlId="formNumero">
                            <Form.Label>Numero de telephone</Form.Label>
                            <Form.Control type="number" placeholder="Entrez le numero de telephone" />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Annuler
                    </Button>
                    <Button variant="warning" onClick={handleCloseAdd}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal> */
      </div>
    );
  };
  
  export default EspaceGerant;