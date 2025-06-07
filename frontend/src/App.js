import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchBy, setSearchBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!searchBy || !searchValue) return;
    try {
      const res = await axios.get('http://localhost:5258/api/book/search', {
        params: { by: searchBy, value: searchValue }
      });
      setResults(res.data);
    } catch (err) {
      alert("Erro ao buscar livros.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Royal Library</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>Search By: </label>
        <select value={searchBy} onChange={e => setSearchBy(e.target.value)}>
          <option value="">Select</option>
          <option value="Title">Title</option>
          <option value="Author">Author</option>
          <option value="ISBN">ISBN</option>
        </select>
        <input
          type="text"
          placeholder="Search Value"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <button onClick={handleSearch} style={{ marginLeft: "10px" }}>Search</button>
      </div>

      {results.length > 0 && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Publisher</th>
              <th>Authors</th>
              <th>Type</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Available Copies</th>
            </tr>
          </thead>
          <tbody>
            {results.map(book => (
              <tr key={book.bookId}>
                <td>{book.title}</td>
                <td>{book.publisher}</td>
                <td>{book.authors}</td>
                <td>{book.type}</td>
                <td>{book.isbn}</td>
                <td>{book.category}</td>
                <td>{book.totalCopies - book.copiesInUse}/{book.totalCopies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
