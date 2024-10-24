import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import projectsImage from '../assets/Zeduc.jpg'; // Adjust the path according to your file location
import './reclamationMain.css';
import User from '../assets/Generic avatar.png';
import dropdownimage from '../assets/arrow_drop_down.png';
import line from '../assets/Line.png';
import axios from 'axios';

const YellowSidebarLayout = () => {
    const issues = [
        { id: 1, label: 'Produit endommagé' },
        { id: 2, label: 'Produit non conforme' },
        { id: 3, label: 'Retard de livraison' },
        { id: 4, label: 'Autres' },
    ];

    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleCheckboxChange = (e) => {
        setShowInput(e.target.checked);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleIssueSelect = (issueId) => {
        setSelectedIssue(issueId);
        if (issueId === 4) {
            setShowInput(true);
        } else {
            setShowInput(false);
            setInputValue(''); // Clear the input if a predefined issue is selected
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const libelle_reclamation = showInput ? inputValue : issues[selectedIssue - 1]?.label;

        try {
            const response = await axios.post('/reclamations', { libelle_reclamation });
            setSubmissionMessage(response.data.message);
            setInputValue(''); // Reset input after submission
            setShowInput(false); // Hide input field after submission
            setSelectedIssue(null); // Reset selected issue
        } catch (error) {
            console.error('Error submitting reclamation:', error);
            setSubmissionMessage('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={4} style={{ backgroundColor: '#D4B35E', minHeight: '100vh' }}>
                    <img src={projectsImage} style={{ height: '40px', width: '60px', marginLeft: '5px', marginTop: '10px', borderRadius: '10px' }} />
                    <div className='tableau-bord'>
                        <h4>TABLEAU DE BORD</h4>
                        <h5><em>Mise à jour du Menu</em></h5>
                        <h5><em>Voir statistiques de vente</em></h5>
                    </div>
                </Col>
                <Col xs={8} style={{ padding: '20px' }}>
                    <div className="d-flex flex-column" style={{ height: '10px' }}>
                        <h2 style={{ fontWeight: 'bold' }}><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gestion des réclamations</em></h2>
                        <img src={User} style={{ width: '50px', height: '40px', alignSelf: 'flex-end', marginTop: '-40px' }} />
                        <img src={dropdownimage} style={{ width: '20px', height: '20px', marginTop: '-30px', alignSelf: 'flex-end' }} />
                    </div>
                    <img src={line} style={{ width: '600px', marginLeft: '10px', marginTop: '60px' }} />
                    <div style={{ marginLeft: '100px' }}>
                        {issues.map(issue => (
                            <Row key={issue.id} className="align-items-center" style={{ marginBottom: '60px' }}>
                                <Col xs="auto">
                                    <Form.Check 
                                        type="checkbox" 
                                        id={`checkbox-${issue.id}`} 
                                        onChange={(e) => handleIssueSelect(issue.id)}
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
                    {showInput && (
                        <div style={{ marginLeft: '590px', marginTop: '-180px' }}>
                            <input
                                type="text" 
                                placeholder="Entrez votre description"  
                                value={inputValue}
                                onChange={handleChange}
                                style={{ width: '350px', height: '60px', marginLeft: '-520px', marginTop: "180px" }}
                            />
                        </div>
                    )}
                    <br />
                    <Button className='btnreclamation' onClick={handleSubmit}>ENVOYER MA RÉCLAMATION</Button>
                    {submissionMessage && <div style={{ marginTop: '20px' }}>{submissionMessage}</div>}
                </Col>
            </Row>
        </Container>
    );
};

export default YellowSidebarLayout;
