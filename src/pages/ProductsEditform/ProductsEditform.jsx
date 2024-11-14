import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ProductsEditform = () => {

    const API_URL = "http://localhost:5005"

    const { id } = useParams();
    const [bakery, setBakery] = useState([]);
    const [isLoading, setLoading] = useState([true])

    useEffect(() => {
        axios.get(`http://localhost:5005/products/${id}`)
            .then(response => {
                setLoading(false),
                    setBakery(response.data)
            })
            .catch(error => console.error("Error 404 pastelitos not done yet :", error));
    }, [id])

    const fetchProducts = () => {
        axios
            .put(`${API_URL}/products/${id}`, bakery)
        alert("Actualizado :3")

    }


    const handleProductChange = e => {
        const { name, value, checked, type } = e.target
        const result = type === "checkbox" ? checked : value
        setBakery({ ...bakery, [name]: result })

    }

    const handleGalleryChange = (e, idx) => {
        const { value } = e.target
        const galleryCopy = [...bakery.gallery]
        galleryCopy[idx] = value
        setBakery({ ...bakery, gallery: galleryCopy })
    }

    const addNewImage = () => {
        const galleryCopy = [...bakery.gallery]
        galleryCopy.push("")
        setBakery({ ...bakery, gallery: galleryCopy })
    }

    const handleAllergensChange = (e, idx) => {
        const { value } = e.target
        const allergensCopy = [...bakery.allergens]
        allergensCopy[idx] = value
        setBakery({ ...bakery, allergens: allergensCopy })
    }

    const addNewAllergen = () => {
        const allergensCopy = [...bakery.allergens]
        allergensCopy.push("")
        setBakery({ ...bakery, allergens: allergensCopy })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        fetchProducts()

    }

    return (
        <div className="ProductsEditform">

            <form onSubmit={handleFormSubmit}>

                Producto
                <input type="text" value={bakery.title} onChange={handleProductChange}
                    name={"title"} controlId="titleField" />
                <br />

                Imagen/es
                {
                    isLoading ? <h1>CArgando....</h1> :
                        bakery.gallery.map((eachGallery, idx) => {
                            return (
                                <input
                                    type="text"
                                    value={bakery.gallery[idx]}
                                    onChange={event => handleGalleryChange(event, idx)}
                                    key={idx} />
                            )
                        })

                }


                <button onClick={addNewImage}>Añadir otra imagen</button>

                <br />

                Descripción
                <input type="text" value={bakery.description} onChange={handleProductChange}
                    name={"description"} controlId="descriptionField" />
                <br />

                Ingredientes
                <input type="text" value={bakery.ingredients} onChange={handleProductChange}
                    name={"ingredients"} controlId="ingredientsField" />
                <br />

                Precio
                <input type="number" value={bakery.price} onChange={handleProductChange}
                    name={"price"} controlId="priceField" />
                <br />

                Alérgenos
                {
                    isLoading ? <h1>CArgando....</h1> :
                        bakery.allergens.map((eachAllergen, idx) => {
                            return (
                                <input type="text"
                                    value={bakery.allergens[idx]}
                                    onChange={event => handleAllergensChange(event, idx)}
                                    key={idx} />
                            )
                        })

                }

                <button onClick={addNewAllergen}>Añadir otro alérgeno</button>

                <br />

                Stock
                <input type="number" value={bakery.stock} onChange={handleProductChange}
                    name={"stock"} controlId="stockField" />
                <br />

                Gluten
                <input type="checkbox" checked={bakery.gluten} onChange={handleProductChange}
                    name={"gluten"} controlId="glutenField" />
                <br />

                <input type="submit" value={"Editar producto"} />
            </form>
        </div>


    )
}

export default ProductsEditform