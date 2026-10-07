import { FaGithub } from 'react-icons/fa'
import fallenZenithLogo from '../assets/fallen-zenith-logo-home-static.webp'
import fallenZenithAnimatedLogo from '../assets/fallen-zenith-logo-home-30fps.webp'
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
                    <article className="project-card">
                            <div className="project-card__media">
                                <picture>
                                    <source media="(prefers-reduced-motion: reduce)" srcSet={fallenZenithLogo} />
                                    <img
                                        src={fallenZenithAnimatedLogo}
                                        alt="Logo di Fallen Zenith con una piuma nera e rossa"
                                        width="1280"
                                        height="854"
                                        fetchPriority="high"
                                    />
                                </picture>
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
                                    Un RPG fantasy a turni, strutturato in livelli,
                                    sviluppato in C# con classi, abilità, mostri e
                                    morte permanente.
                                </p>

                                <ul
                                    className="project-card__technologies"
                                    aria-label="Tecnologie utilizzate"
                                >
                                    <li>C#</li>
                                    <li>.NET</li>
                                    <li>OOP</li>
                                </ul>

                                <div className="project-card__links">
                                    <a
                                        className="project-card__link"
                                        href="https://www.fallenzenith.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>Visita il sito</span>
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                    <a
                                        className="project-card__link"
                                        href="https://github.com/ElioCasciola/fallen-zenith"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                    <FaGithub aria-hidden="true" />
                                    <span>Vedi su GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                </div>
            </div>
        </section>
    )
}

export default Projects
