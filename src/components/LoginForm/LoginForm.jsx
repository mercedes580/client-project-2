import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth.Context"
import './LoginForm.css'

const LoginForm = () => {
    const { login } = useContext(AuthContext)

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const { email, password } = loginData

        if (email === "admin@admin.com" && password === 'devora') {
            loginUser()
            navigate('/productos')
        } else {
            alert('incorrecto')
        }
    }

    const loginUser = () => {
        const user = {
            id: 1,
            email: "admin@3SOME.com",
            username: "merche",
            avatar: "https://example.com/por ejemplo.jpg"
        }

        login(user)
    }

    return (
        <div className="LoginForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" className="form-control" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" className="form-control" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Acceder</Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm