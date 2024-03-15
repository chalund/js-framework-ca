import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch"; 
import StarRate from "../StarRate";




function ProductDetails() {
    const { id } = useParams();
    const { data, isError, isLoading } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);

    console.log(data);

    if (isLoading) {
        return <div>Loading....</div>;
    }

    if (isError) {
        return <div>Error!</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-white dark:bg-gray-800 py-8 border rounded border-gray-500">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">

                    <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover border rounded border-gray-600" src={data.image?.url} alt="" />
                            </div>
                    </div>


        <div className="md:flex-1 px-4">
         <h1 className="font-bold">{data.title}</h1>

        <div>
        {data && data.tags && data.tags.map((tag, index) => (
            <div key={index} className="inline-block border border-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
            </div>
        ))}
        </div>

        <div className="flex mb-4 mt-3 items-center">
            <p>Rating:</p>
           {data.rating ? <StarRate rating = {data.rating} size={30} /> : <StarRate size={30} /> }
        </div>

         <p>Description: {data.description}</p>

         <div className="flex my-5">
            <h3 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
                {data.discountedPrice && data.discountedPrice !== data.price ? (
                <>
                <span className="line-through">${data.price}</span>
                <span className="ms-4 text-red-600 dark:text-gray-400">SALE Price: ${data.discountedPrice}</span>
                </>
             ) : (
            <>Price: ${data.price}</>
            )}
            </h3>
        </div>

        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy
            </button>
        </div>

        <div>
            <h4 className="font-bold my-3">Reviews</h4>
            {data?.reviews?.length > 0 ? (
                data.reviews.map((review, index) => (
                    <div key={index} className="mb-2">
                        <div className="flex items-center">
                            <p className="font-semibold mr-3">{review.username}</p>
                            <StarRate rating={review.rating || 0 } size={16}/> 
                        </div>
                        <p>"{review.description}"</p>
                    </div>
                ))
            ) : (
                <p className="mt-2">No reviews yet on this product</p>
            )}
        </div>

        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ProductDetails;

