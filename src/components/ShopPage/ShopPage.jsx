import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap"
import axios from "axios"
import "./ShopPage.css"

const ShopPage = () => {

    const API_URL = "http://localhost:5005"

    const { id } = useParams()

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const [subtotal, setSubtotal] = useState(0)

    const fetchCartDetails = async () => {

        const cartResponse = await axios.get(`${API_URL}/shop/${id}`)

        const cartData = cartResponse.data

        const productPromises = cartData.details.map((item) =>
            axios
                .get(`${API_URL}/products/${item.productId}`)
                .then((res) => ({
                    ...res.data,
                    quantity: parseInt(item.quantity),
                    total: parseFloat(res.data.price) * parseInt(item.quantity)
                }))
                .catch(error => console.error(error))
        )

        const fetchedProducts = await Promise.all(productPromises)

        setProducts(fetchedProducts)

        const calculatedSubtotal = fetchedProducts.reduce(
            (acc, product) => acc + product.total,
            0
        )

        setSubtotal(calculatedSubtotal)

        setLoading(false)
    }

    useEffect(() => {
        fetchCartDetails()
    }, [id])

    return (

        <Container className="ShopPage">

            <Row>

                <Col md={6}>

                    <Card>

                        <Card.Header>
                            <h5>Carrito De Compras</h5>
                        </Card.Header>

                        <Card.Body>
                            {loading ? (
                                <Spinner animation="border" />
                            ) : products.length > 0 ? (
                                products.map((product, index) => (
                                    <div key={index} className="mb-3">
                                        <h6>{product.title}</h6>
                                        <span className="text-muted">{product.description}</span>
                                        <p>
                                            Cantidad: {product.quantity} | Precio: ${product.price} |{" "}
                                            Total: ${product.total}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p>No hay más artículos en tu carrito</p>
                            )}
                        </Card.Body>

                        <Card.Footer>
                            <Link to="/productos" className="text-decoration-none">
                                &larr; Seguir comprando
                            </Link>
                        </Card.Footer>

                    </Card>

                </Col>

                <Col md={6}>

                    <Card>

                        <Card.Body>
                            <p className="mb-1">
                                <strong>{products.length} artículos</strong>
                            </p>
                            <hr />
                            <p className="mb-1">
                                Subtotal
                                <span className="float-end">${subtotal.toFixed(2)}</span>
                            </p>
                            <p className="mb-1">
                                Total
                                <span className="float-end">${subtotal.toFixed(2)}</span>
                            </p>
                            <div className="text-center mt-3">
                                <Button variant="success">Tramitar Pedido</Button>
                            </div>
                        </Card.Body>

                    </Card>

                </Col>

            </Row>

            <Row className="mt-4">

                <Col md={4}>

                    <Card>

                        <Card.Body>
                            <Card.Title>Security policy</Card.Title>
                            <Card.Text>
                                (edit with the Customer Reassurance module)
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

                <Col md={4}>

                    <Card>

                        <Card.Body>
                            <Card.Title>Delivery policy</Card.Title>
                            <Card.Text>
                                (edit with the Customer Reassurance module)
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </Col>

                <Col md={4}>

                    <Card>

                        <Card.Body>
                            <Card.Title>Return policy</Card.Title>
                            <Card.Text>
                                (edit with the Customer Reassurance module)
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    )

}

export default ShopPage