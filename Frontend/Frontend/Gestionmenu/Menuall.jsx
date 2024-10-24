// Menuallcomponents (on importe tous les composants du menu)
import React from 'react';
import GestionMenu from './gestionmenu';
import Footermenu from './menufooter';

const MenuDashboard = () => {
  return (
    <>
      <GestionMenu/>
      <Footermenu/>
      
    </>
  );
};

export default MenuDashboard;