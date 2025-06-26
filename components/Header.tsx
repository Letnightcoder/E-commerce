"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const { state } = useCart();

  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-blue-200 transition-colors"
          >
            Logo
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-white text-gray-900 border-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 pl-4 py-3 rounded-lg bg-blue-950">
            <Link
              href="/cart"
              className="relative flex items-center hover:text-blue-200 transition-colors"
            >
              <span className="relative">
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </span>
              <span className="ml-1">cart</span>
            </Link>
            <button className="hover:text-blue-200 transition-colors">
              {/* <User className="h-6 w-6" /> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
