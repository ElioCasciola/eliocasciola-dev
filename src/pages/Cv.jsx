import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Cv.css'

const education = [
    {
        title: 'Tecnico Superiore in Data Management & Coding',
        organization: 'ITS Umbria Academy',
        period: 'Ottobre 2025 — In corso',
        description:
            'Programmazione, ingegneria del software, basi di dati, Big Data, reti, Machine Learning e tecnologie immersive.',
    },
    {
        title: 'Bachiller bilingüe — Economia e Gestione',
        organization: 'Colegio Santa María de las Colinas del Norte',
        period: 'Dicembre 2007',
        description:
            'Percorso bilingue spagnolo–inglese, Mar del Plata, Argentina.',
    },
]

const experience = [
    {
        role: 'Referente Logistica',
        company: 'KING S.p.A',
        period: 'Aprile 2025 — Luglio 2025',
        details:
            'Gestione del magazzino e dell’inventario, coordinamento delle spedizioni nazionali e gestione di resi, documentazione e assistenza B2C.',
    },
    {
        role: 'Responsabile della Logistica',
        company: 'Terre Francescane — Cufrol S.R.L',
        period: 'Ottobre 2022 — Settembre 2023',
        details:
            'Gestione di ordini, DDT e documentazione, coordinamento delle spedizioni nazionali e internazionali e customer care B2B e B2C.',
    },
    {
        role: 'Accoglienza Clienti',
        company: 'Arnaldo Caprai Società Agricola S.R.L',
        period: 'Febbraio 2022 — Aprile 2022',
        details:
            'Degustazioni, visite in cantina e accoglienza dei clienti in italiano, inglese e spagnolo.',
    },
    {
        role: 'Grafico / Data Entry',
        company: 'Fabiana Filippi S.p.A',
        period: 'Dicembre 2021 — Febbraio 2022',
        details:
            'Gestione della pagina rivenditori sulla piattaforma NuOrder e produzione e trattamento di immagini e cartelle colore.',
    },
    {
        role: 'Import / Export Manager',
        company: 'Ziarelli Mario Ricostruzione Gomme S.R.L',
        period: 'Gennaio 2021 — Settembre 2021',
        details:
            'Gestione di importazioni, container e documentazione doganale, rapporti con trasportatori e fornitori internazionali e customer service in inglese e spagnolo.',
    },
    {
        role: 'Magazziniere',
        company: 'Brunello Cucinelli S.p.A',
        period: 'Ottobre 2019 — Dicembre 2019',
        details:
            'Gestione dell’inventario dei filati, preparazione delle spedizioni internazionali e utilizzo di AS400.',
    },
    {
        role: 'Caposala / Maître',
        company: 'Enoteca La Vineria 29',
        period: 'Gennaio 2017 — Maggio 2017',
        details:
            'Gestione del magazzino, dei rapporti con i fornitori e del servizio al cliente.',
    },
]

const technicalSkills = [
    'C#', '.NET', 'OOP', 'SQL', 'Git', 'GitHub', 'HTML', 'CSS',
]

const softSkills = [
    'Problem solving',
    'Lavoro di squadra',
    'Organizzazione',
    'Comunicazione',
    'Affidabilità',
]

function TimelineEntry({ title, organization, period, description, details }) {
    return (
        <article className="cv-entry">
            <h3>{title}</h3>
            <p className="cv-entry__meta">
                <span>{organization}</span>
                <span>{period}</span>
            </p>
            {description && <p>{description}</p>}
            {details && <p>{details}</p>}
        </article>
    )
}

function Cv() {
    return (
        <section className="cv-page" aria-labelledby="cv-title">
            <div className="cv-content">
                <p className="section-label">Curriculum</p>

                <header className="cv-header">
                    <h1 id="cv-title">Elio Casciola</h1>
                    <p className="cv-role">Junior Software Developer</p>
                    <p className="cv-summary">
                        Junior Software Developer con interesse per C#, .NET e programmazione orientata agli oggetti.
                        Frequento il corso Data Management & Coding presso ITS Umbria Academy, dove sto acquisendo
                        competenze pratiche nello sviluppo e nella progettazione software.
                    </p>
                </header>

                <div className="cv-layout">
                    <main className="cv-main">
                        <section className="cv-section" aria-labelledby="education-title">
                            <h2 id="education-title" className="cv-section__title">
                                Formazione
                            </h2>
                            <div className="cv-timeline">
                                {education.map((item) => (
                                    <TimelineEntry
                                        key={item.title}
                                        title={item.title}
                                        organization={item.organization}
                                        period={item.period}
                                        description={item.description}
                                    />
                                ))}
                            </div>
                        </section>

                        <section className="cv-section" aria-labelledby="experience-title">
                            <h2 id="experience-title" className="cv-section__title">
                                Esperienze professionali
                            </h2>
                            <div className="cv-timeline">
                                {experience.map((item) => (
                                    <TimelineEntry
                                        key={`${item.company}-${item.period}`}
                                        title={item.role}
                                        organization={item.company}
                                        period={item.period}
                                        details={item.details}
                                    />
                                ))}
                            </div>
                        </section>
                    </main>

                    <aside className="cv-sidebar" aria-label="Competenze e informazioni">
                        <section className="cv-sidebar__section">
                            <h2 className="cv-section__title">Competenze tecniche</h2>
                            <ul className="cv-tags">
                                {technicalSkills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="cv-sidebar__section">
                            <h2 className="cv-section__title">Lingue</h2>
                            <dl className="cv-facts">
                                <div><dt>Italiano</dt><dd>Madrelingua</dd></div>
                                <div><dt>Spagnolo</dt><dd>Madrelingua</dd></div>
                                <div><dt>Inglese</dt><dd>C2</dd></div>
                            </dl>
                        </section>

                        <section className="cv-sidebar__section">
                            <h2 className="cv-section__title">Soft skills</h2>
                            <ul className="cv-tags">
                                {softSkills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="cv-sidebar__section">
                            <h2 className="cv-section__title">Link</h2>
                            <div className="cv-links">
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
                        </section>

                        <section className="cv-sidebar__section">
                            <h2 className="cv-section__title">Informazioni</h2>
                            <dl className="cv-facts">
                                <div><dt>Patente</dt><dd>B</dd></div>
                                <div><dt>Automunito</dt><dd>Sì</dd></div>
                            </dl>
                        </section>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Cv
