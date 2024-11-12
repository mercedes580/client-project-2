import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {

    return (
        <div className="AppRouteS">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/productos' element={<h1>productos</h1>} />
                <Route path='/productos/:id' element={<h1>detalle producto</h1>} />
                <Route path='/contacto' element={<h1>contacto</h1>} />
                <Route path='/sobre-nosotros' element={<h1>sobre nosotros</h1>} />
                <Route path='/productos/añadir' element={<h1>producto a añadir</h1>} />
                <Route path='/productos/editar/:id' element={<h1>editar producto</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes