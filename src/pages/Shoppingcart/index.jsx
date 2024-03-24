
import { useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import useProductStore from '../../components/store/products';

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
    </div>
  )
}
