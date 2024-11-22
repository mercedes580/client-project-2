import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/Cart.Context'
import axios from 'axios'
import toast from 'react-hot-toast'
import './DetailsCard.css'
import { AuthContext } from '../../contexts/Auth.Context'

const DetailsCard = ({ bakery, handleBack, handleShow, handleShowToast }) => {

    const API_URL = import.meta.env.VITE_APP_API_URL

    const { loggedUser } = useContext(AuthContext)

    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()

    const { fetchCartNumber } = useContext(CartContext);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, Math.min(bakery.stock, parseInt(e.target.value) || 1))
        setQuantity(value)
    }

    const increment = () => setQuantity((prev) => Math.min(prev + 1, bakery.stock))

    const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1))

    const handleAddToCart = () => {
        axios
            .get(`${API_URL}/shop?status=0`)
            .then(response => {
                let cart = response.data[0]

                if (!cart) {
                    cart = {
                        details: [],
                        status: "0"
                    }
                }

                const productIndex = cart.details.findIndex(item => item.productId === bakery.id)

                if (productIndex !== -1) {
                    const product = cart.details[productIndex]
                    const newQuantity = Math.min(parseInt(product.quantity) + quantity, bakery.stock)

                    cart.details[productIndex] = {
                        ...product,
                        quantity: newQuantity.toString()
                    }
                } else {
                    cart.details.push({
                        productId: bakery.id,
                        quantity: quantity.toString()
                    })
                }

                const newTotal = cart.details.reduce((total, item) => {
                    const product = bakery
                    return total + (parseInt(item.quantity) * parseFloat(product.price))
                }, 0)

                cart.total = newTotal.toFixed(2).toString()

                if (cart.id) {
                    axios
                        .put(`${API_URL}/shop/${cart.id}`, cart)
                        .then(() => {
                            toast.success('Product added to cart!')
                            fetchCartNumber()
                            navigate('/productos')
                        })
                        .catch(err => console.log(err))
                } else {
                    axios
                        .post(`${API_URL}/shop`, cart)
                        .then(() => {
                            toast.success('Cart created!')
                            fetchCartNumber()
                            navigate('/productos')
                        })
                        .catch(err => console.log(err))
                }
            })
    }

    return (

        <Card className="details-card mb-4">

            <Card.Body>
                <Row>
                    <Col md={4}>
                        <div className="back-button-container">
                            <Button onClick={handleBack} className="back-button">
                                <i className="fas fa-undo"></i>
                            </Button>
                            <span className="back-text">Back to products</span>
                        </div>

                        <Card.Img variant="top" src={bakery.gallery[0]} alt={bakery.title} className="product-image" />

                        <div className="admin-buttons">

                            {
                                loggedUser &&
                                <>

                                    <Button variant="warning" onClick={handleShow} className="edit-button">
                                        <i className="fas fa-pencil"></i>
                                    </Button>
                                    <Button variant="danger" onClick={handleShowToast} className="delete-button">
                                        <i className="fa fa-trash"></i>
                                    </Button>

                                </>
                            }

                        </div>
                    </Col>
                    <Col md={8}>
                        <h3 className='delicious-message'>DELICIOUS</h3>
                        <Card.Title className='cardTitle'><strong>{bakery.title}</strong></Card.Title>
                        <Card.Text className='product-description'>{bakery.description}</Card.Text>
                        <Card.Text
                            className='product-details'>
                            <strong>Price:</strong> ${bakery.price} <br />
                            <strong>Ingredients:</strong> {bakery.ingredients.join(', ')}<br />
                            <strong>Allergens:</strong> {bakery.allergens.join(', ')}<br />
                            <strong>Available:</strong> {bakery.stock} units<br />
                            <strong>Gluten:</strong> {bakery.gluten ? "Contiene gluten" : "Sin gluten"}
                        </Card.Text>

                        <div className="unit-component">
                            <Button className='unit-button' onClick={decrement} disabled={quantity === 1}>-</Button>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="unit-form"
                                style={{ width: "60px" }}
                            />
                            <Button
                                className='unit-button'
                                onClick={increment}
                                disabled={quantity === bakery.stock}>
                                +
                            </Button>
                            <div className="cart-button-container">
                                <Button
                                    onClick={handleAddToCart}
                                    className="cart-button">
                                    <i className="fa fa-cart-plus"></i>
                                    <h4>Add to cart</h4>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Card.Body>
        </Card>

    )

}

export default DetailsCard