import React from 'react'
import useProductStore from '../store/products'


function Cart() {
    const { cart, deleteProductFromCart, getCartTotal } = useProductStore();


    function handleDeleteItem(id) {
        deleteProductFromCart(id);
    }
  return (
    <div>
        <h3>Cart</h3>
        <p>Cart total: ${getCartTotal().toFixed(2)}</p>
        {cart.map(({id, title, price, quantity}) => (
            <div key={`cart-${id}`}>
                <div>{title}: {quantity}</div>
                <div>{price}</div>
                <button onClick={() => handleDeleteItem(id)}className="bg-orange-500 text-white font-bold py-1 px-3 rounded">Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Cart