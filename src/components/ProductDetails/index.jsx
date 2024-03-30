import { useParams } from "react-router-dom";
import useProductStore from "../store/products";
import StarRate from "../StarRate";
import { useEffect } from "react";

function ProductDetails() {
    const { id } = useParams();
    const { products, fetchProducts, addToCart } = useProductStore(); // Import the store and its methods

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Find the product with the given id
    const product = products.find((product) => product.id === id);

    if (!product) {
        return <div>Loading...</div>; // Add loading indicator
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-white dark:bg-gray-800 py-8 border rounded border-gray-500">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover border rounded border-gray-600" src={product.image?.url} alt="" />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h1 className="font-bold">{product.title}</h1>
                            <div>
                                {product.tags && product.tags.map((tag, index) => (
                                    <div key={index} className="inline-block border border-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="flex mb-4 mt-3 items-center">
                                <p>Rating:</p>
                                {product.rating ? <StarRate rating={product.rating} size={30} /> : <StarRate size={30} />}
                            </div>
                            <p>Description: {product.description}</p>
                            <div className="flex my-5">
                                <h3 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
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
                            <div>
                                <button onClick={() => addToCart(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
