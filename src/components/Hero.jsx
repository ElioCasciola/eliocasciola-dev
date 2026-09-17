function Hero() {
    const name = 'Elio Casciola'

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                {/* <p className="hero-label">Elio Casciola</p>*/}
                <h1>{name}</h1>
                <p className="hero-label">Software Developer · Based in Italy</p>
            </div>
        </section>
    )
}

export default Hero