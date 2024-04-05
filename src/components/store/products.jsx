import { create } from 'zustand';

const saveProductsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
};

const loadProductsFromLocalStorage = () => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

const useProductStore = create((set, get) => ({
    products: loadProductsFromLocalStorage(),
    cart: loadCartFromLocalStorage(), 
    cartTotal: 0,

    fetchProducts: async () => {
        const response = await fetch('https://v2.api.noroff.dev/online-shop'); 
        const json = await response.json();
        set({ products: json.data }); 
        saveProductsToLocalStorage(json.data);
    },

    addToCart: (id, quantity = 1) => {
        set((state) => {
            const product = state.products.find(
                (currentProduct) => id === currentProduct.id,
            );
    
            const productInCartIndex = state.cart.findIndex(
                (currentProduct) => id === currentProduct.id,
            );
    
            const updatedCart = [...state.cart];
    
            if (productInCartIndex === -1) {
                product.quantity = quantity; 
                updatedCart.push(product);
            } else {
                updatedCart[productInCartIndex].quantity += quantity; 
            }
    
            saveCartToLocalStorage(updatedCart); 
    
            return { ...state, cart: updatedCart };
        });
    },
    
    clearCart: () => set(() => {
        saveCartToLocalStorage([]); 
        return { cart: [] };
    }),
    deleteProductFromCart: (id) => set((state) => {
        const updatedCart = [...state.cart];
        const indexToRemove = updatedCart.findIndex(product => product.id === id);

        if (indexToRemove !== -1) {
            // If the product exists in the cart
            if (updatedCart[indexToRemove].quantity > 1) {
                // If the quantity is greater than 1, decrement the quantity by 1
                updatedCart[indexToRemove].quantity -= 1;
            } else {
                // If the quantity is 1, remove the product from the cart
                updatedCart.splice(indexToRemove, 1);
            }
            saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
        }

        return { ...state, cart: updatedCart };
    }),
    getCartTotal: () => 
        get()
        .cart.reduce((total, product) => {
            const currentPrice = product.quantity * product.price; 
            total += currentPrice;
            return total;
        }, 0),
    getTotalNumberOfItemsInCart: () => 
        get().cart.reduce((total, product) => {
            total+= product.quantity;
            return total;
        }, 0)
}));

export default useProductStore;