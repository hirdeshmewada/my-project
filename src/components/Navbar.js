import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaServer, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/ProductSlice";
import logo from "../assets/Images/logo.png"
function Navbar() {
  const [search,setSearch]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
   }

  return (
    <nav className="bg=white shadow-md ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 justify-between flex  item-center">
      
        <div className="flex text-lg font-bold">
          <Link to="/">
          <img src={logo} alt=""  className="flex h-12 md:w-50"/>
          </Link>
        </div>
       <img src=""/>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4" onChange={(e)=>{setSearch(e.target.value)}}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" ></FaSearch>
          </form>
        </div>

        <div className="flex items-center space-x-4 ">
            
          <Link to="/cart">
            <FaShoppingCart className="text-lg"> </FaShoppingCart>
          </Link>

          <button className="hidden md:block">Login | Register</button>

          <button className="block md:hidden">
            <FaUser></FaUser>
          </button>
        </div>
      </div>


      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link  to="/" className="hover:underline">
        Home
        </Link>
        <Link to="/shop"  className="hover:underline">
        Shop
        </Link>
        <Link  to="/" className="hover:underline">
        Contact
        </Link>
        <Link to="/"  className="hover:underline">
         About
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
