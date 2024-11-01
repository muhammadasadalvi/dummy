// frontend/src/adminComponents/PetsInfo.js
import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const Bookings = () => {
  useEffect(() => {
    document.title = "Admin - Bookings";
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h1>Admin - Bookings</h1>
      {/* Add pets information management content here */}
    </div>
  );
};
export default Bookings;
