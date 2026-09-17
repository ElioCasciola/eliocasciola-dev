function Navbar() {
    const projectLink = <a href="/projects">Projects</a>
    const cvLink = <a href="/cv">CV</a>

    return (
            <nav>
                {projectLink}
                {cvLink}
            </nav>
    )
}

export default Navbar