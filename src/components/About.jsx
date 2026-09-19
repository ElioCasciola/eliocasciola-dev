import './About.css'

function About() {
    return (
        <section className="about-section" aria-labelledby="about-title">
            <div className="about-content">
                <p className="section-label">Chi sono</p>

                <h2 id="about-title">
                    Elio Casciola
                </h2>

                <p className="about-description">
                    Frequento il corso di studio in Data Management & Coding presso
                    ITS Umbria Academy. Il percorso mi permette di approfondire lo
                    sviluppo di applicazioni, la gestione dei dati e la progettazione
                    di soluzioni digitali.
                </p>
            </div>
        </section>
    )
}

export default About