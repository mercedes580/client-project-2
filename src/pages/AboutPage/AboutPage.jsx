import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="image-container">
                    <img src="https://bautizoycomunion.com/wp-content/uploads/2016/02/0052patriciasemir_zpsqfrdng7k.jpg" alt="Imagen sobre nosotros" />
                </div>
                <div className="text-content">
                    <h2>Nuestra Misión</h2>
                    <p>
                        Somos una empresa dedicada a proporcionar productos de alta calidad con el objetivo de satisfacer las necesidades de nuestros clientes.
                        Trabajamos incansablemente para ofrecer un servicio excepcional y una experiencia única.
                    </p>
                    <h2>Nuestra Visión</h2>
                    <p>
                        Nos visualizamos como líderes en nuestro sector, ofreciendo soluciones innovadoras y accesibles para todos. Buscamos expandir nuestra presencia
                        global mientras mantenemos nuestros valores fundamentales.
                    </p>
                    <h2>Valores</h2>
                    <ul>
                        <li>Compromiso con la calidad</li>
                        <li>Transparencia en todo lo que hacemos</li>
                        <li>Respeto hacia nuestros empleados y clientes</li>
                        <li>Innovación constante</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;