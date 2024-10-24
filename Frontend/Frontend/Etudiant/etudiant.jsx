// Tous les composants du dossier étudiant sont appelés ici 
import React from 'react';
import HeaderEtudiant from './etudiantHeader';
import Conteneur from './etudiantMain';
import FooterEtudiant from './etudiantFooter';


const Etudiant = () => {
  return (
    <>
      <HeaderEtudiant/>
      <Conteneur/>
      <FooterEtudiant/>
      
    </>
  );
};

export default Etudiant;