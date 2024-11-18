import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import BakeryList from '../components/BakeryList/BakeryList';
import './ProductsPage.css';

const EditProductsPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    return (
        <Container className="EditProductsPage">
            <Row>
                <Col>
                    <div className="text-center mt-4">
                        <h3>Editar Productos</h3>
                    </div>
                    <div className="mt-5">
                        <BakeryList onEdit={handleShow} />
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Button
                        variant="primary"
                        className="CreateButton"
                        onClick={() => handleShow(null)}
                    >
                        <i className="fas fa-plus icon-margin"></i> Crear nuevo producto
                    </Button>

                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedProduct ? 'Editar Producto' : 'Crear Nuevo Producto'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            aqui añadimos products
                            {selectedProduct ? (
                                <div>

                                    <p>Editing: {selectedProduct.name}</p>

                                </div>
                            ) : (
                                <p>Aquí podríamos tener el formulario para crear un nuevo producto.</p>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Link to="/productos/guardar">
                                <Button variant="primary" onClick={handleClose}>
                                    Guardar cambios
                                </Button>
                            </Link>
                        </Modal.Footer>
                    </Modal>

                </Col>
            </Row>
        </Container>
    );
}

export default EditProductsPage;