import { useState, useEffect } from "react";
import useProductStore from "../store/products";
import Product from "../Product";
import { FaSearch } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

export default function ProductList() {
    const { products, fetchProducts, addToCart, error } = useProductStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  

    useEffect(() => {
        fetchProducts();
    }, []); // Empty dependency array to fetch products only once on mount

    useEffect(() => {
        if (products) {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchTerm, products]);

    function onAddToCartClick(id) {
        addToCart(id);
    }

    const handleClearInput = () => {
        setSearchTerm('');
    };

    if (error) {
        return <div>Error fetching products: {error.message}</div>;
    }

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="mx-auto bg-purple-500 w-full max-w-[990px] my-5 p-10 flex flex-col items-center rounded">
                <h1 className="text-white mb-8 sm:text-2xl md:text-3xl font-medium capitalize">Find your treasure today</h1>
                <div className="relative w-full max-w-[600px] bg-white rounded-lg shadow-md flex items-center">
                    <FaSearch size={20} className="text-gray-800 absolute left-0 top-0 mt-2 ml-2" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-md pl-10 pr-16 py-2 border-0 focus:ring-2 focus:ring-purple-700"
                    />
                    <IoCloseOutline
                        size={30}
                        onClick={handleClearInput} 
                        className="cursor-pointer absolute right-0 top-0 mt-2 mr-3 text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full max-w-[990px] flex flex-wrap justify-center">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="w-1/3 p-4">
                        <Product 
                            product={product} 
                            onAddToCartClick={onAddToCartClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
