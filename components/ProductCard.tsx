'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}



export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-700 transition-colors">
            {product.title}
          </h3>
          <div>
            <p className="text-2xl font-bold w-full text-blue-700">${product.price}</p>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-blue-700 w-full hover:bg-blue-800"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};