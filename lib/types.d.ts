type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type AddedProducts = {
  product: Product;
  quantity: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
