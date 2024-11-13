import './BakeryCard.css'

const BakeryCard = ({ title, description, price, gallery }) => {

    return (
        <div className="col single-column">
            <div className="card product-card">
                <div className="product-image">
                    <a href="product.html">
                        <img src={gallery} alt={title} className="image-content" />
                    </a>
                    <div className="product-button-group">
                        <button title="Add to wishlist" className="wishlist-button">
                            <i className="fas fa-heart"></i>
                        </button>
                        <button title="Quickview" className="quickview-button">
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div className="product-description">
                    <h4 className="product-title">
                        <a href="product.html">{title}</a>
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