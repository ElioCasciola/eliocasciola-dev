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
            </div>
        </section>
    )
}

export default Blog
