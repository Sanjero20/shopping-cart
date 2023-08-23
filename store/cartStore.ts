import { create } from 'zustand';
import { CartItem, Product } from '@/lib/types';
import updateQuantity from '@/lib/updateQuantity';
import computeTotalPrice from '@/lib/computeTotalPrice';

type CartState = {
  totalPrice: number;
  cart: CartItem[];
};

type CartAction = {
  addToCart: (product: Product, quantity: number) => void;
  adjustQuantity: (product: Product, quantity: number) => void;
  // removeItem: (productId: number) => void;
};

const useCartStore = create<CartState & CartAction>((set, get) => ({
  totalPrice: 0,
  cart: [],

  addToCart: (product, quantity) =>
    set(() => {
      let cart = get().cart;

      // Check if product exist in cart items
      let productIndex = cart.findIndex(
        (item) => item.product.id === product.id,
      );

      // Add to product cart list when it does not exist
      if (productIndex < 0) {
        const newCart = [...cart, { product, quantity }];
        const totalPrice = computeTotalPrice(newCart);
        return {
          cart: newCart,
          totalPrice,
        };
      }

      const updatedCart = updateQuantity(cart, product, quantity, false);
      const totalPrice = computeTotalPrice(updatedCart);

      return { cart: updatedCart, totalPrice };
    }),

  adjustQuantity: (product, quantity) =>
    set(() => {
      let cart = get().cart;

      const updatedCart = updateQuantity(cart, product, quantity);
      const totalPrice = computeTotalPrice(updatedCart);

      return {
        cart: updatedCart,
        totalPrice,
      };
    }),
}));

export default useCartStore;
