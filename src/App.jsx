import { useMemo, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.jpg';
import arroz from './assets/arroz tucapel 1k.jpg';
import azucar from './assets/azucar iansa 1kg.jpg';
import fideos from './assets/fideos carozzi 5.JPG';
import mayonesa from './assets/mayonesa hellmans 1 kg.jpg';
import sal from './assets/sal 1 kg.jpg';
import Home from './pages/HomePage/Home';
import Products from './pages/Productpage/Products';
import SearchBar from './components/SearchBar/searchbar.jsx';
import './App.css';

const products = [
  { id: 1, name: 'Arroz Tucapel 1kg', price: '$1200', img: arroz },
  { id: 2, name: 'Azúcar Iansa 1kg', price: '$1000', img: azucar },
  { id: 3, name: 'Fideos Carozzi 500g', price: '$950', img: fideos },
  { id: 4, name: "Mayonesa Hellmann's 1kg", price: '$2800', img: mayonesa },
  { id: 5, name: 'Sal 1kg', price: '$900', img: sal },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(normalized) ||
      product.id.toString().includes(normalized)
    );
  }, [searchTerm]);

  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
          <div className="container navbar-content">
            <div className="navbar-brand-group">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Grupo G" height="120" />
              </Link>
            </div>
            <div className="navbar-search-wrap">
              <SearchBar
                id="nav-buscador"
                placeholder="Buscar productos..."
                onSearch={(value) => setSearchTerm(value)}
                results={filteredProducts}
                onSelect={() => {}}
              />
            </div>
            <div className="navbar-collapse collapse" id="menuPrincipal">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Productos</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">Información</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
