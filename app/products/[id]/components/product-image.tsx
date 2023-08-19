import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type ProductImageProps = {
  image: string;
};

function ProductImage({ image }: ProductImageProps) {
  return (
    <Card className="relative h-full w-full p-6 md:w-1/3">
      <CardContent className="relative h-[30vh]">
        <Image
          src={image}
          alt="product"
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
          draggable={false}
          priority
          fill
        />
      </CardContent>
    </Card>
  );
}

export default ProductImage;
