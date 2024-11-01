// frontend/src/components/Logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Force re-render by triggering a storage event
    window.dispatchEvent(new Event('storage'));

    // Redirect to the login page after logout
    navigate('/login');
  }, [navigate]);

  return null; // No UI required for logout
};

export default Logout;

