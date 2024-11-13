import axios from 'axios';
import './BakeryDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5005/';

const BakeryDetails = () => {
    const { id } = useParams();
    const [bakery, setBakery] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBakery();
    }, []);

    const fetchBakery = () => {
        axios
            .get(`${API_URL}products/${id}`)
            .then(response => {
                setBakery(response.data);
            });
    };

    const handleEdit = () => {
        navigate(`/productos/editar/${id}`);
    };

    const handleDelete = () => {
        axios
            .delete(`${API_URL}products/${id}`)
            .then(() => {
                alert("Producto eliminado con éxito");
                navigate('/productos');
            })
            .catch(error => {
                console.error("Error al eliminar el producto:", error);
            });
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (!bakery) {
        return <p>Cargando detalles...</p>;
    }

    return (
        <div className="BakeryDetails">
            <div className="bakery-image">
                <img src={bakery.gallery[0]} alt={bakery.title} />
            </div>
            <div className="bakery-info">
                <h2 className="bakery-title">{bakery.title}</h2>
                <p className="bakery-description">{bakery.description}</p>
                <p className="bakery-price">Precio: ${bakery.price}</p>
                <p className="bakery-stock">Disponibilidad: {bakery.stock} unidades</p>
                <p className="bakery-ingredients">Ingredientes: {bakery.ingredients.join(', ')}</p>
                <p className="bakery-allergens">Alérgenos: {bakery.allergens.join(', ')}</p>
                <p className="bakery-gluten">{bakery.gluten ? "Contiene gluten" : "Sin gluten"}</p>

                <div className="bakery-buttons">
                    <button onClick={handleBack} className="btn-back"><i className='fas fa-undo'></i>&nbsp;Regresar</button>
                    <button onClick={handleEdit} className="btn-edit"><i className='fas fa-pencil'></i>&nbsp;Editar</button>
                    <button onClick={handleDelete} className="btn-delete"><i className='fa fa-trash'></i>&nbsp;Eliminar</button>
                </div>
            </div>
        </div>
    );
};

export default BakeryDetails;