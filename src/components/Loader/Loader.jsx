import React, { useState, useEffect } from 'react'
import * as IMAGE_PATHS from "../../consts/image-paths"

const Loader = () => {

    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setShowLoader(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    if (!showLoader) {
        return null
    }

    return (

        <div
            className="d-flex justify-content-center align-items-center vh-100 bg-black"
            style={
                {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1050
                }}
        >
            <img
                src={IMAGE_PATHS.LOGO_WHITE}
                alt="Logo"
                style={{
                    width: '100px',
                    animation: 'pulse 1.5s infinite'
                }}
            />
        </div>

    )

}

export default Loader