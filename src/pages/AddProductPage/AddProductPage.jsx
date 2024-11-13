import axios from "axios"
import { useEffect, useState } from "react"

const AddNewProductPage = () => {


    const API_URL = "http://localhost:5005"



    const fetchProducts = () => {
        axios
            .post(`${API_URL}/products`, productData)
        alert("Creado")

    }

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

    const handleProductChange = e => {
        const { name, value, checked, type } = e.target
        const result = type === "checkbox" ? checked : value
        setProductData({ ...productData, [name]: result })

    }

    const handleGalleryChange = (e, idx) => {
        const { value } = e.target
        const galleryCopy = [...productData.gallery]
        galleryCopy[idx] = value
        setProductData({ ...productData, gallery: galleryCopy })
    }

    const addNewImage = () => {
        const galleryCopy = [...productData.gallery]
        galleryCopy.push("")
        setProductData({ ...productData, gallery: galleryCopy })
    }

    const handleAllergensChange = (e, idx) => {
        const { value } = e.target
        const allergensCopy = [...productData.allergens]
        allergensCopy[idx] = value
        setProductData({ ...productData, allergens: allergensCopy })
    }

    const addNewAllergen = () => {
        const allergensCopy = [...productData.allergens]
        allergensCopy.push("")
        setProductData({ ...productData, allergens: allergensCopy })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        fetchProducts()

    }

    return (
        <div className="NewProductForm">

            <form onSubmit={handleFormSubmit}>

                Producto
                <input type="text" value={productData.title} onChange={handleProductChange}
                    name={"title"} controlId="titleField" />
                <br />

                Imagen/es
                {
                    productData.gallery.map((eachGallery, idx) => {
                        return (
                            <input
                                type="text"
                                value={productData.gallery[idx]}
                                onChange={event => handleGalleryChange(event, idx)}
                                key={idx} />
                        )
                    })

                }

                <button onClick={addNewImage}>Añadir otra imagen</button>

                <br />

                Descripción
                <input type="text" value={productData.description} onChange={handleProductChange}
                    name={"description"} controlId="descriptionField" />
                <br />

                Ingredientes
                <input type="text" value={productData.ingredients} onChange={handleProductChange}
                    name={"ingredients"} controlId="ingredientsField" />
                <br />

                Precio
                <input type="number" value={productData.price} onChange={handleProductChange}
                    name={"price"} controlId="priceField" />
                <br />

                Alérgenos
                {
                    productData.allergens.map((eachAllergen, idx) => {
                        return (
                            <input type="text"
                                value={productData.allergens[idx]}
                                onChange={event => handleAllergensChange(event, idx)}
                                key={idx} />
                        )
                    })

                }

                <button onClick={addNewAllergen}>Añadir otro alérgeno</button>

                <br />

                Stock
                <input type="number" value={productData.stock} onChange={handleProductChange}
                    name={"stock"} controlId="stockField" />
                <br />

                Gluten
                <input type="checkbox" checked={productData.gluten} onChange={handleProductChange}
                    name={"gluten"} controlId="glutenField" />
                <br />

                <input type="submit" value={"Crear nuevo producto"} />
            </form>
        </div>


    )
}

export default AddNewProductPage