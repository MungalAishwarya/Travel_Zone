function PackageCard({ pkg, addToCart }) {
  return (
    <div className="card">
      <img src={pkg.image} alt={pkg.name} />
      <div className="card-content">
        <h3>{pkg.name}</h3>
        <p>{pkg.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ color: '#ffc107' }}>⭐</span>
          <span>{pkg.rating} ({pkg.reviews} reviews)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="price">{pkg.price}</span>
          <span style={{ textDecoration: 'line-through', color: '#999' }}>{pkg.originalPrice}</span>
          <span style={{ background: '#ff6b6b', color: 'white', padding: '3px 8px', borderRadius: '5px', fontSize: '0.8rem' }}>
            {pkg.discount}
          </span>
        </div>
        <button className="book-btn" onClick={() => addToCart(pkg)}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PackageCard;