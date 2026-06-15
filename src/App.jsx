import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import hero from './assets/hero.png'
import './App.css'

import Card from './components/Cardcomponent/Card.jsx';
import Image from './components/ImageComponent/Image.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={hero} alt="Grupo G" height="120" />
            </a>
            <button className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-menu" id="menuPrincipal">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#caracteristicas">Características</a></li>
                <li className="nav-item"><a className="nav-link" href="#pricing">Precios</a></li>
                <li className="nav-item"><a className="nav-link" href="#footer">Información</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="center">
        <div className="hero">
          <img src={hero} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>SUPERMERCADO EL ECONOMICO</h1>
          <p>TIENDA DE ALIMENTOS</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div>
        <Card />
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
