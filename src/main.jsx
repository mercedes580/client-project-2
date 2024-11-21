import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/Auth.Context.jsx'
import { CartProviderWrapper } from './contexts/Cart.Context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviderWrapper>
      <CartProviderWrapper>
        <Router>
          <App />
        </Router>
      </CartProviderWrapper>
    </AuthProviderWrapper>
  </StrictMode>
)