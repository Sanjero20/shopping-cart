import ProductCard from '@/components/product-card';
import { Product } from '@/lib/types';

async function getData(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products/', {
    cache: 'force-cache',
  });
  return response.json();
}

async function ProductsPage() {
  const products = await getData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsPage;
