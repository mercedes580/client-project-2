import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditCommentProduct = () => {

    const API_URL = import.meta.env.VITE_APP_API_URL

    const { id } = useParams()
    const [bakery, setBakery] = useState([])
    const [isLoading, setLoading] = useState([true])
    const Navigate = useNavigate()


    useEffect(() => {
        axios.get(`${API_URL}/products/${id}`)
            .then(response => {
                setLoading(false)
                setBakery(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const fetchProducts = () => {
        axios
            .put(`${API_URL}/products/${id}`, bakery)
            .then(() => {
                Navigate(`/productos/${id}`)
            })
            .catch(err => console.log(err))
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
        <div className="EditProductForm ">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="titleField">Producto</Form.Label>
                    <Form.Control
                        type="text"
                        value={bakery.title}
                        onChange={handleProductChange}
                        name="title"
                        id="titleField"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen/es</Form.Label>
                    {isLoading ? (
                        <h1>Cargando....</h1>
                    ) : (
                        bakery.gallery.map((eachGallery, idx) => (
                            <Form.Control
                                key={idx}
                                type="text"
                                value={bakery.gallery[idx]}
                                onChange={(event) => handleGalleryChange(event, idx)}
                            />
                        ))
                    )}
                    <Button variant="secondary" onClick={addNewImage}>Añadir otra imagen</Button>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="descriptionField">Descripción</Form.Label>
                    <Form.Control
                        type="text"
                        value={bakery.description}
                        onChange={handleProductChange}
                        name="description"
                        id="description.field"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="ingredientsField">Ingredientes</Form.Label>
                    <Form.Control
                        type="text"
                        value={bakery.ingredients}
                        onChange={handleProductChange}
                        name="ingredients"
                        id="ingredientsField"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="priceField">Precio</Form.Label>
                    <Form.Control
                        type="number"
                        value={bakery.price}
                        onChange={handleProductChange}
                        name="price"
                        id="priceField"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>alergenos</Form.Label>
                    {isLoading ? (
                        <h1>Cargando....</h1>
                    ) : (
                        bakery.allergens.map((eachAllergen, idx) => (
                            <Form.Control
                                key={idx}
                                type="text"
                                value={bakery.allergens[idx]}
                                onChange={(event) => handleAllergensChange(event, idx)}
                            />
                        ))
                    )}
                    <Button variant="secondary" onClick={addNewAllergen}>Añadir otro alérgeno</Button>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="stockField">Stock</Form.Label>
                    <Form.Control
                        type="number"
                        value={bakery.stock}
                        onChange={handleProductChange}
                        name="stock"
                        id="stockField"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        checked={bakery.gluten}
                        onChange={handleProductChange}
                        name="gluten"
                        id="glutenField"
                        label="tiene  gluten"
                    />
                </Form.Group>

                <Button type="submit">Editar producto</Button>
            </Form>
        </div>
    );
}

export default EditCommentProduct;