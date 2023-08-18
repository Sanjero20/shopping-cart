import { create } from 'zustand';

type ProductCart = {
  productId: number;
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
    // check if product already exist
    //    add quantity
    // else
    //    add new item

    set((state) => {
      return {
        cart: [...state.cart, { productId, quantity }],
      };
    }),
}));

export default useCartStore;
