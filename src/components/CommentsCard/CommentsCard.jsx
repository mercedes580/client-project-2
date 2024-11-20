import { Card, Button, Form, Row, Col, Modal, Toast } from 'react-bootstrap';

const CommentsCard = ({
    comments,
    editingCommentId,
    editedComments,
    handleEditComment,
    handleSaveComment,
    handleDeleteComment,
    setEditingCommentId,
    setEditedComments }) => {

    return (
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
    )
}

export default CommentsCard