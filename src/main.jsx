import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Producto, {Imagenes, Datos} from './Producto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Producto />
  </StrictMode>,
)
