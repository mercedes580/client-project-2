import { Card, Button, Form } from 'react-bootstrap';

const NewCommentCard = ({ newRating, newComment, setNewRating, setNewComment, handleAddComment }) => {

    return (
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
    )
}

export default NewCommentCard