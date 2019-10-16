import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// Total Cart Items
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// Hidden cart
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// Nr of same type of products
// selectCartItems gets only the part of the state interested in
export const selectCartItemCount = createSelector(
  // the result is passed as props to cart-icon as 'itemCount'
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

// Total Price
export const selectCartTotalCost = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
