import './BakeryList.css'
import axios from "axios"
import { useEffect, useState } from "react"
import BakeryCard from "../BakeryCard/BakeryCard"
import { Row } from 'react-bootstrap'

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

        <Row>
            {
                products.map(elm => (
                    <BakeryCard key={elm.id} {...elm} />
                ))
            }
        </Row>

    )
}

export default BakeryList