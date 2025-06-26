import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Filters</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook className="h-10 w-10 bg-blue-600 p-2 rounded-full text-white" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter className="h-10 w-10 bg-blue-600 p-2 rounded-full text-white" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram className="h-10 w-10 bg-blue-600 p-2 rounded-full text-white" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>&copy; 2024 American</p>
        </div>
      </div>
    </footer>
  );
};
