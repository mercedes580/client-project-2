import { Button, Modal } from "react-bootstrap"
import EditProductForm from "../EditProductForm/EditProductForm"

const ModalEditProductForm = ({ showModal, handleClose, fetchBakery, notify }) => {

    return (
        <Modal
            className="create-modal dark-modal"
            show={showModal}
            onHide={handleClose}>

            <Modal.Header>
                <Button
                    className="custom-button"
                    onClick={handleClose}
                >
                    <i className='fa-solid fa-xmark'></i>
                </Button>
            </Modal.Header>

            <Modal.Body>
                <EditProductForm
                    fetchBakery={fetchBakery}
                    handleClose={handleClose}
                    notify={notify} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalEditProductForm