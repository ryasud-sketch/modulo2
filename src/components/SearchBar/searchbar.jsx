import './searchbar.css';
import { useState } from 'react';

export default function SearchBar({ id, placeholder = 'Buscar productos...', onSearch }) {
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

  return (
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
  );
}
