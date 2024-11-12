import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />

      <AppRoutes />

      <Footer />
    </div>
  )
}

export default App
