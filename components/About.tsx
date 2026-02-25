export default function About() {
  return (
    <div className="section-container">
      <h2>About Me</h2>

      <p>
        Backend Engineer focused on Data Structures & Algorithms,
        scalable backend architecture, CI/CD implementation,
        DevOps practices and production-grade deployment.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Web Development</h3>
          {/* <p>
            High-quality backend development using Node.js,
            authentication systems, RBAC and optimized APIs.
          </p> */}
        </div>

        <div className="card">
          <h3>DSA & System Design</h3>
          {/* <p>
            Strong algorithmic thinking with focus on performance,
            complexity optimization and scalable systems.
          </p> */}
        </div>

        <div className="card">
          <h3>CI/CD & DevOps</h3>
          {/* <p>
            Implemented CI/CD pipelines using GitHub Actions,
            Dockerized applications and cloud deployment.
          </p> */}
        </div>

        <div className="card">
          <h3>Deployment</h3>
          {/* <p>
            Experience deploying production systems with
            monitoring, versioning and environment management.
          </p> */}
        </div>
      </div>
    </div>
  );
}