import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './BakeryCard.css';
import { useState } from 'react';

const BakeryCard = ({ id, title, price, gallery }) => {

    const [isActive, setIsActive] = useState(false)

    const handleFocus = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="BakeryCard">
            <Card className="product-card h-100">
                <div className="position-relative">
                    <Link to={`/productos/${id}`}>
                        <Card.Img
                            variant="top"
                            src={gallery[0]}
                            alt={title}
                            className="image-content"
                        />
                    </Link>

                    <div className="hover-info">
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/productos/${id}`} className="title-product">
                                    {title}
                                </Link>
                            </Card.Title>
                            <Card.Text className="price-rating">
                                <div className="price">
                                    <span className="price-new">${price}</span>
                                </div>
                                <div className="rating">
                                    {[...Array(4)].map((_, index) => (
                                        <i key={index} className="fa-solid fa-star text-warning"></i>
                                    ))}
                                    <i className="fa-regular fa-star text-warning"></i>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </div>

                    <div className="action-buttons">
                        <Button
                            variant="light"
                            title="Add to wishlist"
                            className="wishlist-button"
                            onClick={handleFocus}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: isActive
                                    ? 'rgba(217, 83, 79, 0.9)'
                                    : 'rgba(255, 255, 255, 0.8)',
                                color: isActive ? '#fff' : '#343a40'
                            }}
                        >
                            <i className="fas fa-heart"></i>
                        </Button>
                        <Link to={`/productos/${id}`}>
                            <Button variant="light" title="Quickview" className="quickview-button">
                                <i className="fas fa-eye"></i>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default BakeryCard