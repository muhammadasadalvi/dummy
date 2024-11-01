// frontend/src/adminComponents/PetsInfo.js
import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const Users = () => {
  useEffect(() => {
    document.title = "Admin - Users";
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h1>Admin - Manage All Users</h1>
      {/* Add pets information management content here */}
    </div>
  );
};

export default Users;
