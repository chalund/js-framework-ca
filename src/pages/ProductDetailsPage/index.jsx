import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProductStore from "../../components/store/products";
import StarRate from "../../components/StarRate";


function ProductDetails() {
    const { id } = useParams();
    const { products, fetchProducts, cart, addToCart } = useProductStore(); // Import the store and its methods
    const [quantity, setQuantity] = useState(1);

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Find the product with the given id
    const product = products.find((product) => product.id === id);

    if (!product) {
        return <div>Loading...</div>; // Add loading indicator
    }
    console.log(product)


    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const onAddToCartClick = () => {
        addToCart(product.id, quantity); // Pass product id and quantity to addToCart
        toast.success('Product added to cart!', {
            position: 'top-center',
            hideProgressBar: true,
            autoClose: 3000,
        });
    };
    





    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <ToastContainer />
            <div className="bg-white dark:bg-gray-800 py-8 border rounded border-gray-500">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[400px] w-[300px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover border rounded border-gray-600" src={product.image?.url} alt="" />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h1 className="text-2xl font-bold">{product.title}</h1>
                         
                            <div className="flex items-center mb-4 mt-3">
                             {product.rating ? <StarRate rating={product.rating} size={25} /> : <StarRate size={25} />}
                             <span className="ml-1">{product.reviews.length} reviews</span>
                            </div>

                            <div className="py-3">
                                <p className="mb-2 font-light">Product Description </p>
                                <p className="text-lg mr-4">{product.description}</p>
                            </div>
                            
                            <div className="flex items-center my-2">
                                <h3 className="mb-3 text-xl font-bold text-gray-700 dark:text-gray-400">
                                    {product.discountedPrice && product.discountedPrice !== product.price ? (
                                        <>
                                            <span className="line-through">${product.price}</span>
                                            <span className="ms-4 text-red-600 dark:text-gray-400">SALE Price: ${product.discountedPrice}</span>
                                        </>
                                    ) : (
                                        <>Price: ${product.price}</>
                                    )}
                                </h3>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <p>Quantity</p>
                                <div className="flex items-center">
                                    <button onClick={handleDecreaseQuantity} className="bg-orange-500 text-white font-bold py-1 px-3 rounded">-</button>
                                    <input
                                        type="text"
                                        className="inline-block w-10 h-8 text-center pointer-events-none"
                                        size="2"
                                        value={quantity}
                                        readOnly
                                    />
                                    <button onClick={handleIncreaseQuantity} className="bg-orange-500 text-white font-bold py-1 px-3 rounded">+</button>
                                </div>
                            </div>
                            <div className="mt-4">
                                {product.tags && product.tags.map((tag, index) => (
                                    <div key={index} className="inline-block border border-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-2">
                                <button onClick={onAddToCartClick} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <div className="flex-grow border-t border-gray-400 mt-4 p-2"></div>
                        <h3 className="text-lg font-medium">Reviews</h3>
                        {product.reviews.length > 0 ? (
                            product.reviews.map((review, index) => (
                                <div key={index} className="mt-4 bg-orange-300 px-6 py-3 rounded-md inline-block">
                                    <div className="flex items-center ">
                                        <p className="mr-3">By {review.username}</p>
                                        {review.rating ? <StarRate rating={review.rating} size={20} /> : <StarRate size={20} />}
                                    </div>
                                    <p>{review.description}</p>
                                </div>
                            ))
                        ) : (   
                            <p>No reviews for this product</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

