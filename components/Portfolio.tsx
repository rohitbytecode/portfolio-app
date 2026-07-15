import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <div className="section-container">
      <h2>Portfolio</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-content">

              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-links">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}