import { Product } from '@/lib/types';
import ProductRating from './product-rating';

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <ProductRating rating={product.rating} />

      <p className="mt-1 font-bold">Description</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
