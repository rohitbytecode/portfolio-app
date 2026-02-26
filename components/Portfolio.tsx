export default function Portfolio() {
  return (
    <div className="section-container">
      <h2>Portfolio</h2>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-content">
            <h3>QR Code Generator</h3>
            <p>
              QR code generator with CLI and environment config, for scalable backend integration.
            </p>
            <div></div>
            <div className="project-links">
              <a href="https://github.com/rohitbytecode/qr-generator" target="_blank" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Hospital Management System</h3>
            <p>
              Scalable backend with RBAC, billing lifecycle,
              appointment system, Docker and CI/CD pipeline.
            </p>
            <div></div>
            <div className="project-links">
              <a href="https://github.com/hms-int/hms-backend-node" target="_blank" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>DarkMatter</h3>
            <p>
              Developed a ransomware prototype in a controlled lab environment to study attack behavior.
            </p>
            <div></div>
            <div className="project-links">
              <a href="https://github.com/rohitbytecode/DarkMatter-rware-study" target="_blank" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>SnapIt</h3>
            <p>
              Developed a full-stack e-commerce application with user authentication and role-based access. Implemented product management, cart functionality, 
              order processing, and admin controls.
            </p>
            <div></div>
            <div className="project-links">
              <a href="https://github.com/rohitbytecode/snapit" target="_blank" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>FilmCraft</h3>
            <p>
              Designed and implemented the UI of a desktop video editing application using C++, Qt, and QML.
            </p>
            <div></div>
            <div className="project-links">
              <a href="https://github.com/Vardaan-Studio/Filmcraft" target="_blank" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>PDF Sorting Tool</h3>
            <p>
              A PDF sorting tool for Odd-Even page arrangement.
            </p>
            <div className="project-links">
              <a href="https://github.com/rohitbytecode/pdf-sorting-tool" target="_blank" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}