import React from "react";
import { useParams } from "react-router-dom";
function Item() {
  const { id } = useParams();
  return (
    <>
      <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </>
  );
}

export default Item;
