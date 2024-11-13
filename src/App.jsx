import Navbar from './components/Navbar'
import Header from './components/Header'

import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
