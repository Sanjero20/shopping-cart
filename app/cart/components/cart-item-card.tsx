'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/types';
import InputQuantity from '@/components/input-quantity';
import Image from 'next/image';
import useCartStore from '@/store/cartStore';

type CartItemCartProps = {
  product: Product;
  quantity: number;
};

function CartItemCard({ product, quantity }: CartItemCartProps) {
  const [value, setValue] = useState(quantity);
  const { adjustQuantity } = useCartStore();

  // Update quantity logic here...
  useEffect(() => {
    adjustQuantity(product, value);
  }, [product, value, adjustQuantity]);

  return (
    <Card className="flex w-full">
      <CardContent className="relative flex w-2/5 items-center justify-center border-r pt-6 md:w-1/5">
        <Image
          src={product.image}
          alt=""
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="p-4"
        />
      </CardContent>

      <CardContent className="flex h-full flex-1 flex-col gap-2 pt-6">
        <p className="line-clamp-1 text-ellipsis font-bold">{product.title}</p>
        <p>${product.price}</p>
        <InputQuantity quantity={value} setQuantity={setValue} />
      </CardContent>
    </Card>
  );
}

export default CartItemCard;
