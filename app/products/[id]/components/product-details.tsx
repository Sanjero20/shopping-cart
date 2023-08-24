import { Product } from '@/lib/types';
import ProductRating from './product-rating';

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-1">
      <section>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <ProductRating rating={product.rating} />
      </section>

      <p className="text-xl font-bold">${product.price}</p>

      <section>
        <p className="font-bold">Description</p>
        <p>{product.description}</p>
      </section>
    </div>
  );
}

export default ProductDetails;
