import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import projectsImage from '../assets/Zeduc.jpg'; // Ajuste le chemin selon l'emplacement de ton fichier
import './reclamationMain.css';
import User from '../assets/Generic avatar.png';
import dropdownimage from '../assets/arrow_drop_down.png';
import line from '../assets/Line.png';

const YellowSidebarLayout = () => {
    const issues = [
        { id: 1, label: 'Produit endommagé' },
        { id: 2, label: 'Produit non conforme' },
        { id: 3, label: 'Retard de livraison' },
        { id: 4, label: 'Autres' },
    ];

    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false); // État pour afficher/cacher l'input

    const handleCheckboxChange = (e) => {
        setShowInput(e.target.checked); // Afficher l'input si la checkbox est cochée
    };

    const handleChange = (e) => {
        setInputValue(e.target.value); // Met à jour la valeur de l'input
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={4} style={{ backgroundColor: '#D4B35E', minHeight: '100vh' }}>
                    <img src={projectsImage} style={{ height: '40px', width: '60px', marginLeft: '5px', marginTop: '10px', borderRadius: '10px' }} />
                    <br />

                    <div className='tableau-bord'>
                        <h4>TABLEAU DE BORD</h4>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5><em>Mise à jour du Menu</em></h5>
                        <br />
                        <br />
                        <h5><em>Voir statistiques de vente</em></h5>
                    </div>
                </Col>
                <Col xs={8} style={{ padding: '20px' }}>
                    <div className="d-flex flex-column" style={{ height: '10px' }}>
                        <h2 style={{ fontWeight: 'bold' }}><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gestion des réclamations</em></h2>
                        <img src={User} style={{ width: '50px', height: '40px', alignSelf: 'flex-end', marginTop: '-40px' }} />
                        <img src={dropdownimage} style={{ width: '20px', height: '20px', marginTop: '-30px', alignSelf: 'flex-end' }} />
                        <br />
                        <br />
                    </div>
                    <img src={line} style={{ width: '600px', marginLeft: '10px', marginTop: '60px' }} />
                    <br />
                    <br />
                    <br />
                    <div style={{ marginLeft: '100px' }}>
                        {issues.map(issue => (
                            <Row key={issue.id} className="align-items-center" style={{ marginBottom: '60px' }}>
                                <Col xs="auto">
                                    <Form.Check 
                                        type="checkbox" 
                                        id={`checkbox-${issue.id}`} 
                                        onChange={issue.id === 4 ? handleCheckboxChange : undefined} // Gérer uniquement pour "Autres"
                                    />
                                </Col>
                                <Col>
                                    <Button 
                                        variant="primary" 
                                        style={{
                                            backgroundColor: '#D4B35E',
                                            color: 'black',
                                            border: 'none',
                                            borderRadius: '40px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            marginLeft: '40px',
                                            padding: '10px 20px',
                                            transition: 'backgroundColor 0.3s'
                                        }}
                                    >
                                        {issue.label}
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    </div>
                    {showInput && ( // Afficher l'input uniquement si showInput est true
                        <div controlId="description" style={{ marginLeft: '590px', marginTop: '-180px' }}>
                            
                            <input
                                type="text" 
                                placeholder="Entrez votre description"  
                                value={inputValue}
                                onChange={handleChange}
                                style={{ width: '350px', height: '60px', marginLeft: '-520px', marginTop:"180px" }}
                            />
                        </div>
                    )}
                    <br />
                    {/* Bouton d'envoi de réclamations */}
                    <button className='btnreclamation'>ENVOYER MA RÉCLAMATION</button>
                </Col>
            </Row>
        </Container>
    );
};

export default YellowSidebarLayout;

