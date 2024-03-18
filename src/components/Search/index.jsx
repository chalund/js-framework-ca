import { useCallback, useState } from "react";
import { Searchbar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultList";

export function Search() {
    const [results, setResults] = useState([]);

    // Callback function to update results in App component
    const handleSetResults = useCallback((newResults) => {
      setResults(newResults);
    }, []);
  
    return (
      <div>
        <Searchbar setResults={handleSetResults} />
        <SearchResultsList results={results}/> 
      </div>
    )
  }
