import { FiShoppingCart } from 'react-icons/fi';
import useProductStore from '../store/products';

const CartItems = () => {
  const { cart } = useProductStore();
  const itemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="relative">
      <FiShoppingCart
        size={20}
        className="mt-1 hover:text-orange-300"
      />
      {itemCount > 0 && ( 
        <div className="absolute bottom-1 left-5 flex items-center justify-center w-6 h-6 bg-orange-200  rounded-full text-xs">
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartItems;