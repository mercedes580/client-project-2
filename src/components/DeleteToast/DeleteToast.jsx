import { Card, Button, Form, Row, Col, Modal, Toast } from 'react-bootstrap';

const DeleteToast = ({ showToast, handleCloseToast, handleDelete }) => {

    return (
        <div className="toast-top-center">
            <Toast
                show={showToast}
                onClose={handleCloseToast}
                className="bg-dark text-white">

                <Toast.Header
                    closeButton className="bg-dark text-white"
                    closeVariant="white">
                    <strong
                        className="me-auto">
                        Eliminar producto
                    </strong>
                </Toast.Header>

                <Toast.Body>
                    ¿Estás seguro que quieres borrar el producto?

                    <div className="toast-buttons">
                        <div className="mt-3 text-center">
                            <Button
                                variant="secondary"
                                onClick={handleDelete}>
                                Aceptar
                            </Button>
                        </div>

                        <div className="mt-3 text-center">
                            <Button
                                variant="light"
                                onClick={handleCloseToast}>
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </Toast.Body>
            </Toast>
        </div>
    )

}
export default DeleteToast