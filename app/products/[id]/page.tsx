import Image from 'next/image';
import ProductRating from './components/product-rating';
import ButtonAddToCart from './components/btn-add-to-cart';

import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/types';
import ProductImage from './components/product-image';
import ProductDetails from './components/product-details';
import InputQuantity from '@/components/input-quantity';
import AddToCartSection from './components/add-to-cart-section';

async function getProductDetails(id: number): Promise<Product | undefined> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product details for item ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.log('Error fetching product details', error);
    return undefined;
  }
}

type Props = {
  params: { id: number };
};

async function ProductPage({ params }: Props) {
  const product = await getProductDetails(params.id);

  if (!product)
    throw new Error(`Failed to fetch product details for item #${params.id}`);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <ProductImage image={product.image} />

      <section className="flex flex-col justify-between gap-2 md:w-2/3">
        <ProductDetails product={product} />
        <AddToCartSection product={product} />
      </section>
    </div>
  );
}

export default ProductPage;
