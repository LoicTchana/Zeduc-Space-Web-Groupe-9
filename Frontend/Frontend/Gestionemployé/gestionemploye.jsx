import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import './gestionemploye.css';

const GestionComptesEmployes = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showView, setShowView] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({ nom: '', email: '', motDePasse: '' });
    const [deleteId, setDeleteId] = useState('');

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseView = () => setShowView(false);
    const handleShowView = () => setShowView(true);

    useEffect(() => {
        fetchEmployees(); // Charger les employés au démarrage
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('/employe');
            setEmployees(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des employés:', error);
        }
    };

    const handleAddEmployee = async () => {
        try {
            await axios.post('/employe', {
                nom_employe: newEmployee.nom,
                email_employe: newEmployee.email,
                mot_de_passe_employe: newEmployee.motDePasse,
            });
            fetchEmployees(); // Actualiser la liste des employés
            handleCloseAdd();
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'employé:', error);
        }
    };

    const handleDeleteEmployee = async () => {
        try {
            await axios.delete(`/employe/${deleteId}`);
            fetchEmployees(); // Actualiser la liste des employés
            handleCloseDelete();
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'employé:', error);
        }
    };

    return (
        <div className="text-center" style={{ marginTop: '200px' }}>
            <Button variant="primary" onClick={handleShowAdd}>
                Ajouter un compte employé
            </Button>
            <br />
            <Button variant="danger" onClick={handleShowDelete}>
                Supprimer un compte employé
            </Button>
            <br />
            <Button variant="info" onClick={handleShowView}>
                Voir les comptes employés
            </Button>

            {/* Modal Ajouter */}
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un compte employé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNom">
                            <Form.Label>Nom de l'employé</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez le nom"
                                value={newEmployee.nom}
                                onChange={(e) => setNewEmployee({ ...newEmployee, nom: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMotDePasse">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Entrez le mot de passe"
                                value={newEmployee.motDePasse}
                                onChange={(e) => setNewEmployee({ ...newEmployee, motDePasse: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Entrez l'adresse mail"
                                value={newEmployee.email}
                                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleAddEmployee}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Supprimer */}
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer un compte employé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formIdDelete">
                            <Form.Label>ID de l'employé à supprimer</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez l'ID de l'employé"
                                value={deleteId}
                                onChange={(e) => setDeleteId(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={handleDeleteEmployee}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Voir les comptes */}
            <Modal show={showView} onHide={handleCloseView}>
                <Modal.Header closeButton>
                    <Modal.Title>Voir les comptes employés</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {employees.length > 0 ? (
                            employees.map(emp => (
                                <p key={emp.id_employe}>
                                    Identifiant : {emp.id_employe}, Nom : {emp.nom_employe}, Email : {emp.email_employe}
                                </p>
                            ))
                        ) : (
                            <p>Aucun compte employé trouvé.</p>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseView}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GestionComptesEmployes;
