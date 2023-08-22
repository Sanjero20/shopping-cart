import { CartItem, Product } from './types';

function updateQuantity(cart: CartItem[], product: Product, quantity: number) {
  const updatedCart = cart.map((object) => {
    // Edit quantity if it matches
    if (object.product.id === product.id) {
      return {
        product,
        quantity: object.quantity + quantity,
      };
    }

    // Default return
    return object;
  });

  return updatedCart;
}

export default updateQuantity;
