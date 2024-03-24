import React from 'react'
import useProductStore from '../store/products'

function Cart() {
    const { cart, deleteProductFromCart, getCartTotal, clearCart, addToCart } = useProductStore();


    function handleAddItemInCart(id) {
        addToCart(id);
    }

    function handleRemoveItemFromCart(id) {
        const product = cart.find(item => item.id === id);
        if (product && product.quantity > 1) {
            // If the product quantity is greater than 1, decrement the quantity by 1
            deleteProductFromCart(id);
        } else {
            // If the product quantity is 1 or less, remove the product from the cart
            deleteProductFromCart(id);
        }
    }

    return (
        <div>
            <h3>Cart</h3>
            <button onClick={clearCart} className="bg-gray-700 text-white font-bold py-1 px-3 rounded">Clear Cart</button>

            <p>Cart total: ${getCartTotal().toFixed(2)}</p>
            {cart.map(({ id, title, price, quantity }) => (
                <div key={`cart-${id}`}>
                    <div>{title}: {quantity}</div>
                    <div>{price}</div>
                    <button onClick={() => handleRemoveItemFromCart(id)} className="bg-orange-500 text-white font-bold py-1 px-3 rounded">-</button>
                    <button onClick={() => handleAddItemInCart(id)} className="ms-2 bg-orange-500 text-white font-bold py-1 px-3 rounded">+</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;
