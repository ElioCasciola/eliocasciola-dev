import { FaGithub } from 'react-icons/fa'
import finalQuestLogo from '../assets/final-quest-logo.png'
import './Projects.css'

function Projects() {
    return (
        <section
            className="projects-page"
            aria-labelledby="projects-title"
        >
            <div className="projects-content">
                <p className="section-label">Progetti</p>
                <div className="projects-grid">
                    <article className="project-card">
                        <div className="project-card__media">
                            <img
                                src={finalQuestLogo}
                                alt="Logo dorato in pixel art di Final Quest"
                            />
                        </div>

                        <div className="project-card__body">
                            <div className="project-card__meta">
                                <span className="project-card__status">
                                    In sviluppo
                                </span>
                                <span>Console RPG</span>
                            </div>

                            <h2>Final Quest</h2>

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

                            <a
                                className="project-card__link"
                                href="https://github.com/ElioCasciola/final-quest"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub aria-hidden="true" />
                                <span>Vedi su GitHub</span>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Projects
