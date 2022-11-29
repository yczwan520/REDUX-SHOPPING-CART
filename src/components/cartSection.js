import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartSection.css";
import { AiOutlineClose } from "react-icons/ai";
import { removeItem, updateQuantity } from "../actions";

const CartItem = ({ title, id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="single_title">
      <div className="title">
        <div className="item_name">{title}</div>
        <button onClick={() => dispatch(removeItem(id))}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="quantity">
        <p>Quantity: </p>
        <input
          value={quantity}
          onChange={(e) => dispatch(updateQuantity(id, e.target.value))}
        />
      </div>
    </div>
  );
};

const CartList = () => {
  const cartItems = useSelector((state) => Object.values(state));
  const totalAmount =
    cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    ) / 100;
  return (
    <div className="cart_section">
      <h2>Your Cart</h2>
      <p>{cartItems.length} Item</p>
      <div className="pick_list">
        {cartItems.map((item) => {
          const { id, title, quantity } = item;
          return (
            <CartItem key={id} title={title} id={id} quantity={quantity} />
          );
        })}
      </div>
      <div className="totalAmount">
        <h3>Total: ${totalAmount}</h3>
        <button className="purchase_button">Purchase</button>
      </div>
    </div>
  );
};

export default CartList;
