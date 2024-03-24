import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"


function Product ({product: {id, image, title, description, price}, onAddToCartClick  }) {
    function handleButtonOnClick() {
        onAddToCartClick(id)
    }

    return (
    <div className="flex flexwrap justify-center">
        <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 hover:shadow-md transition-transform transform-gpu hover:scale-105">
            <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                        {/* Image Link */}
                        <Link to={`/product/${id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img className="rounded-t-lg object-cover w-full h-full" src={image.url} alt={title} />
                        </Link>         
            </div>
            <h3 className="font-bold">{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={handleButtonOnClick} className="bg-purple-400 text-white font-bold py-1 px-3 rounded" ><FaShoppingCart /></button>
            <Link to={`/product/${id}`}>
                <button className=" ms-3 bg-purple-600 text-white font-bold py-1 px-3 rounded">View Product</button>
            </Link>
        </div>
        
      
        
      
    </div>
  )
}

export default Product
