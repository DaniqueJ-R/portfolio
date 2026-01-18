export default function Projects() {

    function ProjectFormat () {
        return(
            <div className="project-card">
                        <div className="project-header">
                            <h3>Little Library</h3>
                            <div className="project-links">
                                <a href="https://github.com/DaniqueJ-R/milestone_4" rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href="https://little-libraries-5596411363a4.herokuapp.com/" className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">
                            A web app that helps readers track, review, and organize books into personalized shelves, making reading social and fun. 
                            Features user authentication, CRUD operations for book management, custom shelving system, and secure payment processing via Stripe API.
                        </p>
                        <div className="project-tech">
                            <span className="tech-badge">Django</span>
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">PostgreSQL</span>
                            <span className="tech-badge">Stripe API</span>
                            <span className="tech-badge">Bootstrap</span>
                        </div>
                    </div>
        )
    }
    return(
                <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Portfolio Projects</h2>
                <div className="projects-grid">


                    <ProjectFormat />


                                                 

                    
                </div>
            </div>
        </section>
    )
}