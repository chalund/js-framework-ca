import { TfiFaceSad } from "react-icons/tfi";

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32 text-gray-700'>
        <TfiFaceSad size={64} className="mb-3" />
       <h1 className='text-3xl text-purple-600 font-bold mb-3'>404</h1>
       <h2 className="text-xl mb-3">Page not found !</h2>
       <p className="text-center">The Page you are looking for dosent't exist or an other erroroccured</p>
    </div>
  )
}

export default ErrorPage
