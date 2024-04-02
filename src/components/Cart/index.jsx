import React from 'react'
import useProductStore from '../store/products'
import { Link } from 'react-router-dom';
import { IoTrashBinOutline } from "react-icons/io5";


function Cart() {
    const { cart, deleteProductFromCart, getCartTotal, addToCart} = useProductStore();


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

    function handlePrice(price, discountedPrice) {
        if (price !== discountedPrice) {
            return (
                <div className='space-x-3'>
                    <del className="text-gray-500">{price}</del>
                    <span className="text-red-700">{discountedPrice}</span>
                </div>
            );
        } else {
            return <div>{price}</div>;
        }
    }




  
        return (
            <div>
                <div className='mx-auto max-w-screen max-w-[1024px]'>
                    <div className='my-2 mx-2 sm:mx-6 lg:mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:mx-8'>
                            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'> 
                    
              
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Product Image</th>
                            <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Product Title</th>
                            <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th scope="col" className="hidden lg:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th scope="col" className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cart.map(({ id, image, title, price, discountedPrice, quantity }) => (
                            <tr key={`cart-${id}`}>
                                <td className="px-6 py-4  ">
                                    <img src={image.url} alt={image.alt} className="w-20 h-20" />
                                </td>
                                <td className="w-full sm:w-auto sm:w-px-4 py-4 whitespace-nowrap">
                                    {title}

                                    <dl className='lg:hidden'>
                                        <dt className='sr-only'>Quantity</dt>
                                        <dd>
                                            <div className="flex items-center mt-2">
                                                <button onClick={() => handleRemoveItemFromCart(id)} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">-</button>
                                                <input
                                                    type="text"
                                                    className="inline-block w-10 h-8 text-center pointer-events-none"
                                                    size="2"
                                                    value={quantity}
                                                    readOnly
                                                />
                                                <button onClick={() => handleAddItemInCart(id)} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">+</button>
                                            </div>
                                        </dd>
                                    </dl>
                                  
                               
                                </td>
                                <td className="hidden md:table-cell px-4 py-4 ">{handlePrice(price, discountedPrice)}</td>
                                <td className="hidden lg:table-cell px-4 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <button onClick={() => handleRemoveItemFromCart(id)} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">-</button>
                                        <input
                                        type="text"
                                        className="inline-block w-10 h-8 text-center pointer-events-none"
                                        size="2"
                                        value={quantity}
                                        readOnly
                                    />
                                        <button onClick={() => handleAddItemInCart(id)} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">+</button>
                                    </div>
                                </td>
                                <td className="hidden sm:table-cell px-4 py-4 whitespace-nowrap">
                                    {((discountedPrice || price) * quantity).toFixed(2)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <button onClick={() => handleRemoveItemFromCart(id)} className="font-bold py-3 px-2 hover:text-red-700"><IoTrashBinOutline size={30} /></button>
                                </td>
                            </tr>
                        ))}
                             <tr>
                        
                            <td colSpan={6} className=" py-4 whitespace-nowrap text-right">
                                <p className="text-xl font-medium mr-4">Total: ${getCartTotal().toFixed(2)}</p>
                            </td>
                        </tr> 
                   
                    </tbody>
               
                </table>
            </div>
            </div>
            </div>
            </div>
            </div>
            
    )
}

export default Cart;
