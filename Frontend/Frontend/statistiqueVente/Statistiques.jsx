// On importe tous les composants de la page de statistiques
import React from 'react';
import StatistiquesTable from './tableauStatistiques';
import HeaderStatistiques from './statistiquesHeader';
import FooterStatistiques from './statistiquesFooter';



const Statistiques = () => {
  return (
    <>
      <HeaderStatistiques/>
      <StatistiquesTable/>
      <FooterStatistiques/>
      
      
    </>
  );
};

export default Statistiques;