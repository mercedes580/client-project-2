import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import React from 'react'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Toaster />
        <AppRoutes />
        <Footer />
      </div>
  )
}

export default App
