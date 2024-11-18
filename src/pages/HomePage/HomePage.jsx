import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="index-page">

            {/* <section className="welcome-video">
                <video
                    src="../../assets/videos/welcome.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                
            </section> */}

            <section className="welcome-img">
                <img src="../../assets/images/welcome-test.png" alt="" />
            </section>

            <section className="scroll-message">
                <h4>SCROLL PARA DESCUBRIR</h4>
            </section>

            <section className="little-message1">
                <h4>( BARCELONA ) <br />
                    BAKERY DESIGN<br />
                    SHOP</h4>
            </section>

            <section className="homepage-header">
                <h1>3SOME Bakery Shop</h1>
                <h1>Si te gusta uno... imagínate dos. O tres</h1>
            </section>

            <section className="little-message2">
                <h4>( BARCELONA ) <br />
                    BAKERY DESIGN<br />
                    SHOP</h4>
            </section>
            {/* 
            <section className="welcome">
                <h3>¿Tienen una boda? ¿Un cumpleaños? ¿O simplemente les apetecía darse un capricho?</h3>
                <p>Permíteme decirte que has llegado al sitio y lugar adecuados donde los sueños son de chocolate y todo es posible.</p>
            </section> */}

            <section className="little-message3">
                <h4>NUESTRAS ESPECIALIDADES</h4>

                <h4>( FRESHLY BAKED )</h4>

                <h4>NUESTRAS ESPECIALIDADES</h4>
            </section>

            <section className="products">

                <ul>
                    <li>Brownies de suchard</li>
                    <li>Cupcakes de fresa</li>
                    <li>Tarta de zanahoria</li>
                </ul>
            </section>

            {/* <section className="about-us">
                <h3>Sobre Nosotros</h3>
                <p>En MPD BAKERY SHOP, te encantara probar los dulces con la mejor calidad posible y no solamente eso sino con los mejores productos </p>
            </section> */}
        </div>
    )
}

export default HomePage
