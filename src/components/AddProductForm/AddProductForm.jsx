import axios from "axios";
import { useState } from "react";
import "./AddProductForm.css";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const API_URL = "http://localhost:5005"

const AddProductForm = () => {

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

    const removeImage = (idx) => {
        if (productData.gallery.length > 1) {
            const galleryCopy = [...productData.gallery]
            galleryCopy.splice(idx, 1)
            setProductData({ ...productData, gallery: galleryCopy })
        }
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

    const removeAllergen = (idx) => {
        if (productData.allergens.length > 1) {
            const allergensCopy = [...productData.allergens]
            allergensCopy.splice(idx, 1)
            setProductData({ ...productData, allergens: allergensCopy })
        }
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

    const removeIngredient = (idx) => {
        if (productData.ingredients.length > 1) {
            const ingredientCopy = [...productData.ingredients]
            ingredientCopy.splice(idx, 1)
            setProductData({ ...productData, ingredients: ingredientCopy })
        }
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
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <div className="AddProductForm">

            <Form onSubmit={handleFormSubmit} className="form-container">
                <Row className="g-3">

                    <Form.Group controlId="productTitle">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control
                            type="text"
                            value={productData.title}
                            onChange={handleProductChange}
                            name="title"
                        />
                    </Form.Group>

                    <Form.Group controlId="productImages">
                        <Form.Label>Imagen/es</Form.Label>
                        {
                            productData.gallery.map((eachGallery, idx) => (
                                <Form.Control
                                    type="text"
                                    key={idx}
                                    value={eachGallery}
                                    onChange={(event) => handleGalleryChange(event, idx)}
                                    className="mb-2"
                                />
                            ))
                        }
                        <Button
                            variant="secondary"
                            onClick={addNewImage}
                            className="mt-2">
                            <i className="fas fa-plus"></i>
                            &nbsp;Añadir otra imagen
                        </Button>

                        <Button
                            variant="danger"
                            onClick={removeImage}
                            className="mt-2"
                            style={{ marginLeft: '20px' }}>

                            <i className="fas fa-minus"></i>
                            &nbsp;Eliminar campo
                        </Button>
                    </Form.Group>

                    <Form.Group controlId="productDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="text"
                            value={productData.description}
                            onChange={handleProductChange}
                            name="description"
                        />
                    </Form.Group>

                    <Form.Group controlId="productIngredients">
                        <Form.Label>Ingredientes</Form.Label>
                        {
                            productData.ingredients.map((eachIngredient, idx) => (
                                <Form.Control
                                    type="text"
                                    key={idx}
                                    value={eachIngredient}
                                    onChange={(event) => handleIngredentChange(event, idx)}
                                    className="mb-2"
                                />
                            ))
                        }

                        <Button
                            variant="secondary"
                            onClick={addNewIngredient}
                            className="mt-2"
                        >
                            <i className="fas fa-plus"></i>
                            &nbsp;Añadir otro ingrediente
                        </Button>

                        <Button
                            variant="danger"
                            onClick={removeIngredient}
                            className="mt-2"
                            style={{ marginLeft: '20px' }}
                        >
                            <i className="fas fa-minus"></i>
                            &nbsp;Eliminar campo
                        </Button>

                    </Form.Group>

                    <Row className="g-2">

                        <Col md>
                            <Form.Group controlId="productPrice">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={productData.price}
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
                                    value={productData.stock}
                                    onChange={handleProductChange}
                                    name="stock"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="productAllergens">
                        <Form.Label>Alérgenos</Form.Label>
                        {
                            productData.allergens.map((eachAllergen, idx) => (
                                <Form.Control
                                    type="text"
                                    key={idx}
                                    value={eachAllergen}
                                    onChange={(event) => handleAllergensChange(event, idx)}
                                    className="mb-2"
                                />
                            ))
                        }
                        <Button
                            variant="secondary"
                            onClick={addNewAllergen}
                            className="mt-2">
                            <i className="fas fa-plus"></i>
                            &nbsp;Añadir otro alérgeno
                        </Button>

                        <Button
                            variant="danger"
                            onClick={removeAllergen}
                            className="mt-2"
                            style={{ marginLeft: '20px' }}
                        >
                            <i className="fas fa-minus"></i>
                            &nbsp;Eliminar campo
                        </Button>
                    </Form.Group>

                    <Form.Group controlId="productGluten" className="form-check">
                        <Form.Check
                            type="checkbox"
                            checked={productData.gluten}
                            onChange={handleProductChange}
                            name="gluten"
                            label="Gluten"
                        />
                    </Form.Group>

                    <Button type="submit" variant="success" className="rotate-container">
                        <i className="fas fa-plus rotate-on-hover"></i>&nbsp;Crear nuevo producto
                    </Button>

                </Row>
            </Form>
        </div>
    )

}

export default AddProductForm