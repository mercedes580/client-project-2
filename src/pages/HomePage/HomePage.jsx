import "./HomePage.css"
import * as IMAGE_PATHS from "../../consts/image-paths"

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
                <img
                    src={IMAGE_PATHS.WELCOME_IMAGE}
                    alt="welcome" />
            </section>

            <section className="little-message1">
                <h4>( BARCELONA ) <br />
                    BAKERY DESIGN<br />
                    SHOP</h4>
            </section>

            <section className="homepage-header">
                <h1>3SOME Bakery Shop</h1>
                <h1>Si te gusta uno... imagínate dos. O tres.</h1>
            </section>

            <section className="little-message2">
                <h4>( BARCELONA ) <br />
                    BAKERY DESIGN<br />
                    SHOP</h4>
            </section>

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

            <section className="little-message4">
                <h4>NUESTRAS ESPECIALIDADES</h4>

                <h4>( FRESHLY BAKED )</h4>

                <h4>NUESTRAS ESPECIALIDADES</h4>
            </section>

        </div>
    )
}

export default HomePage
