import axios from "axios";
import { useState } from "react";
import "./AddProductForm.css";
import { useNavigate } from "react-router-dom";


const AddProductForm = () => {

    const API_URL = "http://localhost:5005";

    const navigate = useNavigate()

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
            .then(response => {
                navigate(`/productos/${response.data.id}`)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="AddProductForm">

            <form onSubmit={handleFormSubmit} className="form-content row g-3 form-container">
                <div className="col-md-12">
                    <label className="form-label">Producto</label>
                    <input type="text" className="form-control" value={productData.title}
                        onChange={handleProductChange} name="title" />
                </div>

                <div className="col-md-12">
                    <label className="form-label">Imagen/es</label>
                    {
                        productData.gallery.map((eachGallery, idx) => (
                            <input
                                type="text"
                                key={idx}
                                className="form-control"
                                value={productData.gallery[idx]}
                                onChange={(event) => handleGalleryChange(event, idx)}
                            />
                        ))
                    }
                    <button type="button" onClick={addNewImage}
                        className="btn btn-secondary mt-2">Añadir otra imagen</button>
                </div>

                <div className="col-12">
                    <label className="form-label">Descripción</label>
                    <input type="text" className="form-control" value={productData.description}
                        onChange={handleProductChange} name="description" />
                </div>

                <div className="col-12">
                    <label className="form-label">Ingredientes</label>
                    {
                        productData.ingredients.map((eachIngredient, idx) => (
                            <input
                                type="text"
                                key={idx}
                                className="form-control"
                                value={productData.ingredients[idx]}
                                onChange={(event) => handleIngredentChange(event, idx)}
                            />
                        ))
                    }
                    <button type="button" onClick={addNewIngredient}
                        className="btn btn-secondary mt-2">Añadir otro ingrediente</button>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Precio</label>
                    <input type="number" className="form-control" value={productData.price}
                        onChange={handleProductChange} name="price" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Stock</label>
                    <input type="number" className="form-control" value={productData.stock}
                        onChange={handleProductChange} name="stock" />
                </div>

                <div className="col-12">
                    <label className="form-label">Alérgenos</label>
                    {
                        productData.allergens.map((eachAllergen, idx) => (
                            <input
                                type="text"
                                key={idx}
                                className="form-control"
                                value={productData.allergens[idx]}
                                onChange={(event) => handleAllergensChange(event, idx)}
                            />
                        ))
                    }
                    <button type="button" onClick={addNewAllergen}
                        className="btn btn-secondary mt-2">Añadir otro alérgeno</button>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Gluten</label>
                    <input type="checkbox" className="form-check-input" checked={productData.gluten}
                        onChange={handleProductChange} name="gluten" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-success rotate-container">
                        <i className="fas fa-plus rotate-on-hover"></i>&nbsp;Crear nuevo producto</button>
                </div>

            </form>
        </div>


    )
}
export default AddProductForm