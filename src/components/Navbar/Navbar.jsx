import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ProductsGlobalFilter from './../ProductsGlobalFilter/ProductsGlobalFilter'
import axios from 'axios'
import * as IMAGE_PATHS from "../../consts/image-paths"
import './Navbar.css'

const Navbar = () => {

    const API_URL = "http://localhost:5005"

    const [cartDetails, setCartDetails] = useState([])

    const [productId, setProductId] = useState([])

    const [showMenu, setShowMenu] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const fetchCartDetails = () => {

        setIsLoading(true)

        axios
            .get(`${API_URL}/shop?status=0`)

            .then(response => {

                const data = response.data

                if (Array.isArray(data) && data.length > 0) {
                    setCartDetails(data[0].details)
                    setProductId(data[0].id)
                } else {
                    setCartDetails([])
                    setProductId([])
                }

                setIsLoading(false)

            })

            .catch(err => {

                console.log(err)

            })

    }

    useEffect(() => {
        fetchCartDetails()
    }, [])

    return (

        <header>

            <div className="container">

                <div className="header-inner">

                    <div id="logo">
                        <Link to={"/"}>
                            <img src={IMAGE_PATHS.LOGO_IMAGE} alt="Logo" />
                        </Link>
                    </div>

                    <div className="header-right">

                        <ProductsGlobalFilter />

                        <div className="cart-content">
                            {isLoading ? (
                                <button type="cartButton">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span>Cargando...</span>
                                </button>
                            ) : (
                                <Link to={`/shop/${productId}`}>
                                    <button type="cartButton">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <span>{cartDetails.length}</span>
                                    </button>
                                </Link>
                            )}
                        </div>

                        <div className="wishlist-content">
                            <Link to={"/wishlist"}>
                                <button type='wishlistButton'>
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </Link>
                        </div>

                        <div className="user-content">
                            <Link to={"/login"}>
                                <button type="userButton">
                                    <i className="fa-solid fa-user-alt"></i>
                                </button>
                            </Link>
                        </div>

                        <nav>
                            <Button
                                className="menu-button"
                                onClick={() => setShowMenu(true)}>
                                MENÚ
                            </Button>
                        </nav>

                        <nav>
                            <Button
                                className="mobile-menu-button"
                                style={{
                                    background: "none",
                                    border: "none"
                                }}
                                onClick={() => setShowMenu(true)}>
                                <i className="fa-solid fa-bars"></i>
                            </Button>
                        </nav>

                    </div>

                </div>

            </div>

            <div className={`menu-container ${showMenu ? 'active' : ''}`} >

                <div className="menu-links">
                    <Link
                        to={"/productos"}
                        onClick={() => setShowMenu(false)}>
                        <li>PRODUCTOS</li>
                    </Link>

                    <Link
                        to={"/sobre-nosotros"}
                        onClick={() => setShowMenu(false)}>
                        <li>SOBRE NOSOTROS</li>
                    </Link>

                    <Link
                        to={"/contacto"}
                        onClick={() => setShowMenu(false)}>
                        <li>CONTACTO</li>
                    </Link>
                </div>

                <div className="close-button-container"
                    onClick={() => setShowMenu(false)}>
                    <button className="close-button">CERRAR</button>
                </div>

                <div className="mobile-close-button-container">
                    <Button
                        className="mobile-close-button"
                        style={{
                            background: "none",
                            border: "none",
                        }}
                        onClick={() => setShowMenu(false)}>
                        <i className='fa-solid fa-xmark'></i>
                    </Button>
                </div>

                <div className="logo-menu">
                    <Link
                        to={"/"}
                        onClick={() => setShowMenu(false)}>
                        <img src={IMAGE_PATHS.LOGO_WHITE} alt="logo" />
                    </Link>
                </div>

                <div className="menu-footer">

                    <div>
                        <p>© 2024 3SOME BAKERY</p>
                    </div>

                    <div className="footer-section social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>

                </div>

            </div>

        </header>

    )

}

export default Navbar