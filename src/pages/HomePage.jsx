const HomePage = () => {
    return (
        <div className="index page">
            <header>
                <h1>MPD BAKERY SHOP</h1>
                <h2>Si te gusta uno... imagínate dos</h2>
            </header>
            <section className="welcome">
                <h3>¿Tienen una boda? ¿Un cumpleaños? ¿O simplemente les apetecía darse un capricho?</h3>
                <p>Permíteme decirte que has llegado al sitio y lugar adecuados donde los sueños son de chocolate y todo es posible.</p>
            </section>
            <section className="best listed products">
                <h3>Nuestras Especialidades</h3>
                <ul>
                    <li>Brownies de suchard</li>
                    <li>Cupcakes de fresa</li>
                    <li>Tarta de zanahoria</li>
                </ul>
            </section>
            <section className="about-us">
                <h3>Sobre Nosotros</h3>
                <p>En MPD BAKERY SHOP, te encantara probar los dulces con la mejor calidad posible y no solament eso sino con los mejores productos </p>
            </section>
        </div>
    );
};

export default HomePage;
