import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './gestionmenu.css'; // Assurez-vous d'importer le CSS

const GestionMenu = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showModify, setShowModify] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleCloseModify = () => setShowModify(false);
    const handleShowModify = () => setShowModify(true);

    return (
        <div className="text-center" style={{ marginTop: '100px' }}>
            <Button variant="primary" onClick={handleShowAdd}>
                Ajouter un élément au menu
            </Button>
            <br />
            <br />
            <Button variant="danger" onClick={handleShowDelete}>
                Supprimer un élément du menu
            </Button>
            <br />
            <br />
            <Button variant="warning" onClick={handleShowEdit}>
                Modifier un élément du menu
            </Button>
            
            

            {/* Modal Ajouter */}
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un élément au menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image du plat</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formNomPlat">
                            <Form.Label>Nom du plat</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom du plat" />
                        </Form.Group>
                        <Form.Group controlId="formPrixPlat">
                            <Form.Label>Prix du plat</Form.Label>
                            <Form.Control type="number" placeholder="Entrez le prix" />
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
                    <Modal.Title>Supprimer un élément du menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNomPlatSuppr">
                            <Form.Label>Nom du plat</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom du plat à supprimer" />
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
                    <Modal.Title>Modifier un élément du menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNomPlatEdit">
                            <Form.Label>Nom du plat à modifier</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom du plat" />
                        </Form.Group>
                        <Form.Group controlId="formNouveauNomPlat">
                            <Form.Label>Nouveau nom du plat</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nouveau nom" />
                        </Form.Group>
                        <Form.Group controlId="formNouveauPrixPlat">
                            <Form.Label>Nouveau prix du plat</Form.Label>
                            <Form.Control type="number" placeholder="Entrez le nouveau prix" />
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

           
        </div>
    );
};

export default GestionMenu;
