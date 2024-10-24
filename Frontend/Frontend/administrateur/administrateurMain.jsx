import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import line from '../assets/Line.png';
import './administrateurMain.css'; // lien vers le fichier CSS
import { useNavigate } from 'react-router-dom'; 
import adminImage from '../assets/Admin.png';

const AdminMain = () => {
  const navigate = useNavigate(); //On crée une instance de useNavigate 
  const circleColor = '#D4B35E'; // Couleur du cercle placé à droite
 

  return (
    <Container fluid className="admin-page"> {/*création du conteneur principal de la page */}
    
      <Row className="justify-content-center text-center my-5">
        <Col>
          <h4 className="font-weight-bold"><em>BIENVENUE DANS L'ESPACE ADMINISTRATEUR</em></h4>
          <Image src={line} alt="Image en haut" />
        </Col>
      </Row>
      <Row>
        {/* Colonne de boutons à gauche */}
        <Col md={3} className="d-flex flex-column justify-content-start align-items-start">
          <Button variant="light" className="custom-button" onClick={() => navigate('/gestionEmploye')} >GERER L'ESPACE EMPLOYE</Button>
          <Button variant="light" className="custom-button" onClick={() => navigate('/menu')}>GERER LE MENU</Button>
          <Button variant="light" className="custom-button" onClick={() => navigate('/statistiques')} >STATISTIQUES DE VENTE</Button>
          <Button variant="light" className="custom-button" >LANCER UNE PROMOTION</Button>
          <Button variant="light" className="custom-button" onClick={() => navigate('/valider_reclamations')}>SUIVRE LES RECLAMATIONS</Button>
        </Col>

        {/* Partie à droite avec le cercle */}
        <Col md={3} className="position-relative">
          <div
            style={{
              background:`linear-gradient(0deg, ${circleColor},#F2F7FF )`,
              
              width: '400px',
              height: '400px',
              position: 'absolute',
              top: '60%',
              left: '200%',
              transform: 'translateY(-50%) rotate(45deg)',
              borderRadius: '20%',
            }}
          />
          <div style={{ position: 'relative', height: '300px' }}> {/* Assure-toi que le conteneur a une hauteur définie */}
          
          <img 
            src={adminImage}
            alt="Image au-dessus"
            className="adminImage"
             />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMain;
