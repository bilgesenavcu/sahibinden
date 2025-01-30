import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../index.css';

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      try {
        const response = await axios.post("http://localhost:8081/search", {
          query: input,
        });
        setResults(response.data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Arama sırasında bir hata oluştu:", error);
      }
    } else {
      setShowDropdown(false);
      setResults([]);
    }
  };

  const handleResultClick = (id) => {
    navigate(`/ilan/${id}`);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input" // CSS sınıfı burada uygulanıyor
        placeholder="Kelime, ilan no veya mağaza adı ile ara"
        value={query}
        onChange={handleSearch}
      />
      {showDropdown && results.length > 0 && (
        <ul className="dropdown-menu show">
          {results.map((item) => (
            <li
              key={item.id}
              className="dropdown-item"
              onClick={() => handleResultClick(item.id)}
            >
              {item.title} - {item.city} - {item.description}
            </li>
          ))}
        </ul>
      )}
      {showDropdown && results.length === 0 && (
        <ul className="dropdown-menu show">
          <li className="dropdown-item">Sonuç bulunamadı</li>
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
