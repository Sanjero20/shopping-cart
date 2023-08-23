import { CartItem, Product } from './types';

function updateQuantity(
  cart: CartItem[],
  product: Product,
  quantity: number,
  overwrite = true,
) {
  const updatedCart = cart.map((object) => {
    if (object.product.id === product.id) {
      // Add or overwrite current quantity value if it matches the id
      const newQty = overwrite ? quantity : object.quantity + quantity;
      return {
        product,
        quantity: newQty,
      };
    }

    return object;
  });

  return updatedCart;
}

export default updateQuantity;
