import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowLoader(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!showLoader) {
        return null;
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100 bg-dark"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1050 }}
        >
            <img
                src="https://res.cloudinary.com/dbq56vg5g/image/upload/v1732008659/assets/images/wnh3xpyyiaeqvkzeueln.png"
                alt="Logo"
                style={{
                    width: '100px',
                    animation: 'pulse 1.5s infinite',
                }}
            />
        </div>
    );
};

export default Loader;