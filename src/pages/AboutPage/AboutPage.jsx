import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import * as IMAGE_PATHS from "../../consts/image-paths"

const AboutPage = () => {
    return (
        <div className="AboutPage">

            <section className="about-container">

                <div className="about-left">

                    <img
                        src={IMAGE_PATHS.ABOUT_BUSSINNES}
                        alt="Delicious Bread"
                        className="about-image"
                    />

                    <Link to={'/productos'}>
                        <button className="about-button">

                            <i className="fas fa-search"></i>
                            &nbsp;NUESTROS PRODUCTOS

                        </button>
                    </Link>

                </div>

                <div className="about-right">

                    <h1 className="about-title">
                        Somos 3SOME!
                    </h1>

                    <p className="about-title-content-up">
                        ¡Una panaderia artesanal en tu ciudad!
                    </p>

                    <div class="separator-about"></div>


                    <p className="about-title-content">
                        En 3some, nos dedicamos a crear productos de panadería y pastelería que combinan
                        tradición y creatividad. Nuestros ingredientes son frescos, nuestras recetas
                        auténticas, y cada bocado está diseñado para deleitar tus sentidos.
                    </p>

                    <p className="about-title-content">
                        Te invitamos a explorar nuestro menú de especialidades, desde panes rústicos hasta
                        pasteles únicos que transforman cualquier ocasión en un momento especial.
                    </p>

                </div>

            </section>

            <section className="slider-container">
                <h2 className="about-title">Lo que dicen nuestros clientes</h2>

                <div class="separator-comment"></div>

                <div className="slider p-3">
                    <div className="slider-item">
                        <img
                            src={IMAGE_PATHS.USER_COMMENT}
                            alt="Cliente María L."
                            className="slider-image"
                        />
                        <p>"¡El mejor pan que he probado! Definitivamente un lugar para visitar regularmente."</p>
                        <span>- Ana G.</span>
                    </div>
                    <div className="slider-item">
                        <img
                            src={IMAGE_PATHS.USER_COMMENT}
                            alt="Cliente María L."
                            className="slider-image"
                        />
                        <p>"Sus pasteles son una obra de arte, además de deliciosos y con una historia fantasticas."</p>
                        <span>- Juan R.</span>
                    </div>
                    <div className="slider-item">
                        <img
                            src={IMAGE_PATHS.USER_COMMENT}
                            alt="Cliente María L."
                            className="slider-image"
                        />
                        <p>"La atención y calidad son insuperables. ¡Altamente recomendado!"</p>
                        <span>- María L.</span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;