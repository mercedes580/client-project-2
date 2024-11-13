import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
<<<<<<< HEAD
import BakerydetailsPage from '../components/Bakerydetails.jsx/Bakerydetails'
=======
import BakeryDetails from '../components/BakeryDetails/BakeryDetails'
>>>>>>> 8fe5920e1b5c1d231c14e4e295f0481e9258d02f

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/productos' element={<ProductsPage />} />
<<<<<<< HEAD
                <Route path='/productos/:id' element={<BakerydetailsPage />} />
=======
                <Route path='/productos/:id' element={<h1><BakeryDetails /></h1>} />
>>>>>>> 8fe5920e1b5c1d231c14e4e295f0481e9258d02f
                <Route path='/sobre-nosotros' element={<AboutPage />} />
                <Route path='/contacto' element={<ContactPage />} />
                <Route path='/productos/añadir' element={<h1>producto a añadir</h1>} />
                <Route path='/productos/editar/:id' element={<h1>editar producto</h1>} />

                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes