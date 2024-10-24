import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientReclamationsTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReclamations = async () => {
      try {
        const response = await axios.get('/reclamations'); // Adjust the URL as needed
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReclamations();
  }, []);

  const handleMoreInfo = (id_client) => {
    alert(`Info marquées comme lue pour le client ID: ${id_client}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2>Tableau des Réclamations</h2>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#af0e46' }}>Id Client</th>
            <th style={{ backgroundColor: '#af0e46' }}>Nom Client</th>
            <th style={{ backgroundColor: '#af0e46' }}>Libelle</th>
            <th style={{ backgroundColor: '#af0e46' }}>Marquer Réclamation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client) => (
            <tr key={client.id_client}>
              <td>{client.id_client}</td>
              <td>{client.Nom_client}</td>
              <td>{client.libelle}</td>
              <td>
                <Button style={{ width: '170px' }}
                  variant="danger"
                  onClick={() => handleMoreInfo(client.id_client)}
                >
                  Marqué comme lue
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

export default ClientReclamationsTable;
