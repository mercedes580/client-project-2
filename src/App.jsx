import { useState } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/owl.theme.default.min.css'
import '../assets/css/themability_megamenu.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App
