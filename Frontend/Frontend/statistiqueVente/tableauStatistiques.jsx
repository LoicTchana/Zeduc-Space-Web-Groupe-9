import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const StatistiquesTable = () => {
  const navigate = useNavigate();

  // Exemple de données
  const data = [
    { nom_plat: "Poulet pané", nombre_ventes: 30, revenu: 300 },
    { nom_plat: "Rôti de poulet", nombre_ventes: 50, revenu: 500 },
    { nom_plat: "Cassoulet", nombre_ventes: 40, revenu: 400 },
  ];

  return (
    <div className="container mt-5">
      <h2>Tableau des Statistiques</h2>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#63abed' }}>Nom du plat</th>
            <th style={{ backgroundColor: '#63abed' }}>Nombre de ventes</th>
            <th style={{ backgroundColor: '#63abed' }}>Revenu Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((plat, index) => (
            <tr key={index}>
              <td>{plat.nom_plat}</td>
              <td>{plat.nombre_ventes}</td>
              <td>{plat.revenu}</td>
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

export default StatistiquesTable;
