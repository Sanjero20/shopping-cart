import Link from 'next/link';
import Image from 'next/image';
import StarRating from '@/components/star-rating';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/lib/types';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="flex h-full flex-col justify-end py-4 hover:cursor-pointer">
        <CardContent className="flex flex-col justify-end gap-4 py-0 pb-2">
          <Image
            src={product.image}
            width={225}
            height={250}
            alt=""
            className="mx-auto h-40 w-auto"
            draggable={false}
          />

          <p className="whitespace-wrap line-clamp-2 overflow-hidden text-ellipsis">
            {product.title}
          </p>
        </CardContent>

        <CardFooter className="flex justify-between py-0">
          <p className="font-bold">${product.price}</p>
          <StarRating score={product.rating.rate} />
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard;
