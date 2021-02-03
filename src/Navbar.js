import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/">Posts</Link>
        <Link to="/users" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>users</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;