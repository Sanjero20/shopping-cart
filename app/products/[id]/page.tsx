import Image from 'next/image';
import ProductRating from './components/product-rating';
import ButtonAddToCart from './components/btn-add-to-cart';

import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/types';

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

async function ProductDetails({ params }: Props) {
  const product = await getProductDetails(params.id);

  if (!product)
    throw new Error(`Failed to fetch product details for item #${params.id}`);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <section className="w-full md:w-1/3">
        <Card className="relative h-full p-6">
          <CardContent className="relative h-[30vh]">
            <Image
              src={product.image}
              alt=""
              quality={80}
              fill
              priority
              style={{ objectFit: 'contain' }}
              className=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col justify-between gap-2 md:w-2/3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <ProductRating rating={product.rating} />
          <br />
          <p className="font-bold">Description</p>
          <p>{product.description}</p>
        </div>

        <ButtonAddToCart product={product} quantity={1} />
      </section>
    </div>
  );
}

export default ProductDetails;
