import './searchbar.css';
import { useState } from 'react';

export default function SearchBar({ id, placeholder = 'Buscar productos...', onSearch, results = [], onSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };

  const showDropdown = searchTerm.trim() !== '';

  return (
    <div className="searchbar-wrapper">
      <form id={id} className="searchbar-form" onSubmit={handleSubmit}>
        <div className="searchbar-container">
          <input
            type="text"
            className="searchbar-input"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleChange}
            aria-label="Buscar productos"
          />
          <button type="submit" className="searchbar-btn" aria-label="Enviar búsqueda">
            🔍
          </button>
        </div>
      </form>

      {showDropdown && (
        <div className="searchbar-dropdown">
          {results.length > 0 ? (
            results.map((product) => (
              <button
                type="button"
                key={product.id}
                className="searchbar-item"
                onClick={() => onSelect?.(product)}
              >
                <img src={product.img} alt={product.name} />
                <div className="searchbar-item-content">
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                </div>
              </button>
            ))
          ) : (
            <div className="searchbar-no-results">No se encontró ningún producto.</div>
          )}
        </div>
      )}
    </div>
  );
}
