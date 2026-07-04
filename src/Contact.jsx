function Contact() {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        We'd love to hear from you! Choose your preferred way to connect.
      </p>
      <div className="contact-info">
        <div className="contact-card">
          <i>📧</i>
          <h3>Email Us</h3>
          <p>aishwaryamungal14@gmail.com</p>
          <p>support@travelworld.com</p>
        </div>
        <div className="contact-card">
          <i>📞</i>
          <h3>Call Us</h3>
          <p>+91 9021459857</p>
          <p>+91 9021459857</p>
        </div>
        <div className="contact-card">
          <i>📍</i>
          <h3>Visit Us</h3>
          <p>123 Travel Street</p>
          <p>Hyderabad, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;