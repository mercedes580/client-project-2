import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import './DiscountForm.css';

const DiscountForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);


        setName('');
        setEmail('');
        setReason('');
    };

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div>
            <form onSubmit={handleSubmit} className="discount-form">
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="reason">Razón para solicitar el descuento:</label>
                    <textarea
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Solicitar Descuento</button>
            </form>

            <Toast show={showToast} onClose={toggleToast} className="custom toast">
                <Toast.Header>
                    <strong className="me-auto">Solicitud de Descuento</strong>
                    <small>Ahora</small>
                </Toast.Header>
                <Toast.Body>
                    Solicitud de descuento enviada por {name} ({email}) con el motivo: {reason}
                </Toast.Body>
            </Toast>
        </div>
    );
};

export default DiscountForm;