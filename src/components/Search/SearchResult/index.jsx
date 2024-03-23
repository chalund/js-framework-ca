import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";

export const calculateDiscountPercentage = (price, discountedPrice) => {
  if (discountedPrice && discountedPrice !== price) {
    const discountPercentage = ((price - discountedPrice) / price * 100).toFixed(2);
    return parseFloat(discountPercentage).toString().replace(/\.0+$/, '');
  } else {
    return null;
  }
};

export const SearchResult = ({ result }) => {
  return (
    <div className="flex justify-center flex-wrap">
        <div key={result.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <div style={{ position: 'relative', width: '300px', height: '250px' }}>
                        {/* Image Link */}
                        <Link to={`/product/${result.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img className="rounded-t-lg object-cover w-full h-full" src={result.image.url} alt={result.title} />
                        </Link>

                        {result.discountedPrice && result.discountedPrice !== result.price && (
                        <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '1' }}>
                            <p className="mb-3 ms-3 mt-3 font-normal">
                                <span className="bg-purple-600 text-white px-2 py-1 rounded">
                                {calculateDiscountPercentage(result.price, result.discountedPrice)}% OFF
                                </span>
                            </p>
                        </div>
                        )}
                    </div>
          <div className="p-5" style={{ width: '300px' }}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link to={`/product/${result.id}`}>{result.title}</Link>
            </h5>
            <div className="flex">
              {result.discountedPrice && result.discountedPrice !== result.price && (
                <>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-through">$ {result.price}</p>
                  <p className="mb-3 ms-4 font-normal text-red-600 dark:text-gray-400">ON SALE ${result.discountedPrice}</p>
                </>
              )}
              {(!result.discountedPrice || result.discountedPrice === result.price) && (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {result.price}</p>
              )}
            </div>

            <div className="flex">
              <Link to={`/X/${result.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-600">
              <FiShoppingCart size={20} /> 
              </Link>
              <Link to={`/product/${result.id}`} className="ms-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                View Product
              </Link>
            </div>
  
          </div>
        </div>
    </div>
  );
  };