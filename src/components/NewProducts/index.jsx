import React, { useEffect } from 'react';
import useProductStore from '../store/products';
import Product from '../Product';

export const NewProducts = () => {
    const { products, fetchProducts, addToCart, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []); // Empty dependency array to fetch products only once on mount

    function onAddToCartClick(id) {
        addToCart(id);
    }

    // Get the last three products
    const lastThreeProducts = products.slice(-3);

    return (
        <div className="flex justify-center">
        <div className="max-w-[990px]">
            <h1 className="text-xl text-left">Newst Products</h1>
            <div className="flex flex-wrap justify-center">
                {lastThreeProducts.map((product) => (
                    <div key={product.id} className="w-1/3 p-4">
                        <Product 
                            product={product} 
                            onAddToCartClick={onAddToCartClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>

    );
};
