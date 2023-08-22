'use client';

import useCartStore from '@/store/cartStore';
import CartList from './components/cart-item-list';
import ButtonShop from '@/components/btn-shop';
import { Button } from '@/components/ui/button';

function CartPage() {
  const { cart, totalPrice } = useCartStore();

  if (cart.length === 0)
    return (
      <div className="mx-auto w-fit">
        <ButtonShop text="Browse products" />
      </div>
    );

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-2">
      <section className="flex h-full md:w-4/5">
        <CartList cart={cart} />
      </section>

      <section className="flex w-full items-center justify-end gap-2 md:w-4/5">
        <p className="font-bold">Total Price: ${totalPrice}</p>
        <Button>Checkout</Button>
      </section>
    </div>
  );
}

export default CartPage;
