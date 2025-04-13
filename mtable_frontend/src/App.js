import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // optional if you want to separate CSS

function App() {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/table/', { number })
      .then(response => {
        setTable(response.data.table);
        setError('');
      })
      .catch(error => {
        setError('Please enter a valid number');
        setTable([]);
      });
  };

  return (
    <div className="container">
      <h2>🔢 Multiplication Table Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit">Generate Table</button>
      </form>

      {error && <p className="error">{error}</p>}

      {table.length > 0 && (
        <div className="table-container">
          <h3>Table of {number}</h3>
          <ul>
            {table.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
