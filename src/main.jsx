import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import App from './App.jsx' */
import FirstApp from './Componets/FirstApp.jsx' 
import './style.css'
import { CounterApp } from './Componets/CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp title='Curso ReactJs' subTitle='By Fernando Herrera'/>
    {/* <CounterApp value={ 123 }/> */}
  </StrictMode>,
)
