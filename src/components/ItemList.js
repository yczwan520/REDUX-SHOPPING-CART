import React from "react";
import "./ItemList.css";
import { STORE_ITEMS } from "../data";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

export const DetailItem = ({ id, title, src, price }) => {
  const dispatch = useDispatch();
  const itemPrice = price / 100;

  return (
    <div className="item_outter">
      <div className="image">
        <img src={src} alt={id} />
      </div>
      <div className="item_title">{title}</div>
      <button
        className="add_button"
        onClick={() => dispatch(addItem({ id, title, price }))}
      >
        Add to Cart - ${itemPrice}
      </button>
    </div>
  );
};

const ItemList = () => {
  return (
    <div className="items_list">
      {STORE_ITEMS.map((item) => (
        <DetailItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
