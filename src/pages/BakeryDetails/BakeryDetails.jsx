import './BakeryDetails.css'
import axios from 'axios';
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditProductForm from '../../components/EditProductForm/EditProductForm';

const API_URL = 'http://localhost:5005'

const BakeryDetails = () => {
    const { id } = useParams()
    const [bakery, setBakery] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedComments, setEditedComments] = useState({});

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetchBakery()
        fetchBakeryComments()
    }, [])

    const fetchBakery = () => {
        axios
            .get(`${API_URL}/products/${id}`)
            .then(response => {
                setBakery(response.data)
            })
            .catch(err => console.log(err))
    }

    const fetchBakeryComments = () => {
        axios
            .get(`${API_URL}/comments?productId=${id}`)
            .then((response) => {
                setComments(response.data)
            })
            .catch(err => console.log(err))
    }

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/products/${id}`)
            .then(() => {
                navigate('/productos')
            })
            .catch(err => console.log(err))
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
            .post(`${API_URL}/comments`, commentData)
            .then(() => {
                alert("Comentario registrado con éxito")
                fetchBakeryComments()
                setNewComment('')
                setNewRating(0)
            })
            .catch(err => console.log(err))
    };

    const handleDeleteComment = (commentId) => {
        axios
            .delete(`${API_URL}/comments/${commentId}`)
            .then(() => {
                alert("Comentario eliminado con éxito")
                fetchBakeryComments()
            })
            .catch(err => console.log(err))
    };

    const handleEditComment = (commentId) => {
        setEditingCommentId(commentId);
        const commentToEdit = comments.find(comment => comment.id === commentId);
        setEditedComments({
            ...editedComments,
            [commentId]: {
                rating: commentToEdit?.rating || 0,
                comment: commentToEdit?.comment || '',
            }
        });
    };

    const handleSaveComment = (commentId) => {
        const updatedComment = {
            productId: id,
            rating: editedComments[commentId]?.rating,
            comment: editedComments[commentId]?.comment,
            date: new Date().toISOString()
        };

        axios
            .put(`${API_URL}/comments/${commentId}`, updatedComment)
            .then(() => {
                alert("Comentario actualizado con éxito");
                fetchBakeryComments();
                setEditingCommentId(null);
            })
            .catch(err => console.log(err))
    };


    if (!bakery) {
        return <p>Cargando detalles...</p>
    }

    return (
        <div className="BakeryDetails">
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

                    {
                        comments.map((comment, idx) => (
                            <Card key={comment.id} className="mb-3">
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    N° Comentario: {idx + 1}
                                    <div>
                                        {editingCommentId === comment.id ? (
                                            <>
                                                <Button
                                                    variant="success"
                                                    size="sm"
                                                    onClick={() => handleSaveComment(comment.id)}>
                                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                                    &nbsp;Actualizar
                                                </Button>{' '}
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => setEditingCommentId(null)}>
                                                    <i class="fas fa-window-close"></i>
                                                    &nbsp;Cancelar
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button
                                                    variant="warning"
                                                    size="sm"
                                                    onClick={() => handleEditComment(comment.id)}>
                                                    <i className='fas fa-pencil'></i>
                                                </Button>{' '}
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleDeleteComment(comment.id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </Card.Header>

                                <Card.Body>
                                    {editingCommentId === comment.id ? (
                                        <>
                                            <Form.Group className="mb-3" controlId={`editRating-${comment.id}`}>
                                                <Form.Label>Rating (0-10)</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    min="0"
                                                    max="10"
                                                    value={editedComments[comment.id]?.rating || 0}
                                                    onChange={(e) =>
                                                        setEditedComments({
                                                            ...editedComments,
                                                            [comment.id]: {
                                                                ...editedComments[comment.id],
                                                                rating: e.target.value,
                                                            },
                                                        })
                                                    }
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId={`editComment-${comment.id}`}>
                                                <Form.Label>Comentario</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={editedComments[comment.id]?.comment || ''}
                                                    onChange={(e) =>
                                                        setEditedComments({
                                                            ...editedComments,
                                                            [comment.id]: {
                                                                ...editedComments[comment.id],
                                                                comment: e.target.value,
                                                            },
                                                        })
                                                    }
                                                    placeholder="Escribe tu comentario..."
                                                />
                                            </Form.Group>
                                        </>
                                    ) : (
                                        <>
                                            <Card.Text>
                                                <strong>Puntuación:</strong> {comment.rating}/10
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Comentario:</strong> {comment.comment}
                                            </Card.Text>
                                        </>
                                    )}
                                </Card.Body>

                                <Card.Footer>
                                    <strong>Fecha Registro:</strong> {new Date(comment.date).toLocaleDateString()}
                                </Card.Footer>
                            </Card>
                        ))
                    }
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
                            variant="success"
                            type="submit"
                            className="rotate-container">
                            <i className="fas fa-plus rotate-on-hover">
                            </i>&nbsp;Agregar Comentario
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProductForm fetchBakery={fetchBakery} handleClose={handleClose} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default BakeryDetails