export default function Skills () {
    return(
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
    )
}