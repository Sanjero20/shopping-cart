import { CartItem } from './types';

function countItems(cart: CartItem[]) {
  let totalItems = 0;

  for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity;
  }

  return totalItems;
}

export default countItems;
