import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BakeryDetailsPage() {
    const { id } = useParams();
    const [bakery, setBakery] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5005/products/${id}`)
            .then(response => setBakery(response.data))
            .catch(error => console.error("Error 404 pastelitos not done yet :", error));
    }, [id])

    const handleDelete = () => {

        axios.delete(`http://localhost:5005/products/${id}`)
            .then(() => {
                alert("nadie quiere esta pasteleria!!!!");
            })
    }

    if (bakery === null) {
        return <div>Padre Arrays cargando......pasteleria siendo bendecida.... .</div>;
    }

    return (
        <div>
            <h2> 3some {bakery.name}</h2>
            <hr />
            <p>Descripción: {bakery.description}</p>
            <p>Especialidades: {bakery.specialty}</p>
            <p>Precio: {bakery.precio}</p>
            <p>allergen: {bakery.allergens}</p>
            <hr />
            <h3>productos de la semana : (featuring german)</h3>
            <ul></ul>

            <button onClick={handleDelete}>Eliminar</button>

            <Link to={`/Bakery`}></Link>






        </div>
    );
}

export default BakeryDetailsPage