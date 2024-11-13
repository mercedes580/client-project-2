import { Link } from 'react-router-dom'
import './BakeryCard.css'

const BakeryCard = ({ id, title, description, price, gallery }) => {

    return (
        <div className="col single-column">
            <div className="card product-card">
                <div className="product-image">
                    <Link to={`/productos/${id}`}>
                        <a>
                            <img src={gallery} alt={title} className="image-content" />
                        </a>
                    </Link>
                    <div className="product-button-group">
                        <button title="Add to wishlist" className="wishlist-button">
                            <i className="fas fa-heart"></i>
                        </button>
                        <Link to={`/productos/${id}`}>
                            <button title="Quickview" className="quickview-button">
                                <i className="fas fa-eye"></i>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="product-description">
                    <h4 className="product-title">
                        <Link to={`/productos/${id}`}>
                            <a>{title}</a>
                        </Link>
                    </h4>
                    <div className="price-rating">
                        <div className="price">
                            <span className="price-new">${price}</span>
                        </div>
                        <div className="rating">
                            <span className="fa fa-stack">
                                <i className="fa-solid fa-star fa-stack-1x"></i>
                            </span>
                            <span className="fa fa-stack">
                                <i className="fa-solid fa-star fa-stack-1x"></i>
                            </span>
                            <span className="fa fa-stack">
                                <i className="fa-solid fa-star fa-stack-1x"></i>
                            </span>
                            <span className="fa fa-stack">
                                <i className="fa-solid fa-star fa-stack-1x"></i>
                            </span>
                            <span className="fa fa-stack">
                                <i className="fa-regular fa-star fa-stack-1x"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BakeryCard