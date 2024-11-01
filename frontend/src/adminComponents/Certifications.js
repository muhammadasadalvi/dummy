// frontend/src/adminComponents/PetsInfo.js
import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const Certifications = () => {
  useEffect(() => {
    document.title = "Admin - Certification";
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h1>Admin - Certification</h1>
      {/* Add pets information management content here */}
    </div>
  );
};



export default Certifications;
