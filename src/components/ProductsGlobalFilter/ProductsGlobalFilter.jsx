
import './ProductsGlobalFilter.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, Form } from "react-bootstrap";

const API_URL = "http://localhost:5005"

const ProductsGlobalFilter = () => {

    const [filterValue, setFilterValue] = useState("")
    const [filterResult, setFilterResult] = useState([])

    const handleFilterChange = e => {
        const { value } = e.target
        setFilterValue(value)
    }

    useEffect(() => {
        if (filterValue !== "") {
            fetchProductsData()
        } else {
            setFilterResult([])
        }
    }, [filterValue])

    const fetchProductsData = () => {
        axios
            .get(`${API_URL}/products?title_like=${filterValue}`)

            .then(response => {
                setFilterResult(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ProductsGlobalFilter">

            <div className="searcher">
                <Form.Control
                    type="text"
                    placeholder="PRODUCT"
                    value={filterValue}
                    onChange={handleFilterChange}
                />
                <div className="search-icon">

                    <i className="fa-solid fa-search"></i>

                </div>
            </div>

            <div className="list-filtered">

                <ListGroup>
                    {
                        filterResult.map((elm, idx) => (
                            <ListGroup.Item key={idx}>

                                <img src={elm.gallery[0]} alt={elm.title} />

                                <h7>{elm.title}</h7>

                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default ProductsGlobalFilter
