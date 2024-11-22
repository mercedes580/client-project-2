import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import BakeryDetails from '../pages/BakeryDetails/BakeryDetails'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminPage from '../pages/AdminPage/AdminPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ShopPage from '../pages/ShopPage/ShopPage'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth.Context'

const AppRoutes = () => {

    const { loggedUser } = useContext(AuthContext)

    return (

        <div className="AppRoutes">

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/productos' element={<ProductsPage />} />
                <Route path='/productos/:id' element={<BakeryDetails />} />
                <Route path='/sobre-nosotros' element={<AboutPage />} />
                <Route path='/contacto' element={<ContactPage />} />
                <Route path='/shop/:id' element={<ShopPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />

                {
                    loggedUser &&
                    <>

                        <Route path='/admin' element={<AdminPage />} />

                    </>
                }

            </Routes>

        </div>

    )

}

export default AppRoutes