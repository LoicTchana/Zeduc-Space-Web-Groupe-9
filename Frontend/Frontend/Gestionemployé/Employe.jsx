// Ici, on importe tous les composants de l'espace employé (du header au footer)
import React from 'react';
import GestionComptesEmployes from './gestionemploye';
import FootergestionEmploye from './footergestionemploye';

const GestionCompteEmploye = () => {
  return (
    <>
      <GestionComptesEmployes/>
      <FootergestionEmploye/>
      
    </>
  );
};

export default GestionCompteEmploye;