import { useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import useProductStore from '../../components/store/products';
import { Link } from 'react-router-dom';
import { IoTrashBinOutline } from "react-icons/io5";

export const Shoppingcart = () => {
  const {cart, getTotalNumberOfItemsInCart, clearCart} = useProductStore(); 
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  return (
    <div className='mx-auto max-w-screen '>
      <div className='mx-auto max-w-screen-md flex justify-evenly my-10'>
        <div className='mx-auto flex items-center flex-col'>
          <h1 className='text-3xl mr-2'>Shoppingcart</h1>
          <p>(items: {getTotalNumberOfItemsInCart()} )</p>
        
          <div className='mt-4'>
          {cart.length > 0 ? (
            <button onClick={clearCart} className="bg-gray-700 text-white py-1 px-3 rounded flex items-center hover:bg-fuchsia-500">
              Clear Cart 
              <IoTrashBinOutline className='ms-2'/> 
            </button>
                ) : (
                  <button onClick={clearCart} className="bg-gray-300 text-gray-500 py-1 px-3 rounded flex items-center cursor-not-allowed" disabled>
                  Clear Cart 
                  <IoTrashBinOutline className='ms-2'/> 
                </button>
            
                )}
          </div>
        </div>
      </div>
      <Cart cart={cartItems} />
      <div className='flex justify-center'>
      {cart.length > 0 ? (
          <Link to={`/checkout`}>
            <button className="bg-purple-600 text-white text-xl mt-6 py-2 px-10 rounded hover:bg-gradient-to-r from-orange-300 to-fuchsia-500 cursor-pointer">Checkout </button>
          </Link>
        ) : (
          <Link to={`/`}>
            <button className="bg-purple-600 text-white text-xl mt-6 py-2 px-10 rounded">Go Shopping </button>
          </Link>
        )}
      </div>
    </div>
  )
}
