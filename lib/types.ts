export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  reviews: Review[];
  inStock: boolean;
}

export interface Review {
  id: string;
  author: string;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  search: string;
}
