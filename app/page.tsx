'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Filter } from 'lucide-react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data';
import { FilterState } from '@/lib/types';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: searchParams.get('category')?.split(',').filter(Boolean) || [],
    priceRange: [
      parseInt(searchParams.get('minPrice') || '0'),
      parseInt(searchParams.get('maxPrice') || '1000')
    ],
    search: searchParams.get('search') || ''
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (filters.categories.length > 0) params.set('category', filters.categories.join(','));
    if (filters.priceRange[0] > 0) params.set('minPrice', filters.priceRange[0].toString());
    if (filters.priceRange[1] < 1000) params.set('maxPrice', filters.priceRange[1].toString());
    
    const newUrl = params.toString() ? `/?${params.toString()}` : '/';
    router.replace(newUrl, { scroll: false });
  }, [searchTerm, filters, router]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      
      
      const matchesPrice = product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, filters]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setFilters(prev => ({ ...prev, search: term }));
  };

  const activeFiltersCount = filters.categories.length +
    (filters.priceRange[0] > 0 ? 1 : 0) + (filters.priceRange[1] < 1000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setIsSidebarOpen(true)}
              variant="outline"
              className="mb-4 relative"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <Sidebar 
              filters={filters} 
              onFiltersChange={setFilters}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
          </aside>
          
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Listing</h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
                
                {/* Active Filters Display */}
                {activeFiltersCount > 0 && (
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-sm text-gray-500">Active filters:</span>
                    <Badge variant="secondary">
                      {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500 mb-4">No products found</p>
                <p className="text-gray-400">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}