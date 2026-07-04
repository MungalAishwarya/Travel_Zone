import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Packages from "./Packages";
import Cart from "./Cart";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pkg) => {
    setCart([...cart, pkg]);
    showNotification(`${pkg.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    const removedItem = cart[index];
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    showNotification(`${removedItem.name} removed from cart!`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const clearCart = () => {
    setCart([]);
    showNotification('Cart cleared!');
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      {notification && <div className="toast">{notification}</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart}
            />
          } 
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;