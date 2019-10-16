import CartActionTypes from './cart.types';

// Toggle Cart
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// ADD Item To CART
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

// Remove Item from cart
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

// Delete Item from Cart
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
