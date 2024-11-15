import { Link } from "react-router-dom"
import BakeryList from "../components/BakeryList/BakeryList"
import { Container, Row, Col, Button } from "react-bootstrap"

const ProductsPage = () => {

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

                    <Link to="/productos/añadir">

                        <Button variant="primary" className="CreateButton">
                            <i className="fas fa-plus icon-margin"></i>&nbsp;Crear nuevo producto
                        </Button>
                        <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="examplemodal">

                        </Button>

                    </Link>

                </Col>

            </Row>

        </Container>

    )

}

export default ProductsPage