import React, { useState } from 'react';
import './DiscountForm.css'

const DiscountForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Solicitud de descuento enviada por ${name} (${email}) con el motivo: ${reason}`);

        setName('');
        setEmail('');
        setReason('');
    };

    return (
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
    );
};

export default DiscountForm;