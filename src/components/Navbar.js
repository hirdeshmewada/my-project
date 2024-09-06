import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/ProductSlice";
import logo from "../assets/Images/logo.png";

function Navbar() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex flex-col sm:flex-col md:flex-row justify-between items-center">
        
        
        <div className="flex items-center justify-center text-lg font-bold">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 mx-32 md:w-40 w-24" />
          </Link>
      

        
        <div className="flex items-center space-x-4 mt-4 md:mt-0 lg:hidden">
          <Link to="/cart" className="block">
            <FaShoppingCart className="text-lg" />
          </Link>
          <button className="block mt-0">
            <FaUser />
          </button>
        </div>
        </div>
      
        <div className="relative w-full mt-4 md:mt-0 md:w-auto mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4 md:px-8 text-sm rounded-full sm:rounded-3xl"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

      
        <div className="flex items-center space-x-4 mt-4 md:mt-0 hidden lg:flex">
          <Link to="/cart">
            <FaShoppingCart className="text-lg" />
          </Link>
          <button className="hidden lg:block">Login | Register</button>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/" className="hover:underline">Contact</Link>
        <Link to="/" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
