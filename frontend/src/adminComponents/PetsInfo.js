// frontend/src/adminComponents/PetsInfo.js
import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const PetsInfo = () => {
  useEffect(() => {
    document.title = "Pets Information";
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h1>Admin - Pets Information</h1>
      {/* Add pets information management content here */}
    </div>
  );
};

export default PetsInfo;

