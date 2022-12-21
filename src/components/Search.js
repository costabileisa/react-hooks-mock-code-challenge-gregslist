import React, { useState } from "react";

function Search({ items, setItems }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItems = items.filter(item => item.description.toLowerCase().includes(search.toLowerCase()))
    setItems(newItems)
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
