

import axios from "axios";
import { useState } from "react";
import "./AddProductPage.css";
import { Navigate } from "react-router-dom";

const AddProductPage = () => {

    const API_URL = "http://localhost:5005";
    const [productData, setProductData] = useState({
        title: "",
        description: "",
        price: 0,
        ingredients: [""],
        allergens: [""],
        gallery: [""],
        stock: 0,
        gluten: false
    })

    const handleProductChange = (e) => {
        const { name, value, checked, type } = e.target
        const result = type === "checkbox" ? checked : value
        setProductData({ ...productData, [name]: result })
    }

    const handleGalleryChange = (e, idx) => {
        const { value } = e.target
        const galleryCopy = [...productData.gallery]
        galleryCopy[idx] = value;
        setProductData({ ...productData, gallery: galleryCopy })
    }

    const addNewImage = () => {
        const galleryCopy = [...productData.gallery]
        galleryCopy.push("")
        setProductData({ ...productData, gallery: galleryCopy })
    }

    const handleAllergensChange = (e, idx) => {
        const { value } = e.target;
        const allergensCopy = [...productData.allergens]
        allergensCopy[idx] = value
        setProductData({ ...productData, allergens: allergensCopy })
    }

    const addNewAllergen = () => {
        const allergensCopy = [...productData.allergens]
        allergensCopy.push("")
        setProductData({ ...productData, allergens: allergensCopy })
    }

    const handleIngredentChange = (e, idx) => {
        const { value } = e.target;
        const ingredientCopy = [...productData.ingredients]
        ingredientCopy[idx] = value
        setProductData({ ...productData, ingredients: ingredientCopy })
    }
    const addNewIngredient = () => {
        const ingredientCopy = [...productData.ingredients]
        ingredientCopy.push("")
        setProductData({ ...productData, ingredients: ingredientCopy })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        fetchProducts()
    }
    const fetchProducts = () => {
        axios
            .post(`${API_URL}/products`, productData)
            .then(() => {
                alert("Producto creado")

                setProductData({
                    title: "",
                    description: "",
                    price: 0,
                    ingredients: [""],
                    allergens: [""],
                    gallery: [""],
                    stock: 0,
                    gluten: false
                })
            })
    }
    return (
        <div className="AddProductPage">

            <h2>Crea un nuevo producto</h2>

            <form onSubmit={handleFormSubmit} className="form-content">

                <div className="Product">
                    <label>Producto</label>
                    <br />
                    <input type="text" value={productData.title} onChange={handleProductChange} name="title" />
                </div>

                <div className="Images">
                    <label>Imagen/es</label>
                    <br />
                    {
                        productData.gallery.map((eachGallery, idx) => {

                            return (
                                <input
                                    type="text"
                                    value={productData.gallery[idx]}
                                    onChange={(event) => handleGalleryChange(event, idx)}
                                    key={idx}
                                />
                            )
                        })
                    }

                    <br />
                    <button type="button" onClick={addNewImage} className="add-btn">Añadir otra imagen</button>
                </div>

                <div className="Description">
                    <label>Descripción</label>
                    <br />
                    <input type="text" value={productData.description} onChange={handleProductChange} name="description" />

                </div>

                <div className="Ingredients">
                    <label>Ingredientes</label>
                    <br />
                    {
                        productData.ingredients.map((eachIngredient, idx) => {

                            return (
                                <input
                                    type="text"
                                    value={productData.ingredients[idx]}
                                    onChange={(event) => handleIngredentChange(event, idx)}
                                    key={idx}
                                />
                            )
                        })
                    }
                    < br />
                    <button type="button" onClick={addNewIngredient} className="add-btn">Añadir otro ingrediente</button>

                </div>

                <div className="Price">
                    <label>Precio</label>
                    <br />
                    <input type="number" value={productData.price} onChange={handleProductChange} name="price" />
                </div>

                <div className="Allergens">
                    <label>Alérgenos</label>
                    <br />
                    {
                        productData.allergens.map((eachAllergen, idx) => {

                            return (
                                <input
                                    type="text"
                                    value={productData.allergens[idx]}
                                    onChange={(event) => handleAllergensChange(event, idx)}
                                    key={idx}
                                />
                            )
                        })
                    }


                    <br />
                    <button type="button" onClick={addNewAllergen} className="add-btn">Añadir otro alérgeno</button>
                </div>

                <div className="Stock">
                    <label>Stock</label>
                    <br />
                    <input type="number" value={productData.stock} onChange={handleProductChange} name="stock" />
                </div>

                <div className="Gluten">
                    <label>Gluten</label>
                    <br />
                    <input type="checkbox" checked={productData.gluten} onChange={handleProductChange} name="gluten" />
                </div>

                <div className="CreateFormButton">
                    <input type="submit" value="Crear nuevo producto" className="submit-btn" />
                </div>

            </form>
        </div>
    );
};
export default AddProductPage