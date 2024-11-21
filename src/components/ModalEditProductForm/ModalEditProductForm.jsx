import { Modal } from "react-bootstrap"
import EditProductForm from "../EditProductForm/EditProductForm"

const ModalEditProductForm = ({ showModal, handleClose, fetchBakery, notify }) => {

    return (
        <Modal
            show={showModal}
            onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>
                    Editar productos
                </Modal.Title>
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