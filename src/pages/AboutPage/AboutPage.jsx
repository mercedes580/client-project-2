import React from "react";
import "./AboutPage.css";
import AboutPageGallery from "../../components/AboutPageGallery/AboutPageGallery"
import { Col, Row } from "react-bootstrap";

const AboutPage = () => {
    return (
        <div className="AboutPage">

            <AboutPageGallery />

            <section className="little-message1">
                <Row>
                    <Col>
                        <h4>( BARCELONA ) <br /> BAKERY DESIGN <br /> SHOP</h4>
                    </Col>
                </Row>
            </section>

            <section className="about-title">
                <Row>
                    <Col>
                        <h1>We are 3SOME!</h1>
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

            <section className="about-container">
                <Row>
                    <Col>

                        <p>
                            At 3SOME, we are dedicated to creating bakery and
                            pastry products that combine tradition and creativity.
                            Our ingredients are fresh, our recipes authentic, and
                            every bite is designed to delight your senses.
                        </p>

                        <br />

                        <p>
                            We invite you to explore our menu of specialties,
                            from rustic breads to unique cakes that transform
                            any occasion into a special moment.
                        </p>

                    </Col>
                </Row>

            </section>

            <section className="about-container2">
                <Row>
                    <Col>

                        <p>
                            At 3SOME, we are passionate about crafting bakery and
                            pastry products that seamlessly merge tradition with creativity.
                            We use only the freshest ingredients, following authentic recipes
                            to ensure every bite is a delightful experience.

                        </p>

                        <p>
                            Our menu features a wide range of specialties, from rustic
                            breads to unique cakes, each designed to transform any occasion
                            into something truly memorable.
                        </p>
                    </Col>
                </Row>

            </section>


        </div>
    )
}

export default AboutPage;