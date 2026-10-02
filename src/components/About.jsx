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
                    ITS Umbria Academy, dove sto costruendo solide basi nello sviluppo software e nella gestione dei dati.
                </p>
            </div>
        </section>
    )
}

export default About
