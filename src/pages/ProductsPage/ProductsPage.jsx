import { useContext, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { AuthContext } from '../../contexts/Auth.Context'
import AddProductForm from '../../components/AddProductForm/AddProductForm'
import BakeryList from '../../components/BakeryList/BakeryList'
import './ProductsPage.css'
import Loader from '../../components/Loader/Loader'
import ModalAddProduct from '../../components/ModalAddProduct/ModalAddProduct'

const ProductsPage = () => {

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const { loggedUser } = useContext(AuthContext)

    return (
        <Container className="ProductsPage">
            <Loader />
            <Row>
                <Col>
                    <div className="products-title">

                        <h3>Our products</h3>

                    </div>

                    <BakeryList />

                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    {
                        loggedUser &&
                        <>
                            <Button
                                variant="success"
                                className="product-new-button"
                                onClick={handleShow}
                            >
                                <i className="fas fa-plus icon-margin"></i> Crear nuevo producto
                            </Button>
                        </>
                    }

                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Añadir Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddProductForm />
                        </Modal.Body>
                    </Modal>

                </Col>
            </Row>

            <ModalAddProduct showModal={showModal} handleClose={handleClose} />

        </Container>
    )
}

export default ProductsPage