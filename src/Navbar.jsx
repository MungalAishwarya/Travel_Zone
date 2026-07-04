import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>🌍 TravelWorld</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/cart">
          Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;