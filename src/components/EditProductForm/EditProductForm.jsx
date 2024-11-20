import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const EditProductForm = ({ fetchBakery, handleClose, notify }) => {

    const API_URL = "http://localhost:5005"

    const { id } = useParams()
    const [bakery, setBakery] = useState([])
    const [isLoading, setLoading] = useState([true])


    useEffect(() => {
        axios.get(`${API_URL}/products/${id}`)
            .then(response => {
                setLoading(false)
                setBakery(response.data)
            })
            .catch(error => console.error(error));
    }, [id])

    const fetchProducts = () => {
        axios
            .put(`${API_URL}/products/${id}`, bakery)
            .then(() => {
                fetchBakery()
                handleClose()
                notify()
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

    const handleIngredentChange = (e, idx) => {
        const { value } = e.target;
        const ingredientCopy = [...bakery.ingredients]
        ingredientCopy[idx] = value
        setBakery({ ...bakery, ingredients: ingredientCopy })
    }

    const addNewIngredient = () => {
        const ingredientCopy = [...bakery.ingredients]
        ingredientCopy.push("")
        setBakery({ ...bakery, ingredients: ingredientCopy })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        fetchProducts()
    }

    return (
        <div className="EditProductForm ">
            <Form onSubmit={handleFormSubmit} className="form-container">
                <Row className="g-3">

                    <Form.Group className="mb-3">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control
                            type="text"
                            value={bakery.title}
                            onChange={handleProductChange}
                            name="title"
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
                        <Button
                            variant="secondary"
                            className="mt-2"
                            onClick={addNewImage}>
                            <i className="fas fa-plus"></i>
                            &nbsp;Añadir otra imagen
                        </Button>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="text"
                            value={bakery.description}
                            onChange={handleProductChange}
                            name="description"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Ingredientes</Form.Label>

                        {isLoading ? (
                            <h1>Cargando....</h1>
                        ) : (
                            bakery.ingredients.map((eachIngredients, idx) => (
                                <Form.Control
                                    key={idx}
                                    type="text"
                                    value={bakery.ingredients[idx]}
                                    onChange={(event) => handleIngredentChange(event, idx)}
                                />
                            ))
                        )}

                        <Button
                            variant="secondary"
                            className="mt-2"
                            onClick={addNewIngredient}>
                            <i className="fas fa-plus"></i>
                            &nbsp;Añadir otro ingrediente
                        </Button>
                    </Form.Group>

                    <Row className="g-2">

                        <Col md>
                            <Form.Group controlId="productPrice">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={bakery.price}
                                    onChange={handleProductChange}
                                    name="price"
                                />
                            </Form.Group>
                        </Col>

                        <Col md>
                            <Form.Group controlId="productStock">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={bakery.stock}
                                    onChange={handleProductChange}
                                    name="stock"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group>
                        <Form.Label>Alérgenos</Form.Label>

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

                        <Button
                            variant="secondary"
                            className="mt-2"
                            onClick={addNewAllergen}>
                            <i className="fas fa-plus"></i>
                            &nbsp;Añadir otro alérgeno
                        </Button>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            checked={bakery.gluten}
                            onChange={handleProductChange}
                            name="gluten"
                            label="Gluten"
                        />
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="warning"
                        className="rotate-container">
                        <i className="fas fa-pen rotate-on-hover"></i>
                        &nbsp;Editar producto
                    </Button>
                </Row>
            </Form>
        </div>
    );
}

export default EditProductForm;