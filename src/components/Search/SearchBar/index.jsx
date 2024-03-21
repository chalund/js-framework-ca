import { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { FaSearch } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

export const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const { data: fetchedData } = useFetch('https://v2.api.noroff.dev/online-shop');

  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  const handleChange = (value) => {
    setInput(value);
  };

  const handleClearInput = () => {
    setInput('');
  };


  useEffect(() => {
    const filteredResults = data.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
    setResults(filteredResults);
  console.log('filteredResults', filteredResults)

  }, [input, data, setResults]);

  return (
    <div>
    <div className="w-full max-w-[400px] mx-auto h-9 bg-white rounded-lg shadow-md flex items-center">
        <FaSearch size={20} className="text-purple-600 ml-3" />
        <input 
          className="bg-transparent border-none h-full w-full ml-1 text-lg focus:outline-none" 
          placeholder='Type to search...' 
          value={input} 
          onChange={(e) => handleChange(e.target.value)} 
        />  
        <IoCloseOutline 
          size={30}
          onClick={handleClearInput} 
          className='cursor-pointer mr-3' 
        />
      </div>
    </div>
  
  );
};
