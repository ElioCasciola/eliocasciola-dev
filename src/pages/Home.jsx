import { Link } from 'react-router'
import About from '../components/About.jsx'
import fallenZenithLogo from '../assets/fallen-zenith-logo.webp'
import fallenZenithAnimatedLogo from '../assets/fallen-zenith-logo-particles.webp'
import { posts } from '../data/posts.js'
import './Home.css'

function Home() {
    const latestPost = posts[0]

    return (
        <>
            <About />

            <section className="home-project" aria-labelledby="home-project-title">
                <div className="home-project__content">
                    <div className="home-project__image">
                        <div className="home-project__logo">
                            <picture>
                                <source media="(prefers-reduced-motion: reduce)" srcSet={fallenZenithLogo} />
                                <img
                                    src={fallenZenithAnimatedLogo}
                                    alt="Logo di Fallen Zenith"
                                    width="640"
                                    height="427"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="home-project__copy">
                        <p className="section-label">Sto sviluppando</p>
                        <h2 id="home-project-title">Fallen Zenith</h2>
                        <p>Un RPG fantasy a turni, strutturato in livelli.</p>
                    </div>
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
            </section>

            <section className="home-latest" aria-labelledby="latest-post-title">
                <div className="home-latest__content">
                    <div className="home-latest__header">
                        <p className="section-label">Ultimo log</p>
                        <time dateTime={latestPost.date}>
                            {latestPost.formattedDate}
                        </time>
                    </div>

                    <div className="home-latest__body">
                        <div>
                            <h2 id="latest-post-title">
                                <Link to={`/blog/${latestPost.slug}`}>
                                    {latestPost.title}
                                </Link>
                            </h2>
                            <p>{latestPost.excerpt}</p>
                        </div>

                        <Link
                            className="home-latest__link"
                            to={`/blog/${latestPost.slug}`}
                            aria-label={`Leggi ${latestPost.title}`}
                        >
                            Leggi <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
