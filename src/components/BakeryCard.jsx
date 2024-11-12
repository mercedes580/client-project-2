const BakeryCard = ({ title, description, price, gallery }) => {

    return (
        <div class="col single-column">
            <div class="card product-card border-0">
                <div class="image">
                    <a href="product.html"> <img src={gallery} alt={title} /></a>
                    <div class="button-group">
                        {/* <button title="Add to Cart">
                            <i class="icon-shopping-bag"></i>
                        </button> */}
                        <button title="Add to wishlist">
                            <i class="icon-like"></i>
                        </button>
                        <button title="Quickview">
                            <i class="icon-eye"></i>
                        </button>
                        {/* <button title="Compare">
                            <i class="icon-shuffle-arrows"></i>
                        </button> */}
                    </div>
                </div>
                <div class="content product-description">
                    <div class="caption">
                        <h4 class="product-title"><a href="product.html">{title}</a></h4>
                        <div class="price-rating">
                            <div class="price">
                                <span class="price-new">${price}</span>

                            </div>
                            <div class="rating">
                                <span class="fa fa-stack"><i class="fa-regular fa-star fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa-regular fa-star fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa-regular fa-star fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa-regular fa-star fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa-regular fa-star fa-stack-1x"></i></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default BakeryCard