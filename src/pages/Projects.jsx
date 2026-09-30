import { FaGithub } from 'react-icons/fa'
import fallenZenithLogo from '../assets/fallen-zenith-logo.webp'
import './Projects.css'

function Projects() {
    return (
        <section
            className="projects-page"
            aria-labelledby="projects-title"
        >
            <div className="projects-content">
                <p className="section-label" id="projects-title">Progetti</p>
                <div className="projects-grid">
                    <a
                        className="project-card-link"
                        href="https://github.com/ElioCasciola/fallen-zenith"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <article className="project-card">
                            <div className="project-card__media">
                                <img
                                    src={fallenZenithLogo}
                                    alt="Logo di Fallen Zenith con una piuma nera e rossa"
                                    width="640"
                                    height="427"
                                    fetchPriority="high"
                                />
                            </div>

                            <div className="project-card__body">
                                <div className="project-card__meta">
                                    <span className="project-card__status">
                                        In sviluppo
                                    </span>
                                    <span>Console RPG</span>
                                </div>

                                <h2>Fallen Zenith</h2>

                                <p className="project-card__description">
                                    Un dungeon crawler fantasy a turni sviluppato
                                    in C#, con classi, abilità, mostri e morte
                                    permanente.
                                </p>

                                <ul
                                    className="project-card__technologies"
                                    aria-label="Tecnologie utilizzate"
                                >
                                    <li>C#</li>
                                    <li>.NET</li>
                                    <li>OOP</li>
                                </ul>

                                <span className="project-card__link">
                                    <FaGithub aria-hidden="true" />
                                    <span>Vedi su GitHub</span>
                                </span>
                            </div>
                        </article>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
