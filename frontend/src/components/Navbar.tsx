import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Sweet Shop</h2>

      <div className="nav-links">
        {isLoggedIn && <Link to="/home">Home</Link>}

        {role === "ADMIN" && <Link to="/admin">Admin Panel</Link>}

        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}

        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
