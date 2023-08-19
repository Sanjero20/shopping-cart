'use client';

import { Button } from '@/components/ui/button';
import useCartStore from '@/store/cartStore';

type ButtonProps = {
  productId: number;
  quantity: number;
};

function ButtonAddToCart({ productId, quantity }: ButtonProps) {
  const { addToCart } = useCartStore();

  return (
    <Button onClick={() => addToCart(productId, quantity)} className="w-fit">
      Add to Cart
    </Button>
  );
}

export default ButtonAddToCart;
