import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./AdminPanel.css";
import { useAuth } from "../context/AuthContext";

interface Sweet {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category?: string;
  imageUrl?: string;
}

function AdminPanel() {
  const { token } = useAuth();
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  // ==============================
  // LOAD SWEETS
  // ==============================
  const loadSweets = useCallback(async () => {
    if (!token) return;

    const res = await axios.get("http://localhost:8080/api/sweets", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setSweets(res.data);
  }, [token]);

  useEffect(() => {
    loadSweets();
  }, [loadSweets]);

  // INPUT HANDLER
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ==============================
  // ADD SWEET
  // ==============================
  const addSweet = async () => {
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("category", form.category);
    fd.append("price", form.price);
    fd.append("quantity", form.quantity);
    if (image) fd.append("image", image);

    await axios.post("http://localhost:8080/api/sweets/upload", fd, {
      headers: {
        Authorization: `Bearer ${token}`,
        // ❌ Do NOT add "Content-Type". Axios sets it automatically.
      },
    });

    loadSweets();
    setForm({ name: "", category: "", price: "", quantity: "" });
    setImage(null);
  };

  // ==============================
  // UPDATE SWEET
  // ==============================
  const updateSweet = async () => {
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("category", form.category);
    fd.append("price", form.price);
    fd.append("quantity", form.quantity);
    if (image) fd.append("image", image);

    await axios.put(`http://localhost:8080/api/sweets/${editingId}`, fd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadSweets();
    setEditingId(null);
    setForm({ name: "", price: "", quantity: "", category: "" });
    setImage(null);
  };

  // DELETE
  const deleteSweet = async (id: number) => {
    await axios.delete(`http://localhost:8080/api/sweets/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    loadSweets();
  };

  // RESTOCK
  const restockSweet = async (id: number) => {
    await axios.post(
      `http://localhost:8080/api/sweets/${id}/restock`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    loadSweets();
  };

  // ENTER EDIT MODE
  const startEdit = (sweet: Sweet) => {
    setEditingId(sweet.id);
    setForm({
      name: sweet.name,
      price: String(sweet.price),
      quantity: String(sweet.quantity),
      category: sweet.category ?? "",
    });
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Manage Sweets</h2>

      <div className="admin-form">
        <input
          name="name"
          placeholder="Sweet Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="quantity"
          type="number"
          placeholder="Qty"
          value={form.quantity}
          onChange={handleChange}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        {editingId ? (
          <button className="admin-btn update" onClick={updateSweet}>
            Update
          </button>
        ) : (
          <button className="admin-btn add" onClick={addSweet}>
            Add
          </button>
        )}
      </div>

      <ul className="sweet-list">
        {sweets.map((sweet) => (
          <li key={sweet.id} className="sweet-item">
            <span className="sweet-text">
              {sweet.name} — ₹{sweet.price} — Qty: {sweet.quantity}
            </span>

            <div className="sweet-actions">
              <button className="restock-btn" onClick={() => restockSweet(sweet.id)}>
                Restock
              </button>
              <button className="edit-btn" onClick={() => startEdit(sweet)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteSweet(sweet.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
