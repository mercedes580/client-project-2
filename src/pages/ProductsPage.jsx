import { Link } from "react-router-dom"
import BakeryList from "../components/BakeryList/BakeryList"

const ProductsPage = () => {

    return (
        <div className="ProductsPage">

            <div className="product-container mt-45">
                <div className="product-content">
                    <div className="product-header">
                        <h3 className="product-title">Nuestros productos</h3>

                        <div className="tabs-container">
                            <ul className="tabs-nav" role="tablist">
                                <li>
                                    <a className="tab-btn active" id="featured-tab" data-bs-toggle="list" href="#featured" role="tab" aria-controls="featured">
                                        <span>Featured</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tab-btn" id="latest-tab" data-bs-toggle="list" href="#latest" role="tab" aria-controls="latest">
                                        Latest
                                    </a>
                                </li>
                                <li>
                                    <a className="tab-btn" id="special-tab" data-bs-toggle="list" href="#special" role="tab" aria-controls="special">
                                        <span>Special</span>
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <BakeryList />

                    </div>
                </div>
            </div>

            <div className="PosCreateButton">
                <Link to={"/productos/añadir"}>
                    <button className="CreateButton">
                        <i className="fas fa-plus icon-margin"></i>&nbsp;Crear nuevo producto
                    </button>
                </Link>
            </div>

        </div>

    )
}

export default ProductsPage