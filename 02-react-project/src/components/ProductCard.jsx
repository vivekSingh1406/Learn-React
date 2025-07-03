

function ProductCard({ name, price, description, onBuy }) {
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Price: ₹{price}</h3>
      <button onClick={onBuy} style={buttonStyle}>Buy Now</button>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  margin: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ProductCard;
