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
