import React, { useEffect, useState } from "react";
import { Categories, mockData } from "../assets/MockData";
import HeroImage from "../assets/Images/hero-page.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  
  const filteredProducts = selectedCategory
    ? products.products.filter((product) => product.category === selectedCategory)
    : products.products;

  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>

            <ul className="space-y-4 bg-gray-100 border p-3 ">
              {Categories.map((category, index) => (
                <li
                  className="flex items-center text-sm font-medium hover:underline cursor-pointer"
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
              <li
                className="flex items-center text-sm font-medium hover:underline cursor-pointer"
                onClick={() => setSelectedCategory(null)} // Show all products when 'All' is selected
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                All
              </li>
            </ul>
          </div>

          <div className="md:w-9/12 mt-8 md:mt-0 w-full h-96 relative">
            <img src={HeroImage} className="h-full w-full" alt="Hero"></img>
            <div className="absolute top-16 left-8">
              <p className="text-gray-600 mb-4"> Craftvilla | e-commerce</p>
              <h2 className="text-3xl font-bold text-gray-600">
                Welcome to Craftvilla
              </h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+ PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
       

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {selectedCategory ? `${selectedCategory} Products` : "Top Products"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 cursor-pointer gap-6">
            {filteredProducts.slice(0, 5).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
        <InfoSection />
        <CategorySection />
      </div>
      <Shop />
    </div>
  );
};

export default Home;
