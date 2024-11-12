import { Link } from "react-router-dom"


const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="row header-inner align-items-center sub_sub_menu">
                    <div className="col-xl-2 col-lg-6 col-sm-6 header-left">
                        <div id="logo">
                            <Link to={'/'}><a>
                                <img src="../assets/images/logo.png" alt="" />
                            </a></Link>
                        </div>
                    </div>
                    <div
                        className="header-center text-lg-center col-xl-8 col-lg-12">
                        <div className="themability_megamenu-style-dev">
                            <div className="responsive themability_default">
                                <nav className="navbar-default">
                                    <div
                                        className=" container-themability_megamenu   horizontal">
                                        <div className="navbar-header">
                                            <button type="button"
                                                id="show-themability_megamenu"
                                                data-toggle="collapse"
                                                className="navbar-toggle">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                        <div
                                            className="themability_megamenu-wrapper megamenu_typeheader">
                                            <span
                                                id="remove-themability_megamenu"
                                                className="fa-solid fa-xmark"></span>
                                            <div
                                                className="themability_megamenu-pattern">
                                                <div className="container">
                                                    <ul
                                                        className="themability_megamenu"
                                                        data-megamenuid="48"
                                                        data-transition="slide"
                                                        data-animationtime="500">
                                                        <li className="home">

                                                            <Link to={'/'}> <span><strong>Home</strong></span></Link>

                                                        </li>
                                                        <li class>

                                                            <Link to={'/productos'}> <span><strong>
                                                                Productos
                                                            </strong></span></Link>

                                                        </li>
                                                        <li class>

                                                            <Link to={'/contacto'}><span><strong>
                                                                Contacto
                                                            </strong></span></Link>

                                                        </li>
                                                        <li class>

                                                            <Link to={'/sobre-nosotros'}> <span><strong>
                                                                Sobre nosotros
                                                            </strong></span></Link>

                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="header-right col-xl-2 col-lg-6 col-sm-6">
                        <div className="search-content">
                            <div className="search-btn-outer">
                                <i className="icon-search"></i>
                            </div>
                            <div className="header-search">
                                <div id="themabilitySearch"
                                    className="input-group themability-search">
                                    <span className="btn-search input-group-btn">
                                        <button type="button"
                                            className="btn btn-default btn-lg"><i
                                                className="icon-search"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="header_ac" className="dropdown">
                            <a href="#" className="dropdown-toggle btn-link"
                                data-bs-toggle="dropdown">
                                <i className="icon-user dropdown-icon"></i>
                                <div className="dropdown-text d-none">
                                    <span class>My Account</span>
                                    <span
                                        className="dropdown-text-inner">Register</span>
                                </div>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-right account-link-toggle">
                                <li><a href="register.html"
                                    className="dropdown-item">Register</a></li>
                                <li><a href="login.html"
                                    className="dropdown-item">Login</a></li>
                            </ul>
                        </div>
                        <div id="header-cart" className="cart-content">
                            <div id="cart"
                                className="dropdown d-grid btn-group btn-block">
                                <button type="button" data-bs-toggle="dropdown"
                                    className="btn btn-inverse btn-block dropdown-toggle"
                                    aria-expanded="true">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span id="cart-total" className="new"><span
                                        className="d-none">My
                                        Cart</span>2</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header