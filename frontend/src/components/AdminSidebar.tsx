import { Link } from "react-router-dom";
import "./AdminSidebar.css";
import { useState } from "react";

function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebarB ${open ? "open" : ""}`}>
        <h2 className="sidebarB-title">Admin Panel</h2>

        <ul className="sidebarB-menu">
          <li><Link to="/admin/manage-sweets">Manage Sweets</Link></li>
          <li><Link to="/admin/categories">Categories</Link></li>
          <li><Link to="/admin/orders">Orders</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
