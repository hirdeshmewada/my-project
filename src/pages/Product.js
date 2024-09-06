import React, { useState } from "react";
import { Categories, mockData } from "../assets/MockData";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? mockData.filter((product) => product.category === selectedCategory)
    : mockData;

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {selectedCategory ? `${selectedCategory} Products` : "All Products"}
      </h2>

    
      <div className="flex justify-center mb-6">
        <ul className="flex space-x-4 bg-gray-100 border p-3 rounded-lg flex-wrap sm:{flex-col items-center justify-evenly space-y-4}">
        <li
            className="cursor-pointer text-sm font-medium px-3 py-1 rounded-md hover:bg-red-100 text-gray-700"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </li>
          {Categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer text-sm font-medium px-3 py-1 rounded-md ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "hover:bg-red-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
         
        </ul>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p className="text-center col-span-full">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
