import { CartItem, Product } from './types';

export function addProductQuantity(
  cart: CartItem[],
  product: Product,
  quantity: number,
) {
  const updatedCart = cart.map((object) => {
    // Add quantity if it matches
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

// Change existing value (used in cart page)
export function editQuantity(
  cart: CartItem[],
  product: Product,
  quantity: number,
) {
  const updatedCart = cart.map((object) => {
    // Change quantity if it matches
    if (object.product.id === product.id) {
      return {
        product,
        quantity,
      };
    }

    // Default return
    return object;
  });

  return updatedCart;
}
