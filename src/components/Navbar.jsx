const Navbar = () => {

    return (
        <nav id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 top-left">
                        <div className="contact-info">
                            <a href="tel:+1238425733">
                                <i className="fa fa-phone"></i>
                                <span class>+1 (123) 8425733</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 top-right">
                        <div className="pull-left">
                        </div>
                        <div className="pull-left">
                            <form method="post" enctype="multipart/form-data"
                                id="form-currency">
                                <div className="dropdown btn-group">
                                    <a href="#" data-bs-toggle="dropdown"
                                        className="dropdown-toggle btn-link">
                                        <span className="drop-text">Currency</span>
                                        <span className="symbol">US Dollar</span>
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul
                                        className="dropdown-menu currency-dropdown dropdown-menu-right">
                                        <li><a href="#" className="dropdown-item">€
                                                Euro</a></li>
                                        <li><a href="#" className="dropdown-item">£
                                                Pound Sterling</a></li>
                                        <li><a href="#" className="dropdown-item">$
                                                US Dollar</a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar