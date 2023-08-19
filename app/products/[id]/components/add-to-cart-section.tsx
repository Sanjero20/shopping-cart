'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import InputQuantity from '@/components/input-quantity';
import ButtonAddToCart from './btn-add-to-cart';

type Props = {
  product: Product;
};

function AddToCartSection({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex gap-4">
      <InputQuantity setQuantity={setQuantity} quantity={quantity} />
      <ButtonAddToCart productId={product.id} quantity={quantity} />
    </div>
  );
}

export default AddToCartSection;
