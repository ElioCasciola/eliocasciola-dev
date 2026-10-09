import { Link } from 'react-router'
import About from '../components/About.jsx'
import AnimatedLogo from '../components/AnimatedLogo.jsx'
import { posts } from '../data/posts.js'
import { latestProjectUpdate } from '../data/projectUpdate.js'
import './Home.css'

function Home() {
    const latestPost = posts[0]

    return (
        <>
            <About />

            <section className="home-project" aria-labelledby="home-project-title">
                <div className="home-project__content">
                    <div className="home-project__inner">
                        <p className="section-label">Sto sviluppando</p>
                        <h2 className="home-project__logo" id="home-project-title">
                            <AnimatedLogo blendMode="lighten" />
                        </h2>
                        <p className="home-project__description">Un RPG fantasy a turni, strutturato in livelli.</p>
                        <div className="home-project__links">
                            <a
                                className="home-project__link"
                                href="https://www.fallenzenith.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visita il sito <span aria-hidden="true">↗</span>
                            </a>
                            <a
                                className="home-project__link"
                                href="https://github.com/ElioCasciola/fallen-zenith"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Vedi su GitHub <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                    <section className="home-project__journal" aria-labelledby="project-journal-title">
                        <p className="section-label">Segui il progetto</p>
                        <div className="home-project__journal-body">
                            <h2 id="project-journal-title">
                                Dal concept al gioco completo
                            </h2>
                            <p className="home-project__journal-description">
                                Negli Updates documento la creazione di Fallen Zenith
                                da zero: progettazione, codice, grafica e test,
                                raccontando scelte, progressi e difficoltà.
                            </p>
                        </div>
                        <article className="home-project__update" aria-labelledby="project-update-title">
                            <p className="section-label">Ultimo update · Fallen Zenith</p>
                            <time className="home-project__update-date" dateTime={latestProjectUpdate.date}>
                                {latestProjectUpdate.formattedDate}
                            </time>
                            <h3 id="project-update-title">
                                <a href={latestProjectUpdate.url} target="_blank" rel="noreferrer">
                                    {latestProjectUpdate.title}
                                </a>
                            </h3>
                            <p className="home-project__update-description">
                                {latestProjectUpdate.excerpt}
                            </p>
                        </article>
                    </section>
                </div>
            </section>

            <section className="home-latest" aria-labelledby="latest-post-title">
                <div className="home-latest__content">
                    <div className="home-latest__header">
                        <p className="section-label">Ultimo log del portfolio</p>
                        <time dateTime={latestPost.date}>
                            {latestPost.formattedDate}
                        </time>
                    </div>

                    <div className="home-latest__body">
                        <h2 id="latest-post-title">
                            <Link to={`/blog/${latestPost.slug}`}>
                                {latestPost.title}
                            </Link>
                        </h2>
                        <p>{latestPost.excerpt}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
