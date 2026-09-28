import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__content">
                <p>© {new Date().getFullYear()} Elio Casciola</p>
            </div>
        </footer>
    )
}

export default Footer
