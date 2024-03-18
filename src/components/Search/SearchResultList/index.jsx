import { SearchResult } from "../SearchResult";

export const SearchResultsList = ({ results }) => {
    return (
      <div className="flex justify-center flex-wrap">
        {results.map((result, id) => {
          return <SearchResult result={result} key={id}/>
        })}
      </div>
    );
  };