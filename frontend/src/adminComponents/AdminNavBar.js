import './adminNavBar.css';
const AdminNavBar = () => {
    return (
      <nav className="admin-navbar">
        <ul>
          <li><a href="/admin-dashboard">Admin Dashboard</a></li> {/* Add Admin Dashboard link */}
          <li><a href="/admin/users">Users</a></li>
          <li><a href="/admin/catalogue">Catalogue</a></li>
          <li><a href="/admin/pets-info">Pets Info</a></li>
          <li><a href="/admin/bookings">Bookings</a></li>
          <li><a href="/admin/certifications">Certifications</a></li>
          <li><a href="/admin/chatbot">ChatBot</a></li>
        </ul>
      </nav>
    );
  };
  
  export default AdminNavBar;
  

