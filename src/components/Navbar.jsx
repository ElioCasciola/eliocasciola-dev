import { Link } from 'react-router'
import './Navbar.css'
import logo from '../assets/logo.svg'

function Navbar() {
    const projectLink = (
        <Link className="navbar-link" to="/projects">
            Projects
        </Link>
    )
    const cvLink = (
        <Link className="navbar-link" to="/cv">
            CV
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
                    <li>{cvLink}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar