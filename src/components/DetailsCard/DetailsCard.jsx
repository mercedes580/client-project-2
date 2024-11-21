import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/Cart.Context'
import axios from 'axios'
import toast from 'react-hot-toast'

const DetailsCard = ({ bakery, handleBack, handleShow, handleShowToast }) => {

    const API_URL = 'http://localhost:5005'

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
                            toast.success('¡Producto agregado al carrito correctamente!')
                            fetchCartNumber()
                            navigate('/productos')
                        })
                        .catch(err => console.log(err))
                } else {
                    axios
                        .post(`${API_URL}/shop`, cart)
                        .then(() => {
                            toast.success('¡Carrito creado y producto agregado correctamente!')
                            fetchCartNumber()
                            navigate('/productos')
                        })
                        .catch(err => console.log(err))
                }
            })
    }

    return (

        <Card className="mb-4">

            <Card.Body>

                <Row>

                    <Col md={4}>
                        <Card.Img
                            variant="top"
                            src={bakery.gallery[0]}
                            alt={bakery.title}
                        />
                    </Col>

                    <Col md={8}>
                        <Card.Title>
                            <strong>{bakery.title}</strong>
                        </Card.Title>
                        <Card.Text>
                            {bakery.description}
                        </Card.Text>
                        <Card.Text>
                            <strong>Precio:</strong> ${bakery.price}
                        </Card.Text>
                        <Card.Text>
                            <strong>Ingredientes:</strong> {bakery.ingredients.join(', ')}
                        </Card.Text>
                        <Card.Text>
                            <strong>Alérgenos:</strong> {bakery.allergens.join(', ')}
                        </Card.Text>
                        <Card.Text>
                            <strong>Disponibilidad:</strong> {bakery.stock} unidades
                        </Card.Text>
                        <Card.Text>
                            <strong>Gluten:</strong> {bakery.gluten ? "Contiene gluten" : "Sin gluten"}
                        </Card.Text>

                        <div className="d-flex align-items-center mb-3">
                            <Button
                                variant="outline-secondary"
                                onClick={decrement}
                                disabled={quantity === 1}>
                                -
                            </Button>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="mx-2 text-center"
                                style={{ width: "60px" }}
                            />
                            <Button variant="outline-secondary"
                                onClick={increment}
                                disabled={quantity === bakery.stock}>
                                +
                            </Button>
                        </div>

                        <div className="d-flex">
                            <Button
                                variant="secondary"
                                onClick={handleBack}
                                className="m-1">
                                <i className="fas fa-undo"></i>
                                Regresar
                            </Button>

                            <Button variant="warning"
                                onClick={handleShow}
                                className="m-1">
                                <i className="fas fa-pencil"></i>
                                Editar
                            </Button>

                            <Button
                                variant="danger"
                                onClick={handleShowToast}
                                className="m-1">
                                <i className="fa fa-trash"></i>
                                Eliminar
                            </Button>

                            <Button
                                variant="success"
                                onClick={handleAddToCart}
                                className="m-1">
                                <i className="fa fa-cart-plus"></i>
                                Agregar al carrito
                            </Button>
                        </div>
                    </Col>

                </Row>

            </Card.Body>

        </Card>

    )

}

export default DetailsCard