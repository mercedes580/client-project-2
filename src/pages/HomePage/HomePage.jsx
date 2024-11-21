import "./HomePage.css"
import Loader from "../../components/Loader/Loader"
import HomePageGallery from "../../components/HomePageGallery/HomePageGallery"
import * as IMAGE_PATHS from "../../consts/image-paths"

const HomePage = () => {
    return (
        <div className="index-page">

            <Loader />

            <section className="welcome-video">
                <video
                    src={IMAGE_PATHS.WELCOME_VIDEO}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

            </section>

            {/* <section className="welcome-img">
                <img
                    src={IMAGE_PATHS.WELCOME_IMAGE}
                    alt="welcome" />
            </section> */}

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

            <HomePageGallery />

            <section className="little-message4">
                <h4>NUESTRAS ESPECIALIDADES</h4>

                <h4>( FRESHLY BAKED )</h4>

                <h4>NUESTRAS ESPECIALIDADES</h4>
            </section>

        </div>
    )
}

export default HomePage
