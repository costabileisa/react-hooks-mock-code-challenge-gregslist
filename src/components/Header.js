import React from "react";
import Search from "./Search";

function Header({ items, setItems }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search items={items} setItems={setItems} />
    </header>
  );
}

export default Header;
