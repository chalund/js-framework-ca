import { useState } from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";


function Searchbar() {
    console.log('close button clicked')
    const [isClicked, setIsClicked] = useState(false)

    const handleCloseButton = () => {
        setIsClicked(!isClicked)
    };

  return (
    <div className='flex px-10 justify-between'>
      <form action="" className="w-full max-w-md relative">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <IoIosSearch className="w-5 h-5 absolute ml-3  pointer-events-none"/>
          <input type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            aria-label="Search"
            className='pr-3 pl-10 py-2 font-semibold text-sm placeholder-gray-500 text-black rounded-2xl border-none ring-gray-300 focus:ring-gray-500 focus:ring-2'
          />
            <IoIosClose 
            className="absolute top-1/2 transform -translate-y-1/2 right-3 w-5 h-5 cursor-pointer"
            onClick={handleCloseButton} 
          />
        </div>
      </form>
    </div>  
  )
}


export default Searchbar
