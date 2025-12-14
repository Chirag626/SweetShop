// SweetCard.tsx
import "./SweetCard.css";

function SweetCard({ sweet }) {
  return (
    <div className="sweet-card">
      <img src={sweet.image} alt={sweet.name} className="sweet-img" />

      <h3>{sweet.name}</h3>
      <p>₹{sweet.price}</p>
      <p>
        {sweet.quantity > 0 ? (
          <span className="in-stock">In Stock: {sweet.quantity}</span>
        ) : (
          <span className="out-stock">Out of Stock</span>
        )}
      </p>

      <button
        disabled={sweet.quantity === 0}
        className={`buy-btn ${
          sweet.quantity === 0 ? "btn-disabled" : ""
        }`}
      >
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}

export default SweetCard;
