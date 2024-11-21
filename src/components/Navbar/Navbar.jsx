import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../../contexts/Auth.Context'
import { CartContext } from '../../contexts/Cart.Context'
import ProductsGlobalFilter from './../ProductsGlobalFilter/ProductsGlobalFilter'
import * as IMAGE_PATHS from "../../consts/image-paths"
import './Navbar.css'
import MenuNavbar from '../MenuNavbar/MenuNavbar'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const { loggedUser, logout } = useContext(AuthContext)

    const { cartDetails, productId, isLoading } = useContext(CartContext);

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
                                <Link to={productId ? `/shop/${productId}` : "/productos"}>
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

                            <Link to={loggedUser ? "/" : "/login"}>
                                <button loggedUsertype="userButton" onClick={loggedUser ? logout : null}>
                                    <i className={`fa-solid ${loggedUser ? 'fa-user-alt-slash' : 'fa-user-alt'}`}></i>
                                </button>
                            </Link>
                        </div>

                        <nav>
                            <Button
                                className="menu-button"
                                onClick={() => setShowMenu(true)}>
                                MENU
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

            <MenuNavbar showMenu={showMenu} setShowMenu={setShowMenu} />

        </header>

    )

}

export default Navbar
