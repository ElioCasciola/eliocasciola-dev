import { Link } from 'react-router'
import './Navbar.css'
import logo from '../assets/logo.svg'

function Navbar() {
    const projectLink = (
        <Link className="navbar-link" to="/projects">
            Projects
        </Link>
    )
    const blogLink = (
        <Link className="navbar-link" to="/blog">
            Blog
        </Link>
    )
    const cvLink = (
        <Link className="navbar-link" to="/cv">
            CV
        </Link>
    )

    const contactsLink = (
        <Link className="navbar-link" to="/contacts">
            Contatti
        </Link>
    )

    return (
        <header className="site-header">
            <Link className="site-logo" to="/">
                <img
                    className="site-logo-image"
                    src={logo}
                    alt="Elio Casciola - Home"
                />
            </Link>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>{projectLink}</li>
                    <li>{blogLink}</li>
                    <li>{cvLink}</li>
                    <li>{contactsLink}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
