import { Link } from 'react-router-dom';
import * as IMAGE_PATHS from "../../consts/image-paths";
import { Button } from 'react-bootstrap';
import './MenuNavbar.css'

const MenuNavbar = ({ showMenu, setShowMenu }) => {

    return (
        <div className={`menu-container ${showMenu ? 'active' : ''}`} >

            <div className="menu-links">
                <Link
                    to={"/"}
                    onClick={() => setShowMenu(false)}>
                    <li>HOME</li>
                </Link>

                <Link
                    to={"/productos"}
                    onClick={() => setShowMenu(false)}>
                    <li>PRODUCTS</li>
                </Link>

                <Link
                    to={"/sobre-nosotros"}
                    onClick={() => setShowMenu(false)}>
                    <li>ABOUT US</li>
                </Link>

                <Link
                    to={"/contacto"}
                    onClick={() => setShowMenu(false)}>
                    <li>CONTACT</li>
                </Link>
            </div>

            <div className="close-button-container"
                onClick={() => setShowMenu(false)}>
                <button className="close-button">CLOSE</button>
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
    )
}

export default MenuNavbar