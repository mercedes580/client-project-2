import { useContext, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { AuthContext } from '../../contexts/Auth.Context'
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

            <section>
                <Row className="little-message">
                    <Col xs="auto">
                        <h4>OUR PRODUCTS</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>( FRESHLY BAKED )</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>OUR PRODUCTS</h4>
                    </Col>
                </Row>
            </section>

            <Row className='products-cards'>
                <Col>

                    <BakeryList />

                </Col>
            </Row>

            <section>
                <Row className="little-message">
                    <Col xs="auto">
                        <h4>OUR PRODUCTS</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>( FRESHLY BAKED )</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>OUR PRODUCTS</h4>
                    </Col>
                </Row>
            </section>

            <Row className="mt-4 d-flex justify-content-start">
                <Col xs="auto">
                    {
                        loggedUser &&
                        <>
                            <Button
                                variant="success"
                                className="product-new-button"
                                onClick={handleShow}
                            >
                                <i className="fas fa-plus icon-margin"></i> Add new product
                            </Button>
                        </>
                    }
                </Col>
            </Row>

            <ModalAddProduct showModal={showModal} handleClose={handleClose} />

        </Container>
    )
}

export default ProductsPage