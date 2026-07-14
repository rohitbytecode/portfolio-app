export default function Contact() {
  return (
    <div className="section-container">
      <h2>Contact</h2>

      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
        <input type="hidden" name="access_key" value="e53f1e24-94e2-455e-9c1d-3f1476f4698d"/>
        <div className="form-group">
          <input type="text" name="name" className="form-control" placeholder="Name" required />
        </div>

        <div className="form-group">
          <input type="email" name="email" className="form-control" placeholder="Email" required />
        </div>

        <div className="form-group">
          <textarea name="message" className="form-control" placeholder="Message" required />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}