import { Card, Button, Form, Row, Col, Modal, Toast } from 'react-bootstrap';

const DetailsCard = ({ bakery, handleBack, handleShow, handleShowToast }) => {

    return (

        <Card className="mb-4">

            <Card.Body>
                <Row>
                    <Col md={4}>
                        <Card.Img
                            variant="top"
                            src={bakery.gallery[0]}
                            alt={bakery.title} />
                    </Col>

                    <Col md={8}>
                        <Card.Title><strong>{bakery.title}</strong></Card.Title>

                        <Card.Text>{bakery.description}</Card.Text>

                        <Card.Text>
                            <strong>Precio:</strong>
                            ${bakery.price}
                        </Card.Text>

                        <Card.Text>
                            <strong>Ingredientes:</strong>
                            &nbsp;{bakery.ingredients.join(', ')}
                        </Card.Text>

                        <Card.Text>
                            <strong>Alérgenos:</strong>
                            &nbsp;{bakery.allergens.join(', ')}
                        </Card.Text>

                        <Card.Text>
                            <strong>Disponibilidad:</strong>
                            &nbsp;{bakery.stock} unidades
                        </Card.Text>

                        <Card.Text>
                            <strong>Gluten:</strong>
                            &nbsp;{bakery.gluten ? "Contiene gluten" : "Sin gluten"}
                        </Card.Text>

                        <div className="d-flex">
                            <Button
                                variant="secondary"
                                onClick={handleBack}
                                className='m-1'>
                                <i className='fas fa-undo'>
                                </i>&nbsp;Regresar
                            </Button>

                            <Button
                                variant="warning"
                                onClick={handleShow}
                                className='m-1'>
                                <i className='fas fa-pencil'>
                                </i>&nbsp;Editar
                            </Button>

                            <Button
                                variant="danger"
                                onClick={handleShowToast}
                                className='m-1'>
                                <i className='fa fa-trash'>
                                </i>&nbsp;Eliminar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default DetailsCard