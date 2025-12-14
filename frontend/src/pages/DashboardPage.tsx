import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function DashboardPage() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const token = localStorage.getItem("token");

  const fetchSweets = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/sweets", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSweets(res.data);
    } catch (err) {
      console.error("Error loading sweets", err);
    }
  };

  const searchSweets = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/sweets/search", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          name: search || null,
          category: category || null,
          minPrice: minPrice || null,
          maxPrice: maxPrice || null,
        },
      });
      setSweets(res.data);
    } catch (err) {
      console.error("Error searching sweets", err);
    }
  };

  const purchaseSweet = async (id: number) => {
    try {
      await axios.post(
        `http://localhost:8080/api/sweets/${id}/purchase`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Purchase successful!");
      fetchSweets(); // refresh UI
    } catch (err) {
      console.error("Purchase failed", err);
      alert("Purchase failed!");
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dash-title">🍬 Sweets Dashboard</h2>

      <div className="filters-container">
        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />

        <input
          type="text"
          placeholder="Category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-input"
        />

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="filter-input small"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="filter-input small"
        />

        <button onClick={searchSweets} className="btn primary">Search</button>
        <button onClick={fetchSweets} className="btn reset">Reset</button>
      </div>

      <div className="sweet-grid">
        {sweets.map((sweet: any) => (
          <div className="sweet-card" key={sweet.id}>
            <img
              src={sweet.imageUrl || "https://via.placeholder.com/200"}
              alt={sweet.name}
              className="sweet-img"
            />

            <h3 className="sweet-name">{sweet.name}</h3>

            <p className="sweet-detail"><b>Category:</b> {sweet.category || "N/A"}</p>
            <p className="sweet-detail"><b>Price:</b> ₹{sweet.price}</p>
            <p className="sweet-detail"><b>Stock:</b> {sweet.quantity}</p>

            <button
              disabled={sweet.quantity === 0}
              className={`btn full ${sweet.quantity === 0 ? "disabled" : "primary"}`}
              onClick={() => purchaseSweet(sweet.id)}
            >
              {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
