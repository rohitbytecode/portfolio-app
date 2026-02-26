import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">Rohit More</h1>
      <p className="role">Backend Engineer</p>

      <div className="sidebar-info">
        <p><strong>Email:</strong><br />rohitmore.dev@gmail.com</p>
        <p><strong>Phone:</strong><br />+91 95124-18859</p>
        <p><strong>Birthday:</strong><br />August 01, 2006</p>
        <p><strong>Location:</strong><br />Surat, Gujarat, India</p>
      </div>

      <div className="sidebar-links">
        <a href="https://github.com/rohitbytecode" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon"/>
        GitHub
        </a>
        <a href="https://www.linkedin.com/in/rohit--more/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
        LinkedIn
        </a>
      </div>

      <a href="/resume.pdf" target="_blank" className="btn">
        View Resume
      </a>
    </aside>
  );
}