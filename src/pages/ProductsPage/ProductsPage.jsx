import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import AddProductForm from '../../components/AddProductForm/AddProductForm'
import BakeryList from '../../components/BakeryList/BakeryList'
import './ProductsPage.css'

const ProductsPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    return (
        <Container className="ProductsPage">
            <Row>
                <Col>
                    <div className="products-title">

                        <h3>Nuestros Productos</h3>

                        <p className="about-title-content-up">
                            ¡Si te gusta uno... imagínate dos!
                        </p>

                    </div>

                    {/* <div class="separator-products"></div> */}

                    <BakeryList />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Button
                        variant="success"
                        className="product-new-button"
                        onClick={handleShow}
                    >
                        <i className="fas fa-plus icon-margin"></i> Crear nuevo producto
                    </Button>

                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Añadir Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddProductForm />
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                close
                            </Button>
                            <Link to="/productos/añadir">
                                <Button variant="primary" onClick={handleClose}>
                                    save changes
                                </Button>
                            </Link>
                        </Modal.Footer> */}
                    </Modal>

                </Col>
            </Row>
        </Container>
    )
}

export default ProductsPage