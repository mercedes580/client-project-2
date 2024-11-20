import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import AddProductForm from '../../components/AddProductForm/AddProductForm'
import BakeryList from '../../components/BakeryList/BakeryList'
import './ProductsPage.css'
import Loader from '../../components/Loader/Loader'

const ProductsPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    const addToWishlist = (product) => {
        setWishlist(wishlist => [...wishlist, product])
    }

    return (
        <Container className="ProductsPage">
            <Loader />
            <Row>
                <Col>
                    <div className="products-title">

                        <h3>Our products</h3>

                    </div>

                    <BakeryList addToWishlist={addToWishlist} />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Button
                        variant="success"
                        className="product-new-button"
                        onClick={handleShow}
                    >
                        <i className="fas fa-plus icon-margin"></i> Create new product
                    </Button>

                </Col>
            </Row>

            <Modal
                className="create-modal dark-modal"
                show={showModal}
                onHide={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Add new product</Modal.Title>
                    <Button
                        className="custom-button">
                        <i className='fa-solid fa-xmark'></i>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <AddProductForm />
                </Modal.Body>
            </Modal>

        </Container>
    )
}

export default ProductsPage