import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'

const BakeryCard = ({ id, title, price, gallery }) => {

    return (
        <div className="BakeryCard">
            <Card className="product-card h-100">

                <Link to={`/productos/${id}`}>

                    <Card.Img
                        variant="top"
                        src={gallery[0]}
                        alt={title}
                        className="image-content" />

                </Link>

                <Card.Body>

                    <Card.Title>

                        <Link
                            to={`/productos/${id}`}
                            className="text-decoration-none text-dark">
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

                <Card.Footer className="d-flex">

                    <Button
                        variant="outline-danger"
                        title="Add to wishlist"
                        className="wishlist-button m-1">
                        <i className="fas fa-heart"></i>
                    </Button>

                    <Link to={`/productos/${id}`}>
                        <Button
                            variant="outline-secondary"
                            title="Quickview"
                            className="quickview-button m-1">
                            <i className="fas fa-eye"></i>
                        </Button>
                    </Link>

                </Card.Footer>

            </Card>

        </div>
    )

}

export default BakeryCard