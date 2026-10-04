import { Link } from 'react-router'
import About from '../components/About.jsx'
import { posts } from '../data/posts.js'
import './Home.css'

function Home() {
    const latestPost = posts[0]

    return (
        <>
            <About />

            <section className="home-learning" aria-labelledby="learning-title">
                <div className="home-learning__content">
                    <p className="section-label" id="learning-title">
                        Sto approfondendo
                    </p>
                    <ul className="home-learning__list">
                        <li>C#</li>
                        <li>.NET</li>
                        <li>Linux</li>
                        <li>SQL</li>
                    </ul>
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
