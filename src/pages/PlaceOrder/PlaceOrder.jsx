import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const{getTotalCartAmount}= useContext(StoreContext);
  return (
    <form className="placeOrder">
      <div className="place-order-left">
        <p className="title">Delivary Information</p>
        <div className="multi-field">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" name="" placeholder="Email address" id="" />
        <input type="text" placeholder="street" />
        <div className="multi-field">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()==0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b> ${getTotalCartAmount() + 2}</b>
          </div>
          <button >
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
