import './ContactPage.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import DiscountForm from './DiscountForm';
import Loader from '../../components/Loader/Loader';

const ContactPage = () => {
    const handleButtonClick = () => {
        alert("¡Qué haces pulsando, curiosito!");
    };

    return (
        <div className="contact-container">
            <Loader />
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Información de contacto</h2>
                    <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País</p>
                    <p><strong>Teléfono:</strong> +34 123 456 789</p>
                    <p><strong>Email:</strong> contacto@empresa.com</p>
                    <p><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 18:00</p>
                </div>
                <div className="contact-form">
                    <h2>Envíanos un mensaje</h2>
                    <ContactForm />
                    <button onClick={handleButtonClick} className="small-button">
                        Enviar Mensaje
                    </button>
                </div>
                <div className="discount-form-section">
                    <h2>Solicita un Descuento</h2>
                    <DiscountForm />
                </div>
            </div>
            <div className="contact-map">
                <h2>Visítanos</h2>
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