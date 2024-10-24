import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './gestionemploye.css';

const GestionComptesEmployes = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseView = () => setShowView(false);
    const handleShowView = () => setShowView(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    return (
        <div className="text-center" style={{ marginTop: '100px' }}>
            <Button variant="primary" onClick={handleShowAdd}>
                Ajouter un compte employé
            </Button>
            <br />
            <br />
            <Button variant="danger" onClick={handleShowDelete}>
                Supprimer un compte employé
            </Button>
            <br />
            <br />
            <Button variant="warning" onClick={handleShowEdit}>
                Modifier un compte employé
            </Button>
            <br />
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
                        <Form.Group controlId="formIdentifiant">
                            <Form.Label>Identifiant de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez l'identifiant" />
                        </Form.Group>
                        <Form.Group controlId="formNom">
                            <Form.Label>Nom de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom" />
                        </Form.Group>
                        <Form.Group controlId="formMotDePasse">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Entrez le mot de passe" />
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
            </Modal>

            {/* Modal Supprimer */}
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer un compte employé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formIdentifiantDelete">
                            <Form.Label>Identifiant de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez l'identifiant" />
                        </Form.Group>
                        <Form.Group controlId="formNomDelete">
                            <Form.Label>Nom de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom" />
                        </Form.Group>
                        <Form.Group controlId="formMotDePasseDelete">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Entrez le mot de passe" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={handleCloseDelete}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Modifier */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier un compte employé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formIdentifiantEdit">
                            <Form.Label>Identifiant de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez l'identifiant" />
                        </Form.Group>
                        <Form.Group controlId="formNomEdit">
                            <Form.Label>Nom de l'employé</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom" />
                        </Form.Group>
                        <Form.Group controlId="formMotDePasseEdit">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Entrez le mot de passe" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Annuler
                    </Button>
                    <Button variant="warning" onClick={handleCloseEdit}>
                        Modifier
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
                        {/* Liste fictive pour exemple, remplace par une liste dynamique si nécessaire */}
                        <p>Identifiant : emp001, Nom : John Doe, Mot de passe : ********</p>
                        <p>Identifiant : emp002, Nom : Jane Smith, Mot de passe : ********</p>
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
