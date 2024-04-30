import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
    const {cartItem,addToCart,removeFromeCart}= useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="food image " className="food-item-image" />
        {!cartItem[id]
          ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add cart"/>
          :<div className="food-item-counter">
            <img onClick={()=>removeFromeCart(id)} src={assets.remove_icon_red} alt="remove to card"/>
            <p>{cartItem[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;