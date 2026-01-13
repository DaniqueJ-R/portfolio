import { useId } from 'react';

export default function Main() {
  const aboutId = useId();
  const skillsId = useId();
  const projectsId = useId();
  const contactId = useId();


  return (
    <main>
        <section id={aboutId} className="hero">
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

        <section id={skillsId} className="skills">
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
                            <span className="skill-tag">jQuery</span>
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
                            <span className="skill-tag">React</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id={projectsId} className="projects">
            <div className="container">
                <h2 className="section-title">Portfolio Projects</h2>
                <div className="projects-grid">


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


                                        <div className="project-card">
                        <div className="project-header">
                            <h3>Javascript Quiz</h3>
                            <div className="project-links">
                                <a href="https://github.com/DaniqueJ-R/quiz" rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href="https://daniquej-r.github.io/quiz/" className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">
                            A lightweight quiz application created with Vanilla JavaScript as a hands-on exercise in JavaScript fundamentals.
The layout and styling were generated by Claude AI, while I focused on wiring up the full JavaScript functionality using the existing markup.
This project will be rebuilt in React in a future update.
                        </p>
                        <div className="project-tech">

                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                        </div>
                    </div>

                                        <div className="project-card">
                        <div className="project-header">
                            <h3>To-do list</h3>
                            <div className="project-links">
                                <a href="https://github.com/DaniqueJ-R/quiz" rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href="https://daniquej-r.github.io/quiz/" className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">
                            A Vanilla JS To-Do List app that was used to practice my JS knowledge. 
                            The HTML and CSS was all generated using Claude AI, and I set the task to wire all the JS together using that existing information. 
                            New version to be created using React soon. 
                        </p>
                        <div className="project-tech">

                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                        </div>
                    </div>             

                    <div className="project-card">
                        <div className="project-header">
                            <h3>Take A Breath</h3>
                            <div className="project-links">
                                <a href="https://github.com/DaniqueJ-R/milestone_proj_3" rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href="https://take-a-breath-a26c57655e5e.herokuapp.com/" className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">
                            A minimalist web app that lets users share and receive anonymous notes of kindness, offering a simple, calming space for positivity. 
                            Full-stack application with Django backend handling CRUD operations for anonymous messaging.
                        </p>
                        <div className="project-tech">
                            <span className="tech-badge">Django</span>
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">Bootstrap</span>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-header">
                            <h3>Roamly</h3>
                            <div className="project-links">
                                <a href="https://github.com/DaniqueJ-R/Milestone-Proj-2" rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href="https://daniquej-r.github.io/Milestone-Proj-2/index.html" className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">
                            Interactive map application that helps users explore cities worldwide and discover local attractions. 
                            Integrates Google Maps and Places APIs with dynamic search functionality and location-based filtering.
                        </p>
                        <div className="project-tech">
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">Google Maps API</span>
                            <span className="tech-badge">Google Places API</span>
                        </div>
                    </div>



                    <div className="project-card">
                        <div className="project-header">
                            <h3>Halloween Hackathon</h3>
                            <div className="project-links">
                                <a href="https://github.com/judewoolls/HalloweenHackathon" rel='noopener' target="_blank" className="project-link">View Code</a>
                                <a href="https://halloweenhackathon-aaa7ba8be0f6.herokuapp.com/"  rel='noopener' target="_blank" className="project-link">Live Demo</a>
                            </div>
                        </div>
                        <p className="project-description">
                            Collaborated with a remote team of developers to build and deploy a Halloween-themed web application in 5 days using agile methodology. 
                            Team project demonstrating collaborative coding, version control, and rapid deployment skills.
                        </p>
                        <div className="project-tech">
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">Django</span>
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">Bootstrap</span>
                            <span className="tech-badge">Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id={contactId} className="contact">
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
