import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import BakeryList from '../components/BakeryList/BakeryList'

const ProductsPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    return (
        <Container className="ProductsPage">
            <Row>
                <Col>
                    <div className="text-center mt-4">
                        <h3>Nuestros productos</h3>
                    </div>
                    <div className="mt-5">
                        <BakeryList />
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Button
                        variant="primary"
                        className="CreateButton"
                        onClick={handleShow}
                    >
                        <i className="fas fa-plus icon-margin"></i>;Crear nuevo producto
                    </Button>

                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Soy la leche</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            aqui puedo meter lo que quiera lol
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                close
                            </Button>
                            <Link to="/productos/añadir">
                                <Button variant="primary" onClick={handleClose}>
                                    save changes
                                </Button>
                            </Link>
                        </Modal.Footer>
                    </Modal>

                </Col>
            </Row>
        </Container>
    )
}

export default ProductsPage