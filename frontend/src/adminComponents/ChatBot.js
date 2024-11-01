// frontend/src/adminComponents/PetsInfo.js
import React, { useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const ChatBot = () => {
  useEffect(() => {
    document.title = "Admin - ChatBot";
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h1>Admin - ChatBot</h1>
      {/* Add pets information management content here */}
    </div>
  );
};



export default ChatBot;
