// On importe tous les composants de la page de validation des reclamations
import React from 'react';

import FootervaliderReclamations from './validerReclamationsFooter';
import ClientReclamationsTable from './validereclamation';
import HeadervaliderReclamation from './validerReclamationsHeader';



const ValiderReclamations = () => {
  return (
    <>
      <HeadervaliderReclamation/>
      <ClientReclamationsTable/>
      <FootervaliderReclamations/>
      
      
    </>
  );
};

export default ValiderReclamations;