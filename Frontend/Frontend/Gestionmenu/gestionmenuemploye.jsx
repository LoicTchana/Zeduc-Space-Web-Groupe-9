import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './gestionmenu.css'; // lien vers le fichier CSS
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const GestionMenuemploye = () => {
    const navigate = useNavigate(); // Nous crééons  une instance de useNavigate pour la navigation entre les pages
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showModify, setShowModify] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    

    return (
        <div className="text-center" style={{ marginTop: '250px' }}>
            <Button variant="primary" onClick={handleShowAdd}>
                Ajouter un élément au menu
            </Button>
           
            
            <Button variant="warning" onClick={handleShowEdit}>
                Modifier un élément du menu
            </Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>
      Retour
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

export default GestionMenuemploye;