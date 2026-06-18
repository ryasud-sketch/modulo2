import logo from './assets/logo.jpg'
import arroz from './assets/arroz tucapel 1k.jpg'
import azucar from './assets/azucar iansa 1kg.jpg'
import fideos from './assets/fideos carozzi 5.JPG'
import mayonesa from './assets/mayonesa hellmans 1 kg.jpg'
import sal from './assets/sal 1 kg.jpg'
import './App.css'

import { useState } from 'react'
import Card from './components/Cardcomponent/Card.jsx'
import Footer from './components/footer/footer.jsx'
import SearchBar from './components/SearchBar/searchbar.jsx'

const products = [
  { id: 1, name: 'Arroz Tucapel 1kg', price: '$1200', img: arroz },
  { id: 2, name: 'Azúcar Iansa 1kg', price: '$1000', img: azucar },
  { id: 3, name: 'Fideos Carozzi 500g', price: '$950', img: fideos },
  { id: 4, name: "Mayonesa Hellmann's 1kg", price: '$2800', img: mayonesa },
  { id: 5, name: 'Sal 1kg', price: '$900', img: sal },
]

const footerData = {
  footerId: 'footer',
  contactTitle: 'Información de contacto',
  email: 'SupermercadoElEconomico@gmail.com',
  hours: 'Lunes a Viernes, 9:00 AM - 6:00 PM',
  phone: '123-456-7890',
  address: 'Av Pepito 2026',
  socialLinks: [
    { id: 'social-linkedin', href: '#', label: 'LinkedIn' },
    { id: 'social-facebook', href: '#', label: 'Facebook' },
    { id: 'social-instagram', href: '#', label: 'Instagram' },
  ],
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Buscando:', term);
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const searchResults = normalizedSearch
    ? products.filter((product) =>
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.id.toString().includes(normalizedSearch)
      )
    : [];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Grupo G" height="120" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <SearchBar
              id="buscador-principal"
              placeholder="Buscar productos..."
              onSearch={handleSearch}
              results={searchResults}
              onSelect={(product) => console.log('Seleccionado', product.name)}
            />
            <div className="navbar-collapse collapse" id="menuPrincipal">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item"><a className="nav-link active" href="#center">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#pricing">Precios</a></li>
                <li className="nav-item"><a className="nav-link" href="#footer">Información</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="center">
        <div className="hero">
          <img src={logo} className="base" width="170" height="179" alt="logo" />
        </div>
        <div>
          <h1>SUPERMERCADO EL ECONOMICO</h1>
          <p>TIENDA DE ALIMENTOS</p>
        </div>
        
      </section>

      <section id="pricing">
        <Card
          products={products}
          buttonText="Añadir al Carrito"
          buttonIdPrefix="boton"
          onBuy={(product) => console.log('Añadido al carrito', product.name)}
        />
      </section>

      <Footer {...footerData} />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App 
