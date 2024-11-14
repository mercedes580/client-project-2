import './BakeryDetails.css'
import axios from 'axios';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5005/'

const BakeryDetails = () => {
    const { id } = useParams()
    const [bakery, setBakery] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        fetchBakery()
        fetchBakeryComments()
    }, [])

    const fetchBakery = () => {
        axios.get(`${API_URL}products/${id}`).then(response => {
            setBakery(response.data)
        })
    }

    const fetchBakeryComments = () => {
        axios.get(`${API_URL}comments?productId=${id}`).then(response => {
            setComments(response.data)
        })
    }

    const handleEdit = () => {
        navigate(`/productos/editar/${id}`);
    }

    const handleDelete = () => {
        axios.delete(`${API_URL}products/${id}`).then(() => {
            alert("Producto eliminado con éxito");
            navigate('/productos');
        }).catch(error => {
            console.error("Error al eliminar el producto:", error)
        });
    };

    const handleBack = () => {
        navigate('/productos')
    };

    const handleAddComment = e => {

        e.preventDefault();

        const commentData = {
            productId: id,
            rating: newRating,
            comment: newComment,
            date: new Date().toISOString()
        };

        axios
            .post(`${API_URL}comments`, commentData)
            .then(() => {
                alert("Comentario registrado con éxito")
                fetchBakeryComments()
                setNewComment('')
                setNewRating(0)
            })
            .catch(error => {
                console.error("Error al agregar el comentario:", error)
            });
    };

    const handleDeleteComment = (commentId) => {
        axios
            .delete(`${API_URL}comments/${commentId}`)
            .then(() => {
                alert("Comentario eliminado con éxito")
                fetchBakeryComments()
            }).catch(error => {
                console.error("Error al eliminar el comentario:", error)
            });
    };

    if (!bakery) {
        return <p>Cargando detalles...</p>
    }

    return (
        <div className="BakeryDetails p-3">
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
                            <Card.Title>{bakery.title}</Card.Title>

                            <Card.Text>{bakery.description}</Card.Text>

                            <Card.Text>
                                <strong>Precio:</strong>
                                ${bakery.price}
                            </Card.Text>

                            <Card.Text>
                                <strong>Ingredientes:</strong>
                                {bakery.ingredients.join(', ')}
                            </Card.Text>

                            <Card.Text>
                                <strong>Alérgenos:</strong>
                                {bakery.allergens.join(', ')}
                            </Card.Text>

                            <Card.Text
                                className='text-success'>
                                <strong>Disponibilidad:</strong>
                                {bakery.stock} unidades
                            </Card.Text>

                            <Card.Text
                                className='text-warning'>
                                <strong>Gluten:</strong>
                                {bakery.gluten ? "Contiene gluten" : "Sin gluten"}
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
                                    onClick={handleEdit}
                                    className='m-1'>
                                    <i className='fas fa-pencil'>
                                    </i>&nbsp;Editar
                                </Button>

                                <Button
                                    variant="danger"
                                    onClick={handleDelete}
                                    className='m-1'>
                                    <i className='fa fa-trash'>
                                    </i>&nbsp;Eliminar
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Comentarios</Card.Title>

                    {comments.map((comment, idx) => (
                        <Card
                            key={comment.id}
                            className="mb-3">

                            <Card.Header
                                className="d-flex justify-content-between align-items-center">
                                N° Comentario: {idx + 1}

                                <div>
                                    <Button
                                        variant="warning"
                                        size="sm" onClick={() =>
                                            handleEditComment(comment.id)}>
                                        <i className='fas fa-pencil'></i>
                                    </Button>{' '}

                                    <Button
                                        variant="danger"
                                        size="sm" onClick={() =>
                                            handleDeleteComment(comment.id)}>
                                        <i className='fa fa-trash'></i>
                                    </Button>
                                </div>

                            </Card.Header>

                            <Card.Body>
                                <Card.Text>
                                    <strong>Puntuación:</strong>
                                    {comment.rating}/10
                                </Card.Text>

                                <Card.Text>
                                    <strong>Comentario:</strong>
                                    {comment.comment}
                                </Card.Text>

                            </Card.Body>

                            <Card.Footer>
                                <strong>Fecha Registro:</strong>
                                &nbsp;{new Date(comment.date).toLocaleDateString()}
                            </Card.Footer>
                        </Card>
                    ))}
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Agregar un nuevo comentario</Card.Title>

                    <Form onSubmit={handleAddComment}>
                        <Form.Group
                            className="mb-3"
                            controlId="newRating">

                            <Form.Label>Rating (0-10)</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                max="10"
                                value={newRating}
                                onChange={(e) => setNewRating(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="newComment">

                            <Form.Label>Comentario</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Escribe tu comentario..."
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="rotate-container">
                            <i className="fas fa-plus rotate-on-hover">
                            </i>&nbsp;Agregar Comentario
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BakeryDetails