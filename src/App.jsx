import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import React from 'react';
import { AuthProviderWrapper } from './components/Contexts/Auth.Context';
import Header from './components/Header/Header';

function App() {
  return (
    <AuthProviderWrapper>
      <div className="App">
        {/* < Header /> */}
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </AuthProviderWrapper>
  )
}

export default App
