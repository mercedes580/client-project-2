import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import AddNewProductPage from '../pages/AddProductPage/AddProductPage'
import BakeryDetails from '../pages/BakeryDetails/BakeryDetails'
import ProductEditForm from '../pages/ProductsEditform/ProductsEditform'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/productos' element={<ProductsPage />} />
                <Route path='/productos/:id' element={<BakeryDetails />} />
                <Route path='/sobre-nosotros' element={<AboutPage />} />
                <Route path='/contacto' element={<ContactPage />} />
                <Route path='/productos/añadir' element={<AddNewProductPage />} />
                <Route path='/productos/editar/:id' element={<ProductEditForm />} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </div>
    )
}
export default AppRoutes