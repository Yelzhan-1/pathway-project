import React, { useState } from "react";
import { Search } from "lucide-react";


const SearchForm = ({ onSearchHandler }) => {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearchHandler(searchValue);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search universities or countries..."
        />
      </div>

      <button className="button-search" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
