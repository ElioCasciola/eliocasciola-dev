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
                    Il mio rapporto con il mondo dell'informatica è iniziato da bambino: ho imparato a leggere con
                    MS-DOS,
                    tra comandi e schermate di testo. Quella curiosità mi accompagna ancora oggi e mi ha portato a voler
                    capire come funziona il software e a imparare a costruirlo.
                </p>
            </div>
        </section>
    )
}

export default About
