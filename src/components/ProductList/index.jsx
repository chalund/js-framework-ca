import { useEffect } from "react";
import useProductStore from "../store/products";
import Product from "../Product";

export default function ProductList() {
    const { products, fetchProducts, addToCart, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []); // Empty dependency array to fetch products only once on mount

    function onAddToCartClick(id) {
        addToCart(id);
    }

    if (error) {
        return <div>Error fetching products: {error.message}</div>;
    }

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product) => (
                <Product 
                    key={product.id}
                    product={product} 
                    onAddToCartClick={onAddToCartClick}
                />
            ))}
        </div>
    );
}
