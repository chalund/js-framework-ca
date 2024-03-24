import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

import { Searchbar } from "../Search/SearchBar";
import { Search } from "../Search";
import CartItems from "../CartItems";



const NavLinks = () => {
  return (
    <>
   <NavLink to="/" className="block mb-4 mt-2 md:mb-0 md:mt-0 md:mr-4 hover:text-purple-700 hover:underline hover:font-bold cursor-pointer">
        Home
      </NavLink>
      <NavLink to="/product" className="block mb-4 md:mb-0 md:mr-4 hover:text-purple-700 hover:underline hover:font-bold cursor-pointer">
        Product
      </NavLink>
      <NavLink to="/Contact" className="block mb-4 md:mb-0 md:mr-4 hover:text-purple-700 hover:underline hover:font-bold cursor-pointer">
        Contact
      </NavLink>



    </>
  );
};


const Navbar = () => {
  const [ isOpen, setItsOpen ] = useState(false)
  
  const toggleNavbar = () => {
    setItsOpen(!isOpen)
  }

  return (
    <>
    <nav className="flex jusify-between">
      <div className="hidden md:flex mr-10">

      </div>      
      <div className="hidden mt-1 md:flex">
        <NavLinks />
      </div>
     
      <div className="w-[40px] items-center">
        <NavLink to="/Shoppingcart" className="hover:text-purple-700">
          {/* <FiShoppingCart
            size={20}
            className="mt-1 md:ml-1 lg:ml-6  hover:scale-150"
          /> */}
          <CartItems />
        </NavLink>
      </div>
      <div className="sm: ms-2 md:hidden">
        <button onClick={toggleNavbar}>
        {isOpen ? <IoClose size={30}/> : <IoIosMenu size={30}/> }
        </button>
      </div>
    </nav>
    {isOpen && (
      <div className="flex basis-full flex-col items-center md:hidden">
          <div className="mt-2">
    </div>
        <NavLinks />
      </div>
    )}
    </>

  )
}

export default Navbar;
