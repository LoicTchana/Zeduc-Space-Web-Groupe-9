import React, {useState} from 'react';
import './etudiantHeader.css'   // On va ajouter un fichier CSS pour les styles
import Zeducimage from '../assets/Zeduc.jpg'; 
import { Navbar, Nav, Dropdown,Modal,Button,Table } from 'react-bootstrap';
import PersonneImage from '../assets/Generic avatar.png'
import { useNavigate } from 'react-router-dom';


const HeaderEtudiant = () => {  
    

    {/*definition constantes pour les points de fidélité */}
    const [showModal, setShowModal] = useState(false);
    const pointsValue = 150; // Exemple de valeur de points
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);



    {/*definition constante pour le code de parrainage */}
    const [showModalcode, setShowModalcode] = useState(false);
    const code = 'Aé134f5èj'; // Exemple de code de parainage
    const handleClosecode = () => setShowModalcode(false);
    const handleShowcode = () => setShowModalcode(true);



    {/*definition constante pour l'historique de commandes*/}
    const [show, setShow] = useState(false);
    const handleClosehistorique = () => setShow(false);
    const handleShowhistorique = () => setShow(true);



 {/*Initialisation du tableau historique de commandes */}
    const orders = [
        { plat: 'Bolognaise', montant: '1200 fcfa', date: '01/10/2024' },
        { plat: 'plantain mur', montant: '1500 fcfa', date: '05/10/2024' },
        { plat: 'Pilé plantain', montant: '2000 fcfa', date: '10/10/2024' },
    ];




    const navigate = useNavigate(); //Creer une instance de useNavigate
  return (
      <header className="header">
          <img src={Zeducimage} alt="Logo" className="logo" />
          <Navbar> {/*menu de navigation */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="nav">
                      <Nav.Link href="#Home" className="mx-3">Home</Nav.Link>
                      <Nav.Link  className="mx-3" onClick={() => navigate('/Mescommandes')}>Mes commandes</Nav.Link>
                      <Nav.Link href="#promotions" className="mx-3">Promotion</Nav.Link>
                  </Nav>
                  <div className='Search'>
                     
                     
                      
                      <Dropdown>
                          <Dropdown.Toggle as="div" >
                          <img src={PersonneImage} alt="Compte" className='compte' />   
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{textAlign: "left", left: -150 }}>
                              <Dropdown.Item href="#mon-compte">Mon compte</Dropdown.Item>
                              <Dropdown.Item onClick={handleShow}>Mes points de fidélité</Dropdown.Item>
                              <Dropdown.Item onClick={handleShowhistorique}>historique de commande</Dropdown.Item>
                              <Dropdown.Item onClick={handleShowcode}>code de parrainage</Dropdown.Item>
                              <Dropdown.Item href="#meilleurs-clients">Voir les meilleurs clients</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>


                      {/*logique d'affichage pour la fenetre mes points de fidélité*/ }
                      <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title style={{ fontWeight: 'bold' }}>Mes points de fidélité</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h4>{pointsValue} points</h4>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        </Modal.Footer>
                    </Modal>


                    {/*logique d'affichage pour le code de parrainage*/ }
                    <Modal show={showModalcode} onHide={handleClosecode}>
                        <Modal.Header closeButton>
                        <Modal.Title style={{ fontWeight: 'bold' }}>Mon code de parainage</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h4>{code} </h4>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosecode}>
                            Fermer
                        </Button>
                        </Modal.Footer>
                    </Modal>

 
                    {/*Afficher l'historique de commandes */}
                    <Modal show={show} onHide={handleClosehistorique}>
                        <Modal.Header closeButton>
                            <Modal.Title>Historique des Commandes</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Plat</th>
                                        <th>Montant</th>
                                        <th>Date commande</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={index}>
                                            <td>{order.plat}</td>
                                            <td>{order.montant}</td>
                                            <td>{order.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosehistorique}>
                                Fermer
                            </Button>
                        </Modal.Footer>
            </Modal>



                  </div>
              </Navbar.Collapse>
          </Navbar>
      </header>
  );
};

export default HeaderEtudiant;