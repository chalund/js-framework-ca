
import { useEffect } from 'react';
import useProductStore from '../../components/store/products';
import { Link } from 'react-router-dom';



const Checkout = () => {
  const { clearCart } = useProductStore();

  useEffect(() => {
    // Clear the shopping cart when the component mounts
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1>Checkout</h1>
      <p>Congratulations! Your order was successful.</p>
      <Link to={`/`}>
      <button className=" ms-3 bg-purple-600 text-white font-bold py-1 px-3 rounded">Go shopping</button>
      </Link>
    </div>
  );
};

export default Checkout;
