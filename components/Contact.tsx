export default function Contact() {
  return (
    <div className="section-container">
      <h2>Contact</h2>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" required />
        </div>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>

        <div className="form-group">
          <textarea className="form-control" placeholder="Message" required />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}