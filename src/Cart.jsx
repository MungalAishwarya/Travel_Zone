function Cart({ cart, removeFromCart, clearCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + price;
    }, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Bookings</h2>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>No packages selected.</p>
          <p style={{ marginTop: '1rem' }}>Browse our packages and start your journey! ✈️</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Bookings ({cart.length} items)</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <small style={{ color: '#666' }}>{item.description}</small>
          </div>
          <button className="remove-btn" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">
        <span>Total Amount:</span>
        <span>{formatPrice(calculateTotal())}</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
        <button className="remove-btn" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="checkout-btn" onClick={() => alert('Proceeding to checkout!')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;