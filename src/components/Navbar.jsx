import { Link } from 'react-router'
import './Navbar.css'
import logo from '../assets/logo.svg'

function Navbar() {
    const projectLink = <a className="navbar-link" href="/projects">Projects</a>
    const cvLink = <a className="navbar-link" href="/cv">CV</a>

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
                    <li>{cvLink}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar