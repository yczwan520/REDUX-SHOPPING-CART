import React from "react";
import "./App.css";
import ItemList from "./ItemList";
import CartList from "./cartSection";

const App = () => {
  return (
    <div className="App">
      <div className="item_list">
        <div className="header">
          <h1>Sruthi's Sticker Shop</h1>
        </div>
        <div className="item_detail">
          <ItemList />
        </div>
      </div>
      <div className="cart">
        <CartList />
      </div>
    </div>
  );
};

export default App;
