import './ContactPage.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import DiscountForm from '../../components/DiscountForm/DiscountForm';


const ContactPage = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact information</h2>
                    <p><strong>Address:</strong> Calle Ficticia 123, Ciudad, País</p>
                    <p><strong>Phone:</strong> +34 123 456 789</p>
                    <p><strong>Email:</strong> contacto@empresa.com</p>
                    <p><strong>Client service:</strong> Monday to Friday from 9:00 to 18:00</p>
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>

                <DiscountForm />

            </div>
            <div className="contact-map">
                <h2>Visit us</h2>
                <div className="map-container">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.133423929461!2d-73.98513048459045!3d40.75874497932651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25852ad99b81d%3A0x7e6b0246f8f9ad3d!2sTimes%20Square%2C%20New%20York%2C%20NY%2010019%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1637346714162!5m2!1ses!2ses"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;