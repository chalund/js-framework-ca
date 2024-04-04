import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { useRef } from 'react';

const scrollToTop = () => {
  const navbarHeight = useRef(document.querySelector('nav').offsetHeight);
  window.scrollTo({ top: -navbarHeight.current, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <div className="bg-orange-300 text-center p-2 mt-auto">
      <div className="flex gap-3 justify-center py-2">
        <FaFacebook size={34} className="bg-white rounded-full p-1" />
        <FaInstagram size={34} className="bg-white rounded-full p-1"/>
        <FaSnapchat size={34} className="bg-white rounded-full p-1" />
      </div>
      <div className="flex gap-5 justify-center mb-2">
          <Link 
            to="/" 
            className="uppercase font-semibold text-lg text-fuchsia-600 hover:text-purple-600 hover:underline"
            onClick={scrollToTop}
          >Home
          </Link>
          <Link
           to="contact" 
           className="uppercase font-semibold text-lg text-fuchsia-600 hover:text-purple-600 hover:underline"
          >Contact
          </Link>
      </div>
      <p>&copy; 2024 Designed by Charlotte Lund.</p>
    </div>
  )
}

export default Footer
