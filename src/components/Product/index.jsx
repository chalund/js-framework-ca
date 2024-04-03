import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { calculateDiscountPercentage } from "../Discount"
import StarRate from "../StarRate"


function Product ({product: {id, image, title, price, discountedPrice, rating}, onAddToCartClick  }) {
    function handleButtonOnClick() {
        onAddToCartClick(id)
    }



    return (
    <div className="flex flex-wrap justify-center">
        <div key={id} className="max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 hover:shadow-md transition-transform transform-gpu hover:scale-105">
            <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                        {/* Image Link */}
                        <Link to={`/product/${id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img className="rounded-t-lg object-cover w-full h-full" src={image.url} alt={title} />
                        </Link>  

                        {discountedPrice && discountedPrice !== price && (
                        <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '1' }}>
                            <p className="mb-3 ms-3 mt-3 font-normal">
                                <span className="bg-purple-600 text-white px-2 py-1 rounded">
                                {calculateDiscountPercentage(price, discountedPrice)}% OFF
                                </span>
                            </p>
                        </div>
                        )}

            </div>
            <div className="p-5 flex flex-col" style={{ width: '300px'}}>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>

                <div className="flex items-center mb-3">
                    {rating ? <StarRate rating={rating} size={20} /> : <StarRate size={20} />}      
                </div>

                <div className="flex ">    
                    {discountedPrice && discountedPrice !== price && (
                        <>
                            <p className="mb-3 font-normal text-gray-700 line-through">$ {price}</p>  
                            <p className="mb-3 ms-4 font-semibold text-red-700">ON SALE ${discountedPrice}</p>
                        </>
                    )}
                    {(!discountedPrice || discountedPrice === price) && (
                        <p className="mb-3 font-normal text-gray-700">$ {price}</p>
                    )}
                </div>
             
              
                <div className="flex justify-start items-center mt-auto h-full">
                    <button onClick={handleButtonOnClick} className="bg-purple-600 text-white font-bold py-1 px-3 rounded mr-3 hover:bg-gradient-to-r from-orange-300 to-fuchsia-500 " style={{ height: '2rem' }}><FaShoppingCart /></button>
                    <Link to={`/product/${id}`}>
                        <button className="bg-purple-600 text-white font-bold py-1 px-3 rounded hover:bg-gradient-to-r from-orange-300 to-fuchsia-500 " style={{ height: '2rem' }}>View Product</button>
                    </Link>
                </div>
            </div>

        </div>  
        
      
        
      
    </div>
  )
}

export default Product
