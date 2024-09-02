import React from "react";
import { Routes, Route } from "react-router-dom";
import "./../styles/App.css";
import Item from "./Item";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/list/:id" element={<Item />} />
      </Routes>
    </div>
  );
};

export default App;
