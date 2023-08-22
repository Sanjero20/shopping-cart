import { CartItem } from './types';

function computeTotalPrice(cart: CartItem[]): number {
  let totalPrice = 0;

  cart.forEach((item) => {
    const price = item.product.price;
    const quantity = item.quantity;

    const pricePerProduct = price * quantity;
    totalPrice += pricePerProduct;
  });

  // Round to two decimal places
  totalPrice = parseFloat(totalPrice.toFixed(2));
  return totalPrice;
}

export default computeTotalPrice;
