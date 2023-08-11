import ProductList from './components/product-list';
import { Product } from '@/lib/types';

async function getData(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products/', {
    cache: 'force-cache',
  });
  return response.json();
}

async function ProductsPage() {
  const products = await getData();

  return <ProductList products={products} />;
}

export default ProductsPage;
