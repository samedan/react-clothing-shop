import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <img src={imageUrl} alt="item" className="image-container" />

    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
