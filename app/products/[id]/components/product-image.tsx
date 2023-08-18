import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type ProductImageProps = {
  image: string;
};

function ProductImage({ image }: ProductImageProps) {
  return (
    <Card className="relative h-full p-6">
      <CardContent className="relative h-[30vh]">
        <Image
          src={image}
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
  );
}

export default ProductImage;
