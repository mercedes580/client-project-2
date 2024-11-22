import { Button, Toast } from 'react-bootstrap';
import './DeleteToast.css'

const DeleteToast = ({ showToast, handleCloseToast, handleDelete }) => {

    return (
        <div className="toast-top-center">
            <Toast
                show={showToast}
                onClose={handleCloseToast}
                className="bg-dark text-white">

                <Toast.Header
                    closeButton
                    className="bg-dark text-white"
                    closeVariant="white">
                    <strong
                        className="me-auto">
                        Delete product
                    </strong>
                </Toast.Header>

                <Toast.Body>
                    Are you sure you want to delete?

                    <div className="toast-buttons">
                        <div className="mt-3 text-center">
                            <Button
                                variant="secondary"
                                onClick={handleDelete}>
                                Accept
                            </Button>
                        </div>

                        <div className="mt-3 text-center">
                            <Button
                                variant="light"
                                onClick={handleCloseToast}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Toast.Body>
            </Toast>
        </div>
    )

}
export default DeleteToast