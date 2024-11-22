import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import * as IMAGE_PATHS from "../../consts/image-paths";
import './AboutPageGallery.css'

const HomePageGallery = () => {
    const images = [
        IMAGE_PATHS.ABOUT1,
        IMAGE_PATHS.ABOUT2,
        IMAGE_PATHS.ABOUT3,
        IMAGE_PATHS.ABOUT4
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000)

        return () => clearInterval(intervalId)
    }, [images.length])

    return (
        <section className="products">
            <Row className="gallery">
                {images.map((image, index) => (
                    <Col key={index} className="gallery-image-wrapper">
                        <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className={`gallery-image ${index === currentImageIndex ? 'fade-in' : ''}`}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default HomePageGallery
