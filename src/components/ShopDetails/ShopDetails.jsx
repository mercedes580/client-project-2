import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap"
import { CartContext } from "../../contexts/Cart.Context"
import toast from 'react-hot-toast'
import axios from "axios"
import "./ShopDetails.css"

const ShopDetails = () => {

    const API_URL = import.meta.env.VITE_APP_API_URL

    const { id } = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [subtotal, setSubtotal] = useState(0)

    const navigate = useNavigate()

    const fetchCartDetails = () => {

        axios
            .get(`${API_URL}/shop/${id}`)
            .then((cartResponse) => {
                const cartData = cartResponse.data

                const productPromises = cartData.details.map((item) =>
                    axios
                        .get(`${API_URL}/products/${item.productId}`)
                        .then((res) => ({
                            ...res.data,
                            quantity: parseInt(item.quantity),
                            total: parseFloat(res.data.price) * parseInt(item.quantity),
                        }))
                        .catch((error) => {
                            console.error(error)
                            return null
                        })
                )

                return Promise.all(productPromises)
            })
            .then((fetchedProducts) => {
                const validProducts = fetchedProducts.filter((product) => product !== null)

                setProducts(validProducts)

                const calculatedSubtotal = validProducts.reduce(
                    (acc, product) => acc + product.total,
                    0
                )

                setSubtotal(calculatedSubtotal)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        fetchCartDetails()
    }, [id])

    const { fetchCartNumber } = useContext(CartContext)

    const notify = () => toast.success('¡Pedido Tramitado!')

    const handleOrderProcessing = () => {

        axios
            .patch(`${API_URL}/shop/${id}`, {
                status: "1",
                total: subtotal.toFixed(2),
                date: new Date().toISOString()
            })
            .then(() => {
                notify()
                navigate('/productos')
                fetchCartNumber()
            })
            .catch(err => console.log(err))

    }

    return (

        <div className="ShopPage">

            <Card className="details-card p-3">

                <Card.Body>

                    <Row>

                        <section className="little-message-shop">
                            <Row>
                                <Col>
                                    <h4>( BARCELONA ) <br /> BAKERY DESIGN <br /> SHOP</h4>
                                </Col>
                            </Row>
                        </section>

                        <section className="about-title-shop">
                            <Row>
                                <Col>
                                    <h1>Your selected products!</h1>
                                </Col>
                            </Row>
                        </section>

                        <Col md={6} className="mb-2">

                            <Card className="shop-wrapper">

                                <Card.Body>
                                    {loading ? (
                                        <Spinner animation="border" />
                                    ) : products.length > 0 ? (
                                        products.map((product, index) => (
                                            <div key={index} className="mb-3">
                                                <h6 className="product-description card-text">{product.title}</h6>
                                                <span className="product-details card-text">{product.description}</span>
                                                <p className="product-details card-text">
                                                    Cantidad: {product.quantity} | Precio: ${product.price} |{" "}
                                                    Total: ${product.total}
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No hay más artículos en tu carrito</p>
                                    )}
                                </Card.Body>

                            </Card>

                        </Col>

                        <Col md={6} className="mb-2">

                            <Card className="shop-wrapper">

                                <Card.Body>
                                    <p className="mb-1 product-details card-text">
                                        Products
                                        <span className="float-end">{products.length} selected</span>
                                    </p>
                                    <hr />
                                    <p className="mb-1 product-details card-text">
                                        Subtotal
                                        <span className="float-end">${subtotal.toFixed(2)}</span>
                                    </p>
                                    <p className="mb-1 product-details card-text">
                                        Total
                                        <span className="float-end">${subtotal.toFixed(2)}</span>
                                    </p>
                                    <div className="text-center mt-3">
                                        <Button className="cart-button"
                                            onClick={handleOrderProcessing}>
                                            <i class="fa fa-truck" aria-hidden="true"></i>
                                            &nbsp;Processing order</Button>
                                    </div>
                                </Card.Body>

                            </Card>

                        </Col>

                    </Row>

                    <Row className="mt-4">

                        <Col md={4} className="mb-2">

                            <Card className="shop-wrapper">

                                <Card.Body>
                                    <Card.Title>Security policy</Card.Title>
                                    <Card.Text>
                                        Your data is protected with industry-leading encryption and secure protocols.
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col md={4} className="mb-2">

                            <Card className="shop-wrapper">

                                <Card.Body>
                                    <Card.Title>Delivery policy</Card.Title>
                                    <Card.Text>
                                        Fast and reliable delivery with real-time tracking for your convenience.
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>

                        <Col md={4} className="mb-2">

                            <Card className="shop-wrapper">

                                <Card.Body>
                                    <Card.Title>Return policy</Card.Title>
                                    <Card.Text>
                                        Hassle-free returns within 30 days for a worry-free shopping experience.
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>


                    </Row>

                </Card.Body>

            </Card>



        </div>

    )

}

export default ShopDetails