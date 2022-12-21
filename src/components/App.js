import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  return (
    <div className="app">
      <Header items={items} setItems={setItems} />
      <ListingsContainer items={items} setItems={setItems} />
    </div>
  );
}

export default App;
