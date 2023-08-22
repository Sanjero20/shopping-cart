import CartItemCard from './cart-item-card';
import { CartItem } from '@/lib/types';

type CartListProps = {
  cart: CartItem[];
};

function CartList({ cart }: CartListProps) {
  return (
    <section className="flex w-full flex-col items-center gap-2">
      {cart.map((item) => (
        <CartItemCard
          key={item.product.id}
          product={item.product}
          quantity={item.quantity}
        />
      ))}
    </section>
  );
}

export default CartList;
