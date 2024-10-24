// On importe tous les composants de la page de suivi des commandes
import React from 'react';
import HeadersuiviCommande from './suiviCommandeHeader';
import ClientOrdersTable from './suiviCommande';
import FootersuiviCommande from './suiviCommandeFooter';



const Commande = () => {
  return (
    <>
      <HeadersuiviCommande/>
      <ClientOrdersTable/>
      <FootersuiviCommande/>
      
      
    </>
  );
};

export default Commande;