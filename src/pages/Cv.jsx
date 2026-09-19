import './Cv.css'

function Cv() {
    return (
        <section
            className="cv-page"
            aria-labelledby="cv-title"
        >
            <div className="cv-content">
                <p className="section-label">Curriculum</p>

                <h1 id="cv-title">
                    Il mio percorso
                </h1>

                <p className="cv-description">
                    Junior Software Developer con competenze in C#,
                    programmazione orientata agli oggetti e basi di dati.
                </p>
            </div>
        </section>
    )
}

export default Cv