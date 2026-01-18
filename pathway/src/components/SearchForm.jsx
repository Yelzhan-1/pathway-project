import React, {useState} from 'react';

const SearchForm = ({onSearchHandler}) => {

    const [searchValue, setSearchValue] = useState("");

    function handleSubmit (e) {
        e.preventDefault();
        onSearchHandler(searchValue);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="search-input" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                />
            <button className="button-search" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;