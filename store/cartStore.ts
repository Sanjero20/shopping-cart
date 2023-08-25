import { create } from 'zustand';
import { CartItem, Product } from '@/lib/types';
import updateQuantity from '@/lib/updateQuantity';
import computeTotalPrice from '@/lib/computeTotalPrice';

type CartState = {
  cart: CartItem[];
};

type CartAction = {
  addToCart: (product: Product, quantity: number) => void;
  adjustQuantity: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;
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
        return { cart: newCart };
      }

      const updatedCart = updateQuantity(cart, product, quantity, false);
      return { cart: updatedCart };
    }),

  adjustQuantity: (product, quantity) =>
    set(() => {
      let cart = get().cart;
      const updatedCart = updateQuantity(cart, product, quantity);
      return { cart: updatedCart };
    }),

  removeItem: (productId: number) =>
    set(() => {
      let cart = get().cart;
      const updatedCart = cart.filter((item) => item.product.id !== productId);
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
