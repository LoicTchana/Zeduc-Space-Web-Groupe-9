// On importe tous les composants de la page Employé (du header au footer)
import React from 'react';
import HeaderEmploye from './employeHeader';
import EspaceEmploye from './employeMain';
import FooterEmploye from './employeFooter';


const Employe = () => {
  return (
    <>
      <HeaderEmploye/>
      <EspaceEmploye/>
      <FooterEmploye/>
      
    </>
  );
};

export default Employe;