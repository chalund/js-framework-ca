import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import CartItems from "../CartItems";


const NavLinks = () => {
  return (
    <>
   <NavLink to="/" className="block uppercase mb-4 mt-2 md:mb-0 md:mt-0 md:mr-4 hover:underline hover:font-semibold cursor-pointer">
        Home
      </NavLink>
      <NavLink to="/Contact" className="block uppercase mb-4 md:mb-0 md:mr-4  hover:underline hover:font-semibold cursor-pointer">
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
        <div className="hidden mt-1 md:flex">
          <NavLinks />
        </div>
        <div className="w-[40px] items-center">
          <NavLink to="/Shoppingcart" >
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
