import React, { useEffect, useState } from 'react';
import * as IMAGE_PATHS from "../../consts/image-paths";
import './HomePageGallery.css'

const HomePageGallery = () => {
    const images = [
        IMAGE_PATHS.PRODUCT1,
        IMAGE_PATHS.PRODUCT2,
        IMAGE_PATHS.PRODUCT3,
        IMAGE_PATHS.PRODUCT4,
        IMAGE_PATHS.PRODUCT5,
        IMAGE_PATHS.PRODUCT6,
        IMAGE_PATHS.PRODUCT7,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <div className="gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Product ${index + 1}`}
                        className={`gallery-image ${index === currentImageIndex ? 'fade-in' : ''}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default HomePageGallery;