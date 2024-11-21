import ChartsAdmin from "../../components/ChartsAdmin/ChartsAdmin"
import ProductGrid from "../../components/ProductGrid/ProductGrid"
import ShopGrid from "../../components/ShopGrid/ShopGrid"
import TopRatedPie from "../../components/TopRatedPie/TopRatedPie"
import { Container, Row, Col, Card } from "react-bootstrap"
import Loader from "../../components/Loader/Loader"
import './AdminPage.css'

const AdminPage = () => {

    return (

        <Container fluid className="AdminPage">

            <Loader />

            <Row className="my-4">
                <Col>
                    <Card className="shadow-sm border-light rounded">
                        <Card.Body className="text-center">
                            <h1 className="display-4 text-dark">Panel Administrativo</h1>
                            <p className="lead text-muted">Monitoreo y gestión de productos y pedidos</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col lg={8} md={12} xs={12} className="p-2">
                    <Card className="shadow-sm border-light rounded">
                        <Card.Header className="bg-light text-dark text-center">
                            <h5 className="m-0">Pedidos Recientes</h5>
                        </Card.Header>
                        <Card.Body>
                            <ShopGrid />
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={12} xs={12} className="p-2">
                    <Card className="shadow-sm border-light rounded">
                        <Card.Header className="bg-light text-dark text-center">
                            <h5 className="m-0">Gráfico de Pedidos</h5>
                        </Card.Header>
                        <Card.Body>
                            <ChartsAdmin />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col lg={8} md={12} xs={12} className="p-2">
                    <Card className="shadow-sm border-light rounded">
                        <Card.Header className="bg-light text-dark text-center">
                            <h5 className="m-0">Gestión de Productos</h5>
                        </Card.Header>
                        <Card.Body>
                            <ProductGrid />
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={12} xs={12} className="p-2">
                    <Card className="shadow-sm border-light rounded">
                        <Card.Header className="bg-light text-dark text-center">
                            <h5 className="m-0">Gráfico de Productos</h5>
                        </Card.Header>
                        <Card.Body>
                            <TopRatedPie />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
        
    )
}

export default AdminPage