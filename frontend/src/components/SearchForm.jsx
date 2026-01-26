import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [country, setCountry] = useState("ES");
  const [year, setYear] = useState("2023");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(country, year);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      {/* Selector de país */}
      <div className="form-group">
        <label>País</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="ES">España</option>
          <option value="FR">Francia</option>
          <option value="DE">Alemania</option>
          <option value="IT">Italia</option>
        </select>
      </div>

      {/* Input de año */}
      <div className="form-group">
        <label>Año</label>
        <input
          type="number"
          min="2000"
          max="2025"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      {/* Botón */}
      <button type="submit">Buscar</button>
    </form>
  );
}
