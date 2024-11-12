import { Link } from "react-router-dom"

const Navbar = () => {

    return (

        <nav class="navbar">
            <Link to={'/'}><button>Inicio</button></Link>
            <Link to={'/productos'}><button>Acerca de</button></Link>
            <Link to={'/contacto'}> <button>Servicios</button></Link>
            <Link to={'/sobre-nosotros'}><button>Contacto</button></Link>
        </nav>

    )
}

export default Navbar