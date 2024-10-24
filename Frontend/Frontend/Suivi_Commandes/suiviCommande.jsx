import React from 'react';
import { Table,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const ClientOrdersTable = () => {
  const navigate = useNavigate(); // Créer une instance de useNavigate


  // Exemple de données
  const data = [
    { id_client: 1, Nom_client: 'Alice', id_commande: 101 },
    { id_client: 2, Nom_client: 'Bob', id_commande: 102 },
    { id_client: 3, Nom_client: 'Charlie', id_commande: 103 },
  ];

  const handleMoreInfo = (id_client) => {
    alert(`Informations supplémentaires pour le client ID: ${id_client}`);
  };

  return (
    <div className="container mt-5">
      <h2>Liste des commandes clients du jour</h2>
      <br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{backgroundColor:'#849be1'}} >Id Client</th>
            <th style={{backgroundColor:'#849be1'}}>Nom Client</th>
            <th style={{backgroundColor:'#849be1'}}>Id Commande</th>
            <th style={{backgroundColor:'#849be1'}}>Contenu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client) => (
            <tr key={client.id_client}>
              <td>{client.id_client}</td>
              <td>{client.Nom_client}</td>
              <td>{client.id_commande}</td>
              <td>
                <Button style={{width:'130px'}}
                  variant="danger"
                  onClick={() => handleMoreInfo(client.id_client)}
                >
                  En savoir plus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="secondary" onClick={() => navigate(-1)}>
      Retour
    </Button>
    </div>
  );
};

export default ClientOrdersTable;
