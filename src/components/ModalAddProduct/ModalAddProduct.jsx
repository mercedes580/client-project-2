import { Button, Modal } from "react-bootstrap"
import AddProductForm from "../AddProductForm/AddProductForm"
import './ModalAddProduct.css'

const ModalAddProduct = ({ showModal, handleClose }) => {

    return (
        <Modal
            className="create-modal dark-modal"
            show={showModal}
            onHide={handleClose}
        >
            <Modal.Header>

                <Button
                    className="custom-button"
                    onClick={handleClose}
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