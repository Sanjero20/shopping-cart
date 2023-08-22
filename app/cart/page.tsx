'use client';

import useCartStore from '@/store/cartStore';
import CartList from './components/cart-item-list';
import ButtonShop from '@/components/btn-shop';

function CartPage() {
  const { cart } = useCartStore();

  return (
    <div className="flex w-full">
      {cart.length !== 0 ? (
        <CartList cart={cart} />
      ) : (
        <ButtonShop text="Browse products" />
      )}
    </div>
  );
}

export default CartPage;
