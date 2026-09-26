import { Link } from 'react-router'
import { posts } from '../data/posts.js'
import './Blog.css'

function Blog() {
    return (
        <section
            className="blog-page"
            aria-labelledby="blog-title"
        >
            <div className="blog-content">
                <p className="section-label">Blog</p>

                <h1 id="blog-title">
                    Appunti di sviluppo
                </h1>

                <p className="blog-description">
                    Uno spazio dedicato a ciò che sto imparando e
                    costruendo durante il mio percorso nello sviluppo software.
                </p>

                <div className="blog-list">
                    {posts.map((post) => (
                        <article className="blog-preview" key={post.slug}>
                            <p className="blog-preview-meta">
                                <time dateTime={post.date}>
                                    {post.formattedDate}
                                </time>
                            </p>

                            <h2>
                                <Link to={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="blog-preview-excerpt">
                                {post.excerpt}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
