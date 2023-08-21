import { create } from 'zustand';
import { CartItem, Product } from '@/lib/types';
import updateQuantity from '@/lib/updateQuantity';

type CartState = {
  totalPrice: number;
  cart: CartItem[];
};

type CartAction = {
  addToCart: (product: Product, quantity: number) => void;
  // adjustQuantity: (productId: number, quantity: number) => void;
  // removeItem: (productId: number) => void;
};

const useCartStore = create<CartState & CartAction>((set, get) => ({
  totalPrice: 0,
  cart: [],

  addToCart: (product, quantity) =>
    set((state) => {
      let cart = get().cart;
      let productIndex = cart.findIndex((item) => item.product === product);

      // Add to product cart list when it does not exist
      if (productIndex < 0) {
        return {
          cart: [...cart, { product, quantity }],
        };
      }

      const cartItem: CartItem = {
        product: product,
        quantity: quantity,
      };

      // update product quantity
      const updatedCart = updateQuantity(cart, cartItem, quantity);

      return { cart: updatedCart };
    }),
}));

export default useCartStore;
