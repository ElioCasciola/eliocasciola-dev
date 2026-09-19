import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contacts.css'

function Contacts() {
    return (
        <section
            className="contacts-page"
            aria-labelledby="contacts-title"
        >
            <div className="contacts-content">
                <p className="section-label">Contatti</p>

                <h1 id="contacts-title">
                    Restiamo in contatto
                </h1>

                <p className="contacts-description">
                    Puoi seguire i miei progetti su GitHub oppure
                    contattarmi tramite LinkedIn.
                </p>

                <div className="contacts-links">
                    <a
                        className="contact-link contact-link--primary"
                        href="https://github.com/ElioCasciola"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub className="contact-icon" aria-hidden="true" />
                        <span>GitHub</span>
                    </a>

                    <a
                        className="contact-link"
                        href="https://www.linkedin.com/in/eliocasciola/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin className="contact-icon" aria-hidden="true" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contacts