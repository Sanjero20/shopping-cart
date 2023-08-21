import { CartItem } from './types';

function updateQuantity(cart: CartItem[], item: CartItem, quantity: number) {
  const updatedCart = cart.map((object) => {
    // Edit quantity if it matches
    if (object.product.id === item.product.id) {
      return {
        ...item,
        quantity: item.quantity + quantity,
      };
    }

    // Default return
    return object;
  });

  return updatedCart;
}

export default updateQuantity;
