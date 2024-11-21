import { Button, Modal } from "react-bootstrap"
import AddProductForm from "../AddProductForm/AddProductForm"

const ModalAddProduct = ({ showModal, handleClose }) => {

    return (
        <Modal
            className="create-modal dark-modal"
            show={showModal}
            onHide={handleClose}
        >
            <Modal.Header>
                <Modal.Title>Add new product</Modal.Title>
                <Button
                    className="custom-button"
                >
                    <i className='fa-solid fa-xmark'></i>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <AddProductForm />
            </Modal.Body>
        </Modal>
    )
}

export default ModalAddProduct