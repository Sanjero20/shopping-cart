import Image from 'next/image';
import { Card, CardContent, CardFooter } from './ui/card';
import { Product } from '@/lib/types';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Card className="aspect-square items-center justify-center p-4 hover:cursor-pointer">
      <CardContent className="flex h-full flex-col justify-center gap-2">
        <Image
          src={product.image}
          width={250}
          height={250}
          alt=""
          className="h-32 w-auto object-contain"
        />

        <CardFooter>{product.title}</CardFooter>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
