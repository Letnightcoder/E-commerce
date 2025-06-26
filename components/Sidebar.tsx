"use client";

import React from "react";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { FilterState } from "@/lib/types";
import { categories} from "@/lib/data";

interface SidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  filters,
  onFiltersChange,
  isOpen = false,
  onClose,
}) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter((c) => c !== category);
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 1000],
      search: filters.search,
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 1000;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-80 lg:w-auto bg-white lg:bg-white
        transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0
        transition-transform duration-300 ease-in-out
        lg:transition-none
        p-6 rounded-lg shadow-md lg:shadow-md h-fit
        overflow-y-auto lg:overflow-visible
        max-h-screen lg:max-h-none
      `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h2 className="text-xl font-bold text-blue-700">Filters</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">Filters</h2>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Mobile Clear All Button */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="w-full mb-6 lg:hidden"
          >
            Clear All Filters
          </Button>
        )}

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2 mb-3">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <label
                htmlFor={category}
                className="text-sm font-medium cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Price Range</h3>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Mobile Apply Button */}
        <Button
          onClick={onClose}
          className="w-full mt-6 bg-blue-700 hover:bg-blue-800 lg:hidden"
        >
          Apply Filters
        </Button>
      </div>
    </>
  );
};
