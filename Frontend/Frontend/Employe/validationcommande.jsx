import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ValidationCommande = ({ commandes }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F8F9FA', borderRadius: '10px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Validation des Commandes</h2>
      {/*Creation du tableau pour valider les commandes*/}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID Étudiant</th>
            <th>Nom Étudiant</th>
            <th>ID Commande</th>
            <th>Plats</th>
            <th>Prix</th>
            <th>Date Commande</th>
            <th>Numéro de Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande) => (
            <tr key={commande.id_commande}>
              <td>{commande.id_etudiant}</td>
              <td>{commande.nom_etudiant}</td>
              <td>{commande.id_commande}</td>
              <td>{commande.plats.join(', ')}</td>
              <td>{commande.prix} XAF</td>
              <td>{new Date(commande.datecommande).toLocaleDateString()}</td>
              <td>{commande.numero_telephone}</td>
              <td>
                <Button variant="danger" onClick={() => handleReject(commande.id_commande)}>Rejeter</Button>
                <Button variant="success" onClick={() => handleValidate(commande.id_commande)} style={{ marginLeft: '10px' }}>
                  Valider
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};


const handleReject = (id_commande) => {
  alert(`Commande ${id_commande} rejetée.`);
};

const handleValidate = (id_commande) => {
  alert(`Commande ${id_commande} validée.`);
};

export default ValidationCommande;
