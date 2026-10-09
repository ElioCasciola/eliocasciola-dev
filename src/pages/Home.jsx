import { Link } from 'react-router'
import About from '../components/About.jsx'
import AnimatedLogo from '../components/AnimatedLogo.jsx'
import { posts } from '../data/posts.js'
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
