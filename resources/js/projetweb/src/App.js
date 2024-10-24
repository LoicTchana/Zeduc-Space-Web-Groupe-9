import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionComptesEmployes from './Gestionemployé/gestionemploye';
import FootergestionEmploye from './Gestionemployé/footergestionemploye';
import AdminDashboard from './administrateur/Admin';
import MenuDashboard from './Gestionmenu/Menuall';
import EmployeDashboard from './Gestionemployé/Employe';
import inscriptionheader from './Inscription/inscriptionheader'

{/*import HeaderEtudiant from './Etudiant/etudiantHeader';
import Conteneur from './Etudiant/etudiantMain';
import FooterEtudiant from './Etudiant/etudiantFooter';*/}

const App = () => {
  return (

    // <Router>
    //   <Routes>
    //
    //     <Route path="/" element={<AdminDashboard/> } />
    //     <Route path="/menu" element={<MenuDashboard/>} /> {/* Route pour le menu */}
    //     <Route path="/gestionEmploye" element={<gestioncompteEmploye/>} /> {/* Route pour la gestion des comptes employés */}
    //
    //   </Routes>
    // </Router>
    //


       <inscriptionheader></inscriptionheader>



  );
};


export default App;
