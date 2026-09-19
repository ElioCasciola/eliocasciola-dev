import './Projects.css'

function Projects() {
    return (
        <section
            className="projects-page"
            aria-labelledby="projects-title"
        >
            <div className="projects-content">
                <p className="section-label">Progetti</p>

                <h1 id="projects-title">
                    I miei progetti
                </h1>

                <p className="projects-description">
                    Una selezione dei progetti che ho realizzato e
                    delle tecnologie che ho utilizzato.
                </p>
            </div>
        </section>
    )
}

export default Projects
