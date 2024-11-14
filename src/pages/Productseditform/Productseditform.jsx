import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductEditForm = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [inStock, setInStock] = useState(false);

    const API_URL = "http://localhost:5005";

    useEffect(() => {
        axios.get(`${API_URL}/products/${id}`)
            .then(response => {
                const { name, description, price, inStock } = response.data;
                setProduct(response.data);
                setName(name || '');
                setDescription(description || '');
                setPrice(price || 0);
                setInStock(inStock || false);
            })
            .catch(error => console.error("nos da fallitossss:", error));
    }, [id, API_URL]);

    const handleNameChange = e => setName(e.target.value);
    const handleDescriptionChange = e => setDescription(e.target.value);
    const handlePriceChange = e => setPrice(e.target.value);
    const handleStockChange = e => setInStock(e.target.value === 'true');

    const handleFormSubmit = e => {
        e.preventDefault();
        const productData = { name, description, price, inStock };
        axios.put(`${API_URL}/products/${id}`, productData)
            .then(() => {
                alert("ya esta bendecido y cargado");
            })
            .catch(error => {
                console.error("no funsiona sorry so much", error);
                alert("Ocurrió un error al actualizar el producto. sabemos que has pulsado el boton a mas no poder porfavor no vuelva a intentarlo .");
            });
    };

    if (product === null) {
        return <div>el padre de los arrays esta bendiciendo los pastelitos gracias por esperar tan pacientemente</div>;
    }

    return (
        <div className="ProductEditForm">
            <form onSubmit={handleFormSubmit}>
                <label>
                    Nombre del producto
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />

                <label>
                    Descripción
                    <textarea value={description} onChange={handleDescriptionChange} />
                </label>
                <br />

                <label>
                    Precio (€)
                    <input type="number" value={price} onChange={handlePriceChange} />
                </label>
                <br />

                <label>
                    ¿En stock?
                    <select value={inStock} onChange={handleStockChange}>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                    </select>
                </label>
                <br />

                <input type="submit" value="Actualizar Producto" />
                <button type="button" onClick={handleUpdateWithoutChanges}>
                    Actualizar el coton
                </button>
            </form>
        </div>
    );
};

export default ProductEditForm;