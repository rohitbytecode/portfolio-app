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
          <h3>Backend Engineering</h3>
          {/* <p>
            Building RESTful APIs using Node.js and Express with 
            authentication, RBAC, and secure data handling.
          </p> */}
        </div>

        <div className="card">
          <h3>Problem Solving</h3>
          {/* <p>
          Practicing Data Structures & Algorithms in Java with 
          focus on time complexity, optimization, and logical reasoning.
          </p> */}
        </div>

        <div className="card">
          <h3>DevOps & Automation</h3>
            {/* <p>
            Implementing CI/CD pipelines using GitHub Actions, 
            containerizing applications with Docker, and managing deployments.
            </p> */}
        </div>

        <div className="card">
          <h3>Deployment & Monitoring</h3>
            {/* <p>
            Deploying backend services to cloud platforms with 
            monitoring and performance insights using Prometheus.
            </p> */}
        </div>
      </div>
    </div>
  );
}