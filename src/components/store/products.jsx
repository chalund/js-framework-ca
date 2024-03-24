//1. create a store. DONE!
//2.create products and cart
//3. get the data and store it as products

//4. add cart CRUD
    // add a product to the cart
    // clear the cart
    // get number of items in cart
    // remove a product from the cart
    // get cart total

    import { create } from 'zustand';

    const useProductStore = create((set, get) => ({
        products: [],
        cart: [],
        cartTotal: 0,
  

        fetchProducts: async () => {
            const response = await fetch('https://v2.api.noroff.dev/online-shop'); 
            const json = await response.json();
            set((state) => ({...state, products: json.data}))
        },
        addToCart: (id) => {
            set((state) => {
                const product = state.products.find(
                (currentProduct) => id === currentProduct.id,
                );

                const productInCartIndex = state.cart.findIndex(
                (currentProduct) => id === currentProduct.id,
                );

                if (productInCartIndex === -1) {
                    product.quantity = 1;
                    return {...state, cart: [...state.cart, product] };
                }
                state.cart[productInCartIndex].quantity += 1;
                return { ...state }             
            });
        },
        clearCart: () => set(() => ({ cart: []})),
        deleteProductFromCart: (id) => 
        set((state) => {
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
            get.call().cart.reduce((total, product) => {
                total+= product.quantity;
                return total;
            }, 0)
    }));


    export default useProductStore;