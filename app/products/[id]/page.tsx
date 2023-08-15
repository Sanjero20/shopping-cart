import Image from 'next/image';
import Rating from '@/components/rating';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';

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
    <div className="mt-8 flex flex-col gap-8 md:flex-row">
      <section className=" w-full md:w-1/3">
        <Card className="flex w-full items-center justify-center pt-8">
          <CardContent>
            <Image
              src={product.image}
              alt=""
              width={100}
              height={100}
              className="h-auto w-auto"
              priority
            />
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-2xl font-bold">{product.title}</h1>

        {/* Product Rating */}
        <div className="flex items-center gap-1">
          <Rating score={product.rating.rate} />
          <p>{product.rating.count}</p>
        </div>

        <p>{product.description}</p>
        <Button className="w-fit"> Add to Cart</Button>
      </section>
    </div>
  );
}

export default ProductDetails;
