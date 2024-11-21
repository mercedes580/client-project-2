import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../../components/Contexts/Auth.Context'
import axios from 'axios'
import ProductsGlobalFilter from './../ProductsGlobalFilter/ProductsGlobalFilter'
import * as IMAGE_PATHS from "../../consts/image-paths"
import './Navbar.css'
import MenuNavbar from '../MenuNavbar/MenuNavbar'

const Navbar = () => {

    const API_URL = "http://localhost:5005"

    const [cartDetails, setCartDetails] = useState([])

    const [productId, setProductId] = useState([])

    const [showMenu, setShowMenu] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const { loggedUser, logout } = useContext(AuthContext)

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
