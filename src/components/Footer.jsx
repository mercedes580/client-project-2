const Footer = () => {

    return (
        <footer className="mt-45">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="position-footer-left">
                                <div>
                                    <h2 className="toggled">contact</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="site">
                                                <div className="contact_title"><i
                                                        className="fa-solid fa-location-dot"></i></div>
                                                <div
                                                    className="contact_site">National
                                                    park,d1 588436,United
                                                    States</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="phone">
                                                <div className="contact_title"><i
                                                        className="fa fa-phone"></i></div>
                                                <div className="contact_site">+91
                                                    123 456 789</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="fax">
                                                <div className="contact_title"><i
                                                        className="fa fa-fax"></i></div>
                                                <div
                                                    className="contact_site">0123-456-789</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="email">
                                                <div className="contact_title"><i
                                                        className="fa fa-envelope"></i></div>
                                                <div className="contact_site"><a
                                                        href="mailto:info@Yourstore.com">demo@Yourstore.com</a></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2 className="toggled">Information</h2>
                            <ul className="list-unstyled">
                                <li><a href="terms-conditions.html">Terms &amp;
                                        Conditions</a></li>
                                <li><a href="delivery-information.html">Delivery
                                        Information</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="privacy-policy.html">Privacy
                                        Policy</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 d-none">
                            <h2 className="toggled">Customer Service</h2>
                            <ul className="list-unstyled"></ul>
                        </div>
                        <div className="col-lg-3">
                            <h2 className="toggled">Extras</h2>
                            <ul className="list-unstyled">
                                <li><a href="brand.html">Brands</a></li>
                                <li><a href="gift-certificate.html">Gift
                                        Certificates</a></li>
                                <li><a href="login.html">Affiliate</a></li>
                                <li><a href="category.html">Specials</a></li>
                                <li><a href="site-map.html">Site Map</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2 className="toggled">My Account</h2>
                            <ul className="list-unstyled">
                                <li><a href="login.html">My Account</a></li>
                                <li><a href="login.html">Order History</a></li>
                                <li><a href="#">Wish List</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a
                                        href="product-returns.html">Returns</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 find_us_on">
                            <div className="position-footer-right">
                                <div>
                                    <h2 className="toggled">find us on</h2>
                                    <div className="follow-link">
                                        <div className="social-media">
                                            <a href="#"><i
                                                    className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i
                                                    className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i
                                                    className="fa-brands fa-whatsapp"></i></a>
                                            <a href="#"><i
                                                    className="fa-brands fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-footer-right">
                                <div>
                                    <h2 className="toggled">payment</h2>
                                    <div className="payment-link">
                                        <div className="payment-method">
                                            <a href="#"><i
                                                    className="fa-brands fa-cc-visa"></i></a>
                                            <a href="#"><i
                                                    className="fa-brands fa-cc-mastercard"></i></a>
                                            <a href="#"><i
                                                    className="fa-brands fa-cc-paypal"></i></a>
                                            <a href="#"><i
                                                    className="fa-brands fa-cc-discover"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">© 2024 Bakery Delight - All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer