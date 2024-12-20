import './Footer.css'

const Footer = () => {

    return (
        <footer>
            <div className="FooterContainer">
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

        </footer>
    )
}

export default Footer