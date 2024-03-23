import { useEffect } from "react";
import useProductStore from "../store/products";
import Product from "../Product";

export default function ProductList() {
    const { products, fetchProducts, addToCart } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    function onAddToCartClick(id) {
        addToCart(id);
    }

    if (products) {
        return products.map((product) => (
            <Product 
                key={product.id}
                product={product} 
                onAddToCartClick={onAddToCartClick}
            />
        ));
    }
        
    return <div>Hello world</div>;
}
