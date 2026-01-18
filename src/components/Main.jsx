import Projects from './Projects'
export default function Main() {

  return (
    <main>
        <section id="about" className="hero">
            <div className="container">
                <h1>Danique Jones-Rhule</h1>
                <p className="subtitle">Full Stack Developer | Python, Django, JavaScript</p>
                <p>
                    Full Stack Developer with hands-on experience building web applications using Django, JavaScript, and modern APIs. 
                    Proven ability to deliver complete projects from concept to deployment, including payment integration, map-based features, 
                    and full CRUD functionality. Passionate about creating user-friendly, accessible web experiences.
                </p>
                <div className="social-links">
                    <a href="https://github.com/DaniqueJ-R" rel='noopener' target="_blank">GitHub</a>
                    <a href="https://uk.linkedin.com/in/danique-jones-rhule" rel='noopener' target="_blank">LinkedIn</a>
                    <a href="mailto:daniquejr18@gmail.com">Email</a>
                </div>
            </div>
        </section>

        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Frontend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">Bootstrap</span>
                            <span className="skill-tag">React</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Backend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Django</span>
                            <span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">MySQL</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Tools & APIs</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">GitHub</span>
                            <span className="skill-tag">Heroku</span>
                            <span className="skill-tag">Stripe API</span>
                            <span className="skill-tag">Google Maps API</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Currently Learning</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Typescript</span>
                            <span className="skill-tag">Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Projects />

        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Let's Connect</h2>
                
                <p className='contact-tag'>
                    I'm currently seeking junior developer opportunities. Feel free to reach out!
                </p>
                <div className="contact-info">
                    <div className="contact-item">
                        <strong>Email</strong><br />
                        <a href="mailto:daniquejr18@gmail.com">daniquejr18@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <strong>Phone</strong><br />
                        <a href="tel:07459517418">07459-517-418</a>
                    </div>
                    <div className="contact-item">
                        <strong>Location</strong><br />
                        London, UK
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
