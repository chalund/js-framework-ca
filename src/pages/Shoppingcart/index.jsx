
import { useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import useProductStore from '../../components/store/products';
import { Link } from 'react-router-dom';

export const Shoppingcart = () => {
  const {cart, getTotalNumberOfItemsInCart} = useProductStore(); 
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  return (
    <div>
      <h1>Shoppingcart</h1>
      <div>Cart items: {getTotalNumberOfItemsInCart()}</div>
      <Cart cart={cartItems} />
      <div>
        <Link to={`/checkout`}> 
        <button className=" ms-3 bg-purple-600 text-white font-bold py-1 px-3 rounded">Checkout </button>
        </Link>
      </div>

    </div>
  )
}
