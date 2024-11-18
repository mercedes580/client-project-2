import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button, Modal } from 'react-bootstrap'
import ProductsGlobalFilter from './../ProductsGlobalFilter/ProductsGlobalFilter'
import { useState } from 'react'

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <header>
            <div className="container">
                <div className="header-inner">

                    <div id="logo">
                        <Link to={"/"}><img src="../assets/images/logo.png" alt="Logo" /></Link>
                    </div>

                    <div className="header-right">

                        <ProductsGlobalFilter />

                        <div className="cart-content">
                            <button>
                                <i className="fa-solid fa-search"></i>
                            </button>
                        </div>

                        <div className="cart-content">
                            <button type="cartButton">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {/* <span>3</span> */}
                            </button>
                        </div>

                        <nav>

                            <Button
                                className="menu-button"
                                onClick={() => setShowModal(true)}>MENÚ
                            </Button>

                        </nav>

                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                                <li><a href="/productos">PRODUCTOS</a></li>
                                <li><a href="/sobre-nosotros">SOBRE NOSOTROS</a></li>
                                <li><a href="/contacto">CONTACTO</a></li>
                            </Modal.Body>
                        </Modal>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar