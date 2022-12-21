import React from "react";

function ListingCard({ item, onDelete }) {
  const { id, description, image, location } = item;

  function handleFavorite(event) {
    console.log(event.target)
    let status;
    if (event.target.className === "emoji-button favorite active") {
      status = true;
    } else {
      status = false;
    }
    event.target.className = status ? "emoji-button favorite" : "emoji-button favorite active"
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onDelete(item))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
