import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contacts.css'

function Contacts() {
    const [copied, setCopied] = useState(false)
    const email = ['elio.casciola', 'gmail', 'com']
        .join('@')
        .replace('@com', '.com')

    async function copyEmail() {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="contacts-page" aria-labelledby="contacts-title">
            <div className="contacts-content">
                <p className="section-label">Contatti</p>
                <p className="contacts-description">
                    Hai un’opportunità o un progetto di cui vorresti parlarmi?
                    Scrivimi.
                </p>

                <div className="contact-options">
                    <div className="email-box">
                        <code className="email-address">
                            <span className="email-label">email:</span>{' '}
                            elio.casciola <span aria-hidden="true">[at]</span>
                            <span className="sr-only">chiocciola</span>{' '}
                            gmail
                            <span className="email-dot-desktop">
                                {' '}
                                <span aria-hidden="true">[dot]</span>
                                <span className="sr-only">punto</span>{' '}
                            </span>
                            com
                        </code>

                        <button
                            className="email-copy"
                            type="button"
                            onClick={copyEmail}
                        >
                            {copied ? '✓ Copiata' : 'Copia'}
                        </button>
                    </div>

                    <p className="sr-only" aria-live="polite">
                        {copied ? 'Indirizzo email copiato.' : ''}
                    </p>

                    <div className="contacts-social">
                        <a
                            href="https://github.com/ElioCasciola"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub aria-hidden="true" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/eliocasciola/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin aria-hidden="true" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
