const Navbar = () => {

    return (
        <nav id="top">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 contact-info">
                        <a href="tel:+1238425733">
                            <i className="fa fa-phone"></i>
                            <span> (+34) 987 89 56 98</span>
                        </a>
                    </div>
                    <div className="col col-lg-4 address-info">
                        <i class="fas fa-location"></i>
                        <span>123 Main Street, City</span>
                    </div>
                    <div className="col col-lg-4 social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar