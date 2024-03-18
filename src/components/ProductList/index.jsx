import { useFetch } from "../Hooks/useFetch"
import { Link } from "react-router-dom"

const calculateDiscountPercentage = (price, discountedPrice) => {
    if (discountedPrice && discountedPrice !== price) {
      const discountPercentage = ((price - discountedPrice) / price * 100).toFixed(2);
      return parseFloat(discountPercentage).toString().replace(/\.0+$/, '');
    } else {
      return null;
    }
  };
  

export const ProductList = () => {
    const { data, isLoading, isError } = useFetch('https://v2.api.noroff.dev/online-shop');

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error fetching data</p>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {data.map((item) => (
                <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 hover:shadow-md transition-transform transform-gpu hover:scale-105">

                    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                        {/* Image Link */}
                        <Link to={`/product/${item.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img className="rounded-t-lg object-cover w-full h-full" src={item.image.url} alt={item.title} />
                        </Link>

                        {item.discountedPrice && item.discountedPrice !== item.price && (
                        <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '1' }}>
                            <p className="mb-3 ms-3 mt-3 font-normal">
                                <span className="bg-purple-600 text-white px-2 py-1 rounded">
                                {calculateDiscountPercentage(item.price, item.discountedPrice)}% OFF
                                </span>
                            </p>
                        </div>
                        )}
                    </div>


                    <div className="p-5" style={{ width: '300px'}}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link to={`/product/${item.id}`}>{item.title}</Link>
                        </h5>
                        <div className="flex ">
                            
                            {item.discountedPrice && item.discountedPrice !== item.price && (
                                <>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-through">$ {item.price}</p>
                                    
                              
                  <p className="mb-3 ms-4 font-normal text-red-600 dark:text-gray-400">ON SALE ${item.discountedPrice}</p>
                                </>
                            )}
                            {(!item.discountedPrice || item.discountedPrice === item.price) && (
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {item.price}</p>
                            )}

                        </div>

                
                        <Link to={`/product/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Buy
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
