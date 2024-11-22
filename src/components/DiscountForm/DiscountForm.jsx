import React, { useState } from 'react';
import toast from 'react-hot-toast'
import './DiscountForm.css';

const DiscountForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [reason, setReason] = useState('')
    const [showToast, setShowToast] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Application sent")


        setName('')
        setEmail('')
        setReason('')
    }

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div className='discount-form-container'>

            <form onSubmit={handleSubmit} className="discount-form">
                <h2 className='apply-text'>Apply for a discount</h2>
                <div>
                    <input
                        placeholder='Name'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete='off'
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
                        autoComplete='off'
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder='Reason for the discount'
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        autoComplete='off'
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Apply discount</button>
            </form>
        </div>
    );
};

export default DiscountForm