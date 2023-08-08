import Image from 'next/image';
import { Card, CardContent, CardFooter } from './ui/card';
import { Product } from '@/lib/types';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Card className="flex h-full flex-col justify-end py-4 hover:cursor-pointer">
      <CardContent className="flex flex-col justify-end gap-4 py-0 pb-2">
        <Image
          src={product.image}
          width={250}
          height={250}
          alt=""
          className="h-40 w-auto object-contain"
          draggable={false}
        />

        <p className="whitespace-wrap line-clamp-2 overflow-hidden text-ellipsis">
          {product.title}
        </p>
      </CardContent>

      <CardFooter className="py-0">
        <p className="font-bold">${product.price}</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
