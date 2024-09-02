import React from "react";
import { Link } from "react-router-dom";

function ItemList() {
  return (
    <>
      <h1>Item List</h1>
      <ul>
        <Link to="/list/1">
          <li>Item 1</li>
        </Link>
        <Link to="/list/2">
          <li>Item 2</li>
        </Link>
        <Link to="/list/3">
          <li>Item 3</li>
        </Link>
      </ul>
    </>
  );
}

export default ItemList;
