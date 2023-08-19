import { create } from 'zustand';

type ProductCart = {
  id: number;
  quantity: number;
};

type CartState = {
  totalPrice: number;
  cart: ProductCart[];
};

type CartAction = {
  addToCart: (productId: number, quantity: number) => void;
  // adjustQuantity: (productId: number, quantity: number) => void;
  // removeItem: (productId: number) => void;
};

const useCartStore = create<CartState & CartAction>((set, get) => ({
  totalPrice: 0,
  cart: [],

  addToCart: (productId, quantity) =>
    set((state) => {
      let cart = get().cart;
      let productIndex = cart.findIndex((product) => product.id === productId);

      // Add to product cart list when it does not exist
      if (productIndex < 0) {
        return {
          cart: [...cart, { id: productId, quantity }],
        };
      }

      // update product quantity
      const updatedCart = cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        }
        // Default return
        return product;
      });

      return { cart: updatedCart };
    }),
}));

export default useCartStore;
