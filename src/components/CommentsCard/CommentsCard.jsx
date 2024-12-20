import { Card, Button, Form } from 'react-bootstrap';
import './CommentsCard.css';

const CommentsCard = ({
    comments,
    editingCommentId,
    editedComments,
    handleEditComment,
    handleSaveComment,
    handleDeleteComment,
    setEditingCommentId,
    setEditedComments,
}) => {
    return (
        <div className="comments-container">
            <Card className="comments-wrapper">
                <Card.Body>
                    {comments.map((comment, idx) => (
                        <Card key={comment.id} className="comment-item">
                            <Card.Header className="comment-header">
                                <span className="comment-index">Comment #{idx + 1}</span>
                                <div className="comment-actions">
                                    {editingCommentId === comment.id ? (
                                        <>
                                            <Button
                                                variant="outline-primary"
                                                className="save-button"
                                                onClick={() => handleSaveComment(comment.id)}
                                            >
                                                Save
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                className="cancel-button"
                                                onClick={() => setEditingCommentId(null)}
                                            >
                                                Cancel
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                variant="warning"
                                                className="edit-button"
                                                onClick={() => handleEditComment(comment.id)}
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                                className="delete-button"
                                                onClick={() => handleDeleteComment(comment.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </Card.Header>

                            <Card.Body className="comment-content">
                                {editingCommentId === comment.id ? (
                                    <>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="form-label">Raiting (0-10)</Form.Label>
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
                                                className="form-input"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="form-label">Comment</Form.Label>
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
                                                className="form-textarea"
                                            />
                                        </Form.Group>
                                    </>
                                ) : (
                                    <>
                                        <Card.Text className="comment-rating">
                                            <strong>Raiting:</strong> {comment.rating}/10
                                        </Card.Text>
                                        <Card.Text className="comment-text">
                                            <strong>Comment:</strong> {comment.comment}
                                        </Card.Text>
                                    </>
                                )}
                            </Card.Body>

                            <Card.Footer className="comment-footer">
                                <small className="text-muted">
                                    Date: {new Date(comment.date).toLocaleDateString()}
                                </small>
                            </Card.Footer>
                        </Card>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
};

export default CommentsCard;