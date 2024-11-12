import axios from "axios"
import { useEffect, useState } from "react"
import BakeryCard from "./BakeryCard"

const API_URL = "http://localhost:5005"

const BakeryList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        axios

            .get(`${API_URL}/products`)
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div>

            <div className="product-section wow fadeInUp mt-45">
                <div className="container">
                    <div className="product-hedaing page-title category-featured">
                        <div className="page-title toggled"><span
                            className="page-title-left"></span>
                            <h3>Nuestros productos</h3> <span
                                className="page-title-right"></span>
                        </div>
                        <div className="row">
                            <div id="tabs_1" className="themability-tabs section">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li>
                                        <a className="btn-click active"
                                            id="list-home-list"
                                            data-bs-toggle="list" href="#list-home"
                                            role="tab"
                                            aria-controls="list-home"><span>Featured</span></a>
                                    </li>
                                    <li>
                                        <a className="btn-click" id="list-profile-list"
                                            data-bs-toggle="list"
                                            href="#list-profile" role="tab"
                                            aria-controls="list-profile"><span>Latest</span></a>
                                    </li>
                                    <li>
                                        <a className="btn-click" id="list-messages-list"
                                            data-bs-toggle="list"
                                            href="#list-messages" role="tab"
                                            aria-controls="list-messages"><span>Special</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="product-list" class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                            {
                                products.map(elm => {
                                    return (
                                        <BakeryCard key={elm.id} tile={elm.title} description={elm.description} price={elm.price} gallery={elm.gallery[0]} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BakeryList