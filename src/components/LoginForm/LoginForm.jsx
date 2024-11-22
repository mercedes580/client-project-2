import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth.Context"
import './LoginForm.css'


const LoginForm = () => {

    const { login } = useContext(AuthContext)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { email, password } = loginData
        if (email === "admin@admin.com" && password === 'devora') {
            loginUser()
            navigate('/admin')
        } else {
            alert('incorrecto')

        }
    }

    const loginUser = () => {
        const user = {
            id: 1,
            email: "admin@admin.com",
            username: "devora",
            avatar: "https://example.com/32x32.jpg"
        }
        login(user)
    }

    return (

        <div className="LoginForm">

            <Form onSubmit={handleSubmit}>

                <div className="text-center mb-4">
                    <img
                        src="https://res.cloudinary.com/dbq56vg5g/image/upload/v1732008660/assets/images/upr8fyoh0m5nqih0c2ow.png"
                        alt="Login Icon"
                        style={{
                            width: "150px",
                            height: "80px",
                            objectFit: "contain",
                            borderRadius: "8px"
                        }}
                    />
                </div>

                <Form.Group className="mb-3" controlId="email">

                    <Form.Label>Email</Form.Label>

                    <Form.Control
                        type="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        name="email"
                        className="form-control"
                        autoComplete="off"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="password">

                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        name="password"
                        className="form-control"
                        autoComplete="off"
                    />

                </Form.Group>

                <Form.Group className="mb-3 p-2" controlId="rememberMe">

                    <Form.Check
                        type="checkbox"
                        label="Remember me"
                        name="rememberMe"
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Sign in</Button>
                </div>

                <div className="text-center mt-3">
                    <a
                        href="#"
                        className="text-decoration-none"
                        style={{ color: "gray" }}
                    >
                        Forgot your password?
                    </a>
                </div>

            </Form>

        </div>

    )

}

export default LoginForm