'use client';

import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import useCartStore from '@/store/cartStore';

type ButtonProps = {
  product: Product;
  quantity: number;
};

function ButtonAddToCart({ product, quantity }: ButtonProps) {
  const { addToCart } = useCartStore();

  return (
    <Button onClick={() => addToCart(product, quantity)} className="w-fit">
      Add to Cart
    </Button>
  );
}

export default ButtonAddToCart;
