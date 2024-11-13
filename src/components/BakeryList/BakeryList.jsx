import './BakeryList.css'
import axios from "axios"
import { useEffect, useState } from "react"
import BakeryCard from "../BakeryCard/BakeryCard"

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

                    <div className="row">
                        {products.map(elm => (
                            <BakeryCard key={elm.id} id={elm.id} title={elm.title} description={elm.description} price={elm.price} gallery={elm.gallery[0]} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BakeryList