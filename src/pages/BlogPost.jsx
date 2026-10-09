import { Link, useParams } from 'react-router'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/posts.js'
import './BlogPost.css'

function BlogPost() {
    const { slug } = useParams()
    const post = posts.find((currentPost) => currentPost.slug === slug)

    if (!post) {
        return (
            <section className="blog-post-page" aria-labelledby="post-not-found">
                <div className="blog-post-content">
                    <p className="section-label">Blog</p>
                    <h1 id="post-not-found">Post non trovato</h1>
                    <Link className="blog-back-link" to="/blog">
                        ← Torna ai Log
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <article className="blog-post-page" aria-labelledby="post-title">
            <div className="blog-post-content">
                <Link className="blog-back-link" to="/blog">
                    ← Torna ai Log
                </Link>

                <header className="blog-post-header">
                    <h1 id="post-title">{post.title}</h1>
                    <p className="blog-post-meta">
                        <time dateTime={post.date}>{post.formattedDate}</time>
                    </p>
                </header>

                <div className="blog-post-body">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                    <p>-Elio</p>
                </div>
            </div>
        </article>
    )
}

export default BlogPost
