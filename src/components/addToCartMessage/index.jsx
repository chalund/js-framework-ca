import {ToastContainer, toast } from 'react-toastify'

export const addToCartMessage = () => {
    addToCart(product.id, quantity);
    toast.success('Product added to cart!', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
};

return (
    <div className="flex flex-col justify-center items-center h-screen">
        <ToastContainer />
    </div>
);
