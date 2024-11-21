import { Row, Col } from 'react-bootstrap';
import Loader from "../../components/Loader/Loader"
import "./HomePage.css"
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

            <section className="little-message1">
                <Row>
                    <Col>
                        <h4>( BARCELONA ) <br /> BAKERY DESIGN <br /> SHOP</h4>
                    </Col>
                </Row>
            </section>

            <section className="homepage-header">
                <Row>
                    <Col>
                        <h1>3SOME Bakery Shop</h1>
                        <h1>Si te gusta uno... imagínate dos. O tres.</h1>
                    </Col>
                </Row>
            </section>

            <section className="little-message2">
                <Row>
                    <Col>
                        <h4>( BARCELONA ) <br /> BAKERY DESIGN <br /> SHOP</h4>
                    </Col>
                </Row>
            </section>

            <section>
                <Row className="little-message3">
                    <Col xs="auto">
                        <h4>NUESTRAS ESPECIALIDADES</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>( FRESHLY BAKED )</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>NUESTRAS ESPECIALIDADES</h4>
                    </Col>
                </Row>
            </section>

            <HomePageGallery />

            <section>
                <Row className="little-message4">
                    <Col xs="auto">
                        <h4>NUESTRAS ESPECIALIDADES</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>( FRESHLY BAKED )</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>NUESTRAS ESPECIALIDADES</h4>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default HomePage
