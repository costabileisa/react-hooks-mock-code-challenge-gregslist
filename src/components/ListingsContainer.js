import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, setItems }) {

  function onDelete(deletedItem) {
    const newItems = items.filter(item => item.id !== deletedItem.id);
    setItems(newItems);
  }

  const displayListings =  
  items.map(item => {
    return (
        <ListingCard key={item.id} item={item} onDelete={onDelete} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
