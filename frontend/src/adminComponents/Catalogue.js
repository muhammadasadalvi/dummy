// frontend/src/adminComponents/PetsInfo.js
import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const Catalogue = () => {
  useEffect(() => {
    document.title = "Admin - Catalogue";
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h1>Admin - Catalogue</h1>
      {/* Add pets information management content here */}
    </div>
  );
};




export default Catalogue;
