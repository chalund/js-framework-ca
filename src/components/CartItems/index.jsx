import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import useProductStore from '../store/products';

const CartItems = () => {
  const { cart } = useProductStore(); // Get the cart items from the store
  const itemCount = cart.reduce((total, product) => total + product.quantity, 0); // Calculate the total quantity of items in the cart

  return (
    <div className="relative">
      <FiShoppingCart
        size={20}
        className="mt-1 hover:text-orange-300"
      />
      {itemCount > 0 && ( // Render the circle only if there are items in the cart
        <div
          className="absolute bottom-1 left-5 flex items-center justify-center w-6 h-6 bg-orange-200  rounded-full text-xs"
        >
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartItems;
