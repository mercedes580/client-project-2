import { createContext, useState, useEffect } from "react"
import axios from "axios"

const CartContext = createContext()

function CartProviderWrapper(props) {

    const API_URL = "http://localhost:5005"

    const [cartDetails, setCartDetails] = useState([])

    const [productId, setProductId] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const fetchCartNumber = () => {
        setIsLoading(true)
        axios
            .get(`${API_URL}/shop?status=0`)
            .then((response) => {
                const data = response.data;

                if (Array.isArray(data) && data.length > 0) {
                    setCartDetails(data[0].details);
                    setProductId(data[0].id);
                } else {
                    setCartDetails([]);
                    setProductId(null);
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchCartNumber();
    }, [])

    return (

        <CartContext.Provider value={{ cartDetails, productId, isLoading, fetchCartNumber }}>
            {props.children}
        </CartContext.Provider>
        
    )
}

export { CartContext, CartProviderWrapper }