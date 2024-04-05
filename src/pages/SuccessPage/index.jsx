import { useEffect } from 'react';
import useProductStore from '../../components/store/products';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from "react-icons/fa";


export const Checkout = () => {
  const { clearCart } = useProductStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-purple-600 font-bold mt-32 mb-3'>Checkout</h1>
      <FaRegCheckCircle size={40} className='text-purple-600' />
      <div className='text-center py-4'>
        <p>Congratulations!</p>
        <p>Your order was successful.</p>
      </div>
      <Link to={`/`}>
      <button className=" bg-purple-600 text-white font-semibold mt-4 py-2 px-4 rounded hover:bg-gradient-to-r from-orange-300 to-fuchsia-500 duration-300">Go shopping</button>
      </Link>
    </div>
  );
};