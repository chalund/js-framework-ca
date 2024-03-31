import { FaSearch } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

export function SearchBar({ value, onChange }) {

    
    return (
        <div className="mx-auto bg-purple-500 max-w-[990px] my-5 p-10 flex flex-col items-center rounded">
            <h1 className="text-white mb-8 sm:text-2xl md:text-3xl font-medium capitalize">Find your treasure today</h1>
            <div className="relative w-full max-w-[600px] bg-white rounded-lg shadow-md flex items-center">
                <FaSearch size={20} className="text-gray-800 absolute left-0 top-0 mt-2 ml-2" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-md pl-10 pr-16 py-2 border-0 focus:ring-2 focus:ring-orange-400"
                />
                {value && ( // Render close button only if there is text in the input field
                    <IoCloseOutline
                        size={30}
                        // onClick={handleClearInput} // Pass the event parameter
                        className="cursor-pointer absolute right-0 top-0 mt-2 mr-3 text-gray-800"
                    />
                )}
            </div>
        </div>
    );
}

export default SearchBar;
