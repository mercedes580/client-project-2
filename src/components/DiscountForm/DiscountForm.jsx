import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import './DiscountForm.css';

const DiscountForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [reason, setReason] = useState('')
    const [showToast, setShowToast] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowToast(true)


        setName('')
        setEmail('')
        setReason('')
    }

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div className='discount-form-container'>

            <Toast show={showToast} onClose={toggleToast} className="custom-toast">
                <Toast.Header>
                    <strong className="me-auto">Discount application</strong>
                </Toast.Header>
                <Toast.Body>
                    Discount application sent by {name} ({email}) with reason: {reason}
                </Toast.Body>
            </Toast>


            <form onSubmit={handleSubmit} className="discount-form">
                <h2 className='apply-text'>Apply for a discount</h2>
                <div>
                    <input
                        placeholder='Name'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='Email'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder='Reason for the discount'
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Apply discount</button>
            </form>
        </div>
    );
};

export default DiscountForm