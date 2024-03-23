//1. create a store. DONE!
//2.create products and cart
//3. get the data and store it as products

//4. add cart CRUD
    // add a product to the cart
    // clear the cart
    // get cart total
    //remove a product from the cart 


    import { create } from 'zustand';

    const useProductStore = create((set) => ({
        products: [],
        cart: [],
        fetchProducts: async () => {
            const response = await fetch('https://v2.api.noroff.dev/online-shop'); 
            const json = await response.json();
            set((state) => ({...state, products: json.data}))
    
        },
        addToCart: (id) => {
            set((state) => {
                const product = state.products.find(currentProduct => id === currentProduct.id);
                console.log(product)
                return {...state, cart: [...state.cart, product] }
            });
            console.log("Add to cart", id);
        },
    }));

    export default useProductStore;