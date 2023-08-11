import ProductCard from './product-card';
import { Product } from '@/lib/types';

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
