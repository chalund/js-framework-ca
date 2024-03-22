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
    <div className="mx-auto bg-purple-500 max-w-[990px] my-5 p-10 flex flex-col items-center rounded ">

      <h1 className="text-white mb-8 sm:text-2xl md:text-3xl font-medium capitalize ">Find your treasure today </h1>
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-md flex items-center">
      <FaSearch size={20} className="text-gray-800 ml-3" />
        <input 
          className="bg-transparent border-none h-full w-full ml-2 p-2 text-lg focus:outline-none" 
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
