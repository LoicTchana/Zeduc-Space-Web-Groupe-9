// On importe ici tous les composants de l'administrateur ( du header au footer en passant par le main)
import React from 'react';
import HeaderAdministrateur from './administrateurHeader';
import AdminMain from './administrateurMain';

const AdminDashboard = () => {
 
  return (
    <>
      <HeaderAdministrateur/>
      <AdminMain />
    </>
  );
};

export default AdminDashboard;
