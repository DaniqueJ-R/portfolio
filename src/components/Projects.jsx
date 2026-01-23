import Data from '../assets/projects'

export default function Projects() {

          const ProjectFormat = Data.map((item) => {
                      
            const techBadges = item.tech.map((badge) => (
            <span className="tech-badge">{badge}</span>
        ))

  return (
    <div className="project-card">
                        <div className="project-header">
                            <h3>{item.title}</h3>
                            <div className="project-links">
                                <a href={item.link.git} rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href={item.link.live} target="_blank"  className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">{item.text}</p>
                        <div className="project-tech">
                             {techBadges}
                        </div>
                    </div> 
  )
})

    
    return (
                <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Portfolio Projects</h2>
                <div className="projects-grid">

                    {ProjectFormat}

                </div>
            </div>
        </section>
    )
}