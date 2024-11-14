import './Navbar.css'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <div className="header-inner">
                    {/* Logo Section */}
                    <div id="logo">
                        <a href="/"><img src="../assets/images/logo.png" alt="Logo" /></a>
                    </div>

                    {/* Navigation Center */}
                    <div className="header-center">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/productos">Productos</a></li>
                                <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                                <li><a href="/contacto">Contacto</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Header Right Section */}
                    <div className="header-right">
                        <div className="search-btn-outer">
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="btn-link">
                                <i className="fas fa-user"></i>
                            </a>
                        </div>
                        <div className="cart-content">
                            <button type="button">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>3</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar