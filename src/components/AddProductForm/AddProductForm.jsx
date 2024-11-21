import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Row, Col, Button } from "react-bootstrap"
import axios from "axios"
import "./AddProductForm.css"

const AddProductForm = () => {

    const API_URL = "http://localhost:5005"

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
        galleryCopy[idx] = value
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

    const removeAllergen = (idx) => {

        if (productData.allergens.length > 1) {
            const allergensCopy = [...productData.allergens]
            allergensCopy.splice(idx, 1)
            setProductData({ ...productData, allergens: allergensCopy })
        }

    }

    const handleIngredentChange = (e, idx) => {
        const { value } = e.target
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
                console.log(err)
            })

    }


    return (

        <div className="AddProductForm">

            <Form onSubmit={handleFormSubmit} className="form-container">
                
                <Row className="g-3">

                    <Form.Group controlId="productTitle">
                        <Form.Control
                            type="text"
                            value={productData.title}
                            onChange={handleProductChange}
                            name="title"
                            placeholder="Product"
                        />
                    </Form.Group>

                    <Form.Group controlId="productImages">
                        {
                            productData.gallery.map((eachGallery, idx) => (
                                <Form.Control
                                    type="text"
                                    key={idx}
                                    value={eachGallery}
                                    onChange={(event) => handleGalleryChange(event, idx)}
                                    className="mb-2"
                                    placeholder="Image/s"
                                />
                            ))
                        }
                        <Button
                            onClick={addNewImage}
                            className="add-button">
                            <i className="fas fa-plus"></i>
                            &nbsp;Add image
                        </Button>

                        <Button
                            onClick={removeImage}
                            className="remove-button"
                            style={{ marginLeft: '20px' }}>

                            <i className="fas fa-minus"></i>
                            &nbsp;Remove image
                        </Button>
                    </Form.Group>

                    <Form.Group controlId="productDescription">
                        <Form.Control
                            type="text"
                            value={productData.description}
                            onChange={handleProductChange}
                            name="description"
                            placeholder="Description"
                        />
                    </Form.Group>

                    <Form.Group controlId="productIngredients">
                        {
                            productData.ingredients.map((eachIngredient, idx) => (
                                <Form.Control
                                    type="text"
                                    key={idx}
                                    value={eachIngredient}
                                    onChange={(event) => handleIngredentChange(event, idx)}
                                    className="mb-2"
                                    placeholder="Ingredients"
                                />
                            ))
                        }

                        <Button
                            onClick={addNewIngredient}
                            className="add-button"
                        >
                            <i className="fas fa-plus"></i>
                            &nbsp;Add ingredient
                        </Button>

                        <Button
                            onClick={removeIngredient}
                            className="remove-button"
                            style={{ marginLeft: '20px' }}
                        >
                            <i className="fas fa-minus"></i>
                            &nbsp;Remove ingredient
                        </Button>

                    </Form.Group>

                    <Row className="g-2">

                        <Col md>
                            <Form.Group controlId="productPrice">
                                Price
                                <Form.Control
                                    type="number"
                                    value={productData.price}
                                    onChange={handleProductChange}
                                    name="price"
                                    placeholder="Precio"
                                />
                            </Form.Group>
                        </Col>

                        <Col md>
                            <Form.Group controlId="productStock">
                                Stock
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
                        {
                            productData.allergens.map((eachAllergen, idx) => (
                                <Form.Control
                                    type="text"
                                    key={idx}
                                    value={eachAllergen}
                                    onChange={(event) => handleAllergensChange(event, idx)}
                                    className="mb-2"
                                    placeholder="Allergens"
                                />
                            ))
                        }
                        <Button
                            onClick={addNewAllergen}
                            className="add-button">
                            <i className="fas fa-plus"></i>
                            &nbsp;Add allergen
                        </Button>

                        <Button
                            onClick={removeAllergen}
                            className="remove-button"
                            style={{ marginLeft: '20px' }}
                        >
                            <i className="fas fa-minus"></i>
                            &nbsp;Remove allergen
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

                    <Button type="submit" className="rotate-container custom-button">
                        <i className="fas fa-plus rotate-on-hover"></i>&nbsp;Add new product
                    </Button>

                </Row>

            </Form>

        </div>
        
    )

}

export default AddProductForm