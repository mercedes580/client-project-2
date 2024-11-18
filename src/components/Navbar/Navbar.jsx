import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button, CloseButton } from 'react-bootstrap';
import ProductsGlobalFilter from './../ProductsGlobalFilter/ProductsGlobalFilter';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header>
            <div className="container">
                <div className="header-inner">
                    <div id="logo">
                        <Link to={"/"}><img src="../assets/images/logosmooth-grey.png" alt="Logo" /></Link>
                    </div>

                    <div className="header-right">
                        <ProductsGlobalFilter />

                        <div className="cart-content">
                            <button type="cartButton">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>3</span>
                            </button>
                        </div>

                        <nav>
                            <Button
                                className="menu-button"
                                onClick={() => setShowMenu(true)}>
                                MENÚ
                            </Button>
                        </nav>
                    </div>
                </div>
            </div>

            <div className={`menu-container ${showMenu ? 'active' : ''}`} >

                <div className="menu-links">
                    <Link to={"/productos"} onClick={() => setShowMenu(false)}><li>PRODUCTOS</li></Link>
                    <Link to={"/sobre-nosotros"} onClick={() => setShowMenu(false)}><li>SOBRE NOSOTROS</li></Link>
                    <Link to={"/contacto"} onClick={() => setShowMenu(false)}><li>CONTACTO</li></Link>
                </div>

                <div className="close-button-container" onClick={() => setShowMenu(false)}>
                    <button className="close-button">CERRAR</button>
                </div>

                <div className="logo-menu">
                    <img src="./../../assets/images/logo-white.png" alt="logo" />
                </div>
            </div>
        </header>
    );
};

export default Navbar
