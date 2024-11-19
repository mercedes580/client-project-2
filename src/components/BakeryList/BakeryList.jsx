import { useEffect, useState } from "react"
import axios from "axios"
import BakeryCard from "../BakeryCard/BakeryCard"
import { Row, Col } from 'react-bootstrap'
import './BakeryList.css'

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

                    <Col xs={12} md={6} lg={4} className='p-3' key={elm.id} >

                        <BakeryCard  {...elm} />

                    </Col>
                ))
            }

        </Row>

    )
}

export default BakeryList