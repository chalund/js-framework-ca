import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProductStore from "../../components/store/products";
import StarRate from "../../components/StarRate";
import { calculateDiscountPercentage } from "../../components/Discount";



function ProductDetails() {
    const { id } = useParams();
    const { products, fetchProducts, cart, addToCart, discountedPrice } = useProductStore(); 
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const product = products.find((product) => product.id === id);

    if (!product) {
        return <div>Loading...</div>; 
    }

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const onAddToCartClick = () => {
        addToCart(product.id, quantity); 
        toast.success('Product added to cart!', {
            position: 'top-center',
            hideProgressBar: true,
            autoClose: 3000,
        });
    };


    const discountPercentage = calculateDiscountPercentage(product.price, product.discountedPrice);

    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">

        <ToastContainer />
         
        <div className="bg-white dark:bg-gray-800 py-8 border rounded border-gray-200 shadow-md max-w-[800px] p-4">
           {/* Link to Products */}
           <div className="text-left mb-4 ms-8">
                <Link to={`/`} className="underline text-gray-700 hover:text-purple-600">Back to: Products</Link>
            </div>
            <div className="mx-auto px-4">
                <div className="flex flex-col sm:flex-row">
                <div className="mb-4 px-4 relative">
    <div className="h-[400px] w-[300px] rounded-lg bg-gray-300 dark:bg-gray-700"> 
        <img className="w-full h-full object-cover border rounded border-gray-200 shadow-md" src={product.image?.url} alt="" />
        {discountPercentage && (
            <div className="absolute top-3 left-7 z-10 bg-purple-600 text-white px-2 py-1 rounded">
                {discountPercentage}% OFF
            </div>
        )}
    </div>
</div>
                    <div className="md:flex-1 px-4">
                            <h1 className="text-2xl font-bold">{product.title}</h1>
                         
                            <div className="flex items-center py-1">
                             {product.rating ? <StarRate rating={product.rating} size={25} /> : <StarRate size={25} />}
                             <span className="ml-1">{product.reviews.length} reviews</span>
                            </div>

                            <div className="py-3">
                                <p className="text-lg mr-4">{product.description}</p>
                            </div>
                            
                            <div className="flex items-center py-3">
                                <h3 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
                                    {product.discountedPrice && product.discountedPrice !== product.price ? (
                                        <>
                                            <span className="line-through">${product.price}</span>
                                            <span className="ms-4 text-red-700 font-semibold dark:text-gray-400">SALE Price: ${product.discountedPrice}</span>
                                        </>
                                    ) : (
                                        <>Price: ${product.price}</>
                                    )}
                                </h3>
                            </div>
                            <div className="flex items-center gap-3 ">
                                <p>Quantity</p>
                                <div className="flex items-center">
                                    <button onClick={handleDecreaseQuantity} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">-</button>
                                    <input
                                        type="text"
                                        className="inline-block w-10 h-8 text-center pointer-events-none"
                                        size="2"
                                        value={quantity}
                                        readOnly
                                    />
                                    <button onClick={handleIncreaseQuantity} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">+</button>
                                </div>
                            </div>
                            <div className="mt-6">
                                {product.tags && product.tags.map((tag, index) => (
                                    <div key={index} className="inline-block border border-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-2 md:mt-10">
                                <button onClick={onAddToCartClick} className="bg-purple-600 text-white hover:bg-gradient-to-r from-orange-300 duration-300 to-fuchsia-500 font-semibold py-2 px-3 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow border-t border-gray-400 mt-4 p-2"></div>
                <h3 className="text-lg font-medium">Reviews</h3>
                <div className="flex flex-wrap">
                    {product.reviews.length > 0 ? (
                        product.reviews.map((review, index) => (
                            <div key={index} className="bg-gradient-to-r from-orange-200 to-fuchsia-600  px-6 py-3 rounded-md mr-3 mb-3">
                                <div className="flex items-center ">
                                    <p className="mr-3 font-semibold">{review.username}</p>
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

