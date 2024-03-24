import React from 'react'
import useProductStore from '../store/products'

function Cart() {
    const { cart, deleteProductFromCart } = useProductStore();

    function handleDeleteItem(id) {
        deleteProductFromCart(id);
    }
  return (
    <div>
        <h3>Cart</h3>
        {cart.map(({id, title, price, quantity}) => (
            <div>
                <div>{title}: {quantity}</div>
                <div>{price}</div>
                <button onClick={() => handleDeleteItem(id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Cart